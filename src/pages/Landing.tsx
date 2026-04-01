import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Landing() {
  return (
    <>
      <Helmet>
        <title>Genel Kültür Bilgi Yarışması - Bilgini Test Et!</title>
        <meta name="description" content="Genel kültürünü test et, yeni şeyler öğren ve arkadaşlarınla yarış. En heyecanlı genel kültür bilgi yarışması seni bekliyor!" />
        <meta name="keywords" content="genel kültür, bilgi yarışması, oyun, test, tarih, bilim, sanat, coğrafya" />
      </Helmet>


      {/* Main Canvas */}
      <main className="flex-grow flex items-center justify-center pt-12 pb-12 px-6">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left: Asymmetric Content Block */}
          <div className="md:col-span-7 space-y-8">
            <Link to="/categories" className="flex items-center gap-2 group cursor-pointer w-fit">
              <span className="material-symbols-outlined text-primary text-sm">arrow_back</span>
              <span className="text-on-surface-variant font-label text-sm uppercase tracking-widest group-hover:text-primary transition-colors">Kategorilere Dön</span>
            </Link>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black font-headline tracking-tighter text-on-surface leading-none">
                Genel Kültür <br />
                <span className="text-primary text-glow">Bilgi Yarışması</span>
              </h1>
              <p className="text-on-surface-variant text-lg md:text-xl max-w-md leading-relaxed">
                Zihnini tazele, bilgilerini test et. En güncel sorularla
                gerçek bir entelektüel yolculuğa çıkmaya hazır mısın?
              </p>
            </div>

            {/* Bento Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container-low p-6 rounded-xl space-y-2 border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary" data-icon="quiz">
                  quiz
                </span>
                <div className="block">
                  <p className="text-2xl font-bold text-on-surface">10 Soru</p>
                  <p className="text-xs text-on-surface-variant uppercase tracking-tighter">
                    Toplam Süreç
                  </p>
                </div>
              </div>

              <div className="bg-surface-container-low p-6 rounded-xl space-y-2 border border-outline-variant/10">
                <span className="material-symbols-outlined text-tertiary" data-icon="auto_awesome">
                  auto_awesome
                </span>
                <div className="block">
                  <p className="text-2xl font-bold text-on-surface">Sınırsız</p>
                  <p className="text-xs text-on-surface-variant uppercase tracking-tighter">
                    Eğlence & Bilgi
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Focus Area */}
          <div className="md:col-span-5 flex flex-col items-center justify-center relative">
            {/* Visual Anchor */}
            <div className="absolute -z-10 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>

            <div className="relative group">
              {/* Massive CTA */}
              <Link to="/categories" className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-black text-3xl md:text-4xl shadow-[0_20px_50px_rgba(242,202,80,0.3)] hover:shadow-[0_30px_70px_rgba(242,202,80,0.5)] hover:scale-105 active:scale-95 transition-all duration-500 ease-out-expo flex flex-col items-center justify-center gap-2">
                  BAŞLA
                  <span
                    className="material-symbols-outlined text-4xl animate-pulse"
                    data-icon="play_arrow"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_arrow
                  </span>
              </Link>
              {/* Floating Decorative Element */}
              <div className="absolute -top-4 -right-4 bg-surface-container-highest/80 backdrop-blur-md px-4 py-2 rounded-full border border-outline-variant/20 flex items-center gap-2 shadow-xl hover:-translate-y-1 transition-transform">
                <span
                  className="material-symbols-outlined text-primary text-sm"
                  data-icon="star"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span className="text-xs font-bold text-on-surface">
                  Haftalık Favori
                </span>
              </div>
            </div>

            <div className="mt-12 text-center space-y-2 opacity-60">
              <p className="text-sm font-label uppercase tracking-[0.2em]">
                Hazır mısın?
              </p>
              <div className="flex justify-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-primary/20"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Shell */}
      <footer className="w-full flex flex-col items-center gap-4 text-center mt-auto bg-[#041329] py-12">
        <div className="flex flex-wrap justify-center gap-8 mb-4">
          <a
            className="font-inter text-xs text-[#d6e3ff]/50 hover:text-[#f2ca50] transition-opacity"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="font-inter text-xs text-[#d6e3ff]/50 hover:text-[#f2ca50] transition-opacity"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="font-inter text-xs text-[#d6e3ff]/50 hover:text-[#f2ca50] transition-opacity"
            href="#"
          >
            Contact
          </a>
          <a
            className="font-inter text-xs text-[#d6e3ff]/50 hover:text-[#f2ca50] transition-opacity"
            href="#"
          >
            About Us
          </a>
        </div>
        <p className="font-inter text-xs text-[#d6e3ff]/50">
          © {new Date().getFullYear()} genelkultur.com. All rights reserved.
        </p>
      </footer>

      {/* Floating Background Image Layer */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <img 
          alt="Deep space nebula background" 
          className="w-full h-full object-cover grayscale opacity-20" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSOT8UMPOjIMtosEpZKGC5OX9I6AZ2YGnwToxfHxAYinzu4T7qbAk6NUd2wSnKxM-_IJOAly-e_hPvoKVCo1rM-gOA3teyKt-dh5_vb1WVSzMSW6p37HVstODSRoV53mQi0PrFfqdxckxZ01Xo2cnBpnxqlvOdiA706xnHq0R9fds9M9TlbPkrIftVTfbYt4W1nsU1mUubqa9XkWrHE3bmLC3ExepRncU2Am5YPi5DaLFzUeQsvmkDx8VybdS3z0b7m5WlFf3uLOGS" 
        />
        {/* Subtle Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-repeat" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDjbqtL4E6H37mf1UBnCaO_la7dHjiTMbwDWLd1ejmEwvjzTfEbui7taw7LaljFMbxkPbj9XDbTyGpqr-vS0cxpIEEr_DELUVjZ0hV8QzIKr4YkzUH6fmEbnaHjpcWpKfMBU670TMwDEOrE4qT0GjZ53BzBxX_ZU_APSEdyrgEv_IlJa14EJ2dxjdkpPhtOMJSAy1sZDR_-hy5tPAtH5xxTLWn1uho1MWIkzG7hMsrUzyfTLO0aBYMs5tjTqquoBLG0xE0jXtxivb2K')" }}></div>
      </div>
    </>
  );
}
