'use client'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import * as z from 'zod'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Checkbox } from '@/components/ui/checkbox'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { Check, ChevronsUpDown } from 'lucide-react'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { CheckboxReactHookFormSingle } from '@/components/tect-c'

const FormSchema = z.object( {
    name: z.string().min( 2, { message: '请填写姓名' } ),

    phone: z.string().min( 11, { message: '请填写电话' } ),

    age: z.string().min( 1, { message: '请填写年龄' } ),

    education: z.enum( [ '高中以下', '  高中  ', '大专 ', ' 本科 ', ' 硕士 ', ' 博士' ], { required_error: '您还没有选择.' } ),

    english: z.enum( [ '完全不会 ', ' 英语4级以下 ', ' 英语4级 ', ' 英语6级 ', ' 英语6级优秀 ', ' 英语8级优秀' ], { required_error: '您还没有选择.' } ),

    french: z.enum( [ '不会', '  一般 ', '精通' ], { required_error: '您还没有选择.' } ),

    industry: z.string().min( 1, { message: '请填写从事的行业' } ),

    position: z.string().min( 1, { message: '请填写您的职位' } ),

    destinations: z.string().min( 0, { message: '请填写想要咨询的目的地' } ),

    reason: z.array( z.string() ).refine( ( value ) => value.some( ( item ) => item ), { message: '您的选择有误' } )
} )

const education_items = [ { label: '高中以下' }, { label: '高中' }, { label: '大专' }, { label: '本科' }, { label: '硕士' }, { label: '博士' } ]

const fr = [ '不会', '  一般 ', '精通' ]
const en = [ '完全不会 ', ' 英语4级以下 ', ' 英语4级 ', ' 英语6级 ', ' 英语6级优秀 ', ' 英语8级优秀' ]


const checkbox_items = [ {
    label: '子女教育', checked: false
}, {
    label: '工作/教育', checked: false
}, {
    label: 'TZ置业', checked: false
}, {
    label: '居住环境', checked: false
} ]
const languages = [ { label: 'English', value: 'en' }, { label: 'French', value: 'fr' }, { label: 'German', value: 'de' }, { label: 'Spanish', value: 'es' }, { label: 'Portuguese', value: 'pt' }, { label: 'Russian', value: 'ru' }, { label: 'Japanese', value: 'ja' }, { label: 'Korean', value: 'ko' }, { label: 'Chinese', value: 'zh' } ] as const


