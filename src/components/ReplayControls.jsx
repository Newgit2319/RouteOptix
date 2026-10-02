import GlassCard from "./common/GlassCard";
import PrimaryButton from "./common/PrimaryButton";
import { titleStyle } from "../styles/commonStyles";

function ReplayControls({

                            replayIndex,

                            maxSteps,

                            isPlaying,

                            onPlay,

                            onPause,

                            onReset,

                        }) {

    const progress =

        maxSteps > 0

            ? ((replayIndex + 1) / maxSteps) * 100

            : 0;

    return (

        <GlassCard
            style={{
                marginBottom: "20px",
            }}
        >

            <h3 style={titleStyle}>
                ▶ Algorithm Replay
            </h3>

            <div
                style={{
                    color: "#94A3B8",
                    marginBottom: "12px",
                }}
            >
                Step {Math.min(replayIndex + 1, Math.max(maxSteps, 1))}

                {" / "}

                {Math.max(maxSteps, 1)}
            </div>

            <div
                style={{
                    height: "10px",
                    background: "#1E293B",
                    borderRadius: "999px",
                    overflow: "hidden",
                    marginBottom: "18px",
                }}
            >

                <div
                    style={{
                        width: `${progress}%`,
                        height: "100%",
                        background:
                            "linear-gradient(90deg,#00E5FF,#2563EB)",
                        transition: "width .3s ease",
                    }}
                />

            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                }}
            >

                <PrimaryButton
                    onClick={
                        isPlaying
                            ? onPause
                            : onPlay
                    }
                >
                    {isPlaying
                        ? "⏸ Pause Replay"
                        : "▶ Start Replay"}
                </PrimaryButton>

                <PrimaryButton
                    onClick={onReset}
                >
                    ↺ Reset Replay
                </PrimaryButton>

            </div>

        </GlassCard>

    );

}

export default ReplayControls;