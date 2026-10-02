function MapLegend() {

    return (

        <g transform="translate(820,1530)">

            <rect
                width="240"
                height="130"
                rx="14"

                fill="#0B1220"

                stroke="#233554"
            />

            <text
                x="20"
                y="30"

                fill="#00E5FF"

                fontWeight="bold"

                fontSize="16"
            >
                LOGISTICS STATUS
            </text>

            <text
                x="20"
                y="58"

                fill="#22C55E"
            >
                🟢 Origin
            </text>

            <text
                x="20"
                y="80"

                fill="#EF4444"
            >
                🔴 Destination
            </text>

            <text
                x="20"
                y="102"

                fill="#00E5FF"
            >
                🔵 Optimal Route
            </text>

            <text
                x="20"
                y="124"

                fill="#F59E0B"
            >
                🟠 Heavy Traffic
            </text>

        </g>

    );
}

export default MapLegend;