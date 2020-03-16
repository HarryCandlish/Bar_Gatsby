import React from "react";

import foodStyles from '../../modules/food.module.scss'
import menuIcon from '../../images/menu-icon.png'

export default function Food() {
  return (
  <section className={foodStyles.menu}>
    <div className={foodStyles.container}>
      <div className={foodStyles.food}>
        <div className={foodStyles.textBox}>
          <h3 >BEERS ARE NOT OUR ONLY ASPIRATION</h3>
          <h1 >OUR FOOD</h1>
          <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          </p>
          <div className={foodStyles.cta}>
                    <a href="#" className={foodStyles.btn}>Menu</a>
                </div>
        {/* <img src={menuIcon} className={`${foodStyles.icon} ${foodStyles.ionMd}`}/>  */}
        </div>
      </div>
    </div>
</section>
  );
}