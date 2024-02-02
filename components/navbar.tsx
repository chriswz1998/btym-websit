import { Logo } from '@/app/(marketing)/_components/logo'
import { Navigation } from '@/components/navigation'

export const Navbar = () => {
    return (<div className={ 'w-full bg-mask-color5' }>
            <div className={ `px-20 mx-auto` }>
                <div
                    className={ `flex justify-between` }>
                    <div className={ `flex items-center text-white ` }>
                        <Logo/>
                        <Navigation/>
                    </div>
                </div>
            </div>
        </div>
    )
}
