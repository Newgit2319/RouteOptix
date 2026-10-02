import AnimatedFlow from "./AnimatedFlow";
function RoadLayer({
                       nodes,
                       roads,
                       trafficRoads = [],
                       blockedRoads = [],
                       toggleRoadBlock,
                       highlightedNeighbours = [],
                       isPathEdge,
                       replayState,
                       viewMode,
                   }) {

    const nodeMap = Object.fromEntries(
        nodes.map(n => [n.id, n])
    );

    const getNode = id => nodeMap[id];

    return (
        <>
            {roads.map(([from, to, weight], index) => {

                const start = getNode(from);
                const end = getNode(to);

                if (!start || !end) return null;

                const roadId = `${from}-${to}`;

                const blocked =
                    blockedRoads.includes(roadId) ||
                    blockedRoads.includes(`${to}-${from}`);

                const traffic =
                    trafficRoads.includes(roadId) ||
                    trafficRoads.includes(`${to}-${from}`);

                const highlightEdge =
                    highlightedNeighbours.includes(from) &&
                    highlightedNeighbours.includes(to);

                const activeEdge =
                    replayState?.activeEdge &&
                    (
                        (
                            replayState.activeEdge.from === from &&
                            replayState.activeEdge.to === to
                        ) ||
                        (
                            replayState.activeEdge.from === to &&
                            replayState.activeEdge.to === from
                        )
                    );

                let color = "#475569";
                let width = 4;
                let glow = "";

                if (traffic) {
                    color = "#F59E0B";
                    glow = "url(#orangeGlow)";
                }

                if (blocked) {
                    color = "#EF4444";
                    width = 8;
                    glow = "url(#redGlow)";
                }

                if (isPathEdge(from, to)) {
                    color = "#00E5FF";
                    width = 7;
                    glow = "url(#cyanGlow)";
                }

                if (highlightEdge) {
                    color = "#38BDF8";
                    width = 5;
                    glow = "url(#cyanGlow)";
                }

                // ⭐ Replay animation (highest priority)
                if (activeEdge) {

                    color = "#67E8F9";
                    width = 7;
                    glow = "url(#cyanGlow)";

                }

                return (

                    <g key={index}>

                        <line
                            x1={start.x}
                            y1={start.y}
                            x2={end.x}
                            y2={end.y}
                            stroke={color}
                            strokeWidth={width}
                            strokeDasharray={blocked ? "10 6" : "0"}
                            filter={glow}
                            style={{
                                cursor: "pointer",
                                transition: "all .35s ease",
                            }}
                            onClick={() => toggleRoadBlock(roadId)}
                        />
                        {isPathEdge(from, to) && !blocked && (

                            <AnimatedFlow

                                x1={start.x}
                                y1={start.y}
                                x2={end.x}
                                y2={end.y}

                            />

                        )}
                        {traffic && !blocked && (

                            <AnimatedFlow

                                x1={start.x}
                                y1={start.y}
                                x2={end.x}
                                y2={end.y}
                                color="#F59E0B"

                            />

                        )}

                        <circle
                            cx={(start.x + end.x) / 2}
                            cy={(start.y + end.y) / 2}
                            r={viewMode === "graph" ? 14 : 10}
                            fill="#0B1220"
                            stroke={
                                activeEdge
                                    ? "#00FFFF"
                                    : viewMode === "graph"
                                        ? "#00E5FF"
                                        : "#22C55E"
                            }
                            strokeWidth="2"
                        />

                        <text
                            x={(start.x + end.x) / 2}
                            y={(start.y + end.y) / 2 + 4}
                            fill={
                                activeEdge
                                    ? "#00FFFF"
                                    : viewMode === "graph"
                                        ? "#00E5FF"
                                        : "#22C55E"
                            }
                            fontSize={
                                viewMode === "graph"
                                    ? "13"
                                    : "11"
                            }
                            fontWeight="bold"
                            textAnchor="middle"
                        >
                            {weight}
                        </text>

                    </g>

                );

            })}
        </>
    );
}

export default RoadLayer;