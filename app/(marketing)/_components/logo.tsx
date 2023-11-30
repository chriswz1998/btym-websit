import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
    return (
        <div className="hidden md:flex items-center gap-x-2 mr-8">
            <Link href={ '/' }>
                <Image
                    src="/logo.png"
                    height="71"
                    width="200"
                    alt="Logo"
                />
            </Link>

        </div>
    )
}