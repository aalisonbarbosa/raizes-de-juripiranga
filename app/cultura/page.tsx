import { Metadata } from "next";
import CulturaPage from "./cultura-page";

export const metadata: Metadata = {
  title: "Cultura de Juripiranga",
  description:
    "Explore a cultura, as tradições e o patrimônio cultural de Juripiranga.",
};

export default function Page() {
  return <CulturaPage />;
}
