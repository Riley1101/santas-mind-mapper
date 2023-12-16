import cx from "classnames";
import { IconType, getIcon } from "../../utils/icons";

type Props = {
  icon: IconType;
  isActive?: boolean;
};

export function IconButton({ icon, isActive = false }: Props) {
  const iconPath = getIcon(icon);
  return (
    <div>
      <button
        className={cx(
          "w-8 h-8 border hover:border border-dark/30 rounded-md bg-opacity-80 grid place-items-center group hover:bg-primary/30",
          isActive ? "bg-primary/30" : "bg-transparent",
        )}
      >
        <img
          src={iconPath}
          alt={icon}
          width={20}
          height={20}
          className={cx(
            "w-[20px] h-[20px] object-contain group-hover:grayscale-0",
            isActive ? "" : "grayscale",
          )}
        />
      </button>
    </div>
  );
}
