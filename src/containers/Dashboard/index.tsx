import React, { useEffect, useContext } from 'react';
import Loading from '../../components/Loading';
import Navbar from '../../components/Navbar';
import TrendingSearches from '../../components/TrendingSearches';
import MovieSlider from '../../components/MovieSlider';

import { getMovieData } from '../../apis';
import { StoreContext } from '../../contexts/Store';

import BCLS from '../../../assets/css/bootstrap.css.json';

const Dashboard = () => {
  const { updateStoreContext, loading, data } = useContext(StoreContext);

  const getData = async () => {
    const { data } = await getMovieData();
    // @ts-ignore
    updateStoreContext({ data, loading: false });
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  console.log('Dashboard', loading, data);

  return (
    <Loading spinning={loading}>
      <Navbar />
      <div className={BCLS.container}>
        <div className={`${BCLS.row} ${BCLS['mt-5']}`}>
          <div className={`${BCLS['col-3']}`}>
            <TrendingSearches />
          </div>
          <div className={BCLS['col-9']}>
            <h5>Recommended Movies</h5>
            <MovieSlider isRecommended />
            <br />
            <h5>Other Movies</h5>
            <MovieSlider />
          </div>
        </div>
      </div>
    </Loading>
  );
};

export default Dashboard;
