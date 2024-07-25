import { useState } from 'react'

const Button = ({onClick, text}) => {
  return <button onClick = {onClick}>{text}</button>
}
const StatisticLine = ({text, value, sufijo}) =>{
  return(
    <tr>
      <td>{text}</td>
      <td>{value}{sufijo}</td>
    </tr>
  )
}
const Statistics = ({good,bad,neutral}) =>{
  if (good+neutral+bad==0)
  return(
    <>No feedback given</>
  )
  else
  return(
    <table>
      <tbody>
      <StatisticLine  text = 'good' value = {good} />
      <StatisticLine  text = 'neutral' value = {neutral} />
      <StatisticLine  text = 'bad' value = {bad} />
      <StatisticLine  text = 'all' value = {good + neutral + bad} />
      <StatisticLine  text = 'average' value = {(good -  bad) / (good + neutral + bad)} />
      <StatisticLine  text = 'positive' value = {(good / (good + neutral + bad))*100} sufijo = '%' />
      </tbody>
    </table>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const addGood = ()=>{setGood(good + 1)}
  const addBad = ()=>{setBad(bad + 1)}
  const addNeutral = ()=>{setNeutral(neutral + 1)}

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={addGood} text = 'good' />
      <Button onClick={addNeutral} text = 'neutral' />
      <Button onClick={addBad} text = 'bad' />


      <h2>statistics</h2>
      <Statistics  
        good={good}
        neutral={neutral}
        bad = {bad}
        />
    </div>
  )
}

export default App
