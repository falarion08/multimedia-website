import HomepageSection from "./components/sections/homepage"
import PrecolonialSection from "./components/sections/precolonial"
import ColonialPeriod from "./components/sections/colonial"
import PostColonialSection from "./components/sections/postcolonial"

function App() {
  return (
    <div className="relative">

      <HomepageSection/>
      <PrecolonialSection/>
      <ColonialPeriod/>
      <PostColonialSection/>

    </div>
  )
}

export default App