import React from 'react';
import Map from './components/Map/Map';
import { Col, Row } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import Table from './components/Table/Table';
function App() {
  return (
    <Row align={'middle'}>
      <Col span={12} style={{ textAlign: 'center' }}>
        <Table />
      </Col>
      <Col span={12} style={{ height: '100vh' }}>
        <Map />
      </Col>
    </Row>
  );
}

export default App;
