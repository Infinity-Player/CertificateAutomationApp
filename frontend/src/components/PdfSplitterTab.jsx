import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function PdfSplitterTab() {
  const [splits, setSplits] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/pdf-splits').then(res => setSplits(res.data))
  }, [])

  return (
    <div>
      <h2>PDF Splitter</h2>
      <ul>
        {splits.map((s, idx) => <li key={idx}>{s.file} - {s.pages} pages</li>)}
      </ul>
    </div>
  )
}
