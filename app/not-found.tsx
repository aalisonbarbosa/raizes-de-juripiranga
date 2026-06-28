import Link from "next/link";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <span className="text-primary font-semibold tracking-widest">
          ERRO 404
        </span>

        <h1 className="text-6xl md:text-8xl font-extrabold text-foreground mt-2">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-4">
          Página não encontrada
        </h2>

        <p className="text-muted-foreground leading-relaxed mt-4 mb-8">
          Parece que você se perdeu pelo caminho. A página que você está
          procurando não existe ou foi movida para outro local.
        </p>

        <Link href="/">
          <Button
            size="lg"
            className="rounded-full px-8 gap-2 text-base bg-primary hover:bg-primary-hover"
          >
            <Home className="w-4 h-4" />
            Voltar para a home
          </Button>
        </Link>
      </div>
    </div>
  );
}
