import { Metadata } from "next";
import EconomiaPage from "./economia-page";

export const metadata: Metadata = {
  title: "Economia de Juripiranga",
  description:
    "Conheça os principais setores econômicos e as atividades produtivas de Juripiranga.",
};

export default function Page() {
  return <EconomiaPage />;
}
