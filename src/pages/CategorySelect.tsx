import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function CategorySelect() {
  return (
    <>
      <Helmet>
        <title>Kategori Seç - Genel Kültür Bilgi Yarışması</title>
        <meta name="description" content="Tarih, Bilim, Sanat veya Genel Kültür... İstediğin kategoriyi seç ve yarışmaya başla!" />
      </Helmet>




      <main className="flex-1 pt-12 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <section className="mb-16 text-center lg:text-left relative">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-surface-container-high border border-outline-variant/15">
            <span className="text-primary text-sm font-semibold tracking-wide uppercase">Yeni Bilgi Macerası</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-on-background tracking-tighter leading-tight mb-6">
            Bilgini Test Et, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">Eğlenmeye Hemen Başla!</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Kültür, sanat, bilim ve tarih dolu bir yolculuğa çıkın. Giriş yapmanıza gerek kalmadan hemen oynamaya başlayın ve bilgi seviyenizi kanıtlayın.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/game?category=genel" className="block group relative overflow-hidden bg-surface-container-low rounded-3xl p-8 text-left transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(4,19,41,0.8)] border border-transparent hover:border-primary/20">
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity bg-cover bg-center grayscale" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdnK_XqjfbSatkYNHYb2sfF1a4K-F64geRJT5FG55s0G5KucVVZuooNh01SHJocF2ZwQi5R_s1IDf6Enqxxl30VAwBPISwh2UA9ufdlcWQSzmPcWdOK3nMKltU9EywtMxN8zzXjhNXtbkW452DI8cRuEJAY0Vtv02p5_fHj9AscVgrCA5J2HyppDAfLhWWQc_8owWDBkx4JSPV0dJ16FxmDFUqn_-qhimF4SdXVyOEWoazhYwhtaUbOa6acdB1YI_9OlkkwHdmsiod')" }}></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-surface-container-highest flex items-center justify-center mb-12 group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                <span className="material-symbols-outlined text-primary text-4xl" data-weight="fill">public</span>
              </div>
              <h3 className="text-2xl font-bold text-on-background mb-3">Genel Kültür</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Dünyadan güncel haberler, ilginç bilgiler ve merak edilen her şey.</p>
              <div className="mt-auto pt-8 flex items-center gap-2 text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                Hemen Başla <span className="material-symbols-outlined text-base">arrow_forward</span>
              </div>
            </div>
          </Link>

          <Link to="/game?category=tarih" className="block group relative overflow-hidden bg-surface-container-low rounded-3xl p-8 text-left transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(4,19,41,0.8)] border border-transparent hover:border-primary/20">
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity bg-cover bg-center grayscale" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBXquEfwDXcMwEPe3vkeJIjec0rhqgHiNIvECygM3_D95kxStQ-hroYtPEwVW_KCEiwd3fQkXCaSdfD34wEwFJeLOIfRHeOeH_r8xkk-ePRlU6ZaU_hzDnsn8sAcRZHwBTjR1X8KVOswT9eMMQaPs5r0IBAhhX6OHS4VkyMBUTi_qPjPIatY8X3ftaptOGs3tXoT79pdaLlR0lYkOfoH0yLy12OiMdi7wbEU-DQvVyRxPXZiNngn-EupoVKdHeQzi7DaMlKQRfDAX9c')" }}></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-surface-container-highest flex items-center justify-center mb-12 group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                <span className="material-symbols-outlined text-primary text-4xl" data-weight="fill">history_edu</span>
              </div>
              <h3 className="text-2xl font-bold text-on-background mb-3">Tarih</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">İmparatorlukların yükselişi, devrimler ve insanlık tarihini değiştiren anlar.</p>
              <div className="mt-auto pt-8 flex items-center gap-2 text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                Hemen Başla <span className="material-symbols-outlined text-base">arrow_forward</span>
              </div>
            </div>
          </Link>

          <Link to="/game?category=bilim" className="block group relative overflow-hidden bg-surface-container-low rounded-3xl p-8 text-left transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(4,19,41,0.8)] border border-transparent hover:border-primary/20">
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity bg-cover bg-center grayscale" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBp8Ad3dg2wbQh1CO95msXso0lgnT0x2u2O1U8olNbrI070hhLBBNouzM288C5AlhyvvHhjhXliLPyH4vx2JlmqA-cNOtUYE3Fo68bUyqlDO5xcrZmeIVpxDFcLYxA3KnQ_ASxJ_nhEGJ7fD3_6Xqq8fuzgsTOZdQZQducWfu5lIF53xmaCFOhhr627xVi3ocADRLvpY3ZhNpk3i32IpGiSSKCtQ9P1l-pQ6pFNtQqvDEcaoUXE_f62dZ1DJUF0Klitjb2PuPEtwjCF')" }}></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-surface-container-highest flex items-center justify-center mb-12 group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                <span className="material-symbols-outlined text-primary text-4xl" data-weight="fill">science</span>
              </div>
              <h3 className="text-2xl font-bold text-on-background mb-3">Bilim</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Evrenin sırları, teknoloji, uzay keşifleri ve geleceğin dünyası.</p>
              <div className="mt-auto pt-8 flex items-center gap-2 text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                Hemen Başla <span className="material-symbols-outlined text-base">arrow_forward</span>
              </div>
            </div>
          </Link>

          <Link to="/game?category=sanat" className="block group relative overflow-hidden bg-surface-container-low rounded-3xl p-8 text-left transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(4,19,41,0.8)] border border-transparent hover:border-primary/20">
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity bg-cover bg-center grayscale" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6zIb4wHbnaHoxtskMpZwH48RTw8Afvy7Cmt3C09NeoVBc6uwIOG468gt8QZSmUlmzSQyOx8wubUuAE8d2wc79KDI_5pjNg78NVF-IntEWTkPfJn0N_Uvqgw2XmgdHvfYdBjm7IiF_cIvYSDhjn43pPJdkfNPf9-jM44vdimJjMMMGlm6_ARYA3hiWPlJ35tQOkwD1vp_BPfqllW_ktBmt7_c2w42hbCsOFCu0jKNyOM85XLvMd8LGE_NgR5TDDK7C93wve4MPWuFB')" }}></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-surface-container-highest flex items-center justify-center mb-12 group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                <span className="material-symbols-outlined text-primary text-4xl" data-weight="fill">palette</span>
              </div>
              <h3 className="text-2xl font-bold text-on-background mb-3">Sanat</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">Resimden müziğe, sinemadan edebiyata ruhunuzu besleyen başyapıtlar.</p>
              <div className="mt-auto pt-8 flex items-center gap-2 text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                Hemen Başla <span className="material-symbols-outlined text-base">arrow_forward</span>
              </div>
            </div>
          </Link>
        </div>
      </main>

      {/* Floating Background Image Layer */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <img 
          alt="Deep space nebula background" 
          className="w-full h-full object-cover grayscale opacity-10" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSOT8UMPOjIMtosEpZKGC5OX9I6AZ2YGnwToxfHxAYinzu4T7qbAk6NUd2wSnKxM-_IJOAly-e_hPvoKVCo1rM-gOA3teyKt-dh5_vb1WVSzMSW6p37HVstODSRoV53mQi0PrFfqdxckxZ01Xo2cnBpnxqlvOdiA706xnHq0R9fds9M9TlbPkrIftVTfbYt4W1nsU1mUubqa9XkWrHE3bmLC3ExepRncU2Am5YPi5DaLFzUeQsvmkDx8VybdS3z0b7m5WlFf3uLOGS" 
        />
        {/* Subtle Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-repeat" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDjbqtL4E6H37mf1UBnCaO_la7dHjiTMbwDWLd1ejmEwvjzTfEbui7taw7LaljFMbxkPbj9XDbTyGpqr-vS0cxpIEEr_DELUVjZ0hV8QzIKr4YkzUH6fmEbnaHjpcWpKfMBU670TMwDEOrE4qT0GjZ53BzBxX_ZU_APSEdyrgEv_IlJa14EJ2dxjdkpPhtOMJSAy1sZDR_-hy5tPAtH5xxTLWn1uho1MWIkzG7hMsrUzyfTLO0aBYMs5tjTqquoBLG0xE0jXtxivb2K')" }}></div>
      </div>
    </>
  );
}
