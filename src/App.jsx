/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
import { Experience } from "./componets/experience"
import { Configurator } from "./componets/configurator"
import { Canvas } from "@react-three/fiber"
import "./App.css";
import { CustomizationProvider } from "./contexts/Customization";

function App() {
  return (
    <CustomizationProvider>
      <div className="App">
        <Canvas dpr={[1, 2]}       
        colorManagement
        shadows>
          <color attach="background" args={["#ffffff"]} />
            <fog attach="fog" args={["#213547", 50, 60]} />
            <Experience/>
        </Canvas>
        <Configurator/>
      </div>
    </CustomizationProvider>


     

  )
}

export default App
