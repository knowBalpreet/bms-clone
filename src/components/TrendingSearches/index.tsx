import React, { useContext } from 'react';
import { List } from 'antd';
import { StoreContext } from '../../contexts/Store';


const TrendingSearches = () => {
  const { data } = useContext(StoreContext);
  return (
    <>
      <h5>Trending Searches</h5>
      <List
        style={{backgroundColor: 'white', cursor: 'pointer'}}
        size="large"
        bordered
        dataSource={data?.trendingSearches ?? []}
        renderItem={(item: any) => <List.Item>
          <List.Item.Meta
            title={item?.search ?? ''}
            description={item?.type ?? ''}
          />
          </List.Item>
        
        }
      />
    </>
    
  );
};

export default TrendingSearches;
