import { useState, useCallback } from 'react';

const useHttp = <IT, OT>() => {
    const [ data, setData ] = useState<OT | null>(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState<string | null>(null);

    const execute = useCallback(async(url: string, method = 'GET', body?: IT) => {
        setIsLoading(true);
        setError(null);
        const controller = new AbortController();
        const signal = controller.signal;
        const token = window.localStorage.getItem('access_token');
        try{
            const response = await fetch(`${ process.env.NEXT_PUBLIC_REQUEST_URL }/api/${ url }`, {
                method, headers: {
                    'Content-Type': 'application/json', ...(token ? { 'Authorization': `Bearer ${ token }` } : null)
                }, body: body ? JSON.stringify(body) : null, signal
            });

            console.log(response)
            // url:http://localhost:3100/auth/me
                if(response.ok){
                    const jsonData = await response.json();
                    setData(jsonData);
                    return jsonData;
                }
        } catch(err) {
            setError(err instanceof Error ? err.message : String(err));
        } finally {
            setIsLoading(false);
        }

        return () => {
            controller.abort();
        };
    }, []);

    return { data, isLoading, error, execute };
};

export default useHttp;
