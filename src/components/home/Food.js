import React from "react";

import foodStyles from '../../modules/food.module.scss'
import menuIcon from '../../images/menu-icon.png'

export default function Food() {
  return (
  <section className={foodStyles.menu}>
    <div className={foodStyles.container}>
      <div className={foodStyles.food}>
        <div className={foodStyles.textBox}>
          <h3 >We take pride in our the food we make</h3>
          <h1 >food</h1>
          <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          </p>
        {/* <img src={menuIcon} className={`${foodStyles.icon} ${foodStyles.ionMd}`}/>  */}
        </div>
      </div>
    </div>
</section>
  );
}