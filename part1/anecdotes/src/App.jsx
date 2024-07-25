import { useState } from 'react'

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]
const randomNum = ()=> {
  let rnum=Math.floor(Math.random() * anecdotes.length)
  console.log('randomNum = ' + rnum + '/' + anecdotes.length)
  return(rnum)
}

const App = () => {

  const [selected, setSelected] = useState(0)
  const [maxVoted, setMaxVoted] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0,0,0])
  const addVote = ()=>{
    const copy = [...points]
    // incrementa en uno el valor de la posición 2
    copy[selected] += 1    
    console.log('Votos: ' + copy)
    setPoints(copy)
    setMaxVoted(maxIndex(copy))
  }
  
  const maxIndex = (arrPoints)=> {

    const maxValue = Math.max(...arrPoints);
    console.log('maxValue: '+ maxValue)
    const indexMax = arrPoints.indexOf(maxValue);    
    console.log('indexMax '+ indexMax)
    console.log(anecdotes[indexMax])
    return indexMax
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]}<br/>
        (has {points[selected]} votes)<br/>
          <button onClick={()=>addVote()}>vote</button>
          <button onClick={()=>setSelected(randomNum())}>next anecdote</button>

      </div>
      <h1>Anecdote with most votes</h1>
      <div>
        {anecdotes[maxVoted]}<br/>
        (has {points[maxVoted]} votes)<br/>

      </div>
    </>
  )
}

export default App
