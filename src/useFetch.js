/*Making a custom hook*/
import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/${url}`) 
         .then(res => {
             if(!res.ok){
                 throw Error('Could not fetch the data for that resource');
             }
             return res.json();
         })
         .then(data => {
             setData(data);
             setIsLoading(false);
             setError(null);
         })
         .catch(err =>{
             console.log(err.message);
             setIsLoading(false);
             setError(err.message);
         })
        
     }, [url]);
     return { data, isLoading, error};
}
 
export default useFetch;