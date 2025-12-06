import { Trophy, Award, Gift } from "lucide-react";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";

const Prizes = () => {
  const shirts = [
    {
      image: "/branded_shirt1.jpg",
      title: "Competition T-Shirt",
      description: "Exclusive branded t-shirt for prize winners"
    },
    {
      image: "/branded_shirt2.jpg",
      title: "Competition T-Shirt",
      description: "Exclusive branded t-shirt for prize winners"
    }
  ];

  const vouchers = [
    {
      image: "/Copy of voucher_page-0001.jpg",
      title: "Amazon Voucher",
      description: "Prize voucher for competition winners"
    },
    {
      image: "/Copy of voucher_page-0002.jpg",
      title: "Amazon Voucher",
      description: "Prize voucher for competition winners"
    },
    {
      image: "/Copy of voucher_page-0003.jpg",
      title: "Amazon Voucher",
      description: "Prize voucher for competition winners"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="flex justify-center mb-6">
              <Trophy className="w-16 h-16 text-secondary" />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-secondary via-secondary to-tertiary bg-clip-text text-transparent">
              Prizes
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
              Recognition and rewards for mathematical excellence
            </p>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* T-Shirt Images Grid */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">
                Competition T-Shirts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {shirts.map((shirt, index) => (
                  <Card key={index} className="overflow-hidden bg-card border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/10">
                    <div className="aspect-[3/4] overflow-hidden bg-muted/20 flex items-center justify-center">
                      <img
                        src={shirt.image}
                        alt={shirt.title}
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Gift className="w-5 h-5 text-secondary" />
                        <h3 className="text-xl font-bold text-foreground">{shirt.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{shirt.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Voucher Images Grid */}
            <div className="space-y-6 mt-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">
                Amazon Vouchers
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {vouchers.map((voucher, index) => (
                  <Card key={index} className="overflow-hidden bg-card border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/10">
                    <div className="aspect-[3/4] overflow-hidden bg-muted/20 flex items-center justify-center">
                      <img
                        src={voucher.image}
                        alt={voucher.title}
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-4 h-4 text-secondary" />
                        <h3 className="text-lg font-bold text-foreground">{voucher.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{voucher.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Additional Prize Information */}
            <Card className="p-8 bg-primary/10 border-secondary/30">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-tertiary">Award Categories</h3>
                  <ul className="space-y-2 text-tertiary/90">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">🥇</span>
                      <span><strong>The Grand Integrator:</strong> Championship Winner - Certificate + Amazon Voucher Prize + T-shirt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">🥈</span>
                      <span><strong>Senior Integrator:</strong> Championship Runner-Up - Certificate + Amazon Voucher Prize + T-shirt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">🥉</span>
                      <span><strong>Semi Integrators:</strong> Semifinalists (2 places) - Certificate + Amazon Voucher Prize + T-shirt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">📜</span>
                      <span><strong>All Participants:</strong> Certificate of Participation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Prizes;
