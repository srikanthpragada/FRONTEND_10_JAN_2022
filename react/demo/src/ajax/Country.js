import React, { useState } from 'react'
import $ from 'jquery'

export default function Country() {
    const [code, setCode] = useState("IND")
    const [found, setFound] = useState(false)
    const [country, setCountry] = useState({})
    const [error, setError] = useState({})
    const [done, setDone] = useState(false)

    function handleChange(event) {
        setCode(event.target.value)
    }

    function getCountryInfo() {
        // ajax request 
        $.ajax({
            url: `https://restcountries.com/v3.1/alpha/${code}`,
            method: 'GET',
            success: function (result) {
               
                if (result.length > 0) {
                    setFound(true)
                    setCountry(result[0])  // First element is country info 
                }
                else {
                    setFound(false)
                    setError( {errorMessage : "Code Not Found"})
                }

                setDone(true)
            },
            error: function (error) {
                setFound(false)
                setError({errorMessage : error.statusText})
                setDone(true)
            }

        })
    }

    function DisplayResult() {

        if (done)
            if (found)
                return <CountryInfo country={country} />
            else
                return <Error error={error} />
        else
            return null;  // display nothing 
    }

    return (
        <>
            <h1>Country Information</h1>
            Country Code : <input type="text" value={code} onChange={handleChange} />
            &nbsp;
            <button className="btn-primary" onClick={getCountryInfo}>Get Info</button>
            <p></p>
            <DisplayResult />
        </>

    )
}


function CountryInfo(props) {
    return (
        <>
            <h2>{props.country.name.common}</h2>
            <h4> {props.country.capital[0]}</h4>
            <h4> {props.country.population}</h4>
            <p></p>
            <img src={props.country.flags.png} alt="" />
        </>
    )
}

function Error(props) {
    return (
        <h2 className="text-danger">{props.error.errorMessage}</h2>
    )

}
