import Avatar from '../img/glauce3x4.jpg'
import '../styles/components/sidebar.sass'


const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Glauce Alves" />
      <p className="title">full-stack web developer</p>
      <p>redes sociais</p>
      <p>informações do contato</p>
      <a href="" className="btn">Download currículo</a>
      </aside>
  )
}

export default Sidebar