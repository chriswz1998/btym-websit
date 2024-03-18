import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation'

const useHttp = <IT, OT>() => {
    const [ data, setData ] = useState<OT | null>(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState<string | null>(null);
    const router = useRouter()

    const execute = useCallback(async(url: string, method = 'GET', body?: any, headers?: HeadersInit) => {
        setIsLoading(true);
        setError(null);
        const token = window.localStorage.getItem('access_token');

        const requestHeaders = new Headers(headers);
        if(token){
            requestHeaders.append('Authorization', `Bearer ${ token }`);
        }

        // 如果body是FormData，移除Content-Type头部以让浏览器自己设置
        if(body instanceof FormData){
            requestHeaders.delete('Content-Type');
        } else {
            // 只有当body不是FormData时才设置Content-Type为application/json
            requestHeaders.append('Content-Type', 'application/json');
            body = JSON.stringify(body);
        }

        try{
            const response = await fetch(`${ process.env.NEXT_PUBLIC_REQUEST_URL }/api/${ url }`, {
                method, headers: requestHeaders, body: body
            })
            const contentType = response.headers.get('Content-Type');
            if(contentType && contentType.includes('application/json')){
                const jsonData = await response.json()

                if(jsonData.statusCode && jsonData.statusCode === 401){
                    router.push('/backend/userLogin')
                    return // 返回登陆页面/backend/userLogin/
                }
                setData(jsonData);
                return jsonData as OT
            } else {
                return await response.text();
            }
        } catch(err) {
            setError('is api error')
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { data, isLoading, error, execute };
};

export default useHttp;
