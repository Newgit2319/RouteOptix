import useRouting from "./hooks/useRouting";
import graph from "./data/cityGraph";
import { useEffect, useState } from "react";
import CityMapV2 from "./components/map/CityMapV2";
import ViewModeToggle from "./components/ViewModeToggle";
import { calculateGraphAnalytics } from "./utils/graphAnalytics";
import { generateTraffic }
  from "./data/trafficGenerator";
import RecommendationPanel
  from "./components/RecommendationPanel";
import { exportRouteReport }
  from "./utils/exportReport";
import FleetStatusPanel from "./components/FleetStatusPanel";
import KPICards from "./components/KPICards";
import useTruckAnimation from "./hooks/useTruckAnimation";
import ReplayControls from "./components/ReplayControls";
import GraphAnalyticsPanel from "./components/GraphAnalyticsPanel";
import ControlsPanel
  from "./components/ControlPanel";
import RightSidebar from "./components/RightSidebar";
import { logisticsNodes } from "./data/logisticsNetwork";
import SystemStatusPanel
  from "./components/SystemStatusPanel";
import Header from "./components/Header";
import DashboardLayout from "./components/DashboardLayout";
import { logisticsEdges } from "./data/logisticsEdges";
import GraphInspector from "./components/GraphInspector";
import { getReplayState }
  from "./utils/replayUtils";
import { createDelivery }
  from "./utils/createDelivery";
import useRouteHistory
  from "./hooks/useRouteHistory";
import DashboardAnalytics
  from "./components/DashboardAnalytics";
import RouteHistoryPanel
  from "./components/RouteHistoryPanel";



function App() {
  const nodes = logisticsNodes;


  const roads = logisticsEdges;
  const [deliveries, setDeliveries] =
      useState([]);

  const fleet =
      useTruckAnimation(deliveries);
  const [selectedNode, setSelectedNode] =
      useState(null);
  const [replayIndex, setReplayIndex] =
      useState(0);

  const [isPlaying, setIsPlaying] =
      useState(false);




  const analytics = calculateGraphAnalytics(nodes, roads);

  const highlightedNeighbours =
      selectedNode
          ? roads
              .filter(
                  ([from, to]) =>
                      from === selectedNode ||
                      to === selectedNode
              )
              .flatMap(([from, to]) => [from, to])
          : [];
  const [startNode, setStartNode] = useState(null);
  const [endNode, setEndNode] = useState(null);

  const [algorithm, setAlgorithm] =
      useState("dijkstra");
  const [trafficRoads, setTrafficRoads] =
      useState([]);
  const [blockedRoads, setBlockedRoads] = useState([]);

  const [viewMode, setViewMode] =
      useState("logistics");
  const {
    path,
    distance,
    visitedCount,
    steps,
    animatedVisited,
    comparison,
    raceStats,
    findRoute,
    clearRoute,
  } = useRouting(graph, nodes);
  const {

    history,

    addRoute,

  } = useRouteHistory();
  const replayState =
      getReplayState(
          steps || [],
          replayIndex
      );

  const toggleRoadBlock = (roadId) => {
    setBlockedRoads((prev) =>
        prev.includes(roadId)
            ? prev.filter((r) => r !== roadId)
            : [...prev, roadId]
    );
  };
  const handleNodeClick = (nodeId) => {

    setSelectedNode(nodeId);

    if (!startNode) {

      setStartNode(nodeId);

    }

    else if (!endNode && nodeId !== startNode) {

      setEndNode(nodeId);

    }

    else {

      clearRoute();

      setStartNode(nodeId);

      setEndNode(null);

    }

  };
  const generateRandomTraffic = () => {
    const randomTraffic = generateTraffic(graph);

    setTrafficRoads(randomTraffic);
  };




  const isPathEdge = (from, to) => {
    for (let i = 0; i < path.length - 1; i++) {
      if (
          (path[i] === from && path[i + 1] === to) ||
          (path[i] === to && path[i + 1] === from)
      ) {
        return true;
      }
    }
    return false;
  };
  const playReplay = () => {

    if (steps.length === 0) return;

    setIsPlaying(true);

  };

  const pauseReplay = () =>
      setIsPlaying(false);

  const resetReplay = () => {

    setIsPlaying(false);

    setReplayIndex(0);

  };
  useEffect(() => {

    if (!isPlaying) return;

    const lastStep = Math.max(steps.length - 1, 0);

    if (replayIndex >= lastStep) {

      const timer = setTimeout(() => {
        setIsPlaying(false);
      }, 0);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {

      setReplayIndex((prev) => prev + 1);

    }, 650);

    return () => clearTimeout(timer);

  }, [isPlaying, replayIndex, steps.length]);

  const resetDashboard = () => {

    clearRoute();

    setStartNode(null);

    setEndNode(null);

    setSelectedNode(null);

    setTrafficRoads([]);

    setBlockedRoads([]);

    setDeliveries([]);

    setReplayIndex(0);

    setIsPlaying(false);

  };

  return (
      <div
          style={{
            background: "#050816",
            minHeight: "100vh",
            color: "white",
          }}
      >

        <DashboardLayout
            header={<Header />}

            kpis={
              <KPICards
                  fleet={fleet}
                  trafficRoads={trafficRoads}
                  blockedRoads={blockedRoads}
              />
            }

            analytics={
              <DashboardAnalytics
                  fleet={fleet}
                  raceStats={raceStats}
              />
            }

            controls={
              <ControlsPanel
                  algorithm={algorithm}
                  setAlgorithm={setAlgorithm}

                  findRoute={() => {

                    setReplayIndex(0);
                    setIsPlaying(false);

                    const result = findRoute({
                      algorithm,
                      startNode,
                      endNode,
                      blockedRoads,
                    });

                    if (result) {

                      addRoute({
                        start: startNode,
                        end: endNode,
                        algorithm,
                        distance: result.distance,
                        path: result.path,
                      });

                      const delivery = createDelivery(result.path);

                      if (delivery) {
                        setDeliveries(prev => [...prev, delivery]);
                      }
                    }
                  }}

                  exportReport={() =>
                      exportRouteReport({
                        algorithm,
                        startNode,
                        endNode,
                        distance,
                        visitedCount,
                        path,
                        raceStats,
                      })
                  }

                  clearRoute={resetDashboard}
                  generateRandomTraffic={generateRandomTraffic}
              />
            }

            map={
              <div className="map-wrapper">

                <ViewModeToggle
                    viewMode={viewMode}
                    setViewMode={setViewMode}
                />

                <div className="map-area">

                  <CityMapV2
                      nodes={nodes}
                      roads={roads}
                      analytics={analytics}
                      startNode={startNode}
                      endNode={endNode}
                      path={path}
                      fleet={fleet}
                      replayState={replayState}
                      selectedNode={selectedNode}
                      highlightedNeighbours={highlightedNeighbours}
                      animatedVisited={animatedVisited}
                      trafficRoads={trafficRoads}
                      blockedRoads={blockedRoads}
                      toggleRoadBlock={toggleRoadBlock}
                      handleNodeClick={handleNodeClick}
                      isPathEdge={isPathEdge}
                      viewMode={viewMode}
                  />

                </div>

              </div>
            }

            sidebar={
              <>
                <GraphAnalyticsPanel analytics={analytics} />

                <FleetStatusPanel fleet={fleet} />

                <SystemStatusPanel />

                <RecommendationPanel
                    algorithm={algorithm}
                    distance={distance}
                    trafficRoads={trafficRoads}
                    blockedRoads={blockedRoads}
                    raceStats={raceStats}
                />

                <RouteHistoryPanel history={history} />

                <GraphInspector
                    selectedNode={selectedNode}
                    analytics={analytics}
                    roads={roads}
                    nodes={nodes}
                />

                <ReplayControls
                    replayIndex={replayIndex}
                    maxSteps={steps.length}
                    isPlaying={isPlaying}
                    onPlay={playReplay}
                    onPause={pauseReplay}
                    onReset={resetReplay}
                />

                <RightSidebar
                    startNode={startNode}
                    endNode={endNode}
                    path={path}
                    distance={distance}
                    trafficRoads={trafficRoads}
                    blockedRoads={blockedRoads}
                    algorithm={algorithm}
                    visitedCount={visitedCount}
                    comparison={comparison}
                    raceStats={raceStats}
                    steps={steps}
                />
              </>
            }
        />
      </div>
  );
}
export default App;