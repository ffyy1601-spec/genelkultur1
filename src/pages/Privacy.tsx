import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import { ROUTES } from "../lib/routes";

export default function Privacy() {
  return (
    <PageLayout>
      <Seo
        title="Gizlilik Politikasi | GenelKultur.com.tr"
        description="GenelKultur.com.tr gizlilik politikasi. Hangi verilerin islendigi ve kullanici deneyiminin nasil korundugu hakkinda bilgi al."
        path={ROUTES.privacy}
        keywords={["gizlilik politikasi", "genel kultur gizlilik", "kvkk"]}
      />

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-8 px-6 py-16 md:px-10">
        <h1 className="text-4xl font-black tracking-tight text-on-surface md:text-5xl">Gizlilik Politikasi</h1>
        <div className="space-y-6 text-sm leading-7 text-on-surface-variant">
          <p>GenelKultur.com.tr giris zorunlulugu olmayan statik bir web deneyimi sunmayi hedefler.</p>
          <p>Site temel kullanim sirasinda dogrudan uyelik verisi toplamaz. Analiz veya performans araci kullanilmasi halinde bu sayfa guncellenir.</p>
          <p>Tarayici ici bazi tercihler ve oyun sonuclari, deneyimi iyilestirmek amaciyla cihaz uzerinde yerel olarak saklanabilir.</p>
          <p>Harici baglantilar veya ucuncu taraf servisler kullanilirsa ilgili servislerin kendi politikalari da gecerli olabilir.</p>
        </div>
      </main>
    </PageLayout>
  );
}
