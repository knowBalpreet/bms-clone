import request from '../utils/request';
import config from '../utils/config';

const getMovieData = () => request({ url: config.api });

export { getMovieData };
