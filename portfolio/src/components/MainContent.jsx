import AboutContainer from './AboutContainer'
import ProjectsContainer from './ProjectsContainer'
import TechnologiesContainer from './TechnologiesContainer'

import '../styles/components/mainContent.sass'

const MainContent = () => {
  return (
    <main id="mainContent">
      <AboutContainer/>
      <TechnologiesContainer/>
      <ProjectsContainer />
      </main>
  )
}

export default MainContent