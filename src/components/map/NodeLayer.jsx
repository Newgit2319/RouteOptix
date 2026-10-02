function NodeLayer({
                       nodes = [],
                       analytics,
                       startNode,
                       endNode,
                       path = [],
                       animatedVisited = [],
                       highlightedNeighbours = [],
                       handleNodeClick,
                       viewMode,
                       replayState,
                       selectedNode,
                   }) {

    return (
        <>
            {nodes.map((node) => {

                const replayVisited =
                    replayState?.visited?.has(node.id) || false;

                const replayCurrent =
                    replayState?.currentNode === node.id;
                highlightedNeighbours.includes(node.id);
                const isStart =
                node.id === startNode;

                const isEnd =
                    node.id === endNode;

                const inPath =
                    path.includes(node.id);

                const animated =
                    animatedVisited.includes(node.id);

                let fill = "#172033";
                let stroke = "#38BDF8";

                if (animated || replayVisited) {
                    fill = "#2563EB";
                    stroke = "#60A5FA";
                }

                if (inPath) {
                    fill = "#00E5FF";
                    stroke = "#67E8F9";
                }

                if (isStart) {
                    fill = "#22C55E";
                    stroke = "#86EFAC";
                }

                if (isEnd) {
                    fill = "#EF4444";
                    stroke = "#FCA5A5";
                }

                if (selectedNode === node.id) {
                    fill = "#00E5FF";
                    stroke = "#FFFFFF";
                }

                if (replayCurrent) {
                    fill = "#00FFFF";
                    stroke = "#67E8F9";
                }

                return (

                    <g
                        key={node.id}
                        onClick={() => handleNodeClick(node.id)}
                        style={{
                            cursor: "pointer",
                            transition: "0.3s",
                        }}
                    >

                        {viewMode === "logistics" ? (

                            <>

                                <rect
                                    x={node.x - 42}
                                    y={node.y - 32}
                                    width="110"
                                    height="90"
                                    rx="12"
                                    fill={fill}
                                    stroke={stroke}
                                    strokeWidth={
                                        replayCurrent
                                            ? 5
                                            : selectedNode === node.id
                                                ? 4
                                                : 2
                                    }
                                    filter={
                                        replayCurrent ||
                                        selectedNode === node.id
                                            ? "url(#cyanGlow)"
                                            : ""
                                    }
                                />

                                {isEnd && (

                                    <circle
                                        cx={node.x}
                                        cy={node.y}
                                        r="30"
                                        fill="none"
                                        stroke="#EF4444"
                                        strokeWidth="2"
                                    >

                                        <animate
                                            attributeName="r"
                                            values="24;34;24"
                                            dur="1.5s"
                                            repeatCount="indefinite"
                                        />

                                        <animate
                                            attributeName="opacity"
                                            values="1;0;1"
                                            dur="1.5s"
                                            repeatCount="indefinite"
                                        />

                                    </circle>

                                )}

                                <text
                                    x={node.x}
                                    y={node.y - 8}
                                    textAnchor="middle"
                                    fontSize="30"
                                >
                                    {node.icon}
                                </text>

                                <text
                                    x={node.x}
                                    y={node.y + 18}
                                    textAnchor="middle"
                                    fontSize="12"
                                    fontWeight="bold"
                                    fill="white"
                                >
                                    {node.name}
                                </text>

                                <text
                                    x={node.x}
                                    y={node.y + 32}
                                    textAnchor="middle"
                                    fontSize="11"
                                    fill="#94A3B8"
                                >
                                    {node.district}
                                </text>

                                <text
                                    x={node.x}
                                    y={node.y + 46}
                                    textAnchor="middle"
                                    fontSize="8"
                                    fill="#22C55E"
                                >
                                    Logistics Hub
                                </text>

                            </>

                        ) : (

                            <>

                                <circle
                                    cx={node.x}
                                    cy={node.y}
                                    r="20"
                                    fill={fill}
                                    stroke={stroke}
                                    strokeWidth={
                                        replayCurrent
                                            ? 5
                                            : selectedNode === node.id
                                                ? 4
                                                : 2
                                    }
                                    filter={
                                        replayCurrent ||
                                        selectedNode === node.id
                                            ? "url(#cyanGlow)"
                                            : ""
                                    }
                                />

                                {isEnd && (

                                    <circle
                                        cx={node.x}
                                        cy={node.y}
                                        r="28"
                                        fill="none"
                                        stroke="#EF4444"
                                        strokeWidth="2"
                                    >

                                        <animate
                                            attributeName="r"
                                            values="22;32;22"
                                            dur="1.5s"
                                            repeatCount="indefinite"
                                        />

                                        <animate
                                            attributeName="opacity"
                                            values="1;0;1"
                                            dur="1.5s"
                                            repeatCount="indefinite"
                                        />

                                    </circle>

                                )}

                                <text
                                    x={node.x}
                                    y={node.y + 5}
                                    textAnchor="middle"
                                    fontSize="13"
                                    fontWeight="bold"
                                    fill="white"
                                >
                                    {node.id}
                                </text>

                                <text
                                    x={node.x}
                                    y={node.y + 34}
                                    textAnchor="middle"
                                    fontSize="10"
                                    fill="#FACC15"
                                >
                                    Degree {analytics.degreeMap[node.id]}
                                </text>

                                <text
                                    x={node.x}
                                    y={node.y + 48}
                                    textAnchor="middle"
                                    fontSize="9"
                                    fill="#94A3B8"
                                >
                                    {node.name}
                                </text>

                            </>

                        )}

                    </g>

                );

            })}
        </>
    );

}

export default NodeLayer;