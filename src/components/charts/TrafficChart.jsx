import {
    LineChart,
    Line,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

import GlassCard from "../common/GlassCard";

const data = [

    { time: "09", traffic: 2 },

    { time: "10", traffic: 4 },

    { time: "11", traffic: 6 },

    { time: "12", traffic: 5 },

    { time: "13", traffic: 8 },

    { time: "14", traffic: 4 },

];

function TrafficChart() {

    return (

        <GlassCard>

            <h3
                style={{
                    marginTop: 0,
                    color: "#00E5FF",
                }}
            >
                🚦 Traffic Trend
            </h3>

            <ResponsiveContainer
                width="100%"
                height={220}
            >

                <LineChart data={data}>

                    <XAxis dataKey="time" />

                    <YAxis />

                    <Tooltip />

                    <Line

                        type="monotone"

                        dataKey="traffic"

                        stroke="#00E5FF"

                        strokeWidth={3}

                    />

                </LineChart>

            </ResponsiveContainer>

        </GlassCard>

    );

}

export default TrafficChart;