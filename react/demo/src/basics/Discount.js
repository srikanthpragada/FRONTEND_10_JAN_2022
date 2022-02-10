
import React, { useState } from 'react'

export default function Discount() {
    // State 
    const [price, setPrice] = useState(10000)
    const [disrate, setDisRate] = useState(15)

    const result = null;

    function changePrice(event) {
        // Change state 
        setPrice(event.target.value)
    }

    function changeDisRate(event) {
        // Change state 
        setDisRate(event.target.value)
    }

    return (
      <>
            <h2>Discount Calculation</h2>
            <form>
                Price <br />
                <input type="number" name="price" value={price} onChange={changePrice} />
                <p></p>

                Discount Rate <br />
                <input type="number" name="disrate" value={disrate} onChange={changeDisRate}  />
                <p></p>
                <button>Calculate</button>
                <h2>{result}</h2>

            </form>

            
      </>
    
  )
}
