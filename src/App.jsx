// import { useState } from 'react'
import Header from "./Components/header.jsx";
import './css/style.scss'
import Preview from "./Components/preview.jsx";
import Footer from "./Components/footer.jsx";

function App() {
  return (
      <div className="App">
        <div className="wrapper">
            <Header />
            <Preview />
            <Footer />
        </div>
      </div>
  )
}

export default App
