import GlassCard from "./common/GlassCard";
import TruckCard from "./TruckCard";
import { panelStyle, titleStyle }
    from "../styles/commonStyles";
function Stat({

                  title,

                  value,

                  color,

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

function FleetStatusPanel({

                              fleet = [],

                          }) {

    const active =

        fleet.filter(

            truck => truck.status === "moving"

        ).length;

    const completed =

        fleet.filter(

            truck => truck.status === "completed"

        ).length;

    const idle =

        fleet.filter(

            truck => truck.status === "idle"

        ).length;

    return (

        <GlassCard
            style={{
                marginBottom: "20px",
            }}
        >

            <h3 style={titleStyle}>
                🚚 Fleet Operations
            </h3>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                    marginBottom: "18px",
                }}
            >

                <Stat
                    title="Fleet"
                    value={fleet.length}
                    color="#38BDF8"
                />

                <Stat
                    title="Moving"
                    value={active}
                    color="#22C55E"
                />

                <Stat
                    title="Completed"
                    value={completed}
                    color="#F59E0B"
                />

                <Stat
                    title="Idle"
                    value={idle}
                    color="#A855F7"
                />

            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                }}
            >

                {fleet.length === 0 ? (

                    <div
                        style={{
                            color: "#94A3B8",
                            textAlign: "center",
                            padding: "16px",
                        }}
                    >
                        No active deliveries.
                    </div>

                ) : (

                    fleet.map((truck) => (

                        <TruckCard

                            key={truck.id}

                            truck={truck}

                        />

                    ))

                )}

            </div>

        </GlassCard>

    );

}

export default FleetStatusPanel;