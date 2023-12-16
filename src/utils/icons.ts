import gift from "assets/icons/gift.png";
import bell from "assets/icons/bell.png";
import candy_stick from "assets/icons/candy_stick.png";
import ginger from "assets/icons/ginger.png";
import tartlet from "assets/icons/tartlet.png";
import lollipop from "assets/icons/lollipop.png";
import star from "assets/icons/star.png";

export const iconMap: Record<IconType, string> = {
  bell,
  candy_stick,
  ginger,
  tartlet,
  gift,
  lollipop,
  star,
  christmas_ball: star,
};

export const icons: IconType[] = [
  "bell",
  "candy_stick",
  "ginger",
  "tartlet",
  "gift",
  "lollipop",
  "star",
];

export type IconType =
  | "bell"
  | "candy_stick"
  | "ginger"
  | "tartlet"
  | "gift"
  | "lollipop"
  | "star"
  | "christmas_ball";

export function getSmallIcon(iconType: IconType): string {
  return iconMap[iconType];
}

export function getIcon(iconType: IconType): string {
  return iconMap[iconType];
}
