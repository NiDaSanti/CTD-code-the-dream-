import React from 'react'
import { Link } from "react-router-dom";
import * as ROUTES from "../../Constants/routes.js";
import '../../assets/styles/_nav.scss'
import MainLogo from "../../assets/images/logo.png";


const Navigation = () => (
    <nav className="navigation">
      <img src={MainLogo}alt="Nicks Logo"/>
      <div className="nav-content">
        <ul>
          <li>
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.ABOUT}>About</Link>
          </li>
          <li>
            <Link to={ROUTES.RESUME}>Resume</Link>
          </li>
          <li>
            <Link to={ROUTES.CALCULATOR}>Calculator</Link>
          </li>
          <li>
            <Link to={ROUTES.TICTACTOE}>Tic-Tac-Toe</Link>
          </li>
        </ul>
      </div>
  </nav>
)

export default Navigation