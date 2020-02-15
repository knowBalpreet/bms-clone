import React from 'react';
import './index.css';
import { Icon } from 'antd';
import ICLS from './index.css.json';
import BCLS from '../../../assets/css/bootstrap.css.json';

const Card = ({ avgRating, genre, title, censor }) => (
  <div className={ICLS.DIV_1}>
    <div className={ICLS.DIV_2}>
      <img
        src="//in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/love-aaj-kal-2-et00099651-26-03-2019-05-59-03.jpg"
        alt="Love Aaj Kal"
        className={ICLS.IMG_3}
      />
      <img
        src="//in.bmscdn.com/events/mobile/vertical-noimg.png"
        className={ICLS.IMG_4}
        alt=""
      />
    </div>
    <div className={ICLS.DIV_5}>
      <div className={ICLS.DIV_6}>
        <div className={ICLS.DIV_7}>
          <div className={ICLS.DIV_8}>
            <div className={ICLS.DIV_9}>
              <Icon type="heart" theme="filled" style={{ color: 'red' }} />
            </div>
            <div className={ICLS.DIV_12}>{avgRating}%</div>
          </div>
        </div>
      </div>
      <div className={ICLS.DIV_13}>
        <div className={ICLS.DIV_14}>
          <h4 className={ICLS.H4_15}>{title}</h4>
        </div>
        <div className={`${ICLS.DIV_16} ${BCLS['text-truncate']}`}>
          <span className={ICLS.SPAN_17}>
            <span className={`${ICLS.SPAN_18} `}>{genre}</span>
          </span>
          <li className={ICLS.LI_19}>{censor}</li>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
