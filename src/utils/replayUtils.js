export function getReplayState(
    steps = [],
    replayIndex = 0
) {

    const visited = new Set();

    let currentNode = null;

    let activeEdge = null;

    for (let i = 0; i <= replayIndex; i++) {

        const step = steps[i];

        if (!step) continue;

        if (step.type === "visit") {

            visited.add(step.node);

            currentNode = step.node;

            activeEdge = null;
        }

        if (step.type === "relax") {

            activeEdge = {
                from: step.from,
                to: step.to,
            };

        }

    }

    return {

        visited,

        currentNode,

        activeEdge,

    };

}