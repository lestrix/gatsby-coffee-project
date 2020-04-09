import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import logo2 from "../../images/logo2.svg"
// LATER GRAPHQL instead of simplest import logo
import { FaCartArrowDown } from "react-icons/fa"
import { FiShoppingCart } from "react-icons/fi"
import { GiPhone } from "react-icons/gi"
import { GoMail } from "react-icons/go"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/about",
        text: "about",
      },
    ],
  }
  navbarHandler = () => {
    console.log("")
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "collapse navbar-collapse" })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        })
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="logo"
            className="logo"
            height="100px"
            width="auto"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link to={link.path} className="nav-link text-capitalize">
                    {link.text}
                  </Link>
                </li>
              )
            })}
            <li className="nav-item ml-sm-5">
              <FiShoppingCart className="cart-icon" />
              <GiPhone className="cart-icon" />
              <GoMail className="cart-icon" />
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
