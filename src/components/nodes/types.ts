import type { IconType } from "src/utils/icons";

export type NodeType = "gift" | "house";

export interface NodeState {
  label?: string;
  text: string;
  isEditing: boolean;
  color: string;
  icon: IconType;
  type?: NodeType;
}
