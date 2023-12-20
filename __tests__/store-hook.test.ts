import { renderHook } from "@testing-library/react-hooks";
import { describe, expect, it } from "vitest";
import { useSantaStore } from "../src/stores/stores";
import demo from "../src/samples/demo1";

describe("Store tests with Demo1 from samples/demo1", () => {
  it("all node should be in the store", () => {
    const { result } = renderHook(() =>
      useSantaStore((store) => ({
        nodes: store.nodes,
      })),
    );
    const { nodes } = result.current;
    expect(nodes).toEqual(demo.nodes);
  });
  it("all edges should present", () => {
    const { result } = renderHook(() =>
      useSantaStore((store) => ({
        edges: store.edges,
      })),
    );
    const { edges } = result.current;
    expect(edges).toEqual(demo.edges);
  });

  it("should update and get the current node ", () => {
    const { result } = renderHook(() =>
      useSantaStore((store) => ({
        currentNode: store.currentNode,
        setCurrentNode: store.setCurrentNode,
      })),
    );

    const newNodeId = "newNodeId";
    result.current.setCurrentNode(newNodeId);

    expect(result.current.currentNode).toBe(newNodeId);
  });

  it("should add a new node to the store", () => {
    const { result } = renderHook(() =>
      useSantaStore((store) => ({
        nodes: store.nodes,
        addNode: store.addNode,
      })),
    );

    const initialNodesCount = result.current.nodes.length;
    result.current.addNode("house");

    expect(result.current.nodes.length).toBe(initialNodesCount + 1);
  });

  it("should update specific text of nodes", () => {
    const { result } = renderHook(() =>
      useSantaStore((store) => ({
        nodes: store.nodes,
        updateNodeText: store.updateNodeText,
      })),
    );

    const nodeIdToUpdate = demo.nodes[0].id;
    const newText = "UpdatedText";
    result.current.updateNodeText(nodeIdToUpdate, newText);

    const updatedNode = result.current.nodes.find(
      (node) => node.id === nodeIdToUpdate,
    );
    expect(updatedNode?.data.label).toBe(newText);
  });

  it("should update color of a specific node", () => {
    const { result } = renderHook(() =>
      useSantaStore((store) => ({
        nodes: store.nodes,
        updateNodeColor: store.updateNodeColor,
      })),
    );

    const nodeIdToUpdate = demo.nodes[0].id;
    const newColor = "#FF0000";
    result.current.updateNodeColor(nodeIdToUpdate, newColor);

    const updatedNode = result.current.nodes.find(
      (node) => node.id === nodeIdToUpdate,
    );
    expect(updatedNode?.data.color).toBe(newColor);
  });

  it("should update font size of  specific node with mapSizeToValue", () => {
    const { result } = renderHook(() =>
      useSantaStore((store) => ({
        nodes: store.nodes,
        updateNodeSize: store.updateNodeSize,
      })),
    );

    const nodeIdToUpdate = demo.nodes[0].id;
    const newSize = "lg"; // Replace with the appropriate font size value
    result.current.updateNodeSize(nodeIdToUpdate, newSize);

    const updatedNode = result.current.nodes.find(
      (node) => node.id === nodeIdToUpdate,
    );
    expect(updatedNode?.data.size).toBe(3);
  });
});
