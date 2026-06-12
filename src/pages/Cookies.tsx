import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import { ROUTES } from "../lib/routes";

export default function Cookies() {
  return (
    <PageLayout>
      <Seo
        title="Çerez Politikası | GenelKultur.com.tr"
        description="GenelKultur.com.tr çerez politikası. Web sitemizde kullanılan çerez türleri, bunların kullanım amaçları ve çerez yönetimi hakkında bilgi edinin."
        path={ROUTES.cookies}
        keywords={["çerez politikası", "cookie policy", "genel kültür çerez", "çerez yönetimi"]}
      />

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-8 px-6 py-16 md:px-10">
        <h1 className="text-4xl font-black tracking-tight text-on-surface md:text-5xl">Çerez Politikası</h1>
        <div className="space-y-6 text-sm leading-7 text-on-surface-variant">
          <p className="text-xs text-on-surface-variant/70">Son Güncelleme: 12 Haziran 2026</p>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-on-surface">1. Çerez (Cookie) Nedir?</h2>
            <p>
              Çerezler, bir web sitesini ziyaret ettiğinizde bilgisayarınıza veya mobil cihazınıza kaydedilen küçük metin dosyalarıdır. 
              Çerezler, web sitelerinin daha verimli çalışmasını, kullanıcı tercihlerinin hatırlanmasını ve site yöneticilerine analiz 
              raporları sunulmasını sağlar.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-on-surface">2. Çerezleri Neden Kullanıyoruz?</h2>
            <p>
              GenelKultur.com.tr üzerinde çerezleri aşağıdaki amaçlarla kullanmaktayız:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Zorunlu ve Fonksiyonel Çerezler:</strong> Sitenin temel işlevlerini yerine getirebilmesi, oyun durumunun (Local Storage ile) ve kullanıcı tercihlerinin (örneğin karanlık mod veya ses tercihleri) hatırlanması için.</li>
              <li><strong>Performans ve Analitik Çerezleri:</strong> Google Analytics 4 kullanarak sitemizin ne kadar ziyaret edildiğini, hangi quizlerin daha popüler olduğunu ve sayfalarımızın yüklenme hızını ölçümlemek için.</li>
              <li><strong>Hedefleme ve Reklam Çerezleri:</strong> Google AdSense aracılığıyla ziyaretçilerimize ilgi alanlarına uygun reklamlar sunmak ve bu reklamların etkililiğini ölçmek için.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-on-surface">3. Kullandığımız Üçüncü Taraf Çerezler</h2>
            <p>
              Sitemizde doğrudan bizim tarafımızdan yerleştirilen çerezlerin yanı sıra, iş ortaklarımız olan üçüncü taraflar da çerez yerleştirebilir:
            </p>
            <table className="w-full border-collapse border border-white/10 text-left text-xs text-on-surface-variant">
              <thead>
                <tr className="bg-surface-container-low text-on-surface font-bold">
                  <th className="border border-white/10 p-3">Sağlayıcı</th>
                  <th className="border border-white/10 p-3">Çerez Adı / Tipi</th>
                  <th className="border border-white/10 p-3">Amaç</th>
                  <th className="border border-white/10 p-3">Saklama Süresi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-white/10 p-3 font-semibold">Google Analytics</td>
                  <td className="border border-white/10 p-3">_ga, _gid, _ga_*</td>
                  <td className="border border-white/10 p-3">Ziyaretçi sayılarını ve kullanım istatistiklerini anonim olarak analiz etme.</td>
                  <td className="border border-white/10 p-3">2 Yıla kadar</td>
                </tr>
                <tr className="bg-surface-container-low/20">
                  <td className="border border-white/10 p-3 font-semibold">Google AdSense</td>
                  <td className="border border-white/10 p-3">__gads, __gpi, IDE, DSID</td>
                  <td className="border border-white/10 p-3">Kullanıcı ilgi alanlarına göre reklam gösterme ve reklam frekansını sınırlama.</td>
                  <td className="border border-white/10 p-3">1 Yıla kadar</td>
                </tr>
                <tr>
                  <td className="border border-white/10 p-3 font-semibold">Cloudflare</td>
                  <td className="border border-white/10 p-3">__cf_bm, _cfuvid</td>
                  <td className="border border-white/10 p-3">Güvenlik ve bot algılama, site trafiğini optimize etme.</td>
                  <td className="border border-white/10 p-3">Oturum Süresince</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-on-surface">4. Çerezleri Nasıl Kontrol Edebilir veya Silebilirsiniz?</h2>
            <p>
              Çerez kullanımını tercihlerinize göre düzenleme ve kontrol etme imkanına sahipsiniz:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Site Üzerinden Yönetim:</strong> Sitemizi ilk ziyaretinizde karşınıza çıkan Çerez Onay Banner'ı üzerinden tercihlerinizi dilediğiniz gibi güncelleyebilirsiniz.</li>
              <li><strong>Tarayıcı Ayarları:</strong> Çoğu tarayıcı varsayılan olarak çerezleri kabul eder ancak ayarlar menüsünden çerezleri engelleyecek veya çerez kaydedildiğinde sizi uyaracak şekilde yapılandırılabilir. Ayrıntılı bilgi için tarayıcınızın (Chrome, Safari, Firefox, Edge vb.) yardım sayfasını inceleyebilirsiniz.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-on-surface">5. İletişim</h2>
            <p>
              Çerez Politikamız ile ilgili sorularınızı İletişim sayfamızda bulunan yöntemleri kullanarak bizlere iletebilirsiniz. Sitemizi kullanmaya devam etmeniz, bu çerez kullanım koşullarını kabul ettiğiniz anlamına gelmektedir.
            </p>
          </section>
        </div>
      </main>
    </PageLayout>
  );
}
