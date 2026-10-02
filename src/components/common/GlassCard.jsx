import { colors, radius, shadow } from "../../styles/theme";

function GlassCard({

                       children,

                       style = {},

                   }) {

    return (

        <div

            style={{

                background: colors.panel,

                backdropFilter: "blur(18px)",

                border:

                    `1px solid ${colors.border}`,

                borderRadius: radius.card,

                boxShadow: shadow.glow,

                padding: 18,

                ...style,

            }}

        >

            {children}

        </div>

    );

}

export default GlassCard;