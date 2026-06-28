import { Metadata } from "next";
import UrbanizacaoPage from "./urbanizacao-page";

export const metadata: Metadata = {
  title: "Urbanização de Juripiranga",
  description:
    "Conheça o processo de urbanização e o desenvolvimento urbano de Juripiranga.",
};

export default function Page() {
  return <UrbanizacaoPage />;
}
