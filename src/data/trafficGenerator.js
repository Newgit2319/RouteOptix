export function generateTraffic(graph) {
    const trafficEdges = [];

    for (const node in graph.nodes) {
        graph.nodes[node].forEach(edge => {

            if (Math.random() < 0.25) {
                edge.weight += 10;

                trafficEdges.push(
                    `${node}-${edge.node}`
                );
            }
        });
    }

    return trafficEdges;
}