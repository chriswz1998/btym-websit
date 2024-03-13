'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import useHttp from '@/hooks/useActions'
import { useAuth } from '@/context/AuthContext'
import { userDetails } from '@/lib/model'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
    email: z.string().min(5, { message: 'Email must be at least 5 characters.' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters.' })
});

function UserLogin(){
    const router = useRouter()
    const { isLoading, execute } = useHttp<z.infer<typeof formSchema>, userDetails>()

    const { login } = useAuth()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema), defaultValues: {
            email: '', password: ''
        }
    });

    const onSubmit = async(values: z.infer<typeof formSchema>) => {
        const response = await execute('auth/signIn', 'POST', values)
        if(response?.access_token){
            login(response?.result)
            window.localStorage.setItem('access_token', response?.access_token || '')
            router.push('/backend')
        }
    }

    return (<div className="w-full h-full bg-blue-100 flex flex-col items-center justify-center">
        <Form { ...form }>
            <form onSubmit={ form.handleSubmit(onSubmit) } className="space-y-8 bg-white p-10 rounded shadow">
                <FormField
                    control={ form.control }
                    name="email"
                    render={ ({ field }) => (<FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="" { ...field } />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>) }
                />
                <FormField
                    control={ form.control }
                    name="password"
                    render={ ({ field }) => (<FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input type="password" { ...field } />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>) }
                />
                <Button disabled={ isLoading } type="submit" className="w-full">Submit</Button>
            </form>
        </Form>
    </div>)
}

export default UserLogin