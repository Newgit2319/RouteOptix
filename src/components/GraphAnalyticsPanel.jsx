import GlassCard from "./common/GlassCard";
import { panelStyle, titleStyle }
    from "../styles/commonStyles";

function Stat({

                  title,

                  value,

                  color = "#00E5FF",

              }) {

    return (

        <div style={panelStyle}>

            <div
                style={{
                    color: "#94A3B8",
                    fontSize: "13px",
                }}
            >
                {title}
            </div>

            <div
                style={{
                    color,
                    fontWeight: "bold",
                    fontSize: "24px",
                    marginTop: "8px",
                }}
            >
                {value}
            </div>

        </div>

    );

}

function GraphAnalyticsPanel({

                                 analytics,

                             }) {

    if (!analytics) return null;

    return (

        <GlassCard
            style={{
                marginBottom: "20px",
            }}
        >

            <h3 style={titleStyle}>
                📊 Graph Analytics
            </h3>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                }}
            >

                <Stat
                    title="Nodes"
                    value={analytics.totalNodes}
                />

                <Stat
                    title="Edges"
                    value={analytics.totalEdges}
                />

                <Stat
                    title="Avg Degree"
                    value={analytics.averageDegree}
                    color="#22C55E"
                />

                <Stat
                    title="Density"
                    value={analytics.density}
                    color="#F59E0B"
                />

                <Stat
                    title="Components"
                    value={analytics.connectedComponents}
                    color="#A855F7"
                />

                <Stat
                    title="Max Degree"
                    value={analytics.maxDegree}
                    color="#EF4444"
                />

            </div>

        </GlassCard>

    );

}

export default GraphAnalyticsPanel;