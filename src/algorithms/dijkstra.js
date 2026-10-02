import PriorityQueue from "./PriorityQueue";

function dijkstra(
    graph,
    start,
    end,
    blockedRoads = []
) {
    const distances = {};
    const previous = {};
    const pq = new PriorityQueue();

    const visitedNodes = [];
    const steps = [];

    for (let node in graph.nodes) {
        distances[node] = Infinity;
        previous[node] = null;
    }

    distances[start] = 0;

    pq.enqueue(start, 0);

    while (!pq.isEmpty()) {
        const current = pq.dequeue().node;

        visitedNodes.push(current);
        steps.push({
            type: "visit",
            node: current,
        });

        if (current === end) {
            break;
        }

        for (const neighbor of graph.getNeighbors(current)) {

            const road1 =
                `${current}-${neighbor.node}`;

            const road2 =
                `${neighbor.node}-${current}`;

            if (
                blockedRoads.includes(road1) ||
                blockedRoads.includes(road2)
            ) {
                continue;
            }

            const distance =
                distances[current] +
                neighbor.weight;

            if (
                distance <
                distances[neighbor.node]
            ) {
                distances[neighbor.node] =
                    distance;

                previous[neighbor.node] = current;

                steps.push({
                    type: "relax",
                    from: current,
                    to: neighbor.node,
                    weight: neighbor.weight,
                    newDistance: distance,
                });

                pq.enqueue(
                    neighbor.node,
                    distance
                );
            }
        }
    }

    const path = [];

    let currentNode = end;

    while (currentNode) {
        path.unshift(currentNode);
        currentNode =
            previous[currentNode];
    }

    return {
        distance: distances[end],
        path,
        visitedNodes,
        steps,
    };
}

export default dijkstra;