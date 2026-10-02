import { useState } from "react";

export default function useRouteHistory() {

    const [history, setHistory] = useState([]);

    const addRoute = (route) => {

        setHistory((prev) => [

            {
                id: Date.now(),
                time: new Date().toLocaleTimeString(),
                ...route,
            },

            ...prev.slice(0, 9),

        ]);

    };

    return {

        history,

        addRoute,

    };

}