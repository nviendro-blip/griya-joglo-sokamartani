import { Heart, Users, Baby, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const personas = [
  {
    icon: Heart,
    title: "Pasangan Muda",
    description: "Memulai kehidupan baru dengan hunian impian yang nyaman dan terjangkau",
    color: "primary"
  },
  {
    icon: Users,
    title: "Keluarga Milenial",
    description: "Mencari rumah dengan halaman luas untuk anak-anak tumbuh berkembang",
    color: "accent"
  },
  {
    icon: Baby,
    title: "First-Time Buyer",
    description: "Investasi properti pertama yang aman dengan cicilan ringan",
    color: "primary"
  },
  {
    icon: Briefcase,
    title: "Professional Muda",
    description: "Mengamankan aset masa depan dengan lokasi strategis di Yogyakarta",
    color: "accent"
  }
];

const TargetMarket = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Dirancang untuk <span className="text-primary">Keluarga Muda</span> & Pasangan Milenial
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kami memahami kebutuhan Anda. Griya Alam Sokamartani hadir sebagai solusi hunian 
            yang sesuai dengan gaya hidup dan budget keluarga Indonesia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {personas.map((persona, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 p-4 bg-primary/10 rounded-full inline-flex group-hover:bg-primary/20 transition-colors duration-300">
                  <persona.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{persona.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{persona.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial / Social Proof Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary rounded-full mb-4">
                  <span className="text-sm font-bold text-primary-foreground">⚡ Penawaran Terbatas</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Unit Sangat Terbatas, Jangan Tunda Lagi!
                </h3>
                <p className="text-lg text-muted-foreground mb-2">
                  Harga properti di kawasan Sleman terus meningkat setiap tahunnya
                </p>
                <p className="text-xl font-bold text-primary mb-6">
                  Amankan hunian impian Anda sekarang juga sebelum terlambat!
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Unit Terjual Bulan Ini</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Kepuasan Pembeli</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">15%</div>
                  <div className="text-sm text-muted-foreground">Kenaikan Harga/Tahun</div>
                </div>
              </div>

              <div className="text-center">
                <a 
                  href="https://wa.me/6285292249776?text=Halo,%20saya%20ingin%20booking%20unit%20Griya%20Alam%20Sokamartani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-10 py-5 bg-primary hover:bg-primary-hover text-primary-foreground font-bold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Survei Lokasi & Booking Sekarang
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                  *Promo spesial untuk 10 pembeli pertama bulan ini
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TargetMarket;