const Condition_self_test = () => {
    const form = useForm<z.infer<typeof FormSchema>>( {
        resolver: zodResolver( FormSchema )
    } )

    const onSubmit = async( data: z.infer<typeof FormSchema> ) => {
        try {
            console.log( data )
            return
            const response = await axios.post( '/api/UserApplicationFrom', data )
            if( response.status === 200 ) {
                toast.success( '提交成功' )
            }
        } catch( e ) {
            toast.error( '提交失败' )
        }
    }

    return ( <div className={ 'px-20 min-[1980px]:w-[1980px] mx-auto' }>
        <Form { ...form }>
            <form onSubmit={ form.handleSubmit( onSubmit ) }
                  className="w-full py-28 space-y-20">
                <div className={ 'flex w-full space-x-20' }>
                    <div className={ 'space-y-12 w-1/2' }>
                        <FormField
                            control={ form.control }
                            name="name"
                            render={ ( { field } ) => ( <FormItem>
                                <FormLabel>您的姓名</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder={ '张先生/女士' }
                                        { ...field } />
                                </FormControl>
                                <FormMessage/>
                            </FormItem> ) }
                        />
                        <FormField
                            control={ form.control }
                            name="phone"
                            render={ ( { field } ) => ( <FormItem>
                                <FormLabel>您的电话</FormLabel>
                                <FormControl>
                                    <Input placeholder={ '请输入电话' } { ...field } />
                                </FormControl>
                                <FormMessage/>
                            </FormItem> ) }
                        />
                        <FormField
                            control={ form.control }
                            name="age"
                            render={ ( { field } ) => ( <FormItem>
                                <FormLabel>您的年龄</FormLabel>
                                <FormControl>
                                    <Input placeholder={ '请输入年龄' }
                                           { ...field } />
                                </FormControl>
                                <FormMessage/>
                            </FormItem> ) }
                        />
                        <FormField
                            control={ form.control }
                            name="education"
                            render={ ( { field } ) => ( <FormItem className="space-y-3">
                                <FormLabel>您的学历</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={ field.onChange }
                                        defaultValue={ field.value }
                                        className="flex  space-x-3"
                                    >
                                        { education_items.map( ( item, index ) => (
                                            <FormItem className="flex items-center space-x-3 space-y-0" key={ index }>
                                                <FormControl>
                                                    <RadioGroupItem value={ item.label }/>
                                                </FormControl>
                                                <FormLabel className="font-normal">{ item.label }</FormLabel>
                                            </FormItem> ) ) }
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage/>
                            </FormItem> ) }
                        />

                    </div>
                    <div className={ 'space-y-12 w-1/2' }>
                        <FormField
                            control={ form.control }
                            name="industry"
                            render={ ( { field } ) => ( <FormItem>
                                <FormLabel>从事的行业</FormLabel>
                                <FormControl>
                                    <Input placeholder={ '请输入行业' }
                                           { ...field } />
                                </FormControl>
                                <FormMessage/>
                            </FormItem> ) }
                        />
                        <FormField
                            control={ form.control }
                            name="position"
                            render={ ( { field } ) => ( <FormItem>
                                <FormLabel>您的职位</FormLabel>
                                <FormControl>
                                    <Input placeholder={ '请输入您的职位' }
                                           { ...field } />
                                </FormControl>
                                <FormMessage/>
                            </FormItem> ) }
                        />
                        <FormField
                            control={ form.control }
                            name="destinations"
                            render={ ( { field } ) => ( <FormItem className="flex flex-col ">
                                <FormLabel className={'pb-2.5'}>想要咨询的目的地</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                className={ cn( 'w-[200px] justify-between', !field.value && 'text-muted-foreground' ) }
                                            >
                                                { field.value ? languages.find( ( language ) => language.value === field.value )?.label : 'Select language' }
                                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[200px] p-0">
                                        <Command>
                                            <CommandInput placeholder="Search language..."/>
                                            <CommandEmpty>No language found.</CommandEmpty>
                                            <CommandGroup>
                                                { languages.map( ( language ) => ( <CommandItem
                                                    value={ language.label }
                                                    key={ language.value }
                                                    onSelect={ () => {
                                                        form.setValue( 'destinations', language.value )
                                                    } }
                                                >
                                                    <Check
                                                        className={ cn( 'mr-2 h-4 w-4', language.value === field.value ? 'opacity-100' : 'opacity-0' ) }
                                                    />
                                                    { language.label }
                                                </CommandItem> ) ) }
                                            </CommandGroup>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                                <FormMessage/>
                            </FormItem> ) }
                        />
                        <FormField
                            control={ form.control }
                            name="english"
                            render={ ( { field } ) => ( <FormItem className="space-y-3">
                                <FormLabel>您的英语水平</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={ field.onChange }
                                        defaultValue={ field.value }
                                        className="flex  space-x-3"
                                    >
                                        { en.map( ( item, index ) => (
                                            <FormItem className="flex items-center space-x-3 space-y-0" key={ index }>
                                                <FormControl>
                                                    <RadioGroupItem value={ item }/>
                                                </FormControl>
                                                <FormLabel className="font-normal">{ item }</FormLabel>
                                            </FormItem> ) ) }
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage/>
                            </FormItem> ) }
                        />
                    </div>
                </div>

                <FormField
                    name="content"
                    render={ ( { field } ) => ( <FormItem>
                        <FormLabel
                            className={ 'text-[22px] text-description-text-color1 font-light' }>细节描述</FormLabel>
                        <FormControl>
                            <Textarea
                                placeholder="告诉我们更多细节"
                                className={ 'h-[230px]' }
                                { ...field }
                            />
                        </FormControl>
                        <FormMessage/>
                    </FormItem> ) }
                />
                <Button
                    className={ 'w-full rounded-lg bg-default-blue hover:bg-default-blue' }
                    type="submit">
                    提交
                </Button>
            </form>
        </Form>
        <CheckboxReactHookFormSingle/>
    </div> )
}

export default Condition_self_test
