// src/App.tsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AppRoutes } from "./routes";

const AppContent: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading…</div>;

  return (
    <>
      <ThemeToggle />
      {user && <Navbar />}
      <div style={{ paddingBottom: user ? "60px" : undefined }}>
        <AppRoutes />
      </div>
    </>
  );
};

const App: React.FC = () => (
  <AuthProvider>
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  </AuthProvider>
);

export default App;
