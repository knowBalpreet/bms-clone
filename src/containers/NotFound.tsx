import React, { FunctionComponent } from 'react';

import { Result, Button, Row } from 'antd';
import { navigate } from '@reach/router';
import GCLS from '../../assets/css/main.css.json';
import BCLS from '../../assets/css/bootstrap.css.json';

interface Props {
  default?: Boolean;
}

const NotFound: FunctionComponent<Props> = () => (
  <Row type="flex" justify="space-around" align="middle" className={BCLS['vh-100']}>
    <Result
      status="404"
      title="404"
      className={GCLS['bg-card']}
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="danger" onClick={() => navigate('/')}>
          Back Home
        </Button>
      }
    />
  </Row>
);

export default NotFound;
