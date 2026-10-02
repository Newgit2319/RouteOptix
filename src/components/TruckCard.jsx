function TruckCard({ truck }) {

    const progress =
        Math.round(truck.progress * 100);

    const currentIndex =
        Math.min(
            Math.floor(
                truck.progress *
                (truck.path.length - 1)
            ),
            truck.path.length - 1
        );

    const currentHub =
        truck.path[currentIndex];

    const nextHub =
        truck.path[
            Math.min(
                currentIndex + 1,
                truck.path.length - 1
            )
            ];

    const destination =
        truck.path[
        truck.path.length - 1
            ];

    const remaining =
        100 - progress;

    const eta =
        Math.ceil(
            remaining / 8
        );

    return (

        <div
            style={{
                background:"#111827",
                border:"1px solid #233554",
                borderRadius:"14px",
                padding:"16px",
                marginBottom:"15px",
            }}
        >

            <div
                style={{
                    display:"flex",
                    justifyContent:"space-between",
                }}
            >

                <strong>
                    🚚 Truck #{truck.id}
                </strong>

                <span
                    style={{
                        color:"#22C55E"
                    }}
                >
                    {truck.status}
                </span>

            </div>

            <div
                style={{
                    marginTop:"14px"
                }}
            >

                📦 Cargo : {truck.cargo}

            </div>

            <div>

                📍 Current : {currentHub}

            </div>

            <div>

                ➜ Next : {nextHub}

            </div>

            <div>

                🎯 Destination : {destination}

            </div>

            <div>

                ⚡ Speed : {truck.speed} km/h

            </div>

            <div>

                ⏱ ETA : {eta} min

            </div>

            <div
                style={{
                    marginTop:"12px",
                    height:"10px",
                    background:"#1E293B",
                    borderRadius:"8px",
                    overflow:"hidden",
                }}
            >

                <div
                    style={{
                        width:`${progress}%`,
                        height:"100%",
                        background:"#22C55E",
                    }}
                />

            </div>

            <div
                style={{
                    marginTop:"8px",
                    color:"#CBD5E1",
                }}
            >
                Progress {progress}%
            </div>

        </div>

    );

}

export default TruckCard;