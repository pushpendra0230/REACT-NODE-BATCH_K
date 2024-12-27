import React from 'react'
import products from './utility/data'
import CardComponents from './components/CardComponents'
const App = () => {
  return (
    <>
      <div className=" w-fullscreen h-fullscreen flex justify-center items-center flex-wrap bg-blue-900 ">
        <CardComponents items={products} />
      </div>
    </>
  )
}
export default App;