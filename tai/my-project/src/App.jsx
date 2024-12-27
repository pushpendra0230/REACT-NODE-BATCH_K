import React from 'react'
import contacts from '../src/utility/data';
import CardComponents from '../src/components/CardComponents';


function App() {
  return (
    <div className='flex flex-wrap h-screen w-full text-center gap-3 bg-gradient-to-t from-indigo-900 to-slate-900'>
      <CardComponents items={contacts} />
    </div>
  )
}
export default App