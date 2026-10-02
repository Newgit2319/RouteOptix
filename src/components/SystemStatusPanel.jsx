import { useEffect, useState } from "react";
import GlassCard from "./common/GlassCard";
import {panelStyle, titleStyle} from "../styles/commonStyles.js";
function StatusRow({

                       title,

                       status,

                       color = "#22C55E",

                   }) {

    return (

        <div style={panelStyle}>

            <span
                style={{
                    color: "#CBD5E1",
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
                ● {status}
            </span>

        </div>

    );

}

function Metric({

                    title,

                    value,

                }) {

    return (

        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "10px",
            }}
        >

            <span
                style={{
                    color: "#94A3B8",
                }}
            >
                {title}
            </span>

            <strong
                style={{
                    color: "#E2E8F0",
                }}
            >
                {value}
            </strong>

        </div>

    );

}

function SystemStatusPanel() {

    const [cpu, setCpu] = useState(22);

    const [memory, setMemory] = useState(54);

    const [network, setNetwork] = useState("Stable");

    useEffect(() => {

        const timer = setInterval(() => {

            setCpu(
                20 + Math.floor(Math.random() * 15)
            );

            setMemory(
                50 + Math.floor(Math.random() * 25)
            );

            const states = [
                "Stable",
                "Optimal",
                "Healthy",
            ];

            setNetwork(

                states[
                    Math.floor(
                        Math.random() * states.length
                    )
                    ]

            );

        }, 2000);

        return () => clearInterval(timer);

    }, []);

    return (

        <GlassCard
            style={{
                marginBottom: "20px",
            }}
        >

            <h3 style={titleStyle}>
                🖥 System Monitor
            </h3>

            <StatusRow
                title="Route Engine"
                status="Online"
            />

            <StatusRow
                title="Fleet Engine"
                status="Active"
            />

            <StatusRow
                title="Graph Engine"
                status="Healthy"
            />

            <StatusRow
                title="Traffic Engine"
                status="Running"
            />

            <hr
                style={{
                    border: "none",
                    borderTop: "1px solid #233554",
                    margin: "18px 0",
                }}
            />

            <Metric
                title="CPU Usage"
                value={`${cpu}%`}
            />

            <Metric
                title="Memory"
                value={`${memory}%`}
            />

            <Metric
                title="Network"
                value={network}
            />

            <Metric
                title="Refresh Rate"
                value="60 FPS"
            />

        </GlassCard>

    );

}

export default SystemStatusPanel;