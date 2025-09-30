import heroImage from "@/assets/36-new.png";
import familyImage from "@/assets/family-joglo.jpg";
import aerialImage from "@/assets/sleman-aerial.jpg";

const Gallery = () => {
  const images = [
    {
      src: heroImage,
      alt: "Rumah Joglo Modern - Griya Alam Sokamartani",
      title: "Desain Joglo Modern"
    },
    {
      src: familyImage,
      alt: "Keluarga Bahagia di Griya Alam",
      title: "Hunian untuk Keluarga"
    },
    {
      src: aerialImage,
      alt: "Suasana Asri Sleman",
      title: "Lokasi Strategis & Asri"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Rasakan Hidup Tenang dan Asri di Griya Alam Sokamartani
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Lingkungan nyaman dengan pemandangan indah dan udara sejuk khas Sleman Yogyakarta
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 md:p-12 text-center shadow-lg">
            <h3 className="text-3xl font-bold mb-4">
              Lihat Langsung Lokasi & Dan bebas pilih Kavling
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Kunjungi Griya Alam Sokamartani dan rasakan sendiri kenyamanan lingkungan dan udara sejuk di Tempel Sleman
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/6285292249776?text=Halo,%20saya%20ingin%20survei%20lokasi%20Griya%20Alam%20Sokamartani"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Jadwalkan Survei Lokasi Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
