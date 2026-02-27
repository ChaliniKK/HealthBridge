import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [apiStatus, setApiStatus] = useState("Connecting...")

  useEffect(() => {
    // Calling Python API
    axios.get('http://127.0.0.1:8000/')
      .then(res => setApiStatus(res.data.status))
      .catch(() => setApiStatus("Backend Offline ❌"))
  }, [])

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>🏥 HealthBridge Provider Portal</h1>
      <div style={{ padding: '20px', backgroundColor: '#f0f4f8', borderRadius: '8px' }}>
        <h3>System Status: <strong>{apiStatus}</strong></h3>
      </div>
      <p>Welcome, Doctor. Your patient analytics will appear here.</p>
    </div>
  )
}

export default App