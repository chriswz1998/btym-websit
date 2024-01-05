'use client'

import React from 'react'

export default function Condition_self_testId({ params }: { params: { condition_self_testId: string } }){
    const { condition_self_testId } = params
    return (<div>
        <iframe
            src={ condition_self_testId === '0' ? 'https://saas.qikebao.com/landingPage/detail/WVRf?from=QF1fQxc%3D' : condition_self_testId === '1' ? 'https://saas.qikebao.com/landingPage/detail/WVRc?from=QF1fQxc%3D' : condition_self_testId === '2' ? 'https://saas.qikebao.com/landingPage/detail/WVRd?from=QF1fQxc%3D' : condition_self_testId === '3' ? 'https://saas.qikebao.com/landingPage/detail/WVRa?from=QF1fQxc%3D' : '' }
            width="100%"
            height="1050px"
            allowFullScreen
        ></iframe>
    </div>)
}
