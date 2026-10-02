import Truck from "./Truck";
import { interpolatePath } from "../../utils/interpolatePath";

function TruckLayer({
                        fleet,
                        nodes,
                    }) {

    return (
        <>
            {(fleet || []).map((truck) => {

                const position = interpolatePath(
                    truck.path,
                    nodes,
                    truck.progress
                );

                if (!position) return null;

                return (
                    <Truck
                        key={truck.id}
                        x={position.x}
                        y={position.y}
                        rotation={position.angle}
                        status={truck.status}
                    />
                );

            })}
        </>
    );

}

export default TruckLayer;