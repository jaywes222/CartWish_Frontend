import React from 'react'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <section className='app h-screen w-full bg-black text-white grid grid-rows-[80px_auto]'>
      <Navbar />
      <main>Main Content</main>
    </section>
  )
}

export default App
