'use client'
import ChangeImageUrlCard from '@/app/backend/_components/change-image-url-card'
import ChangeBannerLinkCard from '@/app/backend/_components/change-banner-link-card'

export default function EditFirstPage(){
    return (<div className={ 'p-5 border grid grid-cols-3 gap-4 auto-rows-auto' }>
        <ChangeImageUrlCard/>
        <ChangeBannerLinkCard/>
    </div>)
}
