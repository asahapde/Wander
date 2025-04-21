const LEVEL_THRESHOLDS: number[] = [
  0, // Level 1 starts at 0 XP
  100, // Level 2 at 100 XP
  300, // Level 3 at 300 XP
  600, // Level 4 at 600 XP
  1000, // Level 5 at 1000 XP
  // Add more thresholds as needed
];

export interface LevelInfo {
  level: number;
  nextThreshold: number;
  percentComplete: number; // 0 to 1
}

export function getLevelInfo(totalExp: number): LevelInfo {
  let level = 1;
  while (
    level < LEVEL_THRESHOLDS.length &&
    totalExp >= LEVEL_THRESHOLDS[level]
  ) {
    level++;
  }

  const currentThreshold = LEVEL_THRESHOLDS[level - 1];
  const nextThreshold = LEVEL_THRESHOLDS[level] ?? currentThreshold;

  const percentComplete =
    nextThreshold > currentThreshold
      ? (totalExp - currentThreshold) / (nextThreshold - currentThreshold)
      : 1;

  return { level, nextThreshold, percentComplete };
}

export default getLevelInfo;
