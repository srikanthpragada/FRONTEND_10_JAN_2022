
import React, { useState } from 'react'

export default function Discount() {
    // State 
    const [price, setPrice] = useState(10000)
    const [disrate, setDisRate] = useState(15)
    const [result , setResult] = useState(0)
    
    function changePrice(event) {
        // Change state 
        setPrice(event.target.value)
    }

    function changeDisRate(event) {
        // Change state 
        setDisRate(event.target.value)
    }

    function calculate(event) {
        // console.log(event)
        setResult(price * disrate / 100);
        event.preventDefault()
    }

    return (
      <>
            <h2>Discount Calculation</h2>
            <form>
                Price <br />
                <input type="number" name="price" value={price}
                       onChange={changePrice} />
                <p></p>

                Discount Rate <br />
                <input type="number" name="disrate" value={disrate} onChange={changeDisRate}  />
                <p></p>
                <button onClick={calculate}>Calculate</button>
                <h2>{result}</h2>

            </form>

            
      </>
    
  )
}
