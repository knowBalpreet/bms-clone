import React, { useContext, useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { Button, Icon } from 'antd';
import { StoreContext } from '../../contexts/Store';
import Card from '../Card';

const RecommendedMovies = ({ isRecommended = false }) => {
  const { data } = useContext(StoreContext);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  const { movieData = [], recommendedIds = [] } = data;
  let items = movieData;
  if (isRecommended) {
    items = movieData.filter(movie => recommendedIds.includes(movie.id));
  }
  console.log('recommended movies', items);
  return (
    <div>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        rightChevron={
          <Button shape="circle">
            <Icon type="right" style={{ fontSize: 16 }} />
          </Button>
        }
        leftChevron={
          <Button shape="circle">
            <Icon type="left" style={{ fontSize: 16 }} />
          </Button>
        }
        // gutter={20}
        // outsideChevron
        chevronWidth={chevronWidth}
      >
        {items.map(movie => (
          <Card {...movie} />
        ))}
      </ItemsCarousel>
    </div>
  );
};

export default RecommendedMovies;
