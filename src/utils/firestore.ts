import type { Unsubscribe } from "firebase/firestore";
import {
  collection,
  doc,
  increment,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "./firebase";

export function onPhotosChange(
  userId: string,
  callback: (photos: { url: string }[]) => void
): Unsubscribe {
  const q = query(
    collection(db, "photos"),
    where("userId", "==", userId),
    orderBy("createdAt", "desc")
  );
  return onSnapshot(q, (snap) => {
    const photos = snap.docs.map(
      (d) => ({ url: d.data().url } as { url: string })
    );
    callback(photos);
  });
}

export function onTotalExpChange(
  userId: string,
  callback: (totalExp: number) => void
): Unsubscribe {
  const userDoc = doc(db, "users", userId);
  return onSnapshot(userDoc, (snap) => {
    callback(snap.data()?.totalExp ?? 0);
  });
}

export async function uploadPhoto(file: File, userId: string): Promise<void> {
  const storageRef = ref(
    storage,
    `photos/${userId}/${Date.now()}_${file.name}`
  );
  const snapshot = await uploadBytes(storageRef, file);
  const url = await getDownloadURL(snapshot.ref);

  const photoDoc = doc(db, "photos", `${userId}_${snapshot.metadata.name}`);
  await setDoc(photoDoc, {
    userId,
    url,
    createdAt: serverTimestamp(),
  });

  const userDoc = doc(db, "users", userId);
  await updateDoc(userDoc, { totalExp: increment(10) });
}
