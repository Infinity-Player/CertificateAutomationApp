import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function LogsTab() {
  const [logs, setLogs] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/logs').then(res => setLogs(res.data))
  }, [])

  return (
    <div>
      <h2>System Logs</h2>
      <ul>
        {logs.map((l, idx) => <li key={idx}>{l.event} - {l.status}</li>)}
      </ul>
    </div>
  )
}
