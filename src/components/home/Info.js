import React from 'react'
import {Link} from 'gatsby'

import headerStyles from '../../modules/header.module.scss'

export default function Info() {
    return (
    <div>
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
                        <a href="" className={`${headerStyles.navLink} ${headerStyles.current}`}>Home</a>
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
                        <li className={headerStyles.navItem}>
                        <a href="" className={headerStyles.navLink}>About</a>
                    </li>
                </ul>
            </nav>
        </div>
      </header>
        <section className={headerStyles.hero}>
            <div className={headerStyles.container}>
                <div className={headerStyles.mainMessage}>
                    <h3>Hey Day <br></br>Beer & Co</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
                        <a href="#" className={headerStyles.btn}>Book a Table</a>
                </div>
            </div>
        </section>
    </div>
    )
}
