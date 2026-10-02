import { useState } from "react";

export default function useTraffic() {

    const [trafficRoads, setTrafficRoads] =
        useState([]);

    const [blockedRoads, setBlockedRoads] =
        useState([]);

    const toggleRoadBlock = (roadId) => {

        setBlockedRoads(prev =>

            prev.includes(roadId)

                ? prev.filter(
                    r => r !== roadId
                )

                : [...prev, roadId]

        );

    };

    return {

        trafficRoads,
        blockedRoads,

        setTrafficRoads,

        toggleRoadBlock,

    };

}