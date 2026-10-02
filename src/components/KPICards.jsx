import "../styles/kpi.css";

function Card({ title, value, color }) {
    return (
        <div
            style={{
                background: "#0F172A",
                border: "1px solid #1E3A5F",
                borderRadius: "14px",
                padding: "18px",
            }}
        >
            <div
                style={{
                    color: "#94A3B8",
                    fontSize: "14px",
                    marginBottom: "8px",
                }}
            >
                {title}
            </div>

            <div
                style={{
                    color,
                    fontSize: "30px",
                    fontWeight: "700",
                }}
            >
                {value}
            </div>
        </div>
    );
}

function KPICards({
                      fleet = [],
                      trafficRoads = [],
                      blockedRoads = [],
                  }) {
    return (
        <div className="kpi-grid">
            <Card
                title="Fleet"
                value={fleet.length}
                color="#38BDF8"
            />

            <Card
                title="Traffic"
                value={trafficRoads.length}
                color="#F59E0B"
            />

            <Card
                title="Closed"
                value={blockedRoads.length}
                color="#EF4444"
            />

            <Card
                title="Deliveries"
                value={fleet.length}
                color="#22C55E"
            />
        </div>
    );
}

export default KPICards;