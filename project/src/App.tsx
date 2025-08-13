import HomepageSection from "./components/sections/homepage"
import PrecolonialSection from "./components/sections/precolonial"
import ColonialPeriod from "./components/sections/colonial"
import PostColonialSection from "./components/sections/postcolonial"
import ContemporarySection from "./components/sections/contemporary"

function App() {
  return (
    <div className="relative">

      <HomepageSection/>
      <PrecolonialSection/>
      <ColonialPeriod/>
      <PostColonialSection/>
      <ContemporarySection/>

    </div>
  )
}

export default App