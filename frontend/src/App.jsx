import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CertificatesTab from './components/CertificatesTab'
import PdfSplitterTab from './components/PdfSplitterTab'
import WhatsAppTab from './components/WhatsAppTab'
import LogsTab from './components/LogsTab'

export default function App() {
  const [activeTab, setActiveTab] = useState("certificates");

  return (
    <div className="p-4">
      <nav className="flex space-x-4 mb-6">
        <button onClick={() => setActiveTab("certificates")}>Certificates</button>
        <button onClick={() => setActiveTab("pdf")}>PDF Splitter</button>
        <button onClick={() => setActiveTab("whatsapp")}>WhatsApp</button>
        <button onClick={() => setActiveTab("logs")}>Logs</button>
      </nav>
      {activeTab === "certificates" && <CertificatesTab />}
      {activeTab === "pdf" && <PdfSplitterTab />}
      {activeTab === "whatsapp" && <WhatsAppTab />}
      {activeTab === "logs" && <LogsTab />}
    </div>
  )
}
