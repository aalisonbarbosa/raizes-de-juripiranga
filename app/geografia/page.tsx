import { Metadata } from "next";
import GeografiaPage from "./geografia-page";

export const metadata: Metadata = {
  title: "Geografia de Juripiranga",
  description:
    "Veja a localização, relevo, clima e hidrografia do município de Juripiranga.",
};

export default function Page() {
  return <GeografiaPage />;
}
