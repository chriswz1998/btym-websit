'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { ChangeEvent, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const lan1 = {
    listen: [ {
        name: 'CLB3或以下', score: 0
    }, {
        name: 'CLB4', score: 12
    }, {
        name: 'CLB5', score: 17
    }, {
        name: 'CLB6', score: 20
    }, {
        name: 'CLB7', score: 22
    }, {
        name: 'CLB8或以上', score: 25
    } ], speak: [ {
        name: 'CLB3或以下', score: 0
    }, {
        name: 'CLB4', score: 12
    }, {
        name: 'CLB5', score: 17
    }, {
        name: 'CLB6', score: 20
    }, {
        name: 'CLB7', score: 22
    }, {
        name: 'CLB8或以上', score: 25
    } ], read: [ {
        name: 'CLB3或以下', score: 0
    }, {
        name: 'CLB4', score: 12
    }, {
        name: 'CLB5', score: 17
    }, {
        name: 'CLB6', score: 20
    }, {
        name: 'CLB7', score: 22
    }, {
        name: 'CLB8或以上', score: 25
    } ], write: [ {
        name: 'CLB3或以下', score: 0
    }, {
        name: 'CLB4', score: 12
    }, {
        name: 'CLB5', score: 17
    }, {
        name: 'CLB6', score: 20
    }, {
        name: 'CLB7', score: 22
    }, {
        name: 'CLB8或以上', score: 25
    } ]
}

const lan2 = [ {
    name: 'CLB5或以上', score: 25
}, {
    name: 'CLB4或以下', score: 0
} ]

const workExps = [ {
    name: '1年以下', score: 0
}, {
    name: '1年', score: 40
}, {
    name: '2年', score: 50
}, {
    name: '3年', score: 60
}, {
    name: '4年或以上', score: 75
} ]

const govWorkExps = [ {
    name: '有', score: 100
}, {
    name: '没有', score: 0
} ]

const education = [ {
    name: '硕士或博士学位', score: 125
}, {
    name: '2学年专上学历', score: 115
}, {
    name: '1个三学年专上学历', score: 110
}, {
    name: '1个两学年专上学历', score: 100
}, {
    name: '1个一学年专上学历', score: 70
}, {
    name: '技工证书', score: 70
}, {
    name: '无专上学历', score: 0
} ]

const dominance = [ {
    name: '硕士或博士学位', score: 125
}, {
    name: '有曼省近亲', score: 200
}, {
    name: '以前在曼省有六个月及以上的工作经验', score: 100
}, {
    name: '在曼省完成过至少2年的专上学历', score: 100
}, {
    name: '在曼省完成过至少1年的专上学历', score: 50
}, {
    name: '有曼省朋友或远亲', score: 50
}, {
    name: '在曼省连续全职工作6个月并获得同一雇主签发的长期 job offer', score: 500
}, {
    name: '获得曼省战略主动招聘邀请函', score: 500
}, {
    name: '申请人移民局目的地为Winnipeg以外', score: 50
} ]

const risk1 = [ {
    name: '是', score: -100
}, {
    name: '否', score: 0
} ]

const risk2 = [ {
    name: '是', score: -100
}, {
    name: '否', score: 0
} ]

