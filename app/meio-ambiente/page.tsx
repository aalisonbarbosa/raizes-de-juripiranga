import { Metadata } from "next";
import MeioAmbientePage from "./meio-ambiente-page";

export const metadata: Metadata = {
  title: "Meio Ambiente de Juripiranga",
  description:
    "Informações sobre o meio ambiente, vegetação, fauna e recursos naturais de Juripiranga.",
};

export default function Page() {
  return <MeioAmbientePage />;
}
