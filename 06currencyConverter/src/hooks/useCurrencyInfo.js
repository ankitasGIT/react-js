import { useEffect, useState } from "react";

// Custom Hook for currency
// Why useEffect - Because I want to call this API only when this custom hook useCurrencyINfo is called not unless.
// function useCurrencyInfo(currency) {
//     const [data, setData] = useState({})

//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
//         .then((res) => {
//             res.json()
//         })
//         .then((res) => {
//             setData(res[currency])
//         })

//     }, [currency])
    
//     console.log(data)
//     return data
// }

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`)
                }
                return res.json() // ✅ IMPORTANT: return this
            })
            .then((res) => {
                setData(res[currency])
                setError(null)
            })
            .catch((err) => {
                setError(err.message)
            })

    }, [currency])

    return { data, error }
}
export default useCurrencyInfo;