import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl w-full glass glass-hover rounded-3xl p-8 md:p-12 lg:p-16">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-accent mb-4">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-h1 md:text-[48px] lg:text-[56px] font-bold text-primary">
            Chinh phục mọi kỳ thi với 
            <span className="inline-block overflow-hidden align-bottom h-[1.2em]">
              <span className="inline-block animate-slide-vertical">
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">thi chuẩn đề,</span>
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">luyện chuyên sâu,</span>
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">thi đấu tuần.</span>
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">thi chuẩn đề,</span> {/* Duplicate for seamless loop */}
              </span>
            </span>
          </h1>
          
          <p className="text-body-lg md:text-[18px] text-muted-foreground max-w-2xl mx-auto font-subheading">
            Nền tảng luyện thi trực tuyến hàng đầu Việt Nam cho học sinh lớp 12 
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-white hover:opacity-90 transition-opacity text-base font-semibold px-8 py-6 rounded-xl"
            >
              Bắt Đầu Ngay
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="glass border-primary/20 text-primary hover:bg-primary/10 text-base font-semibold px-8 py-6 rounded-xl"
            >
              Tìm Hiểu Thêm
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

<style>{`
  @keyframes slide-vertical {
    0% { transform: translateY(0%); }
    25% { transform: translateY(0%); }
    33.33% { transform: translateY(-25%); }
    58.33% { transform: translateY(-25%); }
    66.66% { transform: translateY(-50%); }
    91.66% { transform: translateY(-50%); }
    100% { transform: translateY(-75%); }
  }
  .animate-slide-vertical {
    animation: slide-vertical 9s infinite;
    display: inline-block;
  }
`}</style>
