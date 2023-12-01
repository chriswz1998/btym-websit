import Image from 'next/image'

const Single_profile = () => {
  return (
      <div className={ 'px-20 min-[1980px]:w-[1980px] mx-auto' }>
        <div className={ 'w-full flex flex-col items-center py-24' }>
          <div
              className={ 'text-[38px] font-bold' }>博泰客户：外贸公司高管H先生
          </div>
          <div className={ 'text-description-text-color5 py-10' }>2023-03-09
            16:10:43
          </div>
          <Image src={ 'https://i.ibb.co/ynFJw3F/024-Mf03-Eg-BN7-LFq-FFJgts-QCw-Gn-VJHNwdatikrs-Y7.jpg' }
                 alt={ '' } width={ 800 } height={ 100 }/>
          <div className={ 'w-[800px] text-[19px] pt-5' }>
            与此同时，正有一个00类LMIA，当时顾问和文案评估认为完美适配H先生，
            定制联邦EE+LMIA的方案。因为H先生资料真实，不仅拥有近几年高管工作经历，
            还能提供工资流水，个税或社保的证据支撑。且符合对于LMIA200分高管EE移民，雅思四个6的FSW入池要求。
          </div>
          <div className={ 'w-[800px] pt-8' }>
            <p className={ 'text-[20px]' }>国内高管LMIA 200分移民申请条件：</p>
            <div className={ 'pl-4 pt-2' }>
              <p className={ 'pb-2' }>近年在国内是高管职位-副总，总监级别以上</p>
              <p>符合FSW的入池要求-核心是雅思四个6</p>
            </div>
          </div>
          <div className={ 'w-[800px] pt-8' }>
            简单来说，就是只要雅思可以达到四个6的中国高管，都能直接移民成功。而且能在国内等PR候登陆加拿大，不用像各省PNP雇主担保移民一样接受移民局的审核，时间更快。
          </div>
          <div className={ 'w-[800px] pt-8' }>
            当告知H先生有这个珍贵的LMIA机会时候，就被赞叹“加鼎雇主资源太厉害了”。业内一直有个心照不宣的概念：00类的LMIA申请起来难度比较大，或者说需要具备天时地利人和。
          </div>
          <div className={ 'w-[800px] pt-8' }>
            一般的申请人很难通过雇主获得这个类别的LMIA，只有
            00类的申请人在拿到LMIA后能够在快速通道里拿到200分。
          </div>
          <div className={ 'w-[800px] pt-8' }>
            LMIA评估是对雇主背景和经营情况的检测，需要企业运营至少一年，公司还需提供合法注册文件，
            营业执照，报税和缴税证明，以及工资表等文件。如果雇主能成功拿到LMIA，一定程度上足以证明雇主优质且靠谱，对移民申请的成功有很大帮助。
          </div>
          <div className={ 'w-[800px] pt-8' }>
            去年8月，确定为H先生启动EE+LMIA方案，10月为其注册入池，仅过8天获邀（当时有LMIA加持，获邀分数毫无压力）。12月准备联邦材料递交，2个月即顺利通过联邦审核，获得PR！
          </div>
          <div className={ 'w-[800px] pt-8' }>
            所以，雅思达到四个6的高管岗位申请人，不妨考虑尝试LMIA加200分的捷径，实现一步到位快速移民加拿大。
          </div>
        </div>
      </div>
  )
}

export default Single_profile
