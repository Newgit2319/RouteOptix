import { useState } from "react";
import dijkstra from "../algorithms/dijkstra";
import astar from "../algorithms/astar";

export default function useRouting(graph, nodes) {

    const [path, setPath] = useState([]);
    const [distance, setDistance] = useState(null);
    const [visitedCount, setVisitedCount] = useState(0);
    const [steps, setSteps] = useState([]);
    const [animatedVisited, setAnimatedVisited] = useState([]);
    const [comparison, setComparison] = useState(null);
    const [raceStats, setRaceStats] = useState(null);

    const findRoute = ({
                           algorithm,
                           startNode,
                           endNode,
                           blockedRoads,
                       }) => {

        if (!startNode || !endNode) {
            return null;
        }

        //-------------------------------------
        // Execute selected algorithm
        //-------------------------------------

        let result;

        if (algorithm === "astar") {

            result = astar(
                graph,
                nodes,
                startNode,
                endNode,
                blockedRoads
            );

        } else {

            result = dijkstra(
                graph,
                startNode,
                endNode,
                blockedRoads
            );

        }

        //-------------------------------------
        // Run both algorithms for comparison
        //-------------------------------------

        const dijkstraStart = performance.now();

        const dijkstraResult = dijkstra(
            graph,
            startNode,
            endNode,
            blockedRoads
        );

        const dijkstraTime =
            performance.now() - dijkstraStart;

        const astarStart = performance.now();

        const astarResult = astar(
            graph,
            nodes,
            startNode,
            endNode,
            blockedRoads
        );

        const astarTime =
            performance.now() - astarStart;

        //-------------------------------------
        // Comparison Panel
        //-------------------------------------

        setComparison({

            dijkstra:
            dijkstraResult.visitedNodes.length,

            astar:
            astarResult.visitedNodes.length,

        });

        //-------------------------------------
        // Race Statistics
        //-------------------------------------

        setRaceStats({

            dijkstraTime:
                dijkstraTime.toFixed(3),

            astarTime:
                astarTime.toFixed(3),

            dijkstraVisited:
            dijkstraResult.visitedNodes.length,

            astarVisited:
            astarResult.visitedNodes.length,

            dijkstraDistance:
            dijkstraResult.distance,

            astarDistance:
            astarResult.distance,

            dijkstraPathLength:
            dijkstraResult.path.length,

            astarPathLength:
            astarResult.path.length,

            winner:
                dijkstraTime <= astarTime
                    ? "Dijkstra"
                    : "A*",

        });

        //-------------------------------------
        // Reset previous animation
        //-------------------------------------

        setPath([]);
        setAnimatedVisited([]);
        setSteps([]);
        setDistance(null);
        setVisitedCount(0);

        //-------------------------------------
        // Store replay steps immediately
        //-------------------------------------

        setSteps(result.steps);

        //-------------------------------------
        // Animate explored nodes
        //-------------------------------------

        requestAnimationFrame(() => {

            result.visitedNodes.forEach((node, index) => {

                setTimeout(() => {

                    setAnimatedVisited((prev) => [

                        ...prev,
                        node,

                    ]);

                }, index * 90);

            });

        });

        //-------------------------------------
        // Draw shortest path
        //-------------------------------------

        setTimeout(() => {

            setPath(result.path);

        }, result.visitedNodes.length * 90);

        //-------------------------------------
        // Statistics
        //-------------------------------------

        setDistance(result.distance);

        setVisitedCount(
            result.visitedNodes.length
        );

        //-------------------------------------
        // Return route object
        //-------------------------------------

        return {

            path: result.path,

            distance: result.distance,

            visitedNodes: result.visitedNodes,

            visitedCount:
            result.visitedNodes.length,

            steps: result.steps,

        };

    };

    //-----------------------------------------
    // Clear Route
    //-----------------------------------------

    const clearRoute = () => {

        setPath([]);
        setDistance(null);
        setVisitedCount(0);
        setSteps([]);
        setAnimatedVisited([]);
        setComparison(null);
        setRaceStats(null);

    };

    return {

        path,

        distance,

        visitedCount,

        steps,

        animatedVisited,

        comparison,

        raceStats,

        findRoute,

        clearRoute,

    };

}