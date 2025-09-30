import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-joglo.jpg";

const Hero = () => {
  const handleBooking = () => {
    window.open("https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20Griya%20Alam%20Sokamartani", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Griya Alam Sokamartani - Rumah Joglo Modern" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-3xl animate-fade-in">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Tempel, Sleman, Yogyakarta</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Miliki Rumah{" "}
            <span className="text-primary">Joglo Modern</span>{" "}
            Pertama Anda di Tempel Sleman
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Hunian etnik Jawa dengan harga mulai 300jt an, legalitas SHM, Luas Tanah mulai 100meter persegi, 
            dan cicilan mulai{" "}
            <span className="font-bold text-primary">3 jutaan per bulan</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={handleBooking}
              className="text-lg px-8 py-6 bg-primary hover:bg-primary-hover transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Booking Sekarang
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-6 border-2"
            >
              Cek lokasi
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 text-center">
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl font-bold text-primary">3 Juta+</div>
              <div className="text-sm text-muted-foreground mt-1">Cicilan/bulan</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-3xl font-bold text-primary">SHM</div>
              <div className="text-sm text-muted-foreground mt-1">Legalitas Aman</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
              <div className="text-3xl font-bold text-primary">Luas</div>
              <div className="text-sm text-muted-foreground mt-1">Tanah & Halaman</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
