function PrimaryButton({

                           children,

                           onClick,

                           type = "button",

                           disabled = false,

                           style = {},

                       }) {

    return (

        <button

            type={type}

            disabled={disabled}

            onClick={onClick}

            style={{

                width: "100%",

                padding: "12px",

                borderRadius: "12px",

                border: "none",

                background:
                    "linear-gradient(90deg,#00E5FF,#2563EB)",

                color: "#FFFFFF",

                cursor: disabled
                    ? "not-allowed"
                    : "pointer",

                fontWeight: "bold",

                fontSize: "15px",

                transition: "all .25s ease",

                opacity: disabled ? 0.6 : 1,

                ...style,

            }}

            onMouseEnter={(e) => {

                if (!disabled) {

                    e.currentTarget.style.transform =
                        "translateY(-2px)";

                    e.currentTarget.style.boxShadow =
                        "0 8px 22px rgba(0,229,255,.35)";

                }

            }}

            onMouseLeave={(e) => {

                e.currentTarget.style.transform =
                    "translateY(0px)";

                e.currentTarget.style.boxShadow =
                    "none";

            }}

        >

            {children}

        </button>

    );

}

export default PrimaryButton;