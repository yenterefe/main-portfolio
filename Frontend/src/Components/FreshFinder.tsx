import useDelayRender from "../Hooks/useDelayRender";

const FreshFinder = () => {

    const setDelayRender = useDelayRender({ msSeconds: 8000 })

    return (
        <>
            {setDelayRender ? <a href="#" className="animate-slide"> <img className="h-80" src="https://dummyimage.com/600x400/eeeeee/fff" /> </a> : null}
        </>
    );
}

export default FreshFinder;