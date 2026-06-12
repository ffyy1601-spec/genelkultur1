import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import { ROUTES } from "../lib/routes";

export default function Terms() {
  return (
    <PageLayout>
      <Seo
        title="Kullanım Koşulları | GenelKultur.com.tr"
        description="GenelKultur.com.tr kullanım koşulları ve site içeriğinin nasıl kullanılabileceğine dair temel bilgiler, fikri mülkiyet kuralları ve sorumluluk sınırları."
        path={ROUTES.terms}
        keywords={["kullanım koşulları", "genel kültür koşullar", "site kullanımı", "yasal bildirim"]}
      />

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-8 px-6 py-16 md:px-10">
        <h1 className="text-4xl font-black tracking-tight text-on-surface md:text-5xl">Kullanım Koşulları</h1>
        <div className="space-y-6 text-sm leading-7 text-on-surface-variant">
          <p className="text-xs text-on-surface-variant/70">Son Güncelleme: 12 Haziran 2026</p>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-on-surface">1. Kabul Edilme Koşulları</h2>
            <p>
              GenelKultur.com.tr web sitesini ziyaret ederek veya sitemizdeki testleri çözerek, bu kullanım koşullarını, 
              gizlilik politikamızı ve çerez politikamızı tamamen kabul etmiş sayılırsınız. Eğer bu koşullardan herhangi 
              birini kabul etmiyorsanız, lütfen web sitemizi kullanmaya devam etmeyiniz.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-on-surface">2. Hizmet Tanımı ve Amaç</h2>
            <p>
              Bu site, genel kültür bilincini artırmak, eğlenceli eğitim ortamı sunmak ve kullanıcıların bilgi seviyelerini 
              ölçmek amacıyla kurulmuştur. Sitemizdeki tüm içerikler (sorular, cevaplar, makaleler ve açıklamalar) yalnızca 
              bilgilendirme ve eğlence amaçlıdır.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-on-surface">3. Fikri Mülkiyet Hakları</h2>
            <p>
              Sitede yer alan tüm özgün metinler, sorular, grafikler, arayüz tasarımları, logolar ve yazılım kodları GenelKultur.com.tr'ye 
              aittir ve fikri mülkiyet hukuku kapsamında korunmaktadır.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>İçeriklerimizin izinsiz olarak otomatik botlar (scraping) aracılığıyla çekilmesi, kopyalanması veya başka platformlarda ticari amaçla yayınlanması kesinlikle yasaktır.</li>
              <li>Sitemizdeki makaleler veya testler, yalnızca kaynak belirtilerek (tıklanabilir aktif bağlantı verilerek) ticari olmayan amaçlarla kısmen alıntılanabilir.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-on-surface">4. Sorumluluk Sınırları</h2>
            <p>
              Sitemizdeki soruların ve makalelerin doğruluğunu kontrol etmek için editörlerimiz azami özen göstermektedir. Ancak, 
              sitemizde sunulan herhangi bir bilginin hatasız, eksiksiz veya güncel olduğuna dair açık veya zımni hiçbir garanti vermemekteyiz.
            </p>
            <p>
              İçerikteki olası maddi hatalardan dolayı ortaya çıkabilecek doğrudan veya dolaylı kayıplardan platformumuz sorumlu tutulamaz. 
              Fark ettiğiniz hatalı soruları İletişim sayfası üzerinden bildirmeniz halinde, editörlerimiz en kısa sürede gerekli düzeltmeleri sağlayacaktır.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-on-surface">5. Kötüye Kullanım ve Yasaklar</h2>
            <p>
              Kullanıcılar, siteyi kullanırken aşağıdaki davranışlarda bulunmayacaklarını kabul ederler:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Site altyapısını bozacak, aşırı yük getirecek veya çalışmasını engelleyecek DDoS ve benzeri saldırılarda bulunmak.</li>
              <li>Otomatik komut dosyaları, botlar veya web kazıyıcılar kullanarak verileri izinsiz toplamak.</li>
              <li>Sitenin kaynak kodlarına sızmak veya güvenlik açıklarını kötüye kullanmaya çalışmak.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-on-surface">6. Değişiklikler ve İletişim</h2>
            <p>
              GenelKultur.com.tr, bu Kullanım Koşullarını önceden haber vermeksizin dilediği zaman güncelleme hakkını saklı tutar. 
              Güncel koşullar sitede yayınlandığı andan itibaren geçerlilik kazanır. Koşullarla ilgili her türlü geri bildiriminiz için 
              bizimle irtibata geçebilirsiniz.
            </p>
          </section>
        </div>
      </main>
    </PageLayout>
  );
}
