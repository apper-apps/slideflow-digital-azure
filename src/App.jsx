import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import PresentationViewer from '@/components/pages/PresentationViewer'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-primary">
        <PresentationViewer />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </BrowserRouter>
  )
}

export default App