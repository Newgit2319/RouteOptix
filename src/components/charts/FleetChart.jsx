import {

    PieChart,

    Pie,

    Cell,

    ResponsiveContainer,

} from "recharts";

import GlassCard from "../common/GlassCard";

const COLORS = [

    "#22C55E",

    "#F59E0B",

    "#EF4444",

];

function FleetChart({

                        fleet,

                    }) {

    const data = [

        {

            name: "Moving",

            value: fleet.filter(

                t => t.status === "moving"

            ).length,

        },

        {

            name: "Idle",

            value: fleet.filter(

                t => t.status === "idle"

            ).length,

        },

        {

            name: "Completed",

            value: fleet.filter(

                t => t.status === "completed"

            ).length,

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
                🚚 Fleet Status
            </h3>

            <ResponsiveContainer
                width="100%"
                height={220}
            >

                <PieChart>

                    <Pie

                        data={data}

                        dataKey="value"

                    >

                        {

                            data.map(

                                (entry, index) => (

                                    <Cell

                                        key={index}

                                        fill={
                                            COLORS[index]
                                        }

                                    />

                                )

                            )

                        }

                    </Pie>

                </PieChart>

            </ResponsiveContainer>

        </GlassCard>

    );

}

export default FleetChart;