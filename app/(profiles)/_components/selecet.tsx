import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

export function SelectForm({ setValue }: {
  setValue: (value: string) => void
}) {
  const select_value_change = (value: string) => {
    setValue(value)
  }
  return (
      <Select onValueChange={ select_value_change }>
        <SelectTrigger className="w-[550px] h-[80px] text-[18px] mt-12">
          <SelectValue placeholder="请选择案例分类"/>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>雇主担保</SelectLabel>
            <SelectItem value="apple">BC雇主担保1</SelectItem>
            <SelectItem value="banana">BC雇主担保2</SelectItem>
            <SelectItem value="blueberry">BC雇主担保3</SelectItem>
            <SelectItem value="grapes">BC雇主担保4</SelectItem>
            <SelectItem value="pineapple">BC雇主担保5</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
  )
}