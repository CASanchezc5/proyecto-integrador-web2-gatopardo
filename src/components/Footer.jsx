import './Footer.css'
import { FaFacebook, FaEnvelope , FaPhone } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='container-footer'>
      <footer className='footer'>
        <span><img src="public/logito-gato-pardo-10.png" alt="" /></span>
        <span>Derechos de autor &copy; Gato Pardo. Reservados todos los derechos</span>
        <span className='links-footer'>
          {/* <a href=""><FaFacebook color='#45a0e6' className='icon' />Facebook</a> */}
          <a href=""><FaEnvelope color="#F5F5F5" className='icon' />andresanta1981@gmail.com</a>
          <a href=""><FaPhone color='#F5F5F5' className='icon' />+57 310 515 4524</a>
        </span>
      </footer>
    </div>
  )
}

export default Footer