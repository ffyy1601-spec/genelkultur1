import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import { ROUTES } from "../lib/routes";

export default function Cookies() {
  return (
    <PageLayout>
      <Seo
        title="Cerez Politikasi | GenelKultur.com.tr"
        description="GenelKultur.com.tr cerez politikasi. Site deneyimi, analiz ve reklam teknolojileri ile ilgili temel cerez kullanimi hakkinda bilgi al."
        path={ROUTES.cookies}
        keywords={["cerez politikasi", "cookie policy", "genel kultur cerez"]}
      />

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-8 px-6 py-16 md:px-10">
        <h1 className="text-4xl font-black tracking-tight text-on-surface md:text-5xl">Cerez Politikasi</h1>
        <div className="space-y-6 text-sm leading-7 text-on-surface-variant">
          <p>GenelKultur.com.tr, temel site islevleri, performans analizi ve reklam teknolojileri icin tarayici tabanli cerezlerden yararlanabilir.</p>
          <p>Cerezler; tercihlerin hatirlanmasi, sayfa performansinin izlenmesi ve varsa reklam gosteriminin teknik olarak yonetilmesi gibi amaclarla kullanilabilir.</p>
          <p>Ucuncu taraf hizmetler devrede oldugunda, ilgili servis saglayicilar kendi cerez teknolojilerini kullanabilir. Bu durumda kendi politikalarini da incelemek gerekir.</p>
          <p>Kullanici, tarayici ayarlari uzerinden cerezleri kisitlayabilir veya silebilir. Ancak bu tercih, bazi islevlerin beklenen sekilde calismamasina yol acabilir.</p>
        </div>
      </main>
    </PageLayout>
  );
}
