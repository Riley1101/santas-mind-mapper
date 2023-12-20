import cx from "classnames";
import noIcon from "assets/icons/no_icon.svg";
import { IconType, getIcon } from "utils/icons";

type Props = {
  icon: IconType | null;
  isActive?: boolean;
  onClick?: () => void;
};

/**
 * IconButton Component for SantaPanel
 *
 * An interactive button component with an optional icon, supporting customization
 * for active state, click event, and visual feedback.
 */
export function IconButton({ icon, isActive = false, ...props }: Props) {
  let iconPath = noIcon;
  if (icon !== null) {
    iconPath = getIcon(icon);
  }

  return (
    <button
      {...props}
      className={cx(
        "w-8 h-8 border hover:border border-dark/30 rounded-md bg-opacity-80 grid place-items-center group hover:bg-primary/30",
        isActive ? "bg-primary/30" : "bg-transparent",
      )}
    >
      <img
        src={iconPath}
        alt={icon || "no-icon"}
        width={20}
        height={20}
        className={cx(
          "w-[20px] h-[20px] object-contain group-hover:grayscale-0",
          isActive ? "" : "grayscale",
        )}
      />
    </button>
  );
}
