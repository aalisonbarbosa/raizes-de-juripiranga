import { MapPin, BookOpen } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            {/* <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </div> */}
            <Image
              width={156}
              height={156}
              src="/logo.png"
              alt="logo"
              className="h-16 w-auto"
            />
            <div>
              <p className="font-poppins font-bold text-lg">
                Raízes de Juripiranga
              </p>
              <p className="text-sm opacity-70">
                Projeto Acadêmico de Geografia
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm opacity-70">
            <BookOpen className="w-4 h-4" />
            <span>Trabalho Acadêmico — uso educativo</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center space-y-4">
          <p className="text-sm opacity-50">
            Este site foi criado para fins educativos. Não é um portal oficial
            da cidade.
          </p>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-sm text-white/50">
              Projeto idealizado por{" "}
              <a
                target="_blank"
                href="https://www.instagram.com/vitoria_hellemm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="text-white/80 font-medium hover:underline"
              >
                Vitória Hellem
              </a>{" "}
              - Desenvolvido por{" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/aalisonbarbosa"
                rel="noopener noreferrer"
                className="text-white/80 font-medium hover:underline"
              >
                Alison Barbosa
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
