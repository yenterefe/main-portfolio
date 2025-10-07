import useDelayRender from "../Hooks/useDelayRender";

const SalaryMan = () => {

    const setDelayRender = useDelayRender({ msSeconds: 8020 })

    return (
        <div className="hover:scale-105">
            {setDelayRender ? <a href="#" className="animate-slide"> <img className="h-80" src="https://dummyimage.com/600x400/eeeeee/fff" /> </a> : null}
        </div>
    );
}

export default SalaryMan;