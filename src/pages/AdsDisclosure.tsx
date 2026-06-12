import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import { ROUTES } from "../lib/routes";

export default function AdsDisclosure() {
  return (
    <PageLayout>
      <Seo
        title="Reklam Bilgilendirmesi | GenelKultur.com.tr"
        description="GenelKultur.com.tr reklam bilgilendirmesi. Reklam gösterimi, üçüncü taraf reklam teknolojileri ve kullanıcı deneyimi ilkeleri hakkında bilgi edinin."
        path={ROUTES.adsDisclosure}
        keywords={["reklam bilgilendirmesi", "ads disclosure", "adsense bilgilendirme"]}
      />

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-8 px-6 py-16 md:px-10">
        <h1 className="text-4xl font-black tracking-tight text-on-surface md:text-5xl">Reklam Bilgilendirmesi</h1>
        <div className="space-y-6 text-sm leading-7 text-on-surface-variant">
          <p className="text-xs text-on-surface-variant/70">Son Güncelleme: 12 Haziran 2026</p>
          <p>GenelKultur.com.tr, ziyaretçi deneyimini bozmadan sürdürülebilir bir yayın yapısı kurmak amacıyla reklam teknolojilerinden yararlanmaktadır.</p>
          <p>Reklamlar; sayfa içeriğini taklit edecek, kullanıcıyı yanıltacak veya quiz akışında yanlış tıklamaya yol açacak şekilde konumlandırılmaz. Kullanıcı odaklı tasarım ilkelerine sadık kalır.</p>
          <p>Üçüncü taraf reklam sağlayıcıları (başta Google AdSense olmak üzere), reklam sunumu ve ölçümleme amacıyla çerezler gibi kendi teknolojilerini kullanabilir. Bu kapsamdaki veri işleme süreçleri, ilgili sağlayıcıların kendi politikalarına tabidir.</p>
          <p>Sitemizde yayınlanan reklamlar ve veri toplama yöntemleri hakkında daha fazla detay öğrenmek veya çerez tercihlerinizi değiştirmek için Çerez Politikası ve Gizlilik Politikası sayfalarımızı inceleyebilirsiniz.</p>
        </div>
      </main>
    </PageLayout>
  );
}
