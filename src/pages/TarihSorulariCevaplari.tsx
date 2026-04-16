import ContentPage from "../components/ContentPage";
import { contentPages } from "../data/contentLibrary";
import { ROUTES } from "../lib/routes";

export default function TarihSorulariCevaplari() {
  const page = contentPages.find((item) => item.path === ROUTES.tarihSorulariCevaplari);

  if (!page) return null;

  return <ContentPage page={page} />;
}
