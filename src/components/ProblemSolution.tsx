import { AlertCircle, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProblemSolution = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mencari Rumah Pertama Tidak Lagi Sulit
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kami memahami tantangan keluarga muda dalam mencari hunian impian
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Problem */}
          <Card className="border-2 border-destructive/20 animate-slide-up">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <AlertCircle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold">Tantangan Anda</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2" />
                  <span className="text-muted-foreground">Budget terbatas tapi ingin rumah berkualitas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2" />
                  <span className="text-muted-foreground">Khawatir dengan legalitas yang tidak jelas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2" />
                  <span className="text-muted-foreground">Sulit menemukan lokasi strategis dengan halaman luas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2" />
                  <span className="text-muted-foreground">Cicilan yang memberatkan keuangan keluarga</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Solution */}
          <Card className="border-2 border-primary shadow-lg animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Solusi Kami</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="font-medium">Harga terjangkau dengan cicilan mulai Rp 3 jutaan/bulan</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="font-medium">Legalitas SHM & IMB yang aman dan jelas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="font-medium">Tanah luas di lokasi asri Sleman untuk keluarga berkembang</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="font-medium">Desain Joglo modern yang artistik dan nyaman</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
