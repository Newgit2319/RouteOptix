export function interpolatePath(path, nodes, progress) {

    if (!path || path.length < 2) {
        return null;
    }

    const segments = path.length - 1;

    const overall = progress * segments;

    const segmentIndex = Math.min(
        Math.floor(overall),
        segments - 1
    );

    const localProgress = overall - segmentIndex;

    const start = nodes.find(
        (n) => n.id === path[segmentIndex]
    );

    const end = nodes.find(
        (n) => n.id === path[segmentIndex + 1]
    );

    if (!start || !end) {
        return null;
    }

    return {

        x:
            start.x +
            (end.x - start.x) *
            localProgress,

        y:
            start.y +
            (end.y - start.y) *
            localProgress,

        angle:
            Math.atan2(
                end.y - start.y,
                end.x - start.x
            ) *
            180 /
            Math.PI,

    };

}