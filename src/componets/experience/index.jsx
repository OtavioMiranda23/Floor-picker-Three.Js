/* eslint-disable react/no-unknown-property */
import {  PresentationControls, Stage } from "@react-three/drei"


import { Ambient } from "../ambiente/index"



export const Experience = () => {
    return (
        <>
            <PresentationControls speed={1.5}
            global polar={[-0.9, Math.PI / 4]}
            rotation={[Math.PI / 8, Math.PI / 4, 0]}
            zoom={2}
            >
                <Stage 
                environment={"apartment"} 
                intensity={0.9}
                
                >



                    <Ambient/>
                        
                </Stage>

            </PresentationControls>
            </>


    )
}