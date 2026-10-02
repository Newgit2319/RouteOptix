// graphAnalytics.js

export function calculateGraphAnalytics(nodes, roads) {
    const totalNodes = nodes.length;
    const totalEdges = roads.length;

    // -----------------------------
    // Degree of every node
    // -----------------------------
    const degreeMap = {};

    nodes.forEach((node) => {
        degreeMap[node.id] = 0;
    });

    roads.forEach(([from, to]) => {
        degreeMap[from]++;
        degreeMap[to]++;
    });

    // -----------------------------
    // Average Degree
    // -----------------------------
    const averageDegree =
        (
            Object.values(degreeMap)
                .reduce((sum, d) => sum + d, 0)
            / totalNodes
        ).toFixed(2);

    // -----------------------------
    // Graph Density
    // Density = 2E / N(N-1)
    // -----------------------------
    const density = (
        (2 * totalEdges) /
        (totalNodes * (totalNodes - 1))
    ).toFixed(3);

    // -----------------------------
    // Connected Components
    // -----------------------------
    const adjacency = {};

    nodes.forEach((node) => {
        adjacency[node.id] = [];
    });

    roads.forEach(([from, to]) => {
        adjacency[from].push(to);
        adjacency[to].push(from);
    });

    const visited = new Set();

    let connectedComponents = 0;

    function dfs(node) {
        visited.add(node);

        adjacency[node].forEach((neighbor) => {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        });
    }

    nodes.forEach((node) => {
        if (!visited.has(node.id)) {
            connectedComponents++;
            dfs(node.id);
        }
    });

    return {
        totalNodes,
        totalEdges,
        averageDegree,
        density,
        connectedComponents,
        degreeMap,
    };
}