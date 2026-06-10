"use client";

import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-semibold tracking-widest">
            ERRO 404
          </span>

          <h1 className="text-6xl md:text-8xl font-extrabold text-foreground">
            404
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Página não encontrada
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            Parece que você se perdeu pelo caminho. A página que você está
            procurando não existe ou foi movida para outro local.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
