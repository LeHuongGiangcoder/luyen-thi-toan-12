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
            Chinh Phục Kỳ Thi THPT Quốc Gia
          </h1>
          
          <p className="text-body-lg md:text-[18px] text-muted-foreground max-w-2xl mx-auto font-subheading">
            Nền tảng luyện thi trực tuyến hàng đầu với hệ thống bài tập phong phú, 
            thi thử chuyên đề và thi đấu tuần hấp dẫn
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
