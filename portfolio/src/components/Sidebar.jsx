import SocialNetworks from './SocialNetworks'
import Avatar from '../img/glauce3x4.jpg'
import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'


const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Glauce Alves" />
      <p className="title">Desenvolvedora Full-Stack</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">Download currículo</a>
      </aside>
  )
}

export default Sidebar