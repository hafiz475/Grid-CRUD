import { useEffect, useState } from "react";

const useFetch = (url) => {
    
    const [data, setData] = useState( null );
    const [isPending, setIsPending] = useState(true);
    const [error, SetError] = useState(null);

    useEffect( () => {

        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal } )

            .then(res => { 
                if(!res.ok){
                    throw Error('could find the data for that resourse');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                SetError(null);
            })
            .catch(err => {

                if( err.name === 'AbortError' ){
                    console.log('fetch aborted');
                } else {
                    SetError(err.message);
                    setIsPending(false);
                }

            })
        },  1000);

        return () => abortCont.abort();

    }, [url] );

    return { data, isPending, error }
}
 
export default useFetch;