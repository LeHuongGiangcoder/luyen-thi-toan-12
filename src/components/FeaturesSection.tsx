import { FileText, BookOpen, Trophy } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

export const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: "Thi chuẩn thi thật",
      description: "Hệ thống bài kiểm tra đa dạng, bám sát theo cấu trúc các kỳ thi thật. Đánh giá năng lực và xác định điểm yếu cần cải thiện.",
      accentColor: "primary" as const,
    },
    {
      icon: BookOpen,
      title: "Luyện sâu chuyên đề",
      description: "Luyện tập chuyên sâu theo từng chuyên đề cụ thể. Các câu hỏi được hệ thống đề xuất theo mức độ phù hợp từ cơ bản đến nâng cao.",
      accentColor: "accent" as const,
    },
    {
      icon: Trophy,
      title: "Thi đấu tuần",
      description: "Tham gia cuộc thi hàng tuần với các học sinh trên toàn quốc. Đua top, nhận thưởng và khẳng định năng lực.",
      accentColor: "primary" as const,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-h2 md:text-[36px] font-bold text-primary mb-4 font-heading">
            Tính Năng Nổi Bật
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto font-subheading">
            Trải nghiệm học tập toàn diện với các tính năng được thiết kế đặc biệt cho học sinh lớp 12
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
