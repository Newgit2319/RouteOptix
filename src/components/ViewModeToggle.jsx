function ViewModeToggle({ viewMode, setViewMode }) {
    return (
        <div
            style={{
                display: "flex",
                gap: "12px",
                marginBottom: "20px",
                justifyContent: "center",
            }}
        >
            <button
                onClick={() => setViewMode("logistics")}
                style={{
                    padding: "10px 18px",
                    borderRadius: "10px",
                    border: "none",
                    cursor: "pointer",
                    background:
                        viewMode === "logistics"
                            ? "#00E5FF"
                            : "#233554",
                    color: "white",
                    fontWeight: "bold",
                }}
            >
                🚚 Logistics View
            </button>

            <button
                onClick={() => setViewMode("graph")}
                style={{
                    padding: "10px 18px",
                    borderRadius: "10px",
                    border: "none",
                    cursor: "pointer",
                    background:
                        viewMode === "graph"
                            ? "#A855F7"
                            : "#233554",
                    color: "white",
                    fontWeight: "bold",
                }}
            >
                📈 Graph View
            </button>
        </div>
    );
}

export default ViewModeToggle;