function AnimatedFlow({

                          x1,
                          y1,
                          x2,
                          y2,
                          color = "#00E5FF",

                      }) {

    return (

        <circle
            r="4"
            fill={color}
        >

            <animateMotion
                dur="2s"
                repeatCount="indefinite"
                path={`M ${x1} ${y1} L ${x2} ${y2}`}
            />

        </circle>

    );

}

export default AnimatedFlow;