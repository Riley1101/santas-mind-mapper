import type { IconType } from "src/utils/icons";
import { FontSizeType } from "src/utils/tools";

export type NodeType = "santa";

export interface NodeState {
  label?: string;
  color: string;
  size: number;
  icon: IconType;
  fillMode: FontSizeType;
}
