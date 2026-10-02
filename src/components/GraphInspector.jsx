import GlassCard from "./common/GlassCard";
import {panelStyle, titleStyle} from "../styles/commonStyles.js";
function Row({

                 label,

                 value,

                 color = "#E2E8F0",

             }) {

    return (

        <div style={panelStyle}>

            <span
                style={{
                    color: "#94A3B8",
                }}
            >
                {label}
            </span>

            <span
                style={{
                    color,
                    fontWeight: "600",
                }}
            >
                {value}
            </span>

        </div>

    );

}

function GraphInspector({

                            selectedNode,

                            analytics,

                            roads,

                            nodes,

                        }) {

    if (!selectedNode) {

        return (

            <GlassCard
                style={{
                    marginBottom: "20px",
                }}
            >

                <h3 style={titleStyle}>
                    🔍 Graph Inspector
                </h3>

                <div
                    style={{
                        color: "#94A3B8",
                        marginTop: "18px",
                    }}
                >
                    Click a node on the map to inspect it.
                </div>

            </GlassCard>

        );

    }

    const node =

        nodes.find(

            n => n.id === selectedNode

        );

    const neighbours =

        roads.filter(

            ([from, to]) =>

                from === selectedNode ||

                to === selectedNode

        );

    return (

        <GlassCard
            style={{
                marginBottom: "20px",
            }}
        >

            <h3 style={titleStyle}>
                🔍 Graph Inspector
            </h3>

            <Row

                label="Node ID"

                value={selectedNode}

                color="#38BDF8"

            />

            <Row

                label="Location"

                value={node?.name ?? "-"}

                color="#22C55E"

            />

            <Row

                label="District"

                value={node?.district ?? "-"}

            />

            <Row

                label="Degree"

                value={
                    analytics.degreeMap[selectedNode]
                }

                color="#FACC15"

            />

            <Row

                label="Connections"

                value={neighbours.length}

                color="#A855F7"

            />

            <Row

                label="Coordinates"

                value={`${node?.x}, ${node?.y}`}

            />

        </GlassCard>

    );

}

export default GraphInspector;