'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ChangeEvent, useRef, useState } from 'react'
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from '@/components/ui/select'

const edu = [ {
    name: '初中以下', score: 0
}, {
    name: '高中', score: 28
}, {
    name: '1年高等教育', score: 84
}, {
    name: '2年高等教育', score: 91
}, {
    name: '3年以上高等教育', score: 112
}, {
    name: '双专业(3年以上+1年以上)', score: 119
}, {
    name: '硕士学位或专业学位(如医学博士)', score: 126
}, {
    name: '博士学位', score: 140
} ]

const lan1 = [ '雅思', '思培(CELPIP)', 'TEF' ]
const lan2 = [ '无', '雅思', '思培(CELPIP)', 'TEF' ]
const provincialNomination = [ '有', '无' ]
const broPr = [ '有', '无' ]
const offer = [ '无', 'NOC 00类LMIA', '其他类LMIA' ]
const eduCan = [ '无', '一年或两年的加拿大高等教育', '三年或以上加拿大高等教育' ]

export function EE(){
    const [ ageScore, setAgeScore ] = useState(0)
    const [ eduScore, setEduScore ] = useState(0)
    const [ showLan1, setShowLan1 ] = useState('')
    const [ showLan2, setShowLan2 ] = useState('')
    const [ lan1Listen, setLan1Listen ] = useState(0)
    const [ lan1Speak, setLan1Speak ] = useState(0)
    const [ lan1Read, setLan1Read ] = useState(0)
    const [ lan1Write, setLan1Write ] = useState(0)

    const [ lan2Listen, setLan2Listen ] = useState(0)
    const [ lan2Speak, setLan2Speak ] = useState(0)
    const [ lan2Read, setLan2Read ] = useState(0)
    const [ lan2Write, setLan2Write ] = useState(0)

    const [ workExpCaScore, setWorkExpCaScore ] = useState(0)
    const [ province, setProvince ] = useState(0)
    const [ PR, setPR ] = useState(0)
    const [ eduCa, setEduCa ] = useState(0)
    const [ offers, setOffers ] = useState(0)

    const refSpeak1 = useRef<HTMLInputElement>(null)
    const refListen1 = useRef<HTMLInputElement>(null)
    const refRead1 = useRef<HTMLInputElement>(null)
    const refWrite1 = useRef<HTMLInputElement>(null)

    const refSpeak2 = useRef<HTMLInputElement>(null)
    const refListen2 = useRef<HTMLInputElement>(null)
    const refRead2 = useRef<HTMLInputElement>(null)
    const refWrite2 = useRef<HTMLInputElement>(null)

    const isAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const age = parseInt(e.target.value, 10)
        // 年龄打分逻辑
        if(age < 18) setAgeScore(0)
        if(age === 18) setAgeScore(90)
        if(age === 19) setAgeScore(95)
        if(age >= 20 && age < 30) setAgeScore(100)

        if(age === 30) setAgeScore(95)
        if(age > 30){
            setAgeScore(Math.max(0, 95 - 5 * (age - 30)))
        }
    }
    const isEduChange = (e: string) => {
        const score = edu.filter(item => item.name === e)[0].score
        setEduScore(score)
    }
    const isProvinceChange = (e: string) => {
        const score = provincialNomination.filter(item => item === e)[0]
        console.log(score)
        setProvince(score === '有' ? 600 : 0)
    }
    const isPrChange = (e: string) => {
        const score = broPr.filter(item => item === e)[0]
        setPR(score === '有' ? 15 : 0)
    }
    const isOfferChange = (e: string) => {
        const score = offer.filter(item => item === e)[0]
        setOffers(score === 'NOC 00类LMIA' ? 25 : score === '其他类LMIA' ? 50 : 0)
    }
    const isEduCaChange = (e: string) => {
        const score = eduCan.filter(item => item === e)[0]
        setEduCa(score === '一年或两年的加拿大高等教育' ? 15 : score === '三年或以上加拿大高等教育' ? 30 : 0)
    }
    const isLan1Change = (e: string) => {
        setShowLan1(e)
        setLan1Listen(0)
        setLan1Speak(0)
        setLan1Read(0)
        setLan1Write(0)
        if(refSpeak1.current !== null) refSpeak1.current.value = ''
        if(refListen1.current !== null) refListen1.current.value = ''
        if(refRead1.current !== null) refRead1.current.value = ''
        if(refWrite1.current !== null) refWrite1.current.value = ''
    }
    const isLan2Change = (e: string) => {
        setShowLan2(e)
        setLan2Listen(0)
        setLan2Speak(0)
        setLan2Read(0)
        setLan2Write(0)
        if(refSpeak2.current !== null) refSpeak2.current.value = ''
        if(refListen2.current !== null) refListen2.current.value = ''
        if(refRead2.current !== null) refRead2.current.value = ''
        if(refWrite2.current !== null) refWrite2.current.value = ''
    }
    const listen1 = (e: ChangeEvent<HTMLInputElement>) => {
        const score = parseInt(e.target.value, 10)
        if(showLan1 === '雅思'){
            if(score < 6){
                setLan1Listen(0)
            }
            if(score >= 6 && score <= 7){
                setLan1Listen(4)
            }
            if(score === 7.5){
                setLan1Listen(5)
            }

            if(score >= 8){
                setLan1Listen(6)
            }
        } else if(showLan1 === '思培(CELPIP)'){
            if(score < 7){
                setLan1Listen(0)
            }
            if(score == 7){
                setLan1Listen(4)
            }
            if(score === 8){
                setLan1Listen(5)
            }

            if(score >= 9){
                setLan1Listen(6)
            }
        } else {
            if(score < 7){
                setLan1Listen(0)
            }
            if(score == 7){
                setLan1Listen(4)
            }
            if(score === 8){
                setLan1Listen(5)
            }

            if(score >= 9){
                setLan1Listen(6)
            }
        }

    }
    const speak1 = (e: ChangeEvent<HTMLInputElement>) => {
        const score = parseInt(e.target.value, 10)
        if(showLan1 === '雅思'){
            if(score < 6){
                setLan1Speak(0)
            }
            if(score === 6){
                setLan1Speak(4)
            }
            if(score === 6.5){
                setLan1Speak(5)
            }
            if(score >= 7){
                setLan1Speak(6)
            }
        } else if(showLan1 === '思培(CELPIP)'){
            if(score < 7){
                setLan1Speak(0)
            }
            if(score == 7){
                setLan1Speak(4)
            }
            if(score === 8){
                setLan1Speak(5)
            }

            if(score >= 9){
                setLan1Speak(6)
            }
        } else {
            if(score < 7){
                setLan1Speak(0)
            }
            if(score == 7){
                setLan1Speak(4)
            }
            if(score === 8){
                setLan1Speak(5)
            }

            if(score >= 9){
                setLan1Speak(6)
            }
        }

    }
    const read1 = (e: ChangeEvent<HTMLInputElement>) => {
        const score = parseInt(e.target.value, 10)
        if(showLan1 === '雅思'){
            if(score < 6){
                setLan1Read(0)
            }
            if(score === 6){
                setLan1Read(4)
            }
            if(score === 6.5){
                setLan1Read(5)
            }
            if(score >= 7){
                setLan1Read(6)
            }
        } else if(showLan1 === '思培(CELPIP)'){
            if(score < 7){
                setLan1Read(0)
            }
            if(score == 7){
                setLan1Read(4)
            }
            if(score === 8){
                setLan1Read(5)
            }

            if(score >= 9){
                setLan1Read(6)
            }
        } else {
            if(score < 7){
                setLan1Read(0)
            }
            if(score == 7){
                setLan1Read(4)
            }
            if(score === 8){
                setLan1Read(5)
            }

            if(score >= 9){
                setLan1Read(6)
            }
        }
    }
    const write1 = (e: ChangeEvent<HTMLInputElement>) => {
        const score = parseInt(e.target.value, 10)
        if(showLan1 === '雅思'){
            if(score < 6){
                setLan1Write(0)
            }
            if(score === 6){
                setLan1Write(4)
            }
            if(score === 6.5){
                setLan1Write(5)
            }
            if(score >= 7){
                setLan1Write(6)
            }
        } else if(showLan1 === '思培(CELPIP)'){
            if(score < 7){
                setLan1Write(0)
            }
            if(score == 7){
                setLan1Write(4)
            }
            if(score === 8){
                setLan1Write(5)
            }

            if(score >= 9){
                setLan1Write(6)
            }
        } else {
            if(score < 7){
                setLan1Write(0)
            }
            if(score == 7){
                setLan1Write(4)
            }
            if(score === 8){
                setLan1Write(5)
            }

            if(score >= 9){
                setLan1Write(6)
            }
        }
    }
    const listen2 = (e: ChangeEvent<HTMLInputElement>) => {
        const score = parseInt(e.target.value, 10)
        if(showLan2 === '雅思'){
            if(score < 6){
                setLan2Listen(0)
            }
            if(score >= 6 && score <= 7){
                setLan2Listen(4)
            }
            if(score === 7.5){
                setLan2Listen(5)
            }

            if(score >= 8){
                setLan2Listen(6)
            }
        } else if(showLan1 === '思培(CELPIP)'){
            if(score < 7){
                setLan2Listen(0)
            }
            if(score == 7){
                setLan2Listen(4)
            }
            if(score === 8){
                setLan2Listen(5)
            }

            if(score >= 9){
                setLan2Listen(6)
            }
        } else {
            if(score < 7){
                setLan2Listen(0)
            }
            if(score == 7){
                setLan2Listen(4)
            }
            if(score === 8){
                setLan2Listen(5)
            }

            if(score >= 9){
                setLan2Listen(6)
            }
        }

    }
    const speak2 = (e: ChangeEvent<HTMLInputElement>) => {
        const score = parseInt(e.target.value, 10)
        if(showLan1 === '雅思'){
            if(score < 6){
                setLan2Speak(0)
            }
            if(score === 6){
                setLan2Speak(4)
            }
            if(score === 6.5){
                setLan2Speak(5)
            }
            if(score >= 7){
                setLan2Speak(6)
            }
        } else if(showLan1 === '思培(CELPIP)'){
            if(score < 7){
                setLan2Speak(0)
            }
            if(score == 7){
                setLan2Speak(4)
            }
            if(score === 8){
                setLan2Speak(5)
            }

            if(score >= 9){
                setLan2Speak(6)
            }
        } else {
            if(score < 7){
                setLan2Speak(0)
            }
            if(score == 7){
                setLan2Speak(4)
            }
            if(score === 8){
                setLan2Speak(5)
            }

            if(score >= 9){
                setLan2Speak(6)
            }
        }

    }
    const read2 = (e: ChangeEvent<HTMLInputElement>) => {
        const score = parseInt(e.target.value, 10)
        if(showLan1 === '雅思'){
            if(score < 6){
                setLan2Read(0)
            }
            if(score === 6){
                setLan2Read(4)
            }
            if(score === 6.5){
                setLan2Read(5)
            }
            if(score >= 7){
                setLan2Read(6)
            }
        } else if(showLan1 === '思培(CELPIP)'){
            if(score < 7){
                setLan2Read(0)
            }
            if(score == 7){
                setLan2Read(4)
            }
            if(score === 8){
                setLan2Read(5)
            }

            if(score >= 9){
                setLan2Read(6)
            }
        } else {
            if(score < 7){
                setLan2Read(0)
            }
            if(score == 7){
                setLan2Read(4)
            }
            if(score === 8){
                setLan2Read(5)
            }

            if(score >= 9){
                setLan2Read(6)
            }
        }
    }
    const write2 = (e: ChangeEvent<HTMLInputElement>) => {
        const score = parseInt(e.target.value, 10)
        if(showLan1 === '雅思'){
            if(score < 6){
                setLan2Write(0)
            }
            if(score === 6){
                setLan2Write(4)
            }
            if(score === 6.5){
                setLan2Write(5)
            }
            if(score >= 7){
                setLan2Write(6)
            }
        } else if(showLan1 === '思培(CELPIP)'){
            if(score < 7){
                setLan2Write(0)
            }
            if(score == 7){
                setLan2Write(4)
            }
            if(score === 8){
                setLan2Write(5)
            }

            if(score >= 9){
                setLan2Write(6)
            }
        } else {
            if(score < 7){
                setLan2Write(0)
            }
            if(score == 7){
                setLan2Write(4)
            }
            if(score === 8){
                setLan2Write(5)
            }

            if(score >= 9){
                setLan2Write(6)
            }
        }
    }
    const isWorkExpCaScoreChange = (e: ChangeEvent<HTMLInputElement>) => {
        const score = parseInt(e.target.value, 10)
        if(score === 1){
            setWorkExpCaScore(40)
        }
        if(score === 2){
            setWorkExpCaScore(53)
        }
        if(score === 3){
            setWorkExpCaScore(64)
        }
        if(score === 4){
            setWorkExpCaScore(72)
        }
        if(score >= 5){
            setWorkExpCaScore(80)
        }
        console.log()
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
                <Label htmlFor="number" className={ 'text-[18px]' }>学历</Label>
                <span className={ 'text-[#E83328] text-[18px] font-bold' }>{ eduScore }</span>
            </div>
            <Select onValueChange={ (e) => isEduChange(e) }>
                <SelectTrigger>
                    <SelectValue placeholder="选择学历"/>
                </SelectTrigger>
                <SelectContent>
                    { edu.map((item, index) => {
                        return (<SelectItem key={ index } value={ item.name }>{ item.name }</SelectItem>)
                    }) }
                </SelectContent>
            </Select>
        </div>

        <div className={ 'w-1/4 space-y-2' }>
            <div className={ 'flex justify-between' }>
                <Label htmlFor="number" className={ 'text-[18px]' }>第一语言</Label>
                <span
                    className={ 'text-[#E83328] text-[18px] font-bold' }>{ lan1Listen + lan1Speak + lan1Read + lan1Write }</span>
            </div>
            <Select onValueChange={ (e) => isLan1Change(e) }>
                <SelectTrigger>
                    <SelectValue placeholder="选择语言"/>
                </SelectTrigger>
                <SelectContent>
                    { lan1.map((item, index) => {
                        return (<SelectItem key={ index } value={ item }>{ item }</SelectItem>)
                    }) }
                </SelectContent>
            </Select>
            { showLan1 ? (<div>
                <div>
                    <Label htmlFor="number" className={ 'text-[18px] text-[#E83328]' }>{ showLan1 }-听力</Label>
                    <Input type="number" ref={ refListen1 } placeholder="听力" onChange={ (e) => listen1(e) }/>
                </div>
                <div>
                    <Label htmlFor="number" className={ 'text-[18px] text-[#E83328]' }>{ showLan1 }-口语</Label>
                    <Input type="number" ref={ refSpeak1 } placeholder="口语" onChange={ (e) => speak1(e) }/>
                </div>
                <div>
                    <Label htmlFor="number" className={ 'text-[18px] text-[#E83328]' }>{ showLan1 }-阅读</Label>
                    <Input type="number" ref={ refRead1 } placeholder="阅读" onChange={ (e) => read1(e) }/>
                </div>
                <div>
                    <Label htmlFor="number" className={ 'text-[18px] text-[#E83328]' }>{ showLan1 }-写作</Label>
                    <Input type="number" ref={ refWrite1 } placeholder="写作" onChange={ (e) => write1(e) }/>
                </div>
            </div>) : null }

        </div>

        <div className={ 'w-1/4 space-y-2' }>
            <div className={ 'flex justify-between' }>
                <Label htmlFor="number" className={ 'text-[18px]' }>第二语言</Label>
                <span
                    className={ 'text-[#E83328] text-[18px] font-bold' }>{ lan2Listen + lan2Speak + lan2Read + lan2Write }</span>
            </div>
            <Select onValueChange={ (e) => isLan2Change(e) }>
                <SelectTrigger>
                    <SelectValue placeholder="选择语言"/>
                </SelectTrigger>
                <SelectContent>
                    { lan2.map((item, index) => {
                        return (<SelectItem key={ index } value={ item }>{ item }</SelectItem>)
                    }) }
                </SelectContent>
            </Select>
            { showLan2 !== '无' && showLan2 !== '' ? (<div>
                <div>
                    <Label htmlFor="number" className={ 'text-[18px] text-[#E83328]' }>{ showLan2 }-听力</Label>
                    <Input type="number" ref={ refListen2 } placeholder="听力" onChange={ (e) => listen2(e) }/>
                </div>
                <div>
                    <Label htmlFor="number" className={ 'text-[18px] text-[#E83328]' }>{ showLan2 }-口语</Label>
                    <Input type="number" ref={ refSpeak2 } placeholder="口语" onChange={ (e) => speak2(e) }/>
                </div>
                <div>
                    <Label htmlFor="number" className={ 'text-[18px] text-[#E83328]' }>{ showLan2 }-阅读</Label>
                    <Input type="number" ref={ refRead2 } placeholder="阅读" onChange={ (e) => read2(e) }/>
                </div>
                <div>
                    <Label htmlFor="number" className={ 'text-[18px] text-[#E83328]' }>{ showLan2 }-写作</Label>
                    <Input type="number" ref={ refWrite2 } placeholder="写作" onChange={ (e) => write2(e) }/>
                </div>
            </div>) : null }

        </div>

        <div className={ 'w-1/4 space-y-2' }>
            <div className={ 'flex justify-between' }>
                <Label htmlFor="number" className={ 'text-[18px]' }>加拿大工作经验(可以不连续)</Label>
                <span className={ 'text-[#E83328] text-[18px] font-bold' }>{ workExpCaScore }</span>
            </div>
            <Input type="number" placeholder="加拿大工作经验" onChange={ (e) => isWorkExpCaScoreChange(e) }/>
        </div>

        <div className={ 'w-1/4 space-y-2' }>
            <div className={ 'flex justify-between' }>
                <Label htmlFor="number" className={ 'text-[18px]' }>省提名</Label>
                <span className={ 'text-[#E83328] text-[18px] font-bold' }>{ province }</span>
            </div>
            <Select onValueChange={ (e) => isProvinceChange(e) }>
                <SelectTrigger>
                    <SelectValue placeholder="选择省提名"/>
                </SelectTrigger>
                <SelectContent>
                    { provincialNomination.map((item, index) => {
                        return (<SelectItem key={ index } value={ item }>{ item }</SelectItem>)
                    }) }
                </SelectContent>
            </Select>
        </div>

        <div className={ 'w-1/4 space-y-2' }>
            <div className={ 'flex justify-between' }>
                <Label htmlFor="number" className={ 'text-[18px]' }>兄弟姐妹是PR或公民居住在加拿大</Label>
                <span className={ 'text-[#E83328] text-[18px] font-bold' }>{ PR }</span>
            </div>
            <Select onValueChange={ (e) => isPrChange(e) }>
                <SelectTrigger>
                    <SelectValue placeholder="请选择"/>
                </SelectTrigger>
                <SelectContent>
                    { broPr.map((item, index) => {
                        return (<SelectItem key={ index } value={ item }>{ item }</SelectItem>)
                    }) }
                </SelectContent>
            </Select>
        </div>

        <div className={ 'w-1/4 space-y-2' }>
            <div className={ 'flex justify-between' }>
                <Label htmlFor="number" className={ 'text-[18px]' }>雇主Offer</Label>
                <span className={ 'text-[#E83328] text-[18px] font-bold' }>{ offers }</span>
            </div>
            <Select onValueChange={ (e) => isOfferChange(e) }>
                <SelectTrigger>
                    <SelectValue placeholder="请选择"/>
                </SelectTrigger>
                <SelectContent>
                    { offer.map((item, index) => {
                        return (<SelectItem key={ index } value={ item }>{ item }</SelectItem>)
                    }) }
                </SelectContent>
            </Select>
        </div>

        <div className={ 'w-1/4 space-y-2' }>
            <div className={ 'flex justify-between' }>
                <Label htmlFor="number" className={ 'text-[18px]' }>加拿大学历</Label>
                <span className={ 'text-[#E83328] text-[18px] font-bold' }>{ eduCa }</span>
            </div>
            <Select onValueChange={ (e) => isEduCaChange(e) }>
                <SelectTrigger>
                    <SelectValue placeholder="请选择"/>
                </SelectTrigger>
                <SelectContent>
                    { eduCan.map((item, index) => {
                        return (<SelectItem key={ index } value={ item }>{ item }</SelectItem>)
                    }) }
                </SelectContent>
            </Select>
        </div>
        <div className={ 'w-1/4 space-y-2' }>
            <div className={ 'flex justify-between' }>
                <Label htmlFor="number" className={ 'text-[18px]' }>总分数为</Label>
                <span
                    className={ 'text-[#E83328] text-[18px] font-bold' }>{ eduCa + offers + PR + province + workExpCaScore + ageScore + eduScore + lan1Listen + lan1Speak + lan1Read + lan1Write + lan2Listen + lan2Speak + lan2Read + lan2Write }</span>
            </div>
        </div>
    </div>)
}
