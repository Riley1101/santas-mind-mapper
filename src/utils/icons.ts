import bell from "assets/icons/bell.png";
import candy_stick from "assets/icons/candy_stick.png";
import gift from "assets/icons/gift.png";
import ginger from "assets/icons/ginger.png";
import house_one from "assets/icons/house_one.png";
import lollipop from "assets/icons/lollipop.png";
import star from "assets/icons/star.png";
import tartlet from "assets/icons/tartlet.png";
import { NodeType } from "src/components/nodes/types";

export const mapNodeTypeToIcon: Record<NodeType, IconType> = {
  gift: "gift",
  house: "house_one",
};

export const iconMap: Record<IconType, string> = {
  house_one,
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
  "house_one",
];

export type IconType =
  | "bell"
  | "candy_stick"
  | "ginger"
  | "house_one"
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
