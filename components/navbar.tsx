import { Logo } from '@/app/(marketing)/_components/logo'
import { Navigation } from '@/components/navigation'
import {useNav} from "@/context/nav-context";

export const Navbar = () => {
    const { data, isLoading } = useNav();
    return (<div className={ 'w-full bg-mask-color5' }>
            <div className={ `px-20 mx-auto` }>
                <div
                    className={ `flex justify-between` }>
                    <div className={ `flex items-center text-white ` }>
                        <Logo/>
                        <Navigation data={data}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
