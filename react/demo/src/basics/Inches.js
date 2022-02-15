import  React, { useState }  from 'react'

// Uncontrolled Component 

export default function Inches() {
    const [inches, setInches] = useState(0)
    const [options, setOptions] = useState({ cm: true, mm: true, feet: false })
    const [result2, setResult2] = useState("")

    // get access to DOM element 
    let resultElement = React.createRef()

    function handleCheckboxChange(event) {
        const {name, checked} = event.target

        setOptions({ ...options, [name]: checked })
        //console.log(options)
    }

    function changeInches(event) {
        setInches(event.target.value)
    }

    function convert() {
        let result = ""
        
        if (options.cm)
            result += `${inches} inches = ${inches * 2.5} cm <br/>`
        
        if (options.mm)
            result += `${inches} inches = ${inches * 2.5 * 10} mm <br/>`
        
        if (options.feet)
            result += `${inches} inches = ${inches / 12} feet <br/>`
        
        resultElement.current.innerHTML = result;
        //console.log(resultElement)
        setResult2(result)  
    }

    return (
      <>
      <h2>Inches Conversion</h2>
            Inches : <input type="number" value={inches}  onChange={changeInches} />
            <p></p>
            <input name="cm" type="checkbox" checked={options.cm}
                onChange={handleCheckboxChange} />CM
            <input name="mm" type="checkbox" checked={options.mm}
                onChange={handleCheckboxChange} />MM
            <input name="feet" type="checkbox" checked={options.feet}
                onChange={handleCheckboxChange} />FEET
            <p></p>
            <button onClick={convert}>Convert</button>
            <p></p>
            <h4 ref={resultElement}> </h4>
            <div>
                {result2}
            </div>
        </>
  )
}
