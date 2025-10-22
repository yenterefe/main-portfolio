import useDelayRender from "../Hooks/useDelayRender";

const SalaryMan = () => {

    const setDelayRender = useDelayRender({ msSeconds: 8020 })

    return (
        <div>
            <div className="hover:scale-105">
            </div> <img className="h-80" src="https://dummyimage.com/600x400/eeeeee/fff" />
            <div className="text-center">
                <p className="h-80">Salary Man</p>
            </div>
        </div>
    );
}

export default SalaryMan;