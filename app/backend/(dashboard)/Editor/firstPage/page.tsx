'use client'
import ChangeBannerLinkCard from '@/app/backend/_components/change-banner-link-card'
import ChangeCarousel from '@/app/backend/_components/change-carousel'

export default function EditFirstPage(){
    return (<div className={ 'p-5 border flex space-x-4' }>
        <ChangeBannerLinkCard/>
        <ChangeCarousel/>
    </div>)
}
