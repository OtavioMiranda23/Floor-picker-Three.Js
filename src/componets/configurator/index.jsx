import { useCustomization } from "../../contexts/Customization";


export const Configurator = () => {
    const {material, setMaterial} = useCustomization();
    console.log(material);
    return (
        <div className="configurator">

            <div className="configurator__section">
                <div className="configurator__section__title">
                    Chair material
                </div>
                <div className="configurator__section__values">
                    <div className={`item ${material === "tacoReto" ? "item--active" : ""}`} onClick={()=> setMaterial('tacoReto')}>
                        <div className="item__label">
                            Taco Reto
                        </div>
                    </div>
                    <div className={`item ${material === "tacoQuadrado" ? "item--active" : ""}`} onClick={()=> setMaterial('tacoQuadrado')}>
                        <div className="item__label">
                            Taco Quadrado
                        </div>
                    </div>
                </div>
            </div>
                        
        </div>
    )
}