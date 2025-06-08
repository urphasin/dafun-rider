import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />

      {/* TEMPORARY MAIN CONTENT */}
      <main className="flex-grow p-6">
        <h2 className="text-xl">Welcome to Da-Fun Riders</h2>
        <p>We'll help you find or offer a ride.</p>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
