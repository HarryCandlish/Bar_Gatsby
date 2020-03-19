import React, { Component } from 'react'

import headerStyles from "../../modules/header.module.scss"

export default class Navbar extends Component {
  render() {

      // const selectElement = (s) => document.querySelector(s);

      // selectElement(s'.open').addEventListener('click', () => {
      //   selectElement(s: 'navList').classList.add('active');
      // });

      // selectElement(s: '.close').addEventListener('click', () => {
      //   selectElement(s: 'navList').classList.remove('active');
      // });
      

      return (
        
      <header>
        <div className={headerStyles.container}>
            <nav>
              <div className={headerStyles.navBrand} >
                <a href="/home">
                  {/* <img src="images/logo.png" alt=""/> */}
                </a>
              </div>
                <div className={`${headerStyles.menuIcons} ${headerStyles.open}`}>
                    <i className={`${headerStyles.icon} ${headerStyles.ionMdMenu}`}></i>
                </div>
                <ul className={headerStyles.navList}>
                  <div className={`${headerStyles.menuIcons} ${headerStyles.close}`} >
                      <i className={`${headerStyles.icon} ${headerStyles.ionMdMenu}`}></i>
                  </div>
                    <li className={headerStyles.navItem}>
                        <a href="" className={headerStyles.navLink}>Home</a>
                    </li>
                    <li className={headerStyles.navItem}>
                        <a href="" className={headerStyles.navLink}>Beer</a>
                    </li>
                    <li className={headerStyles.navItem}>
                        <a href="" className={headerStyles.navLink}>Food</a>
                    </li>
                    <li className={headerStyles.navItem}>
                        <a href="" className={headerStyles.navLink}>Events</a>
                    </li>
                </ul>
            </nav>
        </div>
      </header>
    );
  }
}