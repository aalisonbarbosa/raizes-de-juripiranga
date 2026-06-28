import { Metadata } from "next";
import HistoriaPage from "./historia-page";

export const metadata: Metadata = {
  title: "História de Juripiranga",
  description:
    "Conheça a história de Juripiranga, na Paraíba, desde sua fundação até os dias atuais.",
};

export default function Page() {
  return <HistoriaPage />;
}
