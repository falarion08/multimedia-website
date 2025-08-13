import HomepageSection from "./components/sections/homepage"
import PrecolonialSection from "./components/sections/precolonial"
import ColonialPeriod from "./components/sections/colonial"
import PostColonialSection from "./components/sections/postcolonial"
import ContemporarySection from "./components/sections/contemporary"
import IssueAnalysisSection from "./components/sections/issue"

function App() {
  return (
    <div className="relative">

      <HomepageSection/>
      <PrecolonialSection/>
      <ColonialPeriod/>
      <PostColonialSection/>
      <ContemporarySection/>
      <IssueAnalysisSection/>

    </div>
  )
}

export default App