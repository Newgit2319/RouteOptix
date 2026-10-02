export const logisticsEdges = [

    // ================= AIRPORT =================

    ["AIRPORT", "AIR_CARGO", 2],
    ["AIRPORT", "CUSTOMS", 1],
    ["CUSTOMS", "AIR_TERMINAL", 1],
    ["AIR_CARGO", "WH_B", 4],

    // ================= PORT =================

    ["PORT", "DOCK_A", 1],
    ["PORT", "DOCK_B", 2],
    ["DOCK_A", "CONTAINER", 1],
    ["CONTAINER", "WH_A", 3],

    // ================= WAREHOUSE =================

    ["WH_A", "WH_B", 2],
    ["WH_A", "WH_C", 2],
    ["WH_B", "WH_D", 2],
    ["WH_C", "WH_D", 2],

    // ================= DISTRIBUTION =================

    ["WH_C", "DC_NORTH", 2],
    ["WH_D", "DC_SOUTH", 2],

    ["DC_NORTH", "CENTRAL_HUB", 1],
    ["DC_SOUTH", "CENTRAL_HUB", 1],

    ["CENTRAL_HUB", "CROSS_DOCK", 2],
    ["CENTRAL_HUB", "SORT_CENTER", 2],
    ["CENTRAL_HUB", "REGIONAL_HUB", 2],

    // ================= FLEET =================

    ["CENTRAL_HUB", "DEPOT", 2],

    ["DEPOT", "FUEL", 1],
    ["DEPOT", "EV", 1],
    ["DEPOT", "GARAGE", 1],
    ["DEPOT", "PARKING", 1],

    // ================= RETAIL =================

    ["DEPOT", "RETAIL_N", 2],
    ["DEPOT", "RETAIL_C", 2],
    ["DEPOT", "RETAIL_S", 2],

    ["RETAIL_N", "MARKET", 1],
    ["RETAIL_C", "STORE_A", 1],
    ["RETAIL_S", "STORE_B", 1],

    ["STORE_A", "MALL", 2],
    ["STORE_B", "MALL", 2],

    // ================= CUSTOMER =================

    ["MARKET", "HOSPITAL", 2],

    ["STORE_A", "TECH", 2],

    ["STORE_B", "UNIVERSITY", 2],

    ["MALL", "RES_A", 2],

    ["STORE_A", "RES_B", 2],

    ["STORE_B", "RES_C", 2],

    ["MALL", "RES_D", 2],

];