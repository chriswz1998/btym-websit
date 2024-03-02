'use client'

import Image from 'next/image'
import React from 'react'
import { Navbar } from '@/components/navbar'

function UniversityInCanada(){
    return (<div className="bg-[url('/Vancouver.webp')] bg-fixed bg-cover">
        <Navbar/>
        <div className="relative w-full h-[600px] overflow-hidden">
            <Image src={ '/SUV_cccd356739.jpg' } alt={ '/' } layout="fill"
                   className="absolute w-full h-full object-cover"/>
            <div
                className="absolute top-0 left-0 w-full h-full bg-v1-bg1 z-10 flex flex-col justify-center items-center space-y-5">
                <p className="text-white text-5xl font-bold">大学本科教育</p>
                <p className="text-white text-4xl font-bold">University In Canada</p>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">大学本科教育</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>详情介绍</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p>加拿大大学教育在全球处于领先地位，加拿大拥有许多享誉世界的顶尖大学，比如：多伦多大学、卑诗大学、麦吉尔大学、皇后大学及滑铁卢大学等，均在北美排名前30名之列。高中毕业生可以根据自己平时学习成绩和个人意愿申请自己心仪的大学。</p>
                    <p>在中国，每年高考结束后，大多数人报志愿就像一场赌注，一场高考定乾坤，学生压力非常大。反观加拿大，加拿大大学是申请制，主要看的是11-12年级的学习成绩和综合表现。一流大学通常需要各科85分甚至90分以上，二流学校80分以上。不过，学习成绩并不是唯一标准，如果综合素质很强，比如组织能力、交流能力、个人特长、义工经验突出等，也是有机会被名校“破格录取”的。学生可以同时申请多个学校，收到多封录取通知书，最终选择自己最喜欢最适合的学校，这样不仅给予学校筛选学生的权力，也给了学生择优选择学校的自由，是真正意义的双向选择。</p>
                    <p>除了和公立学校同样丰富业余活动，天主教学校因为宗教原因，管理较为严格，治学严谨。严格控制招收国际生的质量，对于希望专心读书，
                        并要求有良好的学习和英语语言环境的中国学生，天主教高中是非常好的选择。</p>
                    <p>加拿大高等教育主要在大学（university）和学院（college）开展。和我们传统印象中的大学和学院不同，加拿大学院偏重培养就业人才，课程更偏向就业；大学更偏重培养研究性人才，课程更偏向教授学生研究和创新。大学和学院侧重点不同，并没有优劣之分，学生根据学习和就业需求自由选择，大学和学院之间可以相互式切换，学分也可以部分转换，给了学生更灵活自主的选择权。</p>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-white/30">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">加拿大大学三大类型</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>有广泛博士研究课程和医学院的医学博士类大学</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p>所谓“医学博士类大学”的规模都比较大，学校经费及设备也很雄厚。最突出的特点是都附有医学院，除学士学位外，并可授博士硕士学位。如：多伦多大学、UBC大学、西安大略大学、萨省大学、曼尼托巴大学等</p>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">加拿大大学三大类型</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>本科课程和研究生课程并重的综合教学类大学</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p>所谓“综合硕士类大学”在规模上较“医学博士类大学”次之。综合类与上述博士类大学的区别是没有医学院，可授予硕士和学士学位，甚至有的大学也可授博士学位。代表学校有在北美地区非常著名的西蒙菲莎大学、滑铁卢大学、约克大学、温莎大学、康卡迪亚大学等</p>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-white/30">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">加拿大大学三大类型</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>以本科课程为主的基础教学类大学</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p>所谓“本科类大学”的规模比以上两类略小一点，以培养本科生为主，除可授学士学位之外，也有一些此档次的大学可授硕士学位，甚至可授博士学位。“本科类大学”的师资、奖学金、授课方式都是以本科生为主，所以作为初次进入加拿大大学的本科留学生，选择此类大学比较容易受到重视。如：安大略理工大学、阿卡迪亚大学、温尼伯格大学、劳伦森大学等</p>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">加拿大本科申请常见的几种情况</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>直接申请本科</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p>可以凭雅思6.5或托福80以上的成绩申请大学，很多学校要求出示当地一本线以上的高考成绩，以说明自己是国内优秀的高中毕业生，同时具备相当好的英语水平。加拿大名校很认可中国的基础教育，乐于接受真正优秀的学生</p>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">加拿大本科申请常见的几种情况</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>语言课+专业课</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p>针对语言成绩达不到大学直录要求的学生，可以申请大学提供的语言课+专业课项目。
                        根据每个学校的不同要求，在加拿大留学开学时学生可能会被要求参加语言测试，
                        通过测试以及当时的语言成绩决定入读语言课程的时间长短，有些学校可以允许学生在语言达到一定程度的基础上读语言课程的同时入读专业课程。
                        这种申请方式是很多没有考出理想成绩的加拿大留学生选择最多的方式，优势在于申请学校和加拿大留学签证时没有很高的雅思成绩，
                        但开学时有合格的语言能力，很多学校可直接进入专业课。</p>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">加拿大本科申请常见的几种情况</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>预科+本科</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p>加拿大留学学生同时获得预科和本科两份录取通知，这种方式学生既可以通过预科强化能力，修完加拿大高中课程、英语课程及大学预备课程后，获得加拿大高中毕业证，也不担心预科后还要自己申请本科。优势是，提前花时间适应加拿大高中教育，为进入顶尖加拿大大学，并且为在大学不轻易被淘汰打下坚实基础</p>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">加拿大本科申请常见的几种情况</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>申请学院就读</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p>加拿大公立学院的课程是应加拿大对实用人才的需求而设置的，对于理论基础弱动手能力强的学生非常适用；对于希望学习一技之长，直接在加拿大就业，然后寻求移民的学生来说，这是最直接、省钱、省时的方式。同时，大学学士学位课程也有一部分实用课程，所以认可学院的学分，如果学生愿意往学术方向发展，不排除将来读硕读博的可能。入学时如果基础较差，可以通过一段时间的学院学习，更好地适应加拿大教学特点，然后转到自己理想的大学继续攻读学位课程。学院转名校，是留学生经常选择的转学路径</p>
                    <p>总体而言，加拿大大学教育注重对专业人才的培养。专业知识的积累及运用知识解决问题的比重加大，能力的培养进入巩固和强化阶段。课堂上，老师鼓励大家积极探索和发言，会有小组讨论、学生辩论、课堂演讲，这些都可以锻炼学生的思维创新能力和团队协作能力</p>
                    <p>相比国内很多大学生高考完的放松和解放，加拿大大学阶段却是宽进严出。这个阶段，加拿大认为学生已经成人，具备了良好的身体素质与心理素质，因此大多数大学，尤其是名校，课业的压力很大，每年都有一定的淘汰率，部分名校大一的淘汰率甚至高达20%，只有学习勤奋、成绩达标的学生才能顺利毕业，获得学历</p>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">硕士及博士生教育</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>介绍</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p>加拿大硕士和博士教育是目标明确的学术精英培养阶段。通常进入这两个阶段学习的学生，目标都是在特定领域内从事科研工作。</p>
                    <p>针对大部分专业领域和方向，加拿大的硕士课程分为课程型和研究型。课程型的研究生项目要求类似于本科课程，修完指定的学分并达到成绩要求即可毕业。研究型的研究生课程，主要性质是跟着导师边工作边学习，实现操作和理论双向发展的道路，毕业要求通常是取得科研成果，并根据成果完成论文。</p>
                    <p> 加拿大的硕士生大致可分为两类：一是以培养研究人员为主的硕士，如文学硕士、科学硕士、应用科学硕士等；二是以专业人员为主的硕士，如会计硕士、金融硕士、工程硕士、教育硕士等。两者之区分在于前者是培养研究人员，后者是培养专业人士。在课程设置方面，专业硕士课程较多，一般有10到15门课程，再加课题报告或实习报告。而研究硕士课程一般4到8门，再加论文。报告由指导老师阅后打分，而论文必须答辩。</p>
                    <p> 课程内容方面，专业硕士课程注重实践，并常与专业协会的考试内容有关。如会计硕士的课程被会计师协会的考试认可，金融硕士的课程被金融分析师承认，工程硕士的课程被工程师协会认可。学生毕业后可凭硕士课程的学分，免修专业协会的课程，而直接参加专业协会的资格考试。研究硕士的课程重视理论、模式、创新的概念。专业硕士一般能在12至18月内完成硕士学位学习，研究硕士完成时间一般在一年半至三年，视其完成论文答辩时间而定。</p>
                    <p> 几乎所有加拿大的大学都有研究硕士项目，但是每个大学只开设为数不多的专业硕士项目。因为教授们一般不愿带专业硕士，这类学生对教授的研究，发表文章帮助不大。而且聘请能上专业课的教授，学校要付更高的工资，有些教授来自于专业领域，薪酬更高，这也是为什么专业硕士的学费要比研究硕士的学费贵。有些大学没有足够的具有专业知识的教授团队来承担这类硕士项目，大学之间争夺这类人才也很激烈。</p>
                    <p> 在申请过程中，专业硕士的申请程序较简单，因为无需找指导教授；研究硕士一般先要有指导教授接受。专业硕士毕业后将面向企业界、工业界，薪水较高。研究硕士毕业后，可继续读博士，可在科研单位搞研究，或任职于政府和非牟利的民间机构，他们的薪水往往低于专业硕士毕业生。</p>
                    <p> 加拿大很少有一窝蜂的宿舍集体考研现象。未来不想走科研方向的学子，通常在本科后便会寻找合适的职业机会。只有想走科研方向，或想留校就职的学生，才会继续升造，继续研究生或博士生学习。事实上，这两个阶段的毕业也是相当有难度，需要有说服力的学术研究成果和原创论文。</p>
                    <p> 在加拿大申请博士学位，要求必须已经完成硕士学位。在加拿大的博士项目中，学生会参加各种小组研讨会group
                        seminar，可能每周需要大约20小时的阅读时间。此外，需要从项目一开始就对论文进行研究，发表多篇同行评论文章，并积极申请奖学金来进一步支持研究工作。此外，很可能还会作为教学助理（Teaching
                        Assistant, TA）和研究助理（Research Assistantships ,
                        RA）为教授提供帮助，这可能每周需要长达20个小时。虽然两者相加，每周40小时是一个比较合理的博士生工作时间，但根据项目之间的不同，学生可能会发现自己的工作时间比这更多。</p>
                    <p> 加拿大的博士课程通常设计为四年左右，给自己预留五年或更长时间内完成博士学位可能更现实一些。记住这一点很重要，因为有些课程不允许延长资助时间，所以学生可能需要为完成学习所花费的额外年份支付学费。</p>
                    <p> 加拿大博士项目平均学费大概是每年$ 8,000 – $
                        20,000加元。在加拿大，学生通常必须根据学业成绩申请奖学金。这些奖学金可以包括学费，研究费用和偶尔的生活费用。加拿大有强大的国际学生组织和协会，可以帮助学生更好地融入博士项目，适应生活，并建立人际联系。导师通常会和学生密切合作，乐意与学生交流，会对学生项目真正感兴趣，并且拥有相关知识和经验能够给学生带来实际帮助。</p>
                    <p> 相对而言，在加拿大的大学拿学位，硕士比较容易，其次学士，最难的是博士。硕士学位学时最短，没有统一的要求和严格的标准，毕业难度与导师要求相关性较高。本科学习时间较长，课程压力极大，淘汰率较高，竞争非常激烈。加拿大本科成绩比较重要，无论是进一步深造，还是找工作，成绩单是必不可少的，四年的学习压力可想而知。博士学位则是北美教育的顶峰，学制最长、要求最严、压力最大，博士学位的资格考试非常严格。通过资格考试，剩下的两三年里必须要做出一些独创性、开拓性的研究，才有机会毕业。通常而方，博士的奖学金和财务补助只有四年，过了第四年，就需要自己负担学费外加生活费。北美的博士教育，主要是为了给大学教育提供后继队伍，或是为了纯研究领域输送和培养优秀人才。博士的就业去向，基本分为两类：一类去大学或政府研究机构，另一类去大公司从事技术开发和研究。</p>
                </div>
            </div>
        </div>
    </div>)
}

export default UniversityInCanada