import React, { useState } from 'react';
import TimeLogInput from "../components/UserInput";
import TaskList from "../components/TaskList";
import { v4 } from "uuid";
import Report from './Report'
const TaskTimeLog = () => {
  const [logs, setLogs] = useState([]);
  const [editFlag, setEditFlag] = useState(false)
  const [editData, setEditData] = useState({})

  const getUserlogData = (data) => {
    const { details, time_log, date } = data;

    if (editFlag) {
      setLogs((prevLogs) =>
        prevLogs.map((el) =>
          el.id === editData.id
            ? {
              ...el,
              details: details,
              start_time: time_log[0],
              end_time: time_log[1],
              total_duration: time_log[1].diff(time_log[0], 'minutes'),
              date: date
            }
            : el
        )
      );
      setEditData({})
      setEditFlag(false)
    } else {
      let id = v4()

      setLogs(prevData => [...prevData, {
        id: id, key: id, details, start_time: time_log[0], end_time: time_log[1], date: date,
        total_duration: time_log[1].diff(time_log[0], 'minutes')
      }])

    }
  }

  const removeUserLog = (id) => {
    setLogs((prevlogs) =>
      prevlogs.filter((el) => {
        return el.id !== id;
      })
    );
  }

  const editUserLog = (data) => {
    setEditFlag(prevState => true)
    setEditData(prevData => data)
  }


  return <React.Fragment>
    <TimeLogInput getUserlogData={getUserlogData} editData={editData} editFlag={editFlag} />
    <TaskList logs={logs} removeUserLog={removeUserLog} editUserLog={editUserLog} />
    <Report chartData={logs} />
  </React.Fragment>
}

export default TaskTimeLog;