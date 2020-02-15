import React from 'react';
import './index.css';
import ICLS from './index.css.json';

const Navbar = () => (
  <>
    <div className={ICLS.DIV_1}>
      <div className={ICLS.DIV_2}>
        <div className={ICLS.DIV_3}>
          <div className={ICLS.DIV_4}>
            <img
              src="https://png2.cleanpng.com/sh/c1b681065302f15301fedb2f11b39860/L0KzQYm3VsIxN6lrhJH0aYP2gLBuTfJwd5xykeVxb4ewebBrifEufJpog9d9LXL4g7r1hgN0NZ10f9G2YnBye376lP9zbV46eqRqNEm2RbLqVPQxQF85Sao7N0S4SIK8Usk1QWgASKsCMEW7PsH1h5==/kisspng-bookmyshow-india-ticket-business-logo-book-store-5b2a4935ac4d08.4182745815294979097058.png"
              alt=""
              width="100%"
              style={{ mixBlendMode: 'screen' }}
            />
          </div>
        </div>
        <div className={ICLS.DIV_8}>
          <div className={ICLS.DIV_9}>
            <span className={ICLS.SPAN_10} />
            <svg className={ICLS.svg_11}>
              <use className={ICLS.use_12} />
            </svg>
            <input
              type="text"
              name="inputSearchBox"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
              className={ICLS.INPUT_13}
            />
          </div>
        </div>
        <div className={ICLS.DIV_14} />
      </div>
    </div>
  </>
);

export default Navbar;