export const MPNP = () => {
    const [ ageScore, setAgeScore ] = useState(0)
    const [ Lan1Score, setLan1Score ] = useState({
        listen: 0, speak: 0, write: 0, read: 0
    })
    const [ lan2Score, setLan2Score ] = useState(0)
    const [ workExp, setWorkExp ] = useState(0)
    const [ govWorkExp, setGovWorkExp ] = useState(0)
    const [ edu, setEdu ] = useState(0)
    const [ dnc, setDnc ] = useState(0)
    const [ risks1, setRisks1 ] = useState(0)
    const [ risks2, setRisks2 ] = useState(0)
    const isAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const age = parseInt(e.target.value, 10)
        // 年龄打分逻辑
        if(age < 18) setAgeScore(0)
        if(age === 18) setAgeScore(20)
        if(age === 19) setAgeScore(30)
        if(age === 20) setAgeScore(40)
        if(age > 20 && age <= 45) setAgeScore(75)
        if(age === 46) setAgeScore(40)
        if(age > 46){
            setAgeScore((40 - ((age - 46) * 10)) > 0 ? (40 - ((age - 46) * 10)) : 0)
        }
    }
    const isLan1ListenChange = (e: string) => {
        const { listen } = lan1
        const a = listen.filter(item => item.name === e)[0].score
        setLan1Score({ ...Lan1Score, listen: a })
    }
    const isLan1SpeakChange = (e: string) => {
        const { speak } = lan1
        const a = speak.filter(item => item.name === e)[0].score
        setLan1Score({ ...Lan1Score, speak: a })
    }
    const isLan1WriteChange = (e: string) => {
        const { write } = lan1
        const a = write.filter(item => item.name === e)[0].score
        setLan1Score({ ...Lan1Score, write: a })
    }
    const isLan1ReadChange = (e: string) => {
        const { read } = lan1
        const a = read.filter(item => item.name === e)[0].score
        setLan1Score({ ...Lan1Score, read: a })
    }
    const isLan2Change = (e: string) => {
        const a = lan2.filter(item => item.name === e)[0].score
        setLan2Score(a)
    }
    const isWorkExpChange = (e: string) => {
        const a = workExps.filter(item => item.name === e)[0].score
        setWorkExp(a)
    }
    const isGovWorkExpChange = (e: string) => {
        const a = govWorkExps.filter(item => item.name === e)[0].score
        setGovWorkExp(a)
    }

    const isEduChange = (e: string) => {
        const a = education.filter(item => item.name === e)[0].score
        setEdu(a)
    }
    const isDncChange = (e: string) => {
        const a = dominance.filter(item => item.name === e)[0].score
        setDnc(a)
    }

    const isRisks1Change = (e: string) => {
        const a = risk1.filter(item => item.name === e)[0].score
        setRisks1(a)
    }
    const isRisks2Change = (e: string) => {
        const a = risk2.filter(item => item.name === e)[0].score
        setRisks2(a)
    }

    return (<div className={ 'flex flex-col items-center justify-center p-20 space-y-8' }>
        <div className={ 'w-1/4 space-y-2' }>
            <div className={ 'flex justify-between' }>
                <Label htmlFor="number" className={ 'text-[18px]' }>年龄</Label>
                <span className={ 'text-[#E83328] text-[18px] font-bold' }>{ ageScore }</span>
            </div>
            <Input type="number" placeholder="年龄" onChange={ (e) => isAgeChange(e) }/>
        </div>
        <div className={ 'w-1/4 space-y-2' }>
            <div className={ 'flex justify-between' }>
                <Label htmlFor="number" className={ 'text-[18px]' }>第一语言</Label>
                <span
                    className={ 'text-[#E83328] text-[18px] font-bold' }>{ Lan1Score.listen + Lan1Score.write + Lan1Score.speak + Lan1Score.read }</span>
            </div>

            <Select onValueChange={ (e) => isLan1ListenChange(e) }>
                <SelectTrigger>
                    <SelectValue placeholder="听力"/>
                </SelectTrigger>
                <SelectContent>
                    { lan1.listen.map((item, index) => {
                        return (<SelectItem key={ index } value={ item.name }>{ item.name }</SelectItem>)
                    }) }
                </SelectContent>
            </Select>
            <Select onValueChange={ (e) => isLan1ReadChange(e) }>
                <SelectTrigger>
                    <SelectValue placeholder="阅读"/>
                </SelectTrigger>
                <SelectContent>
                    { lan1.read.map((item, index) => {
                        return (<SelectItem key={ index } value={ item.name }>{ item.name }</SelectItem>)
                    }) }
                </SelectContent>
            </Select>
            <Select onValueChange={ (e) => isLan1SpeakChange(e) }>
                <SelectTrigger>
                    <SelectValue placeholder="口语"/>
                </SelectTrigger>
                <SelectContent>
                    { lan1.
                        speak.map((item, index) => {
                            return (<SelectItem key={ index } value={ item.name }>{ item.name }</SelectItem>)
                        }) }
                </SelectContent>
            </Select>
            <Select onValueChange={ (e) => isLan1WriteChange(e) }>
                <SelectTrigger>
                    <SelectValue placeholder="写作"/>
                </SelectTrigger>
                <SelectContent>
                    { lan1.write.map((item, index) => {
                        return (<SelectItem key={ index } value={ item.name }>{ item.name }</SelectItem>)
                    }) }
                </SelectContent>
            </Select>
        </div>

        <div className={ 'w-1/4 space-y-2' }>
            <div className={ 'flex justify-between' }>
                <Label htmlFor="number" className={ 'text-[18px]' }>第二语言</Label>
                <span
                    className={ 'text-[#E83328] text-[18px] font-bold' }>{ lan2Score }</span>
            </div>

            <Select onValueChange={ (e) => isLan2Change(e) }>
                <SelectTrigger>
                    <SelectValue placeholder="请选择"/>
                </SelectTrigger>
                <SelectContent>
                    { lan2.map((item, index) => {
                        return (<SelectItem key={ index } value={ item.name }>{ item.name }</SelectItem>)
                    }) }
                </SelectContent>
            </Select>
        </div>
        <div className={ 'w-1/4 space-y-2' }>
            <div className={ 'flex justify-between' }>
                <Label htmlFor="number" className={ 'text-[18px]' }>工作时长</Label>
                <span
                    className={ 'text-[#E83328] text-[18px] font-bold' }>{ workExp }</span>
            </div>

            <Select onValueChange={ (e) => isWorkExpChange(e) }>
                <SelectTrigger>
                    <SelectValue placeholder="请选择"/>
                </SelectTrigger>
                <SelectContent>
                    { workExps.map((item, index) => {
                        return (<SelectItem key={ index } value={ item.name }>{ item.name }</SelectItem>)
                    }) }
                </SelectContent>
            </Select>
        </div>
        <div className={ 'w-1/4 space-y-2' }>
            <div className={ 'flex justify-between' }>
                <Label htmlFor="number" className={ 'text-[18px]' }>是否为通过曼省政府资格许可的工作(额外加分)</Label>
                <span
                    className={ 'text-[#E83328] text-[18px] font-bold' }>{ govWorkExp }</span>
            </div>

            <Select onValueChange={ (e) => isGovWorkExpChange(e) }>
                <SelectTrigger>
                    <SelectValue placeholder="请选择"/>
                </SelectTrigger>
                <SelectContent>
                    { govWorkExps.map((item, index) => {
                        return (<SelectItem key={ index } value={ item.name }>{ item.name }</SelectItem>)
                    }) }
                </SelectContent>
            </Select>
        </div>
        <div className={ 'w-1/4 space-y-2' }>
            <div className={ 'flex justify-between' }>
                <Label htmlFor="number" className={ 'text-[18px]' }>教育水平</Label>
                <span
                    className={ 'text-[#E83328] text-[18px] font-bold' }>{ edu }</span>
            </div>

            <Select onValueChange={ (e) => isEduChange(e) }>
                <SelectTrigger>
                    <SelectValue placeholder="请选择"/>
                </SelectTrigger>
                <SelectContent>
                    { education.map((item, index) => {
                        return (<SelectItem key={ index } value={ item.name }>{ item.name }</SelectItem>)
                    }) }
                </SelectContent>
            </Select>
        </div>
        <div className={ 'w-1/4 space-y-2' }>
            <div className={ 'flex justify-between' }>
                <Label htmlFor="number" className={ 'text-[18px]' }>额外优势</Label>
                <span
                    className={ 'text-[#E83328] text-[18px] font-bold' }>{ dnc }</span>
            </div>

            <Select onValueChange={ (e) => isDncChange(e) }>
                <SelectTrigger>
                    <SelectValue placeholder="请选择"/>
                </SelectTrigger>
                <SelectContent>
                    { dominance.map((item, index) => {
                        return (<SelectItem key={ index } value={ item.name }>{ item.name }</SelectItem>)
                    }) }
                </SelectContent>
            </Select>
        </div>
        <div className={ 'w-1/4 space-y-2' }>
            <div className={ 'flex justify-between' }>
                <Label htmlFor="number" className={ 'text-[18px]' }>外省学习背景</Label>
                <span
                    className={ 'text-[#E83328] text-[18px] font-bold' }>{ risks1 }</span>
            </div>

            <Select onValueChange={ (e) => isRisks1Change(e) }>
                <SelectTrigger>
                    <SelectValue placeholder="请选择"/>
                </SelectTrigger>
                <SelectContent>
                    { risk1.map((item, index) => {
                        return (<SelectItem key={ index } value={ item.name }>{ item.name }</SelectItem>)
                    }) }
                </SelectContent>
            </Select>
        </div>
        <div className={ 'w-1/4 space-y-2' }>
            <div className={ 'flex justify-between' }>
                <Label htmlFor="number" className={ 'text-[18px]' }>外省工作背景</Label>
                <span
                    className={ 'text-[#E83328] text-[18px] font-bold' }>{ risks2 }</span>
            </div>

            <Select onValueChange={ (e) => isRisks2Change(e) }>
                <SelectTrigger>
                    <SelectValue placeholder="请选择"/>
                </SelectTrigger>
                <SelectContent>
                    { risk2.map((item, index) => {
                        return (<SelectItem key={ index } value={ item.name }>{ item.name }</SelectItem>)
                    }) }
                </SelectContent>
            </Select>
        </div>
        <div className={ 'w-1/4 space-y-2' }>
            <div className={ 'flex justify-between' }>
                <Label htmlFor="number" className={ 'text-[18px]' }>总分数为</Label>
                <span
                    className={ 'text-[#E83328] text-[18px] font-bold' }>{ Lan1Score.listen + Lan1Score.write + Lan1Score.speak + Lan1Score.read + ageScore + lan2Score + workExp + govWorkExp + ageScore + edu + dnc + risks1 + risks2 }</span>
            </div>
        </div>
    </div>)
}
