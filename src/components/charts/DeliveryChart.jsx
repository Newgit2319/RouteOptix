import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

import GlassCard from "../common/GlassCard";

const data = [

    { hour:"09", deliveries:2 },

    { hour:"10", deliveries:5 },

    { hour:"11", deliveries:7 },

    { hour:"12", deliveries:8 },

    { hour:"13", deliveries:11 },

    { hour:"14", deliveries:10 },

];

function DeliveryChart() {

    return (

        <GlassCard>

            <h3
                style={{
                    marginTop:0,
                    color:"#00E5FF",
                }}
            >
                📦 Delivery Timeline
            </h3>

            <ResponsiveContainer
                width="100%"
                height={260}
            >

                <AreaChart
                    data={data}
                >

                    <CartesianGrid
                        stroke="#233554"
                    />

                    <XAxis
                        dataKey="hour"
                    />

                    <YAxis />

                    <Tooltip />

                    <Area

                        dataKey="deliveries"

                        stroke="#22C55E"

                        fill="#22C55E55"

                    />

                </AreaChart>

            </ResponsiveContainer>

        </GlassCard>

    );

}

export default DeliveryChart;