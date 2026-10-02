import "../styles/charts.css";

import TrafficChart from "./charts/TrafficChart";
import FleetChart from "./charts/FleetChart";
import AlgorithmChart from "./charts/AlgorithmChart";
import DeliveryChart from "./charts/DeliveryChart";

function DashboardAnalytics({

                                fleet,

                                raceStats,

                            }) {

    return (

        <div className="analytics-grid">

            <TrafficChart />

            <FleetChart fleet={fleet} />

            <AlgorithmChart raceStats={raceStats} />

            <DeliveryChart />

        </div>

    );

}

export default DashboardAnalytics;