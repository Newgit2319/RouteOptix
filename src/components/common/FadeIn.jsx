function FadeIn({

                    children,

                }){

    return(

        <div

            style={{

                animation:"fade .5s ease"

            }}

        >

            {children}

        </div>

    );

}

export default FadeIn;