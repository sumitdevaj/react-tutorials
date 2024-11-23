import { useEffect, useState } from "react";

function useFetchData(url) {
    const [data, setData] = useState(null)
    const [loading, setloading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error('network error: ');
                }
                const result = await res.json();
                setData(result);


            }
            catch (e) {
                setError(e.message)
            }
            finally {
                setloading(false);
            }
        }
        fetchData()
    }, [url])
    return { data, loading, error };
}

export default useFetchData;