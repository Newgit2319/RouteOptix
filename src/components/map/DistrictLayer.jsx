function DistrictLayer() {
    return (
        <>
            {/* Airport */}

            <rect
                x="40"
                y="40"
                width="500"
                height="250"
                rx="18"
                fill="#071424"
            />

            {/* Warehouse */}

            <rect
                x="620"
                y="40"
                width="500"
                height="250"
                rx="18"
                fill="#082032"
            />

            {/* Distribution */}

            <rect
                x="620"
                y="340"
                width="500"
                height="250"
                rx="18"
                fill="#1A1435"
            />

            {/* Fleet */}

            <rect
                x="40"
                y="850"
                width="1000"
                height="250"
                rx="18"
                fill="#1A1435"
            />

            {/* Retail */}

            <rect
                x="40"
                y="640"
                width="500"
                height="250"
                rx="18"
                fill="#102A22"
            />

            {/* Customer */}

            <rect
                x="620"
                y="640"
                width="500"
                height="250"
                rx="18"
                fill="#222831"
            />
        </>
    );
}

export default DistrictLayer;