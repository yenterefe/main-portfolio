import useDelayRender from "../Hooks/useDelayRender";

const SalaryMan = () => {
    // Need to fix time
    const setDelayRender = useDelayRender({ msSeconds: 5000 })

    return (
        <>
            {setDelayRender ? <img src="https://dummyimage.com/600x400/eeeeee/fff" className="animate-slide" /> : null}
        </>
    );
}

export default SalaryMan;