import { useState } from "react";

export default function useSelection() {

    const [startNode, setStartNode] = useState(null);
    const [endNode, setEndNode] = useState(null);

    const handleNodeClick = (
        nodeId,
        clearRoute
    ) => {

        if (!startNode) {

            setStartNode(nodeId);
            return;
        }

        if (!endNode && nodeId !== startNode) {

            setEndNode(nodeId);
            return;
        }

        setStartNode(nodeId);
        setEndNode(null);

        if (clearRoute)
            clearRoute();
    };

    return {

        startNode,
        endNode,

        setStartNode,
        setEndNode,

        handleNodeClick,

    };

}