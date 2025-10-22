import useDelayRender from "../Hooks/useDelayRender";

const Smithsonian = () => {

    return (
        <div>
            <div className="hover:scale-105">
                <video className="animation-slide h-80 " src="#" controls
                    poster="https://dummyimage.com/600x400/eeeeee/fff" />
            </div>
            <div className="text-center">
                <p className="h-80">Smithsonian XR Apps </p>
            </div>
        </div>

    );
}

export default Smithsonian;