import GlassCard from "./common/GlassCard";
import {panelStyle, titleStyle} from "../styles/commonStyles.js";
function HistoryItem({

                         route,

                     }) {

    return (

        <div
            style={{
                padding: "14px 0",
                borderBottom: "1px solid rgba(255,255,255,.06)",
            }}
        >

            <div style={panelStyle}>

                <span
                    style={{
                        color: "#22C55E",
                        fontWeight: "600",
                        fontSize: "13px",
                    }}
                >
                    🕒 {route.time}
                </span>

                <span
                    style={{
                        color: "#38BDF8",
                        fontSize: "12px",
                    }}
                >
                    {route.algorithm}
                </span>

            </div>

            <div
                style={{
                    color: "#E2E8F0",
                    fontWeight: "600",
                    marginBottom: "6px",
                }}
            >
                {route.start} → {route.end}
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#94A3B8",
                    fontSize: "13px",
                }}
            >

                <span>
                    Distance
                </span>

                <span
                    style={{
                        color: "#FACC15",
                    }}
                >
                    {route.distance}
                </span>

            </div>

        </div>

    );

}

function RouteHistoryPanel({

                               history = [],

                           }) {

    return (

        <GlassCard
            style={{
                marginBottom: "20px",
            }}
        >

            <h3 style={titleStyle}>
                🕒 Recent Routes
            </h3>

            {

                history.length === 0 ? (

                    <div
                        style={{
                            color: "#94A3B8",
                            textAlign: "center",
                            padding: "20px 0",
                        }}
                    >
                        No routes calculated yet.
                    </div>

                ) : (

                    history.map((route) => (

                        <HistoryItem

                            key={route.id}

                            route={route}

                        />

                    ))

                )

            }

        </GlassCard>

    );

}

export default RouteHistoryPanel;