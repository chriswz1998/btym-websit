import { Navbar } from '@/components/navbar'
import { DialogCoverFrom } from '@/components/dialog'
import { Button } from '@/components/ui/button'
import { ChevronsRight } from 'lucide-react'
import { Margin20_box } from '@/components/margin20_box'

export const Main_c = () => {
    return (<div className={ 'bg-[url("https://i.ibb.co/wSSKYng/bg1.jpg")] bg-cover bg-no-repeat' }>
        <div className={ 'bg-mask-bg w-full h-full' }>
            <Margin20_box>
                <Navbar/>
                <div
                    className={ 'py-44 flex flex-col items-center justify-center text-white' }>
                    <p className={ 'text-[150px] text-white font-bold' }>博泰移民</p>
                    <div className={ 'flex font-bold' }>
                        <div>
                            <p className={ 'text-[73px]' }>签证、</p>
                            <p className={ 'flex items-center font-light text-[20px]' }>
                                <p className={ 'w-4 h-4 rounded-full bg-white mr-3' }/>
                                <p>免费一对一咨询</p>
                            </p>
                        </div>
                        <div>
                            <p className={ 'text-[73px]' }>留学、</p>
                            <p className={ 'flex items-center font-light text-[20px]' }>
                                <p className={ 'w-4 h-4 rounded-full bg-white mr-3' }/>
                                <p>签证方案提供</p>
                            </p>
                        </div>
                        <div>
                            <p className={ 'text-[73px]' }>伙伴</p>
                            <p className={ 'flex items-center font-light text-[20px]' }>
                                <p className={ 'w-4 h-4 rounded-full bg-white mr-3' }/>
                                <p>登录安家服务</p>
                            </p>
                        </div>
                    </div>
                    <p className={ 'text-[36px] text-default-blue mt-10' }>完整签证解决方案提供方</p>
                    <div className={ 'flex pt-10' }>
                        {/*<DialogCoverFrom dialog_model={ 'normal' }/>*/}
                        <div className={ 'w-[75px]' }/>
                        <Button
                            className={ 'text-[28px] px-14 py-8 text-default-blue bg-white hover:bg-white font-light' }>
                            {/* 链接移民省份拦*/ }
                            了解更多
                            <ChevronsRight className={ 'ml-2' }/>
                        </Button>
                    </div>
                </div>
            </Margin20_box>
        </div>
    </div>)
}
