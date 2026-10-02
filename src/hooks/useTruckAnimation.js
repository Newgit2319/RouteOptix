import { useEffect, useState } from "react";

export default function useTruckAnimation(deliveries) {

    const [fleet, setFleet] = useState(deliveries);

    useEffect(() => {

        const timer = setInterval(() => {

            setFleet((prev) =>
                prev.map((truck) => {

                    if (truck.status === "delivered") {
                        return truck;
                    }

                    let progress = truck.progress + 0.003;

                    if (progress >= 1) {
                        progress = 1;

                        return {
                            ...truck,
                            progress,
                            status: "delivered",
                        };
                    }

                    return {
                        ...truck,
                        progress,
                    };

                })
            );

        }, 30);

        return () => clearInterval(timer);

    }, []);

    return fleet;
}