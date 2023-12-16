import cx from "classnames";
import { useState, useCallback } from "react";
import { getIcon } from "../../utils/icons";
import { Handle, Position } from "reactflow";

export function Gift() {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("Name!");
  const bg = "bg-secondary";
  const icon = getIcon("gift");

  const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    setText(evt.target.value);
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
        `p-2 aspect-square w-24 rounded-md ${bg} relative overflow-hidden font-art`,
        isEditing ? "outline outline-primary/20" : "",
      )}
    >
      <Handle type="target" position={Position.Left} />
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Right} id="a" />
      <div
        className={cx(
          " z-0 w-full h-full absolute grid place-items-center rounded-full top-[70%] left-[20%] -translate-y-1/2 overflow-hidden bg-light/20",
        )}
      >
        <img src={icon} className="w-[60%] h-[60%]" />
      </div>
      <div className="z-10 absolute">
        {isEditing ? (
          <input
            autoFocus
            onChange={onChange}
            className="nodrag w-full text-lg pl-2 outline-none bg-light/20"
            value={text}
            onKeyDown={onKeyDown}
          />
        ) : (
          <p
            className={cx(
              "border-light outline-none text-dark font-semibold text-2xl",
            )}
          >
            {text}
          </p>
        )}
      </div>
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
}
