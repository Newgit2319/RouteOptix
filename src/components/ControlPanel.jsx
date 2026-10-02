import GlassCard from "./common/GlassCard";
import PrimaryButton from "./common/PrimaryButton";

function ControlPanel({
                          algorithm,
                          setAlgorithm,
                          findRoute,
                          clearRoute,
                          generateRandomTraffic,
                          exportReport,
                      }) {
    return (
        <GlassCard>

            <h2
                style={{
                    marginTop: 0,
                    marginBottom: 18,
                    color: "#00E5FF",
                }}
            >
                🚀 Routing Console
            </h2>

            <div
                style={{
                    color: "#94A3B8",
                    fontSize: 14,
                    lineHeight: 1.6,
                    marginBottom: 20,
                }}
            >
                Select an algorithm below, then click a
                <strong> Start Node </strong>
                and a
                <strong> Destination Node </strong>
                directly on the logistics map.
            </div>

            <div
                style={{
                    marginBottom: 24,
                }}
            >
                <div
                    style={{
                        color: "#38BDF8",
                        fontWeight: 600,
                        marginBottom: 12,
                    }}
                >
                    Routing Algorithm
                </div>

                <label
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 12,
                        cursor: "pointer",
                    }}
                >
                    <input
                        type="radio"
                        checked={algorithm === "dijkstra"}
                        onChange={() =>
                            setAlgorithm("dijkstra")
                        }
                    />

                    <span
                        style={{
                            marginLeft: 10,
                        }}
                    >
                        Dijkstra
                    </span>
                </label>

                <label
                    style={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                    }}
                >
                    <input
                        type="radio"
                        checked={algorithm === "astar"}
                        onChange={() =>
                            setAlgorithm("astar")
                        }
                    />

                    <span
                        style={{
                            marginLeft: 10,
                        }}
                    >
                        A*
                    </span>
                </label>
            </div>

            <div
                style={{
                    background: "#101826",
                    border: "1px solid #233554",
                    borderRadius: 12,
                    padding: 14,
                    marginBottom: 22,
                }}
            >
                <div
                    style={{
                        color: "#22C55E",
                        fontWeight: 600,
                        marginBottom: 8,
                    }}
                >
                    Navigation Workflow
                </div>

                <div
                    style={{
                        color: "#CBD5E1",
                        fontSize: 13,
                        lineHeight: 1.8,
                    }}
                >
                    ① Click Start Node
                    <br />
                    ② Click Destination
                    <br />
                    ③ Calculate Route
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                }}
            >
                <PrimaryButton onClick={findRoute}>
                    🚚 Calculate Route
                </PrimaryButton>

                <PrimaryButton
                    onClick={generateRandomTraffic}
                >
                    🚦 Generate Traffic
                </PrimaryButton>

                <PrimaryButton
                    onClick={exportReport}
                >
                    📄 Export Report
                </PrimaryButton>

                <PrimaryButton
                    onClick={clearRoute}
                >
                    🧹 Reset Dashboard
                </PrimaryButton>
            </div>

        </GlassCard>
    );
}

export default ControlPanel;