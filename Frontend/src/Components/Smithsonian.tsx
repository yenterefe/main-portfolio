import useDelayRender from "../Hooks/useDelayRender";

const Smithsonian = () => {

    const setDelayRender = useDelayRender({ msSeconds: 13000 })

    return (
        <div className="hover:scale-105">
            {setDelayRender ? <video className="animation-slide h-80 " src="#" controls
                poster="https://dummyimage.com/600x400/eeeeee/fff" /> : null}
        </div>
    );
}

export default Smithsonian;