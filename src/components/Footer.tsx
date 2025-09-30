import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20Griya%20Alam%20Sokamartani", "_blank");
  };

  return (
    <footer className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="border-b border-background/10">
        <div className="container px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Wujudkan Hunian Impian Anda Sekarang
            </h2>
            <p className="text-lg text-background/80 mb-8">
              Tim kami siap membantu Anda menemukan rumah yang sempurna untuk keluarga
            </p>
            <Button 
              size="lg"
              onClick={handleWhatsApp}
              className="bg-primary hover:bg-primary-hover text-primary-foreground text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Hubungi Sekarang via WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Griya Alam Sokamartani</h3>
            <p className="text-background/80 leading-relaxed mb-4">
              Hunian Joglo modern dengan konsep etnik Jawa artistik di lokasi strategis Tempel, Sleman, Yogyakarta.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-background/10 rounded-lg hover:bg-primary transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-lg hover:bg-primary transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-lg hover:bg-primary transition-colors duration-300">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Kontak Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Lokasi Proyek</p>
                  <p className="text-background/80 text-sm">
                    Sokamartani, Tempel, Sleman<br />
                    Yogyakarta 55552
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Telepon / WhatsApp</p>
                  <a href="tel:+6281234567890" className="text-background/80 text-sm hover:text-primary transition-colors">
                    +62 812-3456-7890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a href="mailto:info@griyaalam.com" className="text-background/80 text-sm hover:text-primary transition-colors">
                    info@griyaalam.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Jam Operasional</h4>
            <div className="space-y-3 text-background/80">
              <div>
                <p className="font-semibold text-background">Senin - Jumat</p>
                <p className="text-sm">08:00 - 17:00 WIB</p>
              </div>
              <div>
                <p className="font-semibold text-background">Sabtu - Minggu</p>
                <p className="text-sm">09:00 - 16:00 WIB</p>
              </div>
              <div className="pt-4">
                <p className="text-sm italic">
                  *Survei lokasi dapat diatur sesuai jadwal Anda
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© 2025 Griya Alam Sokamartani. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Syarat & Ketentuan</a>
              <a href="#" className="hover:text-primary transition-colors">Kebijakan Privasi</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
