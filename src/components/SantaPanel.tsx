import { Panel } from "reactflow";
import { IconButton } from "./common/IconButton";
import cx from "classnames";
import { icons } from "../utils/icons";

const colors = [
  "bg-red-500",
  "bg-yellow-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-indigo-500",
];

export function SantaPanel() {
  return (
    <Panel position="top-left">
      <div className="w-full border p-2 bg-dark/80 backdrop-blur text-light rounded-md  ">
        <div>
          <span className="text-xxs">Color</span>
          <div className="flex gap-1">
            {colors.map((c) => (
              <button
                key={c}
                className={
                  cx(
                    "w-5 h-5 hover:border border-light rounded-md bg-opacity-80 ",
                  ) + c
                }
              ></button>
            ))}
            <div className="border-l border-dark/30"></div>
            <button
              className={
                cx(
                  "w-5 h-5 hover:border border-light rounded-md bg-opacity-80 ",
                ) + "bg-dark"
              }
            ></button>
          </div>
        </div>

        <div>
          <span className="text-xxs">Background</span>
          <div className="flex gap-1">
            {colors.map((c) => (
              <button
                key={c}
                className={
                  cx(
                    "w-5 h-5 hover:border border-light rounded-md bg-opacity-80 ",
                  ) + c
                }
              ></button>
            ))}
            <div className="border-l border-dark/30"></div>
            <button
              className={
                cx(
                  "w-5 h-5 hover:border border-light rounded-md bg-opacity-80 ",
                ) + "bg-dark"
              }
            ></button>
          </div>
        </div>

        <div>
          <span className="text-xxs">Icons</span>
          <div className="grid grid-cols-5 gap-1">
            {icons.map((c) => (
              <IconButton key={c} icon={c} />
            ))}
          </div>
        </div>
      </div>
    </Panel>
  );
}
