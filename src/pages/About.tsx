import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import { ROUTES } from "../lib/routes";

export default function About() {
  return (
    <PageLayout>
      <Seo
        title="Hakkımızda | GenelKultur.com.tr"
        description="GenelKultur.com.tr hakkında bilgi alın. Genel kültür soruları, bilgi yarışması deneyimini nasıl tasarladığımızı ve yapay zeka entegrasyonumuzu keşfedin."
        path={ROUTES.about}
        keywords={["hakkımızda", "genel kültür sitesi", "bilgi yarışması platformu", "interaktif eğitim"]}
      />

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-12 px-6 py-16 md:px-10">
        <section className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Biz Kimiz?</p>
          <h1 className="text-4xl font-black tracking-tight text-on-surface md:text-6xl leading-tight">
            Bilgiyi hızlı, temiz ve tamamen ücretsiz bir deneyime dönüştürüyoruz.
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-on-surface-variant">
            GenelKultur.com.tr, üyelik veya kayıt zorunluluğu olmaksızın saniyeler içinde başlayabileceğiniz modern,
            kullanıcı dostu ve reklamlardan boğulmayan bir bilgi yarışması platformudur. Amacımız, ziyaretçilerimizin hem
            keyifli zaman geçirmesini sağlamak hem de her gün yeni bir şeyler öğrenmelerine aracılık etmektir.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-outline-variant/10 bg-surface-container-low p-6 space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <span className="material-symbols-outlined">bolt</span>
            </div>
            <h2 className="text-xl font-bold text-on-surface">Hızlı ve Kayıtsız Başlangıç</h2>
            <p className="text-sm leading-6 text-on-surface-variant">
              Hiçbir form doldurmadan, şifre belirlemeden dilediğiniz kategoriyi seçip testi anında başlatabilirsiniz. Sadelik, kullanıcı deneyimimizin merkezindedir.
            </p>
          </article>
          <article className="rounded-3xl border border-outline-variant/10 bg-surface-container-low p-6 space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <span className="material-symbols-outlined">verified</span>
            </div>
            <h2 className="text-xl font-bold text-on-surface">Editör Onaylı İçerik</h2>
            <p className="text-sm leading-6 text-on-surface-variant">
              Tüm soru ve içeriklerimiz editör ekibimiz tarafından hazırlanır; doğruluk kontrolünden ve son okumadan geçtikten sonra yayına alınır. Hatalı bir bilgi fark ederseniz iletişim sayfamızdan bize bildirebilirsiniz.
            </p>
          </article>
          <article className="rounded-3xl border border-outline-variant/10 bg-surface-container-low p-6 space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <span className="material-symbols-outlined">menu_book</span>
            </div>
            <h2 className="text-xl font-bold text-on-surface">Açıklamalı Soru Cevaplar</h2>
            <p className="text-sm leading-6 text-on-surface-variant">
              Platformumuzda sorular sadece şıklardan ibaret değildir. Yanlış yapsanız dahi doğru seçeneğin neden doğru olduğunu açıklayan zengin açıklamalar sunarız.
            </p>
          </article>
        </section>

        <hr className="border-white/10" />

        <section className="space-y-6">
          <h2 className="text-3xl font-black text-on-surface">Misyonumuz ve Vizyonumuz</h2>
          <div className="grid gap-8 md:grid-cols-2 text-sm leading-7 text-on-surface-variant">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-on-surface">Eğlenceli Öğrenme Kültürü</h3>
              <p>
                İnternetin bilgi kirliliği ve dikkat dağıtıcı unsurlarla dolu olduğu günümüzde, saf bilgiye en temiz ve en hızlı şekilde ulaşmayı
                hedefleyen bir kütüphane inşa ediyoruz. Testlerimizi çözerken kullandığınız jokerler, puanlama sistemi ve açıklayıcı metinler,
                öğrenme sürecini oyunlaştırarak hafızada kalıcılığı artırır.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-on-surface">Teknolojik Altyapı ve Gelecek</h3>
              <p>
                GenelKultur.com.tr; modern, hızlı ve mobil uyumlu bir web uygulaması olarak geliştirilmiştir.
                Tüm sayfalar arama motorlarının tam anlamıyla dizine ekleyebilmesi için önceden işlenmiş statik
                içerik olarak sunulur. Gelecekte daha fazla kategori, yeni soru havuzları ve kişiselleştirilmiş
                ilerleme takibi sunmayı hedefliyoruz.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-surface-container-low/60 p-6 md:p-8 space-y-4">
          <h3 className="text-xl font-bold text-on-surface">İletişim ve Editörlük</h3>
          <p className="text-sm leading-6 text-on-surface-variant">
            Sitemizdeki herhangi bir sorunun hatalı olduğunu düşünüyorsanız, içerik ortaklığı teklifleriniz veya teknik sorun bildirimleriniz için
            bizimle <a href={ROUTES.contact} className="text-primary hover:underline font-semibold">İletişim</a> sayfamız üzerinden ya da
            doğrudan <strong>genelkultur46@gmail.com</strong> adresinden çekinmeden iletişim kurabilirsiniz. Ziyaretçilerimizin geri bildirimleri,
            içerik kalitemizi artırmadaki en önemli gücümüzdür.
          </p>
        </section>
      </main>
    </PageLayout>
  );
}
