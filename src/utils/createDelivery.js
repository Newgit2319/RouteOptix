let deliveryId = 1;

const cargoTypes = [

    "Electronics",

    "Food",

    "Medical",

    "Furniture",

    "Clothing",

    "Documents",

];

export function createDelivery(path) {

    if (!path || path.length < 2) {
        return null;
    }

    return {

        id: deliveryId++,

        path,

        progress: 0,

        speed:
            Math.floor(
                Math.random() * 25
            ) + 35,

        status: "moving",

        cargo:
            cargoTypes[
                Math.floor(
                    Math.random() *
                    cargoTypes.length
                )
                ],

        createdAt: Date.now(),

    };

}