'use client'
import { Star } from 'lucide-react'
import { SelectForm } from '@/app/(profiles)/_components/selecet'
import { useEffect, useState } from 'react'

const Immigration_score = () => {
  const [value, setValue] = useState('')
  useEffect(
      () => {
        console.log(value)
      },
      [value]
  )
  return (
      <div className={ 'px-20 min-[1980px]:w-[1980px] mx-auto' }>
        <SelectForm setValue={ setValue }/>
        <div className={ 'w-full flex justify-between flex-wrap pb-24 pt-12' }>
          <div
              className={ 'shadow-[0_6px_30px_rgba(0,0,0,0.12)] rounded-md overflow-hidden mb-20' }>
            <div
                className={ 'flex items-center justify-between text-[20px] p-4 ' }>
              <div className={ 'flex items-center' }>
                <p className={ 'text-description-text-color3 font-bold' }>雇主担保移民</p>
                <Star className={ 'ml-3 text-description-text-color4' }/>
              </div>
              <div className={ 'text-description-text-color5' }>
                2023-01-01
              </div>
            </div>
            <div
                className={ 'bg-[url("https://i.ibb.co/Wk82R7C/PHO-STAGE-1290-Super-Adventure-R-M23-Model-Page-US-header-SEN-US-AEPI-V1.jpg")] bg-cover bg-no-repeat' }>
              <div className={ 'pt-52 bg-mask-color3' }>
                <p className={ 'text-white p-4 w-[550px] text-[20px]' }>来自新疆的维吾尔族大哥,
                  经历189天成功拿到工签,准备开启雇主担保移民之路</p>
                <p className={ 'text-description-text-color6 px-4 pb-2 w-[500px] text-[16px]' }>
                  本案例由顾问Ken主理完成,在此感谢Ken的辛勤付出!
                </p>
              </div>
            </div>
          </div>
          <div
              className={ 'shadow-[0_6px_30px_rgba(0,0,0,0.12)] rounded-md overflow-hidden mb-20' }>
            <div
                className={ 'flex items-center justify-between text-[20px] p-4 ' }>
              <div className={ 'flex items-center' }>
                <p className={ 'text-description-text-color3 font-bold' }>雇主担保移民</p>
                <Star className={ 'ml-3 text-description-text-color4' }/>
              </div>
              <div className={ 'text-description-text-color5' }>
                2023-01-01
              </div>
            </div>
            <div
                className={ 'bg-[url("https://i.ibb.co/Wk82R7C/PHO-STAGE-1290-Super-Adventure-R-M23-Model-Page-US-header-SEN-US-AEPI-V1.jpg")] bg-cover bg-no-repeat' }>
              <div className={ 'pt-52 bg-mask-color3' }>
                <p className={ 'text-white p-4 w-[550px] text-[20px]' }>来自新疆的维吾尔族大哥,
                  经历189天成功拿到工签,准备开启雇主担保移民之路</p>
                <p className={ 'text-description-text-color6 px-4 pb-2 w-[500px] text-[16px]' }>
                  本案例由顾问Ken主理完成,在此感谢Ken的辛勤付出!
                </p>
              </div>
            </div>
          </div>
          <div
              className={ 'shadow-[0_6px_30px_rgba(0,0,0,0.12)] rounded-md overflow-hidden mb-20' }>
            <div
                className={ 'flex items-center justify-between text-[20px] p-4 ' }>
              <div className={ 'flex items-center' }>
                <p className={ 'text-description-text-color3 font-bold' }>雇主担保移民</p>
                <Star className={ 'ml-3 text-description-text-color4' }/>
              </div>
              <div className={ 'text-description-text-color5' }>
                2023-01-01
              </div>
            </div>
            <div
                className={ 'bg-[url("https://i.ibb.co/Wk82R7C/PHO-STAGE-1290-Super-Adventure-R-M23-Model-Page-US-header-SEN-US-AEPI-V1.jpg")] bg-cover bg-no-repeat' }>
              <div className={ 'pt-52 bg-mask-color3' }>
                <p className={ 'text-white p-4 w-[550px] text-[20px]' }>来自新疆的维吾尔族大哥,
                  经历189天成功拿到工签,准备开启雇主担保移民之路</p>
                <p className={ 'text-description-text-color6 px-4 pb-2 w-[500px] text-[16px]' }>
                  本案例由顾问Ken主理完成,在此感谢Ken的辛勤付出!
                </p>
              </div>
            </div>
          </div>
          <div
              className={ 'shadow-[0_6px_30px_rgba(0,0,0,0.12)] rounded-md overflow-hidden mb-20' }>
            <div
                className={ 'flex items-center justify-between text-[20px] p-4 ' }>
              <div className={ 'flex items-center' }>
                <p className={ 'text-description-text-color3 font-bold' }>雇主担保移民</p>
                <Star className={ 'ml-3 text-description-text-color4' }/>
              </div>
              <div className={ 'text-description-text-color5' }>
                2023-01-01
              </div>
            </div>
            <div
                className={ 'bg-[url("https://i.ibb.co/Wk82R7C/PHO-STAGE-1290-Super-Adventure-R-M23-Model-Page-US-header-SEN-US-AEPI-V1.jpg")] bg-cover bg-no-repeat' }>
              <div className={ 'pt-52 bg-mask-color3' }>
                <p className={ 'text-white p-4 w-[550px] text-[20px]' }>来自新疆的维吾尔族大哥,
                  经历189天成功拿到工签,准备开启雇主担保移民之路</p>
                <p className={ 'text-description-text-color6 px-4 pb-2 w-[500px] text-[16px]' }>
                  本案例由顾问Ken主理完成,在此感谢Ken的辛勤付出!
                </p>
              </div>
            </div>
          </div>
          <div
              className={ 'shadow-[0_6px_30px_rgba(0,0,0,0.12)] rounded-md overflow-hidden mb-20' }>
            <div
                className={ 'flex items-center justify-between text-[20px] p-4 ' }>
              <div className={ 'flex items-center' }>
                <p className={ 'text-description-text-color3 font-bold' }>雇主担保移民</p>
                <Star className={ 'ml-3 text-description-text-color4' }/>
              </div>
              <div className={ 'text-description-text-color5' }>
                2023-01-01
              </div>
            </div>
            <div
                className={ 'bg-[url("https://i.ibb.co/Wk82R7C/PHO-STAGE-1290-Super-Adventure-R-M23-Model-Page-US-header-SEN-US-AEPI-V1.jpg")] bg-cover bg-no-repeat' }>
              <div className={ 'pt-52 bg-mask-color3' }>
                <p className={ 'text-white p-4 w-[550px] text-[20px]' }>来自新疆的维吾尔族大哥,
                  经历189天成功拿到工签,准备开启雇主担保移民之路</p>
                <p className={ 'text-description-text-color6 px-4 pb-2 w-[500px] text-[16px]' }>
                  本案例由顾问Ken主理完成,在此感谢Ken的辛勤付出!
                </p>
              </div>
            </div>
          </div>
          <div
              className={ 'shadow-[0_6px_30px_rgba(0,0,0,0.12)] rounded-md overflow-hidden mb-20' }>
            <div
                className={ 'flex items-center justify-between text-[20px] p-4 ' }>
              <div className={ 'flex items-center' }>
                <p className={ 'text-description-text-color3 font-bold' }>雇主担保移民</p>
                <Star className={ 'ml-3 text-description-text-color4' }/>
              </div>
              <div className={ 'text-description-text-color5' }>
                2023-01-01
              </div>
            </div>
            <div
                className={ 'bg-[url("https://i.ibb.co/Wk82R7C/PHO-STAGE-1290-Super-Adventure-R-M23-Model-Page-US-header-SEN-US-AEPI-V1.jpg")] bg-cover bg-no-repeat' }>
              <div className={ 'pt-52 bg-mask-color3' }>
                <p className={ 'text-white p-4 w-[550px] text-[20px]' }>来自新疆的维吾尔族大哥,
                  经历189天成功拿到工签,准备开启雇主担保移民之路</p>
                <p className={ 'text-description-text-color6 px-4 pb-2 w-[500px] text-[16px]' }>
                  本案例由顾问Ken主理完成,在此感谢Ken的辛勤付出!
                </p>
              </div>
            </div>
          </div>
          <div
              className={ 'shadow-[0_6px_30px_rgba(0,0,0,0.12)] rounded-md overflow-hidden mb-20' }>
            <div
                className={ 'flex items-center justify-between text-[20px] p-4 ' }>
              <div className={ 'flex items-center' }>
                <p className={ 'text-description-text-color3 font-bold' }>雇主担保移民</p>
                <Star className={ 'ml-3 text-description-text-color4' }/>
              </div>
              <div className={ 'text-description-text-color5' }>
                2023-01-01
              </div>
            </div>
            <div
                className={ 'bg-[url("https://i.ibb.co/Wk82R7C/PHO-STAGE-1290-Super-Adventure-R-M23-Model-Page-US-header-SEN-US-AEPI-V1.jpg")] bg-cover bg-no-repeat' }>
              <div className={ 'pt-52 bg-mask-color3' }>
                <p className={ 'text-white p-4 w-[550px] text-[20px]' }>来自新疆的维吾尔族大哥,
                  经历189天成功拿到工签,准备开启雇主担保移民之路</p>
                <p className={ 'text-description-text-color6 px-4 pb-2 w-[500px] text-[16px]' }>
                  本案例由顾问Ken主理完成,在此感谢Ken的辛勤付出!
                </p>
              </div>
            </div>
          </div>
          <div
              className={ 'shadow-[0_6px_30px_rgba(0,0,0,0.12)] rounded-md overflow-hidden mb-20' }>
            <div
                className={ 'flex items-center justify-between text-[20px] p-4 ' }>
              <div className={ 'flex items-center' }>
                <p className={ 'text-description-text-color3 font-bold' }>雇主担保移民</p>
                <Star className={ 'ml-3 text-description-text-color4' }/>
              </div>
              <div className={ 'text-description-text-color5' }>
                2023-01-01
              </div>
            </div>
            <div
                className={ 'bg-[url("https://i.ibb.co/Wk82R7C/PHO-STAGE-1290-Super-Adventure-R-M23-Model-Page-US-header-SEN-US-AEPI-V1.jpg")] bg-cover bg-no-repeat' }>
              <div className={ 'pt-52 bg-mask-color3' }>
                <p className={ 'text-white p-4 w-[550px] text-[20px]' }>来自新疆的维吾尔族大哥,
                  经历189天成功拿到工签,准备开启雇主担保移民之路</p>
                <p className={ 'text-description-text-color6 px-4 pb-2 w-[500px] text-[16px]' }>
                  本案例由顾问Ken主理完成,在此感谢Ken的辛勤付出!
                </p>
              </div>
            </div>
          </div>
          <div
              className={ 'shadow-[0_6px_30px_rgba(0,0,0,0.12)] rounded-md overflow-hidden mb-20' }>
            <div
                className={ 'flex items-center justify-between text-[20px] p-4 ' }>
              <div className={ 'flex items-center' }>
                <p className={ 'text-description-text-color3 font-bold' }>雇主担保移民</p>
                <Star className={ 'ml-3 text-description-text-color4' }/>
              </div>
              <div className={ 'text-description-text-color5' }>
                2023-01-01
              </div>
            </div>
            <div
                className={ 'bg-[url("https://i.ibb.co/Wk82R7C/PHO-STAGE-1290-Super-Adventure-R-M23-Model-Page-US-header-SEN-US-AEPI-V1.jpg")] bg-cover bg-no-repeat' }>
              <div className={ 'pt-52 bg-mask-color3' }>
                <p className={ 'text-white p-4 w-[550px] text-[20px]' }>来自新疆的维吾尔族大哥,
                  经历189天成功拿到工签,准备开启雇主担保移民之路</p>
                <p className={ 'text-description-text-color6 px-4 pb-2 w-[500px] text-[16px]' }>
                  本案例由顾问Ken主理完成,在此感谢Ken的辛勤付出!
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
  )
}

export default Immigration_score