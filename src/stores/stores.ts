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
import demo1 from "src/samples/demo1";
import { FontSizeType } from "src/utils/tools";
import { NodeType } from "src/components/nodes/types";
import { create } from "zustand";
import { mapNodeTypeToIcon } from "src/utils/icons";
import { mapSizeToValue } from "src/utils/tools";

const initialNodes = demo1;

export type SantaState = {
  currentNode?: string | null;
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
  updateNodeIcon: (nodeId: string, icon: string | null) => void;
  updateNodeSize: (nodeId: string, size: FontSizeType) => void;
};

/**
 * Zustand store for the Santa app.
 * Keeps track of the current node, the nodes and edges in the graph,
 * and the callbacks for when the nodes and edges change.
 */
export const useSantaStore = create<SantaState>((set, get) => ({
  currentNode: null,
  nodes: initialNodes.nodes,
  size: 1,
  edges: initialNodes.edges,

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
  updateNodeIcon: (nodeId: string, icon: string | null) => {
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
      id: `${lastNode ? parseInt(lastNode.id) + 1 : 0}`,
      type,
      data: {
        label: "Name!",
        icon: mapNodeTypeToIcon[type],
        size: 3,
      },
      position: {
        x: lastNode?.position?.x + 400 || 0,
        y: lastNode?.position?.y || 0,
      },
    };
    const nodes = get().nodes.concat(newNode);
    set({ nodes });
  },

  updateNodeSize: (nodeId: string, size: FontSizeType) => {
    const nodes = get().nodes.map((node) => {
      if (node.id === nodeId) {
        node.data = {
          ...node.data,
          size: mapSizeToValue(size),
        };
      }
      return node;
    });
    set({ nodes });
  },
}));
