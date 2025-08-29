import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function WhatsAppTab() {
  const [status, setStatus] = useState({})

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/whatsapp/status').then(res => setStatus(res.data))
  }, [])

  return (
    <div>
      <h2>WhatsApp Sender</h2>
      <p>Queued: {status.queued}</p>
      <p>Sent: {status.sent}</p>
    </div>
  )
}
