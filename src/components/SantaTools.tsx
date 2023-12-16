import { Panel } from "reactflow";

export function SantaTools() {
  return (
    <Panel position="top-center">
      <div className="w-full border p-2 bg-dark/80 backdrop-blur text-light rounded-md">
        <div className="flex gap-1">
          <button
            className={"w-10 h-10  border-light rounded-md bg-primary/90"}
          >
            +
          </button>
        </div>
      </div>
    </Panel>
  );
}
