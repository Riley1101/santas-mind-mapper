import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
} from "reactflow";
import { NodeType } from "src/components/nodes/types";
import { mapNodeTypeToIcon } from "src/utils/icons";
import { FillModeType } from "src/utils/tools";
import { create } from "zustand";

const initialNodes = [
  {
    id: "0",
    type: "house",
    data: {
      label: "Name!",
      icon: "ready_santa",
      color: "text-black",
      size: 3,
    },
    position: { x: 400, y: 400 },
  },
];

export type SantaState = {
  currentNode?: string | null;
  fillMode: FillModeType | null;
  size?: number;
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  addNode: (node: NodeType) => void;
  setCurrentNode: (nodeId: string | null) => void;
  updateNodeText: (nodeId: string, text: string) => void;
  updateNodeColor: (nodeId: string, color: string) => void;
  updateNodeIcon: (nodeId: string, icon: string) => void;
  updateFillMode: (nodeId: string, mode: FillModeType) => void;
  updateNodeSize: (nodeId: string, size: number) => void;
};

// this is our useStore hook that we can use in our components to get parts of
// the store and call actions
export const useSantaStore = create<SantaState>((set, get) => ({
  currentNode: null,
  nodes: initialNodes,
  size: 1,
  fillMode: null,
  edges: [],
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection: Connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },
  setCurrentNode: (nodeId: string | null) => {
    set({ currentNode: nodeId });
  },
  updateNodeColor: (nodeId: string, color: string) => {
    const nodes = get().nodes.map((node) => {
      if (node.id === nodeId) {
        node.data = {
          ...node.data,
          color,
        };
      }
      return node;
    });
    set({ nodes });
  },

  updateNodeText: (nodeId: string, text: string) => {
    const nodes = get().nodes.map((node) => {
      if (node.id === nodeId) {
        node.data = {
          ...node.data,
          label: text,
        };
      }
      return node;
    });
    set({ nodes });
  },
  updateNodeIcon: (nodeId: string, icon: string) => {
    const nodes = get().nodes.map((node) => {
      if (node.id === nodeId) {
        node.data = {
          ...node.data,
          icon,
        };
      }
      return node;
    });
    set({ nodes });
  },

  addNode: (type: NodeType) => {
    const lastNode = get().nodes[get().nodes.length - 1];
    const newNode = {
      id: `${parseInt(lastNode.id) + 1}`,
      type,
      data: {
        label: "Name!",
        icon: mapNodeTypeToIcon[type],
        size: 3,
      },
      position: { x: lastNode.position.x + 100, y: lastNode.position.y + 100 },
    };
    const nodes = get().nodes.concat(newNode);
    set({ nodes });
  },

  updateFillMode: (nodeId: string, mode: FillModeType) => {
    const nodes = get().nodes.map((node) => {
      if (node.id === nodeId) {
        node.data = {
          ...node.data,
          fillMode: mode,
        };
      }
      return node;
    });
    set({ nodes });
  },

  updateNodeSize: (nodeId: string, size: number) => {
    const nodes = get().nodes.map((node) => {
      if (node.id === nodeId) {
        node.data = {
          ...node.data,
          size,
        };
      }
      return node;
    });
    set({ nodes });
  },
}));
