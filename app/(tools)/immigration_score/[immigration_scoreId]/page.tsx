import { EE } from '@/app/(tools)/immigration_score/_components/EE'

const Immigration_score = ({ params }: { params: { immigration_scoreId: string } }) => {
    return (<div>{ params.immigration_scoreId === 'EE' ? <EE/> : <div>404</div> }</div>)
}

export default Immigration_score