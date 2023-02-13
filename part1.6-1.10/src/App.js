import React, { useState } from 'react'

const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1> Give Feedback </h1>
                <div>

                    <button onClick={()=> setGood(good +1)}>
                        good
                    </button >

                    <button onClick={()=>setNeutral(neutral +1) }>
                        neutral
                    </button>

                    <button onClick={()=>setBad(bad +1)}>
                        bad
                    </button>
                </div>
            <h1> Statistic </h1>
            <div>
                <p> good {good}</p>
                <p> neutral {neutral}</p>
                <p> bad {bad}</p>
                <p> all {good+neutral+bad}</p>
                <p> average {(good - bad)/(good+bad+neutral)}</p>
                <p> positive {good/(good+neutral+bad)*100}%</p>
                </div>
        </div>
        )
      }
    
        export default App
