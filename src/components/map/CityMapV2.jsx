import MapCanvas from "./MapCanvas";
import DistrictLayer from "./DistrictLayer";
import RoadLayer from "./RoadLayer";
import NodeLayer from "./NodeLayer";
import TruckLayer from "./TruckLayer";
import MapLegend from "./MapLegend";

function CityMapV2({
                       nodes,
                       roads,
                       analytics,
                       startNode,
                       endNode,
                       path,
                        fleet,
                       selectedNode,
                       animatedVisited,
                       trafficRoads,
                       blockedRoads,
                       highlightedNeighbours,
                       toggleRoadBlock,
                       replayState,
                       handleNodeClick,
                       isPathEdge,
                       viewMode,
                   }) {
    return (
        <MapCanvas>

            {/* Background Districts */}
            <DistrictLayer />

            {/* Roads */}
            <RoadLayer
                nodes={nodes}
                roads={roads}
                highlightedNeighbours={highlightedNeighbours}
                viewMode={viewMode}
                trafficRoads={trafficRoads}
                replayState={replayState}
                blockedRoads={blockedRoads}
                toggleRoadBlock={toggleRoadBlock}
                isPathEdge={isPathEdge}
            />
            <TruckLayer
                fleet={fleet}
                nodes={nodes}
            />

            {/* Logistics Nodes */}
            <NodeLayer
                nodes={nodes}
                startNode={startNode}
                analytics={analytics}
                endNode={endNode}
                path={path}
                replayState={replayState}
                highlightedNeighbours={highlightedNeighbours}
                selectedNode={selectedNode}
                animatedVisited={animatedVisited}
                handleNodeClick={handleNodeClick}
                viewMode={viewMode}
            />



            {/* Legend */}
            <MapLegend />

        </MapCanvas>
    );
}

export default CityMapV2;