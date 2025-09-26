import { useState, useEffect } from "react";

interface RenderProps {
    msSeconds: number
}

const setDelayRender = ({ msSeconds }: RenderProps) => {
    const [render, setRender] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setRender(true)

        }, msSeconds);

        return () => clearTimeout(timer)
    }
    );

    return render
}

export default setDelayRender;