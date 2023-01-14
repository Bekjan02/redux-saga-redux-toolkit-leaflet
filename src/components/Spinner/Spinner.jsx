import { Row, Spin } from 'antd'
import React from 'react'

const Spinner = () => {
   return (
      <Row align={'middle'} justify={'center'} style={{ height: '100%' }}><Spin size='large' /></Row>
   )
}

export default Spinner