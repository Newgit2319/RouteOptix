import { jsPDF } from "jspdf";

export function exportRouteReport({

                                      algorithm,
                                      startNode,
                                      endNode,
                                      distance,
                                      visitedCount,
                                      path,
                                      raceStats,

                                  }) {

    const pdf = new jsPDF();

    pdf.setFontSize(20);
    pdf.text("RouteOptix Route Report", 20, 20);

    pdf.setFontSize(12);

    pdf.text(`Algorithm : ${algorithm}`, 20, 40);

    pdf.text(`Source : ${startNode}`, 20, 50);

    pdf.text(`Destination : ${endNode}`, 20, 60);

    pdf.text(`Distance : ${distance}`, 20, 70);

    pdf.text(`Visited Nodes : ${visitedCount}`, 20, 80);

    pdf.text(`Winner : ${raceStats?.winner ?? "-"}`, 20, 90);

    pdf.text(

        `Dijkstra Time : ${raceStats?.dijkstraTime} ms`,

        20,

        100

    );

    pdf.text(

        `A* Time : ${raceStats?.astarTime} ms`,

        20,

        110

    );

    pdf.text(

        `Route Efficiency : ${Math.round(

            (visitedCount / Math.max(path.length, 1)) * 100

        )}%`,

        20,

        120

    );

    pdf.text(`Path : ${path.join(" → ")}`, 20, 105, {
        maxWidth: 170,
    });

    pdf.save("RouteOptix_Report.pdf");

}