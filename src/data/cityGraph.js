import Graph from "../algorithms/Graph";
import { logisticsNodes } from "./logisticsNetwork";
import { logisticsEdges } from "./logisticsEdges";

const graph = new Graph();

logisticsNodes.forEach(node => {
    graph.addNode(node.id);
});

logisticsEdges.forEach(([from, to, weight]) => {
    graph.addEdge(from, to, weight);
});

export default graph;