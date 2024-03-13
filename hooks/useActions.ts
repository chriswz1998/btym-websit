import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation'

const useHttp = <IT, OT>() => {
    const [ data, setData ] = useState<OT | null>(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState<string | null>(null);
    const router = useRouter()

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

            const jsonData = await response.json();
            if(jsonData.statusCode && jsonData.statusCode === 401){
                router.push('/backend/userLogin')
                return // 返回登陆页面/backend/userLogin/
            }
            if(jsonData){
                setData(jsonData);
                return jsonData;
            }
            setError('is api error')
        } catch(err) {
            setError('is api error')
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
