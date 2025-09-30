import { CheckCircle, Home, Shield, Trees, Wallet, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const uspItems = [
  {
    icon: Wallet,
    title: "Harga Terjangkau",
    description: "Harga mulai Rp300 jutaan, cocok untuk keluarga muda",
    delay: "0s"
  },
  {
    icon: Home,
    title: "Desain Joglo Artistik",
    description: "Rumah etnik Jawa modern dengan sentuhan artistik yang elegan dan tradisional",
    delay: "0.1s"
  },
  {
    icon: Trees,
    title: "Tanah Luas & Asri",
    description: "Halaman luas untuk anak bermain dan berkebun di udara sejuk Tempel, Sleman",
    delay: "0.2s"
  },
  {
    icon: Shield,
    title: "Legalitas Aman",
    description: "SHM Atas nama pembeli lengkap, investasi Anda terlindungi",
    delay: "0.3s"
  },
  {
    icon: MapPin,
    title: "Lokasi Strategis",
    description: "Akses mudah ke pusat kota Yogyakarta dengan suasana pedesaan yang asri",
    delay: "0.4s"
  },
];

const USPSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Keunggulan Griya Alam Sokamartani</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mengapa Harus Memilih Kami?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Solusi hunian impian dengan berbagai keunggulan untuk keluarga bahagia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {uspItems.map((item, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-slide-up group"
              style={{ animationDelay: item.delay }}
            >
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-primary/10 rounded-xl inline-flex group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional highlight */}
        <div className="mt-12 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-primary">Unit Sangat Terbatas!</span> Jangan Lewatkan Kesempatan Ini
              </h3>
              <p className="text-lg text-muted-foreground">
                Harga properti di Sleman terus meningkat setiap tahunnya. 
                Amankan investasi hunian terbaik Anda sekarang juga!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default USPSection;
