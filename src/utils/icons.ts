import bell from "assets/icons/bell.png";
import candy_stick from "assets/icons/candy_stick.png";
import gift from "assets/icons/gift.png";
import ginger from "assets/icons/ginger.png";
import house_one from "assets/icons/house_one.png";
import house_two from "assets/icons/house_two.png";
import lollipop from "assets/icons/lollipop.png";
import star from "assets/icons/star.png";
import tartlet from "assets/icons/tartlet.png";
import ready_santa from "assets/icons/ready_santa.png";
import ready_date from "assets/icons/ready_date.png";
import christmas_tree_one from "assets/icons/christmas_tree_one.png";
import christmas_tree_two from "assets/icons/christmas_tree_two.png";

import { NodeType } from "src/components/nodes/types";

export const mapNodeTypeToIcon: Record<NodeType, IconType> = {
  gift: "gift",
  house: "house_one",
};

export const iconMap: Record<IconType, string> = {
  house_one,
  house_two,
  ready_date,
  ready_santa,
  bell,
  candy_stick,
  ginger,
  tartlet,
  gift,
  lollipop,
  star,
  christmas_tree_one,
  christmas_tree_two,
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
  "ready_date",
  "ready_santa",
  "christmas_tree_one",
  "christmas_tree_two",
  "house_two",
];

export type IconType =
  | "bell"
  | "candy_stick"
  | "ginger"
  | "house_one"
  | "house_two"
  | "tartlet"
  | "gift"
  | "lollipop"
  | "star"
  | "christmas_tree_one"
  | "ready_date"
  | "ready_santa"
  | "christmas_tree_two";

export function getSmallIcon(iconType: IconType): string {
  return iconMap[iconType];
}

export function getIcon(iconType: IconType): string {
  return iconMap[iconType];
}
