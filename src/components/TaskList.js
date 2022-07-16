import { Space, Table, Card, Button } from 'antd';
import moment from 'moment';
import React from 'react';


const TaskList = ({ logs, removeUserLog, editUserLog }) => {
  const columns = [
    {
      title: 'Details',
      dataIndex: 'details',
      key: 'details',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (_, record) => <>{moment(record.date).format('YYYY-MM-DD')}</>
    },
    {
      title: 'Start Time',
      dataIndex: 'start_time',
      key: 'start_time',
      render: (_, record) => <>{moment(record.start_time).format('HH:mm:ss')}</>
    },
    {
      title: 'End Time',
      dataIndex: 'end_time',
      key: 'end_time',
      render: (_, record) => <>{moment(record.end_time).format('HH:mm:ss')}</>
    },
    {
      title: 'Duration In Min',
      dataIndex: 'total_duration',
      key: 'total_duration',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => editUserLog(record)}>Edit</Button>
          <Button onClick={() => removeUserLog(record.id)}>Delete</Button>
        </Space>
      ),
    },
  ];
  return <Card
    data-testid='tasks-list'
    title="Time Logs"
  > <Table columns={columns} dataSource={logs} /> </Card>
}

export default TaskList;