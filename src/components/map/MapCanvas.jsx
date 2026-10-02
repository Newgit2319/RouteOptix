import {
    TransformWrapper,
    TransformComponent
} from "react-zoom-pan-pinch";
function MapCanvas({ children }) {
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                overflow: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#08111d",
            }}
        >

            <TransformWrapper
                initialScale={0.75}
                minScale={0.6}
                maxScale={2}
                centerOnInit
                centerZoomedOut
                limitToBounds={false}
                wheel={{ disabled: true }}
                pinch={{ disabled: false }}
                doubleClick={{ disabled: true }}
                panning={{
                    velocityDisabled: true,
                    disabled: false,
                }}
            >
                {({ zoomIn, zoomOut, resetTransform }) => (

                    <>

                        <div className="map-toolbar">

                            <button onClick={zoomIn}>＋</button>

                            <button onClick={zoomOut}>－</button>

                            <button onClick={resetTransform}>Reset</button>

                        </div>

                        <TransformComponent
                            wrapperStyle={{
                                width: "100%",
                                height: "100%",
                                overflow: "hidden",
                            }}
                            contentStyle={{
                                width: "1800px",
                                height: "1800px",
                            }}
                        >

                            <svg
                                width="1800"
                                height="1800"
                                viewBox="0 0 1800 1800"
                                preserveAspectRatio="xMidYMid meet"
                            >

                                <defs>
                                    {/* your defs */}
                                </defs>

                                <rect
                                    x="0"
                                    y="0"
                                    width="1800"
                                    height="1800"
                                    fill="url(#grid)"
                                />

                                {children}

                            </svg>

                        </TransformComponent>

                    </>

                )}

            </TransformWrapper>
        </div>
    );
}

export default MapCanvas;