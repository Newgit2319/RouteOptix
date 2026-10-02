import PriorityQueue from "./PriorityQueue";

function heuristic(a, b) {
    return (
        Math.abs(a.x - b.x) +
        Math.abs(a.y - b.y)
    );
}

function astar(
    graph,
    nodes,
    start,
    end,
    blockedRoads = []
) {
    const pq = new PriorityQueue();

    const visitedNodes = [];
    const steps = [];

    const distances = {};
    const previous = {};

    for (let node in graph.nodes) {
        distances[node] = Infinity;
        previous[node] = null;
    }

    distances[start] = 0;

    pq.enqueue(start, 0);

    while (!pq.isEmpty()) {
        const current =
            pq.dequeue().node;

        if (
            visitedNodes.includes(current)
        ) {
            continue;
        }

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

            const tentativeDistance =
                distances[current] +
                neighbor.weight;

            if (
                tentativeDistance <
                distances[neighbor.node]
            ) {
                distances[neighbor.node] =
                    tentativeDistance;

                steps.push({
                    type: "relax",
                    from: current,
                    to: neighbor.node,
                    weight: neighbor.weight,
                    newDistance: tentativeDistance,
                });

                const currentNode =
                    nodes.find(
                        (n) =>
                            n.id === neighbor.node
                    );

                const endNode =
                    nodes.find(
                        (n) => n.id === end
                    );

                const priority =
                    tentativeDistance +
                    heuristic(
                        currentNode,
                        endNode
                    );

                pq.enqueue(
                    neighbor.node,
                    priority
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

export default astar;