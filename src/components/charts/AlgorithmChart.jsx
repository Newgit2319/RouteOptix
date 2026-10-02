import {
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

import GlassCard from "../common/GlassCard";

function AlgorithmChart({

                            raceStats,

                        }) {

    if (!raceStats) {

        return (

            <GlassCard>

                <h3
                    style={{
                        marginTop: 0,
                        color: "#00E5FF",
                    }}
                >
                    ⚡ Algorithm Performance
                </h3>

                <p
                    style={{
                        color: "#94A3B8",
                    }}
                >
                    Run a route to generate statistics.
                </p>

            </GlassCard>

        );

    }

    const data = [

        {

            algorithm: "Dijkstra",

            visited:
            raceStats.dijkstraVisited,

            time:
                Number(
                    raceStats.dijkstraTime
                ),

        },

        {

            algorithm: "A*",

            visited:
            raceStats.astarVisited,

            time:
                Number(
                    raceStats.astarTime
                ),

        },

    ];

    return (

        <GlassCard>

            <h3
                style={{
                    marginTop: 0,
                    color: "#00E5FF",
                }}
            >
                ⚡ Algorithm Performance
            </h3>

            <ResponsiveContainer
                width="100%"
                height={260}
            >

                <BarChart
                    data={data}
                >

                    <CartesianGrid
                        stroke="#233554"
                    />

                    <XAxis
                        dataKey="algorithm"
                    />

                    <YAxis />

                    <Tooltip />

                    <Bar
                        dataKey="visited"
                        fill="#00E5FF"
                        radius={[5,5,0,0]}
                    />

                </BarChart>

            </ResponsiveContainer>

        </GlassCard>

    );

}

export default AlgorithmChart;