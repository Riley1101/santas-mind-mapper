export const FontSize: FontSizeType[] = ["sm", "md", "lg", "xl"];
export type FontSizeType = "sm" | "md" | "lg" | "xl";

export function mapSizeToValue(size: FontSizeType): number {
  switch (size) {
    case "sm":
      return 1;
    case "md":
      return 2;
    case "lg":
      return 3;
    case "xl":
      return 4;
  }
}
