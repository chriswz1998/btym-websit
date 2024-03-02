'use client'

import Image from 'next/image'
import React from 'react'
import { Navbar } from '../../../../components/navbar'

function UniversityRanking(){
    const rankings = [
        { year: 2024, rank: 1, university: '麦吉尔大学', englishName: 'McGill', previousRank: 1 },
        { year: 2024, rank: 2, university: '多伦多大学', englishName: 'Toronto', previousRank: 2 },
        { year: 2024, rank: 3, university: '英属哥伦比亚大学', englishName: 'UBC', previousRank: 3 },
        { year: 2024, rank: 4, university: '麦克马斯特大学', englishName: 'McMaster', previousRank: 4 },
        { year: 2024, rank: 5, university: '渥太华大学', englishName: 'Ottawa', previousRank: 6 },
        { year: 2024, rank: 6, university: '阿尔伯塔大学', englishName: 'Alberta', previousRank: 5 },
        { year: 2024, rank: 7, university: '卡尔加里大学', englishName: 'Calgary', previousRank: 9 },
        { year: 2024, rank: 7, university: '达尔豪斯大学', englishName: 'Dalhousie', previousRank: 7 },
        { year: 2024, rank: 9, university: '皇后大学', englishName: "Queen's", previousRank: 8 },
        { year: 2024, rank: 10, university: '蒙特利尔大学', englishName: 'Montréal', previousRank: 10 },
        { year: 2024, rank: 11, university: '拉瓦尔大学', englishName: 'Laval', previousRank: 11 },
        { year: 2024, rank: 12, university: '西安大略大学', englishName: 'Western', previousRank: 11 },
        { year: 2024, rank: 13, university: '曼尼托巴大学', englishName: 'Manitoba', previousRank: 13 },
        { year: 2024, rank: 14, university: '舍布鲁克大学', englishName: 'Sherbrooke', previousRank: 15 },
        { year: 2024, rank: 15, university: '萨斯喀彻温大学', englishName: 'Saskatchewan', previousRank: 13 }
    ];

    const rankings2 = [
        { year: 2024, rank: 1, university: '西蒙弗雷泽大学', englishName: 'Simon Fraser', previousRank: 1 },
        { year: 2024, rank: 2, university: '维多利亚大学', englishName: 'Victoria', previousRank: 2 },
        { year: 2024, rank: 3, university: '滑铁卢大学', englishName: 'Waterloo', previousRank: 3 },
        { year: 2024, rank: 4, university: '约克大学（加拿大）', englishName: 'York', previousRank: 5 },
        { year: 2024, rank: 5, university: '卡尔顿大学', englishName: 'Carleton', previousRank: 5 },
        { year: 2024, rank: 5, university: '圭尔夫大学', englishName: 'Guelph', previousRank: 4 },
        { year: 2024, rank: 7, university: '纽芬兰纪念大学', englishName: 'Memorial', previousRank: 7 },
        { year: 2024, rank: 8, university: '新布伦瑞克大学', englishName: 'New Brunswick', previousRank: 8 },
        { year: 2024, rank: 9, university: '康考迪亚大学（加拿大）', englishName: 'Concordia', previousRank: 10 },
        { year: 2024, rank: 10, university: '多伦多都市大学', englishName: 'Toronto Metropolitan', previousRank: 8 },
        { year: 2024, rank: 11, university: '威尔弗里德劳里埃大学', englishName: 'Wilfrid Laurier', previousRank: 10 },
        { year: 2024, rank: 12, university: '魁北克大学', englishName: 'UQAM', previousRank: 12 },
        { year: 2024, rank: 13, university: '布洛克大学', englishName: 'Brock', previousRank: 13 },
        { year: 2024, rank: 14, university: '里贾纳大学', englishName: 'Regina', previousRank: 15 },
        { year: 2024, rank: 14, university: '温莎大学', englishName: 'Windsor', previousRank: 14 },
    ];

    const rankings3 = [
        { year: 2024, rank: 1, university: '蒙特爱立森大学', englishName: 'Mount Allison', previousRank: 1 },
        { year: 2024, rank: 2, university: '北英属哥伦比亚大学', englishName: 'UNBC', previousRank: 2 },
        { year: 2024, rank: 3, university: '圣玛丽大学（加拿大）', englishName: "Saint Mary's", previousRank: 3 },
        { year: 2024, rank: 4, university: '主教大学（加拿大）', englishName: "Bishop's", previousRank: 5 },
        { year: 2024, rank: 5, university: '阿卡迪亚大学', englishName: 'Acadia', previousRank: 5 },
        { year: 2024, rank: 6, university: '莱斯布里奇大学', englishName: 'Lethbridge', previousRank: 11 },
        { year: 2024, rank: 7, university: '特伦特大学', englishName: 'Trent', previousRank: 4 },
        { year: 2024, rank: 8, university: '安大略理工大学', englishName: 'Ontario Tech', previousRank: 9 },
        { year: 2024, rank: 9, university: '圣弗朗西斯泽维尔大学', englishName: 'St. Francis Xavier', previousRank: 7 },
        { year: 2024, rank: 10, university: '爱德华王子岛大学', englishName: 'UPEI', previousRank: 8 },
        { year: 2024, rank: 11, university: '湖首大学', englishName: 'Lakehead', previousRank: 10 },
        { year: 2024, rank: 12, university: '蒙克顿大学', englishName: 'Moncton', previousRank: 12 },
        { year: 2024, rank: 12, university: '圣托马斯大学', englishName: 'St. Thomas', previousRank: 14 },
        { year: 2024, rank: 14, university: '温尼伯大学', englishName: 'Winnipeg', previousRank: 12 },
        { year: 2024, rank: 15, university: '劳伦森大学', englishName: 'Laurentian', previousRank: 15 },
        { year: 2024, rank: 15, university: '圣文森特山大学', englishName: 'Mount Saint Vincent', previousRank: 16 },
        { year: 2024, rank: 17, university: '布兰登大学', englishName: 'Brandon', previousRank: 17 },
        { year: 2024, rank: 18, university: '尼皮辛大学', englishName: 'Nipissing', previousRank: 18 },
        { year: 2024, rank: 19, university: '阿尔戈马大学', englishName: 'Algoma', previousRank: 'N/A' },
        { year: 2024, rank: 20, university: '不列颠海角大学', englishName: 'Cape Breton', previousRank: 19 },
    ];

    return (<div className="bg-[url('/Vancouver.webp')] bg-fixed bg-cover">
        <Navbar/>
        <div className="relative w-full h-[600px] overflow-hidden">
            <Image src={ '/SUV_cccd356739.jpg' } alt={ '/' } layout="fill"
                   className="absolute w-full h-full object-cover"/>
            <div
                className="absolute top-0 left-0 w-full h-full bg-v1-bg1 z-10 flex flex-col justify-center items-center space-y-5">
                <p className="text-white text-5xl font-bold">2024年麦考林加拿大大学排名</p>
                <p className="text-white text-4xl font-bold">University Ranking In Canada</p>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">大学排名</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>医博类</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                            <tr>
                                <th className="py-2 px-4 bg-mask-color5 text-left text-white">年度排名</th>
                                <th className="py-2 px-4 bg-mask-color5 text-left text-white">学校名称</th>
                                <th className="py-2 px-4 bg-mask-color5 text-left text-white">学校英文名</th>
                                <th className="py-2 px-4 bg-mask-color5 text-left text-white">上年排名</th>
                            </tr>
                            </thead>
                            <tbody>
                            { rankings.map((row) => (<tr key={ row.university }>
                                <td className="py-2 px-4">{ row.rank }</td>
                                <td className="py-2 px-4">{ row.university }</td>
                                <td className="py-2 px-4">{ row.englishName }</td>
                                <td className="py-2 px-4">{ row.previousRank }</td>
                            </tr>)) }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">大学排名</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>综合类</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                            <tr>
                                <th className="py-2 px-4 bg-mask-color5 text-left text-white">年度排名</th>
                                <th className="py-2 px-4 bg-mask-color5 text-left text-white">学校名称</th>
                                <th className="py-2 px-4 bg-mask-color5 text-left text-white">学校英文名</th>
                                <th className="py-2 px-4 bg-mask-color5 text-left text-white">上年排名</th>
                            </tr>
                            </thead>
                            <tbody>
                            { rankings2.map((row) => (<tr key={ row.university }>
                                <td className="py-2 px-4">{ row.rank }</td>
                                <td className="py-2 px-4">{ row.university }</td>
                                <td className="py-2 px-4">{ row.englishName }</td>
                                <td className="py-2 px-4">{ row.previousRank }</td>
                            </tr>)) }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">大学排名</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>基础类</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                            <tr>
                                <th className="py-2 px-4 bg-mask-color5 text-left text-white">年度排名</th>
                                <th className="py-2 px-4 bg-mask-color5 text-left text-white">学校名称</th>
                                <th className="py-2 px-4 bg-mask-color5 text-left text-white">学校英文名</th>
                                <th className="py-2 px-4 bg-mask-color5 text-left text-white">上年排名</th>
                            </tr>
                            </thead>
                            <tbody>
                            { rankings3.map((row) => (<tr key={ row.university }>
                                <td className="py-2 px-4">{ row.rank }</td>
                                <td className="py-2 px-4">{ row.university }</td>
                                <td className="py-2 px-4">{ row.englishName }</td>
                                <td className="py-2 px-4">{ row.previousRank }</td>
                            </tr>)) }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default UniversityRanking