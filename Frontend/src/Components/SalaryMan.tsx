import useDelayRender from "../Hooks/useDelayRender";

const SalaryMan = () => {

    const setDelayRender = useDelayRender({ msSeconds: 8020 })

    return (
        <>
            {setDelayRender ? <a href="#" className="animate-slide"> <img className="h-80" src="https://dummyimage.com/600x400/eeeeee/fff" /> </a> : null}
        </>
    );
}

export default SalaryMan;