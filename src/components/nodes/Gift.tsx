import cx from "classnames";
import { useState, useCallback } from "react";
import { IconType, getIcon } from "../../utils/icons";
import { Handle, Position } from "reactflow";

export interface GiftState {
  text: string;
  isEditing: boolean;
  color: string;
  icon: IconType;
  backgroundColor: string;
}

const initialGiftState: GiftState = {
  text: "Gift",
  isEditing: false,
  icon: "bell",

  color: "text-red-500",
  backgroundColor: "bg-secondary",
};

export function Gift() {
  const [isEditing, setIsEditing] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, _] = useState<GiftState>(initialGiftState);
  const [name, setName] = useState("Name!");

  const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    setName(evt.target.value);
  }, []);

  const toggleEditing = useCallback(() => {
    setIsEditing((prev) => !prev);
  }, []);

  const onKeyDown = useCallback(
    (evt: React.KeyboardEvent<HTMLInputElement>) => {
      if (evt.key === "Enter") {
        toggleEditing();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <div
      onDoubleClick={toggleEditing}
      className={cx(
        `p-2 aspect-square w-24 rounded-md ${state.backgroundColor} ${state.text} relative overflow-hidden font-art`,
        isEditing ? "outline outline-primary/20" : "",
      )}
    >
      <Handle type="target" position={Position.Left} />
      <div
        className={cx(
          " z-0 w-full h-full absolute grid place-items-center rounded-full top-[70%] left-[20%] -translate-y-1/2 overflow-hidden bg-light/20",
        )}
      >
        <img
          src={getIcon(state.icon)}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
      <div className="z-10 absolute">
        {isEditing ? (
          <input
            autoFocus
            onChange={onChange}
            className={`nodrag w-full text-lg pl-2 outline-none bg-light/20 ${state.color} `}
            value={name}
            onKeyDown={onKeyDown}
          />
        ) : (
          <p
            className={cx(
              `border-light outline-none  font-semibold text-2xl ${state.color}`,
            )}
          >
            {name}
          </p>
        )}
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
}
