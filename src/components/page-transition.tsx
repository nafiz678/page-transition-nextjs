"use client";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type PageTransitionProps = {
  children: ReactNode;
};

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -200 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex flex-col items-center justify-center px-6"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
