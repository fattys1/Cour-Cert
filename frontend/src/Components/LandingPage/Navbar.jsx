import { Component } from "react";
import './Logo.png';
import "./Navbar.css";
import { MenuData } from "./MenuData";
import { HashLink as Link } from "react-router-hash-link";

export class Navbar extends Component{
    state = {clicked: false};
    render(){
        return(
            <nav className="NavbarItems">
                <div className = "A-and-L">
                  <Link to="#home" className="app-title">Cour-Cert </Link>
                  <img src='Logo.png' alt="My Logo" className="logo img"/>
                </div>
                <ul className="nav-menu">
                    {MenuData.map((item, index)=>{
                        return(
                            <li key={index}>
                                <Link to = {item.url} className={item.cName}>
                                    <i className={item.icon}></i>{item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}


