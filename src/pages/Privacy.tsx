import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import { ROUTES } from "../lib/routes";

export default function Privacy() {
  return (
    <PageLayout>
      <Seo
        title="Gizlilik Politikası | GenelKultur.com.tr"
        description="GenelKultur.com.tr gizlilik politikası. Kişisel verilerin işlenmesi, çerezler, Google AdSense reklam ortaklığı ve KVKK/GDPR uyumluluğu hakkında bilgi alın."
        path={ROUTES.privacy}
        keywords={["gizlilik politikası", "genel kültür gizlilik", "kvkk", "gdpr", "çerez bildirimi"]}
      />

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-8 px-6 py-16 md:px-10">
        <h1 className="text-4xl font-black tracking-tight text-on-surface md:text-5xl">Gizlilik Politikası</h1>
        <div className="space-y-6 text-sm leading-7 text-on-surface-variant">
          <p className="text-xs text-on-surface-variant/70">Son Güncelleme: 29 Haziran 2026</p>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-on-surface">1. Giriş ve Veri Sorumlusu</h2>
            <p>
              GenelKultur.com.tr olarak ziyaretçilerimizin gizliliğine ve kişisel verilerinin korunmasına büyük önem veriyoruz. 
              Bu Gizlilik Politikası, platformumuzu kullanırken hangi verilerinizin işlendiğini, çerezlerin nasıl kullanıldığını ve 
              6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ile Avrupa Birliği Genel Veri Koruma Yönetmeliği (GDPR) kapsamındaki haklarınızı açıklamaktadır.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-on-surface">2. Toplanan Veriler ve İşlenme Amaçları</h2>
            <p>
              GenelKultur.com.tr, üyelik veya kayıt zorunluluğu olmayan statik ve etkileşimli bir web platformudur. Doğrudan ad, soyad, e-posta adresi gibi kişisel bilgilerinizi (iletişim formu üzerinden kendi rızanızla göndermediğiniz sürece) toplamayız. Ancak platformumuzu ziyaret ettiğinizde otomatik olarak aşağıdaki anonim ve teknik veriler işlenebilir:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Cihaz ve Bağlantı Bilgisi:</strong> IP adresiniz, tarayıcı türünüz, işletim sisteminiz ve referans aldığınız web siteleri.</li>
              <li><strong>Kullanım Analitiği:</strong> Görüntülediğiniz sayfalar, geçirdiğiniz süreler, çözdüğünüz testlerin istatistikleri ve tıklama eğilimleri.</li>
              <li><strong>Yerel Tarayıcı Depolaması:</strong> Seçtiğiniz oyun ayarları, joker hakları kullanım durumunuz ve yüksek skor gibi oyun verileriniz tarayıcınızda (Local Storage) yerel olarak saklanır.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-on-surface">3. Google AdSense ve Reklam İş Ortaklığı</h2>
            <p>
              Sitemizde üçüncü taraf reklam ortaklarımız (başta Google AdSense olmak üzere) tarafından kişiselleştirilmiş veya kişiselleştirilmemiş reklamlar gösterilmektedir. 
              Google, web sitemizi ve internetteki diğer siteleri ziyaretlerinize dayanarak size reklamlar sunmak için çerezleri (cookies) kullanır.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Google dahil olmak üzere üçüncü taraf satıcılar, kullanıcıların web sitenize veya diğer web sitelerine yaptığı önceki ziyaretleri temel alan reklamlar sunmak için çerezleri kullanır.</li>
              <li>Google'ın reklam çerezlerini kullanması, Google ve ortaklarının kullanıcılara sitenize ve/veya internetteki diğer sitelere yaptıkları ziyaretleri temel alan reklamlar sunmasına olanak tanır.</li>
              <li>Kullanıcılar, <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Reklam Ayarları</a> sayfasını ziyaret ederek kişiselleştirilmiş reklamcılığı devre dışı bırakabilirler. Alternatif olarak, üçüncü taraf satıcıların kişiselleştirilmiş reklamcılık için çerezleri kullanmasını engellemek için <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">www.aboutads.info</a> adresini ziyaret edebilirsiniz.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-on-surface">4. Google Analytics 4 (GA4)</h2>
            <p>
              Sitemizin performansını analiz etmek ve kullanıcı deneyimini iyileştirmek amacıyla Google Analytics 4 (GA4) analitik hizmetini kullanmaktayız. GA4, kullanıcıların web sitesindeki davranışlarını anonim olarak izler ve raporlar. Bu amaçla tarayıcınıza yerleştirilen çerezler IP adresinizi maskeleyerek toplar ve doğrudan kişisel kimliğinizle eşleştirmez.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-on-surface">5. Çerezlerin Yönetimi ve Devre Dışı Bırakılması</h2>
            <p>
              Tarayıcınızın çerez ayarlarını değiştirerek veya sitemizdeki çerez onay banner'ını kullanarak çerezleri sınırlayabilir ya da tamamen engelleyebilirsiniz. Ancak, zorunlu çerezlerin kapatılması durumunda sitemizdeki bazı etkileşimli özelliklerin (örneğin skor kaydı veya joker kullanımı) düzgün çalışmayabileceğini hatırlatmak isteriz.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-on-surface">6. Veri Güvenliği ve Üçüncü Taraflarla Paylaşım</h2>
            <p>
              Sitemiz üzerinden toplanan anonim analitik veriler ve reklam kimlikleri, Google sunucularında güvenle saklanır. Herhangi bir kişisel veriniz izniniz dışında ticari amaçlarla üçüncü şahıslara satılmaz veya kiralanmaz. Resmi makamlardan yasal bir talep gelmediği sürece verileriniz gizli tutulmaktadır. Sitemiz Cloudflare altyapısı ve HTTPS protokolü ile şifrelenerek korunmaktadır.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-on-surface">7. KVKK ve GDPR Kapsamındaki Haklarınız</h2>
            <p>
              Kullanıcı olarak kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacına uygun kullanılıp kullanılmadığını sorgulama ve verilerinizin silinmesini isteme hakkına sahipsiniz. Tüm talepleriniz ve sorularınız için bizimle İletişim sayfası üzerinden veya doğrudan <strong>genelkultur46@gmail.com</strong> e-posta adresi üzerinden irtibata geçebilirsiniz.
            </p>
          </section>
        </div>
      </main>
    </PageLayout>
  );
}
