import Image from 'next/image'

export const Business_card = ({ url, des, name, job_title }: {
    url: string, des: string, name: string, job_title: string
}) => {
    return (<div className="mb-20 w-[48%] flex rounded-xl p-0 shadow-[0_6px_30px_rgba(0,0,0,0.12)] overflow-hidden">
        <Image
            className={ 'w-[280px] h-[360px]' }
            src={ url } alt="" width={ 350 }
            height={ 100 }/>
        <div className="p-8 text-left space-y-40">
            <blockquote>
                <p className="text-lg font-medium">
                    { des }
                </p>
            </blockquote>
            <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                    { name }
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                    { job_title }
                </div>
            </figcaption>
        </div>
    </div>)
}