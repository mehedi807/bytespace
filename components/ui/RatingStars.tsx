import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating: number;
  maxStars?: number;
  className?: string;
  size?: number;
  showScore?: boolean;
}

export default function RatingStars({
  rating,
  maxStars = 5,
  className,
  size = 16,
  showScore = false,
}: RatingStarsProps) {
  return (
    <div className={cn("inline-flex items-center gap-1", className)}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: maxStars }).map((_, i) => {
          const filled = i < Math.floor(rating);
          const half = !filled && i < rating;
          return (
            <Star
              key={i}
              size={size}
              className={cn(
                "transition-colors",
                filled
                  ? "fill-[#D4FB20] text-[#D4FB20]"
                  : half
                  ? "fill-[#D4FB20]/50 text-[#D4FB20]"
                  : "fill-transparent text-[#CED0D3]"
              )}
            />
          );
        })}
      </div>
      {showScore && (
        <span className="text-sm font-semibold text-[#242528] ml-1">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
