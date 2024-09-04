import SocialNetworks from './SocialNetworks'
import Avatar from '../img/glauce3x4.jpg'
import Curriculum from '../img/curriculum.pdf'
import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'


const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Glauce Alves" />
      <p className="title">Desenvolvedora Full-Stack</p>
      <SocialNetworks />
      <InformationContainer />
      <a href={Curriculum} target='_blank' className="btn">Download currículo</a>
      </aside>
  )
}

export default Sidebar