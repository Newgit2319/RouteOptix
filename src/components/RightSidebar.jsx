import GraphAnalyticsPanel from "./GraphAnalyticsPanel";

import FleetStatusPanel from "./FleetStatusPanel";

import SystemStatusPanel from "./SystemStatusPanel";

import RecommendationPanel from "./RecommendationPanel";

import RouteHistoryPanel from "./RouteHistoryPanel";

import ReplayControls from "./ReplayControls";

function RightSidebar({

                          analytics,

                          fleet,

                          algorithm,

                          distance,

                          trafficRoads,

                          blockedRoads,

                          raceStats,

                          history,

                          replayIndex,

                          maxSteps,

                          isPlaying,

                          onPlay,

                          onPause,

                          onReset,

                      }) {

    return (

        <div

            style={{

                display:"flex",

                flexDirection:"column",

                gap:"18px",

            }}

        >

            <GraphAnalyticsPanel

                analytics={analytics}

            />

            <FleetStatusPanel

                fleet={fleet}

            />

            <SystemStatusPanel/>

            <RecommendationPanel

                algorithm={algorithm}

                distance={distance}

                trafficRoads={trafficRoads}

                blockedRoads={blockedRoads}

                raceStats={raceStats}

            />

            <RouteHistoryPanel

                history={history}

            />

            <ReplayControls

                replayIndex={replayIndex}

                maxSteps={maxSteps}

                isPlaying={isPlaying}

                onPlay={onPlay}

                onPause={onPause}

                onReset={onReset}

            />

        </div>

    );

}

export default RightSidebar;