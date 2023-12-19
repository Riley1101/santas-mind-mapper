import cx from "classnames";
import { IconType, getIcon } from "../../utils/icons";

type Props = {
  icon: IconType;
  isActive?: boolean;
  onClick?: () => void;
};

export function ToolButton({
  icon,
  isActive = false,
  onClick = () => {},
}: Props) {
  const iconPath = getIcon(icon);
  return (
    <button
      onClick={onClick}
      className={cx(
        "w-12 h-12 border hover:border border-dark/30 rounded-md bg-opacity-80 grid place-items-center group hover:bg-primary/30",
        isActive ? "bg-primary/30" : "bg-transparent",
      )}
    >
      <img
        src={iconPath}
        alt={icon}
        width={40}
        height={40}
        className={cx(
          "w-[40px] h-[40px] object-contain group-hover:grayscale-0",
          isActive ? "" : "grayscale",
        )}
      />
    </button>
  );
}
