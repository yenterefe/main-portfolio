import useDelayRender from "../Hooks/useDelayRender";

const Smithsonian = () => {
    // Need to fix time
    const setDelayRender = useDelayRender({ msSeconds: 13000 })

    return (
        <>
            {setDelayRender ? <video className="animation-slide h-80 px-6" src="#" controls
                poster="https://dummyimage.com/600x400/eeeeee/fff" /> : null}
        </>
    );
}

export default Smithsonian;