import HomepageSection from "./components/sections/homepage"
import PrecolonialSection from "./components/sections/precolonial"
import ColonialPeriod from "./components/sections/colonial"

function App() {
  return (
    <div className="relative">
      <HomepageSection/>
      <PrecolonialSection/>
      <ColonialPeriod/>

    </div>
  )
}

export default App