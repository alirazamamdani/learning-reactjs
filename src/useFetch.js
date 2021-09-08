import { useState , useEffect } from "react"


const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isLoading , setInLoading] = useState(true)
    const [error , setError ] = useState(null)

    useEffect(()=> {
        setTimeout(() => {
            fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw Error("could not fetch the data for that resource")
                }
                return response.json();
            })
            .then(data => {
            //  console.log(data)
             setData(data)
             setInLoading(false)
             setError(null)
            })
            .catch(err => {
                setInLoading(false)
                setError(err.message)
            })
        }, 1000)
       
    }, [url])

    return {data, isLoading , error}
}

export default useFetch