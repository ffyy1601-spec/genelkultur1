import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Results() {
  const location = useLocation();
  const { score = 0, correct = 0, total = 10 } = location.state || {};
  const wrong = total - correct;
  const successRate = Math.round((correct / total) * 100) || 0;

  return (
    <>
      <Helmet>
        <title>Sonuçlar - Genel Kültür Bilgi Yarışması</title>
        <meta name="description" content={`Yarışmayı tamamladın! %${successRate} başarı oranı ile harika bir performans sergiledin.`} />
      </Helmet>


      <main className="flex-grow pt-12 pb-12 px-6 flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full">
          <section className="relative bg-surface-container-low rounded-[2rem] p-8 md:p-16 overflow-hidden text-center">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-tertiary/5 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-6 flex justify-center">
                <span className="material-symbols-outlined text-8xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-on-background mb-2 font-headline">Oyun Bitti!</h1>
              <p className="text-on-surface-variant text-lg mb-12 max-w-lg mx-auto">Performansınızı buradan inceleyebilirsiniz:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
                <div className="bg-surface-container-high p-8 rounded-3xl flex flex-col items-center justify-center transform hover:scale-[1.02] transition-transform ease-out-expo shadow-xl">
                  <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2">TOPLAM PUAN</span>
                  <div className="text-5xl font-black text-on-background">{score}<span className="text-on-surface-variant/30 text-2xl">/{total * 100}</span></div>
                </div>
                <div className="bg-surface-container-high p-8 rounded-3xl flex flex-col items-center justify-center transform hover:scale-[1.02] transition-transform ease-out-expo shadow-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="text-tertiary text-xs font-bold uppercase tracking-widest">DOĞRU</span>
                  </div>
                  <div className="text-5xl font-black text-on-background">{correct}</div>
                </div>
                <div className="bg-surface-container-high p-8 rounded-3xl flex flex-col items-center justify-center transform hover:scale-[1.02] transition-transform ease-out-expo shadow-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>cancel</span>
                    <span className="text-error text-xs font-bold uppercase tracking-widest">YANLIŞ</span>
                  </div>
                  <div className="text-5xl font-black text-on-background">{wrong}</div>
                </div>
              </div>

              <div className="w-full max-w-md mb-16">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-on-surface-variant">İlerleme Durumu</span>
                  <span className="text-sm font-bold text-primary">%{successRate} Başarı</span>
                </div>
                <div className="flex gap-2 h-3 w-full">
                  <div className="flex-grow flex gap-1.5">
                    {Array.from({ length: total }).map((_, i) => (
                       <div key={i} className={`h-full w-full rounded-full ${i < correct ? 'bg-tertiary' : 'bg-error opacity-60'}`}></div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <Link to="/categories" className="px-10 py-5 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold text-lg rounded-2xl shadow-lg transform hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3">
                  <span className="material-symbols-outlined">replay</span>
                  TEKRAR OYNA
                </Link>
                <Link to="/" className="px-10 py-5 bg-transparent border-2 border-outline-variant hover:border-primary/50 text-on-background font-bold text-lg rounded-2xl hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3">
                  <span className="material-symbols-outlined">home</span>
                  ANA SAYFA
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    <footer className="w-full flex flex-col items-center gap-4 text-center mt-auto bg-[#041329] py-12">
        <p className="font-inter text-xs text-[#d6e3ff]/50">© {new Date().getFullYear()} genelkultur.com. All rights reserved.</p>
    </footer>
    {/* Floating Background Image Layer */}
    <div className="fixed inset-0 -z-20 pointer-events-none">
        <img 
          alt="Deep space nebula background" 
          className="w-full h-full object-cover grayscale opacity-10" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSOT8UMPOjIMtosEpZKGC5OX9I6AZ2YGnwToxfHxAYinzu4T7qbAk6NUd2wSnKxM-_IJOAly-e_hPvoKVCo1rM-gOA3teyKt-dh5_vb1WVSzMSW6p37HVstODSRoV53mQi0PrFfqdxckxZ01Xo2cnBpnxqlvOdiA706xnHq0R9fds9M9TlbPkrIftVTfbYt4W1nsU1mUubqa9XkWrHE3bmLC3ExepRncU2Am5YPi5DaLFzUeQsvmkDx8VybdS3z0b7m5WlFf3uLOGS" 
        />
        <div className="absolute inset-0 opacity-[0.02] bg-repeat" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDjbqtL4E6H37mf1UBnCaO_la7dHjiTMbwDWLd1ejmEwvjzTfEbui7taw7LaljFMbxkPbj9XDbTyGpqr-vS0cxpIEEr_DELUVjZ0hV8QzIKr4YkzUH6fmEbnaHjpcWpKfMBU670TMwDEOrE4qT0GjZ53BzBxX_ZU_APSEdyrgEv_IlJa14EJ2dxjdkpPhtOMJSAy1sZDR_-hy5tPAtH5xxTLWn1uho1MWIkzG7hMsrUzyfTLO0aBYMs5tjTqquoBLG0xE0jXtxivb2K')" }}></div>
    </div>
    </>
  );
}
