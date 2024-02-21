import { Club, Diamond, Heart, Spade } from "lucide-react";

interface CardArtProps {
  suit: "club" | "heart" | "spade" | "diamond";
  value: "A" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K";
}

function CardArt({ suit, value }: CardArtProps) {
  switch (value) {
    case "A":
      return (
        <div className="flex h-full w-full items-center justify-center">
          <CardArtIcon suit={suit} className="h-14 w-14" />
        </div>
      );

    case "2":
      return (
        <div className="flex h-full w-full flex-col items-center justify-between py-4">
          <div className="flex items-center justify-center">
            <CardArtIcon suit={suit} className="h-6 w-6" />
          </div>
          <div className="flex rotate-180 items-center justify-center">
            <CardArtIcon suit={suit} className="h-6 w-6" />
          </div>
        </div>
      );

    case "3":
      return (
        <div className="flex h-full w-full items-center justify-center">
          <div className="grid w-full grid-rows-3 gap-2 px-2 py-4">
            <div className="flex items-center justify-center">
              <CardArtIcon suit={suit} className="h-6 w-6" />
            </div>
            <div className="flex items-center justify-center">
              <CardArtIcon suit={suit} className="h-6 w-6" />
            </div>
            <div className="flex rotate-180 items-center justify-center">
              <CardArtIcon suit={suit} className="h-6 w-6" />
            </div>
          </div>
        </div>
      );

    case "4":
      return (
        <div className="flex h-full w-full items-center justify-center">
          <div className="grid w-full grid-rows-2 gap-2 px-2 py-4">
            <div className="flex items-center justify-center gap-2">
              <CardArtIcon suit={suit} className="h-6 w-6" />
              <CardArtIcon suit={suit} className="h-6 w-6" />
            </div>
            <div className="flex rotate-180 items-center justify-center gap-2">
              <CardArtIcon suit={suit} className="h-6 w-6" />
              <CardArtIcon suit={suit} className="h-6 w-6" />
            </div>
          </div>
        </div>
      );

    case "5":
      return (
        <div className="flex h-full w-full items-center justify-center">
          <div className="grid w-full grid-rows-3 gap-2 px-2 py-4">
            <div className="flex items-center justify-between">
              <CardArtIcon suit={suit} className="h-6 w-6" />
              <CardArtIcon suit={suit} className="h-6 w-6" />
            </div>
            <div className="flex items-center justify-center">
              <CardArtIcon suit={suit} className="h-6 w-6" />
            </div>
            <div className="flex rotate-180 items-center justify-between">
              <CardArtIcon suit={suit} className="h-6 w-6" />
              <CardArtIcon suit={suit} className="h-6 w-6" />
            </div>
          </div>
        </div>
      );

    case "6":
      return (
        <div className="flex h-full w-full items-center justify-center">
          <div className="grid w-full grid-rows-3 gap-2 px-2 py-4">
            <div className="flex items-center justify-between">
              <CardArtIcon suit={suit} className="h-6 w-6" />
              <CardArtIcon suit={suit} className="h-6 w-6" />
            </div>
            <div className="flex items-center justify-between">
              <CardArtIcon suit={suit} className="h-6 w-6" />
              <CardArtIcon suit={suit} className="h-6 w-6" />
            </div>
            <div className="flex rotate-180 items-center justify-between">
              <CardArtIcon suit={suit} className="h-6 w-6" />
              <CardArtIcon suit={suit} className="h-6 w-6" />
            </div>
          </div>
        </div>
      );

    case "7":
      return (
        <div className="flex h-full w-full items-center justify-center">
          <div className="grid w-full grid-rows-4 gap-2 px-2 py-4">
            <div className="flex items-center justify-between">
              <CardArtIcon suit={suit} className="h-6 w-6" />
              <CardArtIcon suit={suit} className="h-6 w-6" />
            </div>
            <div className="flex items-center justify-center">
              <CardArtIcon suit={suit} className="h-6 w-6" />
            </div>
            <div className="flex items-center justify-between">
              <CardArtIcon suit={suit} className="h-6 w-6" />
              <CardArtIcon suit={suit} className="h-6 w-6" />
            </div>
            <div className="flex rotate-180 items-center justify-between">
              <CardArtIcon suit={suit} className="h-6 w-6" />
              <CardArtIcon suit={suit} className="h-6 w-6" />
            </div>
          </div>
        </div>
      );

    case "8":
      return (
        <div className="flex h-full w-full items-center justify-center">
          <div className="grid w-full grid-rows-4 gap-2 px-2 py-4">
            <div className="flex items-center justify-between">
              <CardArtIcon suit={suit} className="h-6 w-6" />
              <CardArtIcon suit={suit} className="h-6 w-6" />
            </div>
            <div className="flex items-center justify-between">
              <CardArtIcon suit={suit} className="h-6 w-6" />
              <CardArtIcon suit={suit} className="h-6 w-6" />
            </div>
            <div className="flex rotate-180 items-center justify-between">
              <CardArtIcon suit={suit} className="h-6 w-6" />
              <CardArtIcon suit={suit} className="h-6 w-6" />
            </div>
            <div className="flex rotate-180 items-center justify-between">
              <CardArtIcon suit={suit} className="h-6 w-6" />
              <CardArtIcon suit={suit} className="h-6 w-6" />
            </div>
          </div>
        </div>
      );

    case "9":
      return (
        <div className="flex h-full w-full items-center justify-center">
          <div className="grid w-full grid-rows-5 gap-2 px-2 py-4">
            <div className="flex items-center justify-between">
              <CardArtIcon suit={suit} className="h-6 w-6" />
              <CardArtIcon suit={suit} className="h-6 w-6" />
            </div>
            <div className="flex items-center justify-between">
              <CardArtIcon suit={suit} className="h-6 w-6" />
              <CardArtIcon suit={suit} className="h-6 w-6" />
            </div>
            <div className="flex items-center justify-center">
              <CardArtIcon suit={suit} className="h-6 w-6" />
            </div>
            <div className="flex rotate-180 items-center justify-between">
              <CardArtIcon suit={suit} className="h-6 w-6" />
              <CardArtIcon suit={suit} className="h-6 w-6" />
            </div>
            <div className="flex rotate-180 items-center justify-between">
              <CardArtIcon suit={suit} className="h-6 w-6" />
              <CardArtIcon suit={suit} className="h-6 w-6" />
            </div>
          </div>
        </div>
      );

    case "10":
      return (
        <div className="flex h-full w-full items-center justify-center">
          <div className="grid w-full grid-rows-5 gap-1 px-2 py-2">
            <div className="flex items-center justify-between">
              <CardArtIcon suit={suit} className="h-6 w-6" />
              <CardArtIcon suit={suit} className="h-6 w-6" />
            </div>
            <div className="flex items-center justify-center">
              <CardArtIcon suit={suit} className="h-6 w-6" />
            </div>
            <div className="flex items-center justify-between">
              <CardArtIcon suit={suit} className="h-6 w-6" />
              <CardArtIcon suit={suit} className="h-6 w-6" />
            </div>
            <div className="flex rotate-180 items-center justify-between">
              <CardArtIcon suit={suit} className="h-6 w-6" />
              <CardArtIcon suit={suit} className="h-6 w-6" />
            </div>
            <div className="flex rotate-180 items-center justify-center">
              <CardArtIcon suit={suit} className="h-6 w-6" />
            </div>
            <div className="flex rotate-180 items-center justify-between">
              <CardArtIcon suit={suit} className="h-6 w-6" />
              <CardArtIcon suit={suit} className="h-6 w-6" />
            </div>
          </div>
        </div>
      );

    case "J":
      return <div>J</div>;

    case "Q":
      return <div>Q</div>;

    case "K":
      return <div>K</div>;

    default:
      return <div>A</div>;
  }
}

interface CardArtIconProps extends React.HTMLProps<HTMLDivElement> {
  suit: "club" | "heart" | "spade" | "diamond";
}

function CardArtIcon({ suit, ...rest }: CardArtIconProps) {
  switch (suit) {
    case "club":
      return <Club className={rest.className} />;

    case "heart":
      return <Heart className={rest.className} />;

    case "spade":
      return <Spade className={rest.className} />;

    case "diamond":
      return <Diamond className={rest.className} />;

    default:
      return <Heart className={rest.className} />;
  }
}

export default CardArt;
