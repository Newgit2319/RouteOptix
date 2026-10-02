import { useEffect, useState } from "react";
import GlassCard from "./common/GlassCard";

function Header({ algorithm = "dijkstra" }) {

    const [time, setTime] = useState("");

    useEffect(() => {

        const updateClock = () => {

            const now = new Date();

            setTime(
                now.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                })
            );

        };

        updateClock();

        const timer = setInterval(updateClock, 1000);

        return () => clearInterval(timer);

    }, []);

    return (

        <GlassCard>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "20px",
                }}
            >

                <div>

                    <h1
                        style={{
                            margin: 0,
                            color: "#00E5FF",
                            fontSize: "34px",
                            fontWeight: "700",
                        }}
                    >
                        RouteOptix
                    </h1>

                    <div
                        style={{
                            color: "#94A3B8",
                            marginTop: "6px",
                            fontSize: "15px",
                        }}
                    >
                        Enterprise Logistics Intelligence Platform
                    </div>

                </div>

                <div
                    style={{
                        display: "flex",
                        gap: "18px",
                        flexWrap: "wrap",
                    }}
                >

                    <InfoCard
                        title="STATUS"
                        value="🟢 LIVE"
                    />

                    <InfoCard
                        title="ALGORITHM"
                        value={
                            algorithm === "astar"
                                ? "A*"
                                : "Dijkstra"
                        }
                    />

                    <InfoCard
                        title="TIME"
                        value={time}
                    />

                </div>

            </div>

        </GlassCard>

    );

}

function InfoCard({ title, value }) {

    return (

        <div
            style={{
                background: "#111827",
                border: "1px solid #233554",
                borderRadius: "12px",
                padding: "12px 18px",
                minWidth: "120px",
                textAlign: "center",
            }}
        >

            <div
                style={{
                    color: "#94A3B8",
                    fontSize: "12px",
                    marginBottom: "6px",
                }}
            >
                {title}
            </div>

            <div
                style={{
                    color: "#FFFFFF",
                    fontWeight: "bold",
                    fontSize: "15px",
                }}
            >
                {value}
            </div>

        </div>

    );

}

export default Header;