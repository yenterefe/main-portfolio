import { useState, useEffect } from "react";

interface RenderProps {
    msSeconds: number
}

const setDelayRender = ({ msSeconds: seconds }: RenderProps) => {
    const [render, setRender] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setRender(true)

        }, seconds);

        return () => clearTimeout(timer)
    }
    );

    return render
}

export default setDelayRender;