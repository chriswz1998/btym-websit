export const HoverCardContentDetails = () => {
    return (
        <div className={'text-black space-y-4 p-5'}>
            <div className='flex space-x-4'>
                <div className='bg-red-600 h-[45px] w-[5px]'/>
                <div className={'space-y-2'}>
                    <div>加拿大教育概况</div>
                    <div className={'flex items-center space-x-2 text-xs font-semibold'}>
                        <div className='w-[5px] h-[5px] bg-orange-500 '/>
                        <p>CANADIAN EDUCATION OVERVIEW</p>
                    </div>
                </div>
            </div>
            <div className={'space-y-4'}>
                <div className={'text-sm space-y-4'}>
                    <div className={'font-bold text-blue-900'}>K-12中小学教育</div>
                    <div className={'text-xs space-y-2'}>
                        <p className={'text-gray-600'}>中小学排名 <span
                            className={'text-blue-900'}>K-12 School Ranking</span></p>
                        <p className={'text-gray-600'}>公校概况 <span className={'text-blue-900'}>Introduction of Public School</span>
                        </p>
                        <p className={'text-gray-600'}>私校概况 <span className={'text-blue-900'}>Introduction of Private School</span>
                        </p>
                    </div>
                </div>
                <div className={'text-sm space-y-4'}>
                    <div className={'font-bold text-blue-900'}>职业专科教育</div>
                    <div className={'text-xs space-y-2'}>
                        <p className={'text-gray-600'}>
                            艺术专科
                            <span className={'text-blue-900'}>Art College</span>
                        </p>
                    </div>
                </div>
                <div className={'text-sm space-y-4'}>
                    <div className={'font-bold text-blue-900'}>大学教育</div>
                    <div className={'text-xs space-y-2'}>
                        <p className={'text-gray-600'}>
                            大学介绍
                            <span className={'text-blue-900'}>University in Canada</span>
                        </p>
                        <p className={'text-gray-600'}>
                            大学排名
                            <span className={'text-blue-900'}>University Ranking</span>
                        </p>
                    </div>
                </div>
                <div className={'text-sm space-y-4'}>
                    <div className={'font-bold text-blue-900'}>成人教育</div>
                    <div className={'text-xs space-y-2'}>
                        <p className={'text-gray-600'}>
                            英语学习
                            <span className={'text-blue-900'}>English Study</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}