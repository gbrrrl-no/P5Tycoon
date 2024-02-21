import { cn } from "../../utils/utils";
import { Club, Heart, Spade, Diamond } from "lucide-react";

import CardArt from "../CardArt";

interface CardProps {
  suit: "club" | "heart" | "spade" | "diamond";
  originalValue: "A" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K";
}

function Card({ suit, originalValue }: CardProps) {
  const suitArtStyle = {
    club: "border-slate-950 dark:border-slate-50 text-slate-950 dark:text-slate-50",
    heart: "border-rose-500 text-rose-500",
    spade: "border-slate-950 dark:border-slate-50 text-slate-950 dark:text-slate-50",
    diamond: "border-rose-500 text-rose-500",
  };

  return (
    <div
      className={cn(
        "grid h-52 w-36 grid-cols-5 rounded-md border p-1 font-display text-2xl dark:bg-stone-900",
        suitArtStyle[suit],
      )}
    >
      <div className="flex flex-col items-center justify-start gap-1">
        {originalValue}
        {suit === "club" && <Club className="h-6 w-6 fill-slate-950 dark:fill-slate-50" />}
        {suit === "heart" && <Heart className="h-6 w-6 fill-rose-500" />}
        {suit === "spade" && <Spade className="h-6 w-6 fill-slate-950 dark:fill-slate-50" />}
        {suit === "diamond" && <Diamond className="h-6 w-6 fill-rose-500" />}
      </div>
      <div className="col-span-3">
        <CardArt suit={suit} value={originalValue} />
      </div>
      <div className="col-start-5 flex rotate-180 flex-col items-center justify-start gap-1">
        {originalValue}
        {suit === "club" && <Club className="h-6 w-6 fill-slate-950 dark:fill-slate-50" />}
        {suit === "heart" && <Heart className="h-6 w-6 fill-rose-500" />}
        {suit === "spade" && <Spade className="h-6 w-6 fill-slate-950 dark:fill-slate-50" />}
        {suit === "diamond" && <Diamond className="h-6 w-6 fill-rose-500" />}
      </div>
    </div>
  );
}

export default Card;
