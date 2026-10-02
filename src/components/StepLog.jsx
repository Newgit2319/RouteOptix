function StepLog({ steps = [] }) {

    const formatStep = (step) => {

        if (typeof step === "string") {
            return step;
        }

        if (!step) {
            return "";
        }

        switch (step.type) {

            case "visit":
                return `📍 Visited ${step.node}`;

            case "relax":
                return `➡ Relaxed ${step.from} → ${step.to} (Cost: ${step.weight}, Distance: ${step.newDistance})`;

            default:
                return JSON.stringify(step);
        }
    };

    return (

        <div
            style={{
                border: "1px solid white",
                padding: "15px",
                marginTop: "20px",
                width: "280px",
                maxHeight: "300px",
                overflowY: "auto",
                borderRadius: "10px",
                background: "#0B1220",
            }}
        >

            <h3
                style={{
                    marginTop: 0,
                    color: "#00E5FF",
                }}
            >
                Algorithm Steps
            </h3>

            {steps.length === 0 ? (

                <p>No route calculated</p>

            ) : (

                <ol>

                    {steps.map((step, index) => (

                        <li
                            key={index}
                            style={{
                                marginBottom: "10px",
                                color: "#E2E8F0",
                            }}
                        >
                            {formatStep(step)}
                        </li>

                    ))}

                </ol>

            )}

        </div>

    );
}

export default StepLog;