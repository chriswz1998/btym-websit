import {
    Menubar, MenubarMenu, MenubarTrigger
} from '@/components/ui/menubar'

export function ModelSelectBar({ setShowOnePage }: { setShowOnePage: (value: string) => void }){
    return (<Menubar>
        <MenubarMenu>
            <MenubarTrigger onClick={ () => setShowOnePage('firstPage') }>首页</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger onClick={ () => setShowOnePage('aboutUs') }>博泰介绍</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger onClick={ () => setShowOnePage('EditOther') }>其他</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger onClick={ () => setShowOnePage('imageLibrary') }>图片库</MenubarTrigger>
        </MenubarMenu>
    </Menubar>)
}