import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function CertificatesTab() {
  const [certs, setCerts] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/certificates').then(res => setCerts(res.data))
  }, [])

  return (
    <div>
      <h2>Certificates</h2>
      <ul>
        {certs.map(c => <li key={c.id}>{c.name}</li>)}
      </ul>
    </div>
  )
}
