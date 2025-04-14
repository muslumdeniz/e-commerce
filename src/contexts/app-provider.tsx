"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icons from "@/components/ui/icons";

type ToastStatus = "success" | "error" | "info" | "warning";

interface Toast {
  id: number;
  title: string;
  description?: string;
  status: ToastStatus;
}

type AppContextType = {
  loading: boolean;
  setLoading: (val: boolean) => void;
  showToast: (toast: Omit<Toast, "id">) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((toast: Omit<Toast, "id">) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { ...toast, id }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <AppContext.Provider value={{ loading, setLoading, showToast }}>
      {children}

      <div className="fixed top-4 right-4 z-50 space-y-2">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className={`w-80 text-white rounded-xl shadow-lg p-4 flex flex-col gap-1 relative ${
                {
                  success: "bg-green-500",
                  error: "bg-red-500",
                  info: "bg-blue-500",
                  warning: "bg-yellow-500 text-black",
                }[toast.status]
              }`}
            >
              <button
                className="absolute top-2 right-2"
                onClick={() => removeToast(toast.id)}
              >
                <Icons name="Cross" size={18} />
              </button>
              <strong className="text-sm">{toast.title}</strong>
              {toast.description && (
                <p className="text-sm opacity-90">{toast.description}</p>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </AppContext.Provider>
  );
};

const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AuthProvider");
  }
  return context;
};

export { useApp, AppProvider };
