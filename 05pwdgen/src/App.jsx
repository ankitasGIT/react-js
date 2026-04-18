import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    {/* Logic for generating random password of length */}
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    let pwd = ""
    
    if(numbers) str += "0123456789"
    if(characters) str += "!~`@#$%^&*(){}[]"

    for(let i = 1; i <= length; i++)
    {
      let randomIdx = Math.floor(Math.random() * str.length);
      console.log(Math.random())
      console.log(Math.random() * str.length)
      console.log(randomIdx)
      pwd += str[randomIdx]
    }
    setPassword(pwd)
  }, [length, numbers, characters, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numbers, characters, passwordGenerator])

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-800 '>
        <h3 className='text-white text-2xl text-center my-3'>Password Generator</h3>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 gap-x-1'>
          <input type='text' value={password} ref={passwordRef} className="outline-none border-1 shadow-md rounded-lg w-full py-1 px-3 text-white" placeholder='Password'/>
          <button className='outline-none rounded-lg bg-blue-700 text-white px-3 py-0.5' onClick={copyToClipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 px-3 py-2'>
          <div className='flex items-center gap-x-2 text-white'>
            <input type='range' id='length' min={8} max={19} value={length} className='cursor-pointer ' onChange={(e) => {setLength(e.target.value)}}/> <label>Length: {length}</label>
            <input type='checkbox' id='numbersInput' defaultChecked={numbers} className='cursor-pointer' onChange={() => {setNumbers((prev) => !prev)}}/> <label>Numbers</label>
            <input type='checkbox' id='characters' value={characters} className='cursor-pointer' onChange={() => {setCharacters((prev) => !prev)}}/> <label>Characters</label>
          </div>
        </div>
      </div>  
    </>
  )
}

export default App
