import React from 'react'
import { Table as AntTable } from 'antd'
import { useDispatch } from 'react-redux'
import { getCoords } from '../../store/reducers/coordsSlice'

import './index.css'

const Table = () => {
   const dispatch = useDispatch()
   const [selectedRowKeys, setSelectedRowKeys] = React.useState(null)
   const columns = [
      {
         title: 'Номер заявки',
         dataIndex: 'numberOfApplication',
         key: 'numberofapplication',
         render: (text, record) => {
            return <span>№{text}</span>
         }
      },
      {
         title: 'Координаты от lat',
         dataIndex: 'coordsFromLat',
         key: 'coordsfromlat',
      },
      {
         title: 'Координаты от lng',
         dataIndex: 'coordsFromLng',
         key: 'coordsfromlng',
      },
      {
         title: 'Координаты до lat',
         dataIndex: 'coordsToLat',
         key: 'coordstolat',
      },
      {
         title: 'Координаты до lng',
         dataIndex: 'coordsToLng',
         key: 'coordstolng',
      },
   ]
   const data = [
      {
         key: '1',
         numberOfApplication: '1',
         coordsFromLat: '59.84660399',
         coordsFromLng: '30.29496392',
         coordsToLat: '59.82934196',
         coordsToLng: '30.42423701',
      },
      {
         key: '2',
         numberOfApplication: '2',
         coordsFromLat: '59.82934196',
         coordsFromLng: '30.42423701',
         coordsToLat: '59.82761295',
         coordsToLng: '30.41705607',
      },
      {
         key: '3',
         numberOfApplication: '3',
         coordsFromLat: '59.83567701',
         coordsFromLng: '30.38064206',
         coordsToLat: '59.84660399',
         coordsToLng: '30.29496392',
      },
      {
         key: '4',
         numberOfApplication: '4',
         coordsFromLat: '59.84660399',
         coordsFromLng: '30.29496392',
         coordsToLat: '59.82761295',
         coordsToLng: '30.41705607',
      },
      {
         key: '5',
         numberOfApplication: '5',
         coordsFromLat: '42.875594842632715',
         coordsFromLng: '74.60350866486144',
         coordsToLat: '42.86677302290172',
         coordsToLng: '74.56809021054474',
      }
   ]

   return (
      <AntTable rowClassName='table__row' size='small' pagination={false} style={{ width: '50vw !important' }}
         onRow={(record) => {
            return {
               onClick: event => {
                  dispatch(getCoords(`${record.coordsFromLng},${record.coordsFromLat};${record.coordsToLng},${record.coordsToLat}`))
                  setSelectedRowKeys(record.key)
               },
               className: selectedRowKeys === record.key ? 'table__row--selected' : ''
            }
         }} columns={columns} dataSource={data} />
   )
}

export default Table