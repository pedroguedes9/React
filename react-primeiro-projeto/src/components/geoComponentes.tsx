import { Circle } from "./circle"
import { Square } from "./square"

export const GeoComponentes = () => {
    return (
        <div>
            <h3 className="font-bold ">Componentes geométricos</h3>
            <div className="border border-white flex flex-row gap-2 p-5">
                <Circle/>
                <Square/>
            </div>
        </div>
    )
}