import { useEffect, useState } from 'react'
import { Display } from '../Display/Display'
import { Information } from '../Information/Information'
import './App.css'

function App() {
  const [text, setText] = useState<string>('');
  const [symbols, setSymbols] = useState<number>(0);
  const [words, setWords] = useState<number>(0);
  
  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  }

  useEffect(() => {
    setSymbols(countSpecialCharacters(text));
    setWords(countWords(text))
  }, [text]);

  function countSpecialCharacters(text: string): number {
    const specialSymbols = /[^\s\w]/g;
    const matches = text.match(specialSymbols);
    return matches ? matches.length : 0;
  }

  function countWords(text: string): number {
    const regex = /\w+/g;
    const matches = text.match(regex);
    return matches ? matches.length : 0;
  }
  

  return (
    <div className='app'>
      <h1>Text Counter</h1>
      <Display 
        onChange={onChangeHandler} 
      />
      <Information 
        words={words} 
        characters={text.length} 
        sybmols={symbols}
      />
    </div>
  )
}

export default App
