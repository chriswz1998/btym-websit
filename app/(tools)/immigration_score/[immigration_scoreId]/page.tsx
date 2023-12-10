import { EE } from '@/app/(tools)/immigration_score/_components/EE'
import { MPNP } from '@/app/(tools)/immigration_score/_components/MPNP'

const Immigration_score = ({ params }: { params: { immigration_scoreId: string } }) => {
    return (<div>{ params.immigration_scoreId === 'EE' ? <EE/> : params.immigration_scoreId === 'MPNP' ? <MPNP/> :
        <div>{ params.immigration_scoreId }</div> }</div>)
}

export default Immigration_score