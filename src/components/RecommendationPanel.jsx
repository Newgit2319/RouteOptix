import GlassCard from "./common/GlassCard";
import {panelStyle, titleStyle} from "../styles/commonStyles.js";
function Item({

                  title,

                  value,

                  color = "#E2E8F0",

              }) {

    return (

        <div style={panelStyle}>

            <span
                style={{
                    color: "#94A3B8",
                    fontSize: "14px",
                }}
            >
                {title}
            </span>

            <span
                style={{
                    color,
                    fontWeight: "600",
                }}
            >
                {value}
            </span>

        </div>

    );

}

function RecommendationPanel({

                                 algorithm,

                                 distance,

                                 trafficRoads = [],

                                 blockedRoads = [],

                                 raceStats,

                             }) {

    const traffic = trafficRoads.length;
    const blocked = blockedRoads.length;

    let risk = "LOW";
    let riskColor = "#22C55E";

    if (traffic > 6 || blocked > 2) {

        risk = "HIGH";
        riskColor = "#EF4444";

    }

    else if (traffic > 3) {

        risk = "MEDIUM";
        riskColor = "#F59E0B";

    }

    const fuelSaving =
        algorithm === "astar"
            ? "12%"
            : "8%";

    const eta =
        distance
            ? `${Math.max(Math.round(distance * 0.8), 1)} min`
            : "--";

    const reliability =
        risk === "LOW"
            ? "96%"
            : risk === "MEDIUM"
                ? "88%"
                : "72%";

    return (

        <GlassCard
            style={{
                marginBottom: "20px",
            }}
        >

            <h3 style={titleStyle}>
                💡 Route Intelligence
            </h3>

            <Item
                title="Recommended Algorithm"
                value={raceStats?.winner ?? algorithm}
                color="#38BDF8"
            />

            <Item
                title="Estimated Fuel Saving"
                value={fuelSaving}
                color="#22C55E"
            />

            <Item
                title="Congestion Risk"
                value={risk}
                color={riskColor}
            />

            <Item
                title="Estimated ETA"
                value={eta}
                color="#FACC15"
            />

            <Item
                title="Route Reliability"
                value={reliability}
                color="#A855F7"
            />

            <Item
                title="Recommended Departure"
                value="18:30 – 18:45"
                color="#00E5FF"
            />

        </GlassCard>

    );

}

export default RecommendationPanel;