import React, { Component } from 'react'
import { Link} from "react-router-dom";
import whatsapp from './whatsapp.png';
import instagram from './instagram.png';
import facebook from './facebook.png';
import youtube from './youtube.png'


export default class Footer extends Component {
  render() {
    return (
      <div style={{backgroundColor:'#D8D8D8'}}>
        <div className="container">
  <footer className="py-3 my-4 bg-gray">
    <h5 className="d-flex justify-content-center mb-3">DailyNuws</h5>
<div className='d-flex justify-content-center mt-3 mb-3'>
  <img className="mx-3" src={whatsapp} alt="loading" style={{width:'30px',height:'30px'}} />
  <img className="mx-3"  src={instagram} alt="instagram" style={{width:'30px',height:'30px'}} />
  <img className="mx-3"  src={facebook} alt="facebook" style={{width:'30px',height:'30px'}} />
  <img className="mx-3"  src={youtube} alt="youtube" style={{width:'30px',height:'30px'}} />
</div>

    <ul className="nav justify-content-center border-bottom pb-3 mb-3 mt-3">
    <li className="nav-item"><Link to="/General" className="nav-link px-2 text-dark">Home</Link></li>
      <li className="nav-item"><Link to="/business" className="nav-link px-2 text-dark">business</Link></li>
      <li className="nav-item"><Link to="/entertainment" className="nav-link px-2 text-dark">entertainment</Link></li>
      <li className="nav-item"><Link to="/health" className="nav-link px-2 text-dark">health</Link></li>
      <li className="nav-item"><Link to="/science" className="nav-link px-2 text-dark">science</Link></li>
      <li className="nav-item"><Link to="/sports" className="nav-link px-2 text-dark">sports</Link></li>
      <li className="nav-item"><Link to="/technology" className="nav-link px-2 text-dark">technology</Link></li>
      <li className="nav-item"><Link to="/about" className="nav-link px-2 text-dark">About</Link></li>
    </ul>
    <p className="text-center text-dark">© 2023 Company, Inc</p>
  </footer>
</div>
      </div>
    )
  }
}
