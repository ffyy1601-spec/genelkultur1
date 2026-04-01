import { Helmet } from "react-helmet-async";
import PageLayout from "../components/PageLayout";

export default function Privacy() {
  return (
    <PageLayout>
      <Helmet>
        <title>Gizlilik Politikası - Genelkultur.com</title>
        <meta
          name="description"
          content="Genelkultur.com gizlilik politikası. Hangi verilerin işlendiğini ve kullanıcı deneyiminin nasıl korunduğunu öğren."
        />
      </Helmet>

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-8 px-6 py-16 md:px-10">
        <h1 className="text-4xl font-black tracking-tight text-on-surface md:text-5xl">Gizlilik Politikası</h1>
        <div className="space-y-6 text-sm leading-7 text-on-surface-variant">
          <p>Genelkultur.com giriş zorunluluğu olmayan statik bir web deneyimi sunmayı hedefler.</p>
          <p>Site, temel kullanım sırasında doğrudan üyelik verisi toplamaz. İleride analiz veya performans aracı kullanılması halinde bu sayfa güncellenir.</p>
          <p>Tarayıcı içi bazı tercihler ve oyun sonuçları, deneyimi iyileştirmek amacıyla cihaz üzerinde yerel olarak saklanabilir.</p>
          <p>Harici bağlantılar veya üçüncü taraf servisler kullanılırsa, ilgili servislerin kendi politikaları da geçerli olabilir.</p>
        </div>
      </main>
    </PageLayout>
  );
}
