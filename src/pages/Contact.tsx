import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import { ROUTES } from "../lib/routes";

export default function Contact() {
  return (
    <PageLayout>
      <Seo
        title="İletişim | GenelKultur.com.tr"
        description="GenelKultur.com.tr ile iletişime geçin. İçerik düzeltmeleri, iş birlikleri ve genel kültür içerikleri hakkındaki öneri ve geri bildirimlerinizi editör ekibimize iletin."
        path={ROUTES.contact}
        keywords={["iletişim", "genel kültür iletişim", "site iletişimi", "içerik düzeltme bildirimi"]}
      />

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-16 md:px-10">
        <section className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">İletişim</p>
          <h1 className="text-4xl font-black tracking-tight text-on-surface md:text-6xl">
            Görüş, öneri ve içerik bildirimleri için doğrudan iletişim kanalı.
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-on-surface-variant">
            Bir soruda hata gördüyseniz, yeni bir kategori öneriniz varsa ya da marka iş birlikleri için
            ulaşmak istiyorsanız aşağıdaki iletişim bilgilerini kullanabilirsiniz. Tüm bildirimleri editör
            ekibimiz okur ve değerlendirir.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-outline-variant/10 bg-surface-container-low p-6">
            <p className="mb-2 text-sm uppercase tracking-[0.18em] text-primary">E-posta</p>
            <a className="text-xl font-bold text-on-surface hover:text-primary" href="mailto:genelkultur46@gmail.com">
              genelkultur46@gmail.com
            </a>
            <p className="mt-3 text-sm leading-6 text-on-surface-variant">
              İçerik düzeltmeleri, teknik bildirimler, iş birliği teklifleri ve genel sorularınız için temel iletişim adresimiz.
            </p>
          </article>

          <article className="rounded-3xl border border-outline-variant/10 bg-surface-container-low p-6">
            <p className="mb-2 text-sm uppercase tracking-[0.18em] text-primary">Yanıt Süresi</p>
            <p className="text-xl font-bold text-on-surface">24-72 saat</p>
            <p className="mt-3 text-sm leading-6 text-on-surface-variant">
              Gelen bildirimlere öncelik sırasına göre dönüş yaparız. İçerik hataları ve yayın sorunları daha hızlı ele alınır.
            </p>
          </article>
        </section>

        <section className="rounded-3xl border border-outline-variant/10 bg-surface-container-low p-6 md:p-8 space-y-3">
          <h2 className="text-xl font-bold text-on-surface">Nasıl yazmalısınız?</h2>
          <p className="text-sm leading-7 text-on-surface-variant">
            Bir içerik hatası bildiriyorsanız, ilgili sayfanın bağlantısını ve düzeltilmesini önerdiğiniz bölümü
            kısaca belirtmeniz değerlendirme sürecini hızlandırır. İş birliği tekliflerinde ise konuyu ve hedefinizi
            birkaç cümleyle özetlemeniz yeterlidir. Geri bildirimleriniz, içerik kalitemizi artırmadaki en önemli kaynağımızdır.
          </p>
        </section>
      </main>
    </PageLayout>
  );
}
