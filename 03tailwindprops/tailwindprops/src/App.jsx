
import './App.css'
import Card from './Card'

function App() {
  let myObj={
    name: "ankita",
    age: 22
  }

  return (
    <>
      <h1 className='bg-blue-400 text-black p-4 rounded-xl'> Tailwind test</h1>
      <Card name="ankita" myObj={myObj}/>
      <Card name="ria"/>

    </>
  )
}

export default App
