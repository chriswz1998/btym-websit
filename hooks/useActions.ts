import { useState, useCallback, useEffect } from 'react';

interface RequestOptions{
    method?: string;
    headers?: Record<string, string>;
    body?: string;
}

const useHttp = <T>(url: string, options?: RequestOptions, autoExecuteOnMount: boolean = false) => {
    const [ data, setData ] = useState<T | null>(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState<string | null>(null);

    const execute = useCallback(async(url: string, options?: RequestOptions) => {
        setIsLoading(true);
        setError(null);
        try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_REQUEST_URL}/${url}`, options);
            console.log(process.env.NEXT_PUBLIC_REQUEST_URL)
            // const response = await fetch(url, options);
            if( !response.ok){
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch(err) {
            setError(err instanceof Error ? err.message : String(err));
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        if(autoExecuteOnMount){
            execute(url, options);
        }
    }, [ url, autoExecuteOnMount, execute ]);

    return { data, isLoading, error, execute };
};

export default useHttp;