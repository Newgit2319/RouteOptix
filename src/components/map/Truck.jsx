function Truck({

                   x,

                   y,

                   rotation,

                   status,

               }) {

    return (

        <g
            transform={`translate(${x},${y}) rotate(${rotation})`}
        >

            <circle
                r="14"
                fill={
                    status === "moving"
                        ? "#22C55E"
                        : "#FACC15"
                }
                stroke="#FFFFFF"
                strokeWidth="2"
                filter="url(#cyanGlow)"
            />

            <text
                textAnchor="middle"
                y="5"
                fontSize="14"
            >
                🚚
            </text>

        </g>

    );

}

export default Truck;