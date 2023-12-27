'use client'

import {
    Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger
} from '@/components/ui/dialog'
import React, { useState } from 'react'
import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import toast from 'react-hot-toast'
import { MessageSquare } from 'lucide-react'
import { cn } from '@/lib/utils'
import { className } from 'postcss-selector-parser'

interface variantType{
    variant: 'link' | 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | null | undefined
}

export const DialogCoverFrom = ({ text, className, variant }: {
    className: string, variant?: variantType['variant'], text: string
}) => {

    const [ open, setOpen ] = useState(false)

    return (<Dialog open={ open } onOpenChange={ setOpen }>
        <DialogTrigger asChild>
            <Button
                className={ cn(className) }
                variant={ variant || 'default' }
            >
                {text}
            </Button>
        </DialogTrigger>

        <DialogContent>
            <DialogHeader>
                <DialogTitle>快速申请</DialogTitle>
                <DialogDescription>
                    留下您的称呼和联系方式，我们会尽快联系您
                </DialogDescription>
            </DialogHeader>
            <iframe src="https://saas.qikebao.com/landingPage/detail/WVVW?from=QF1fQxc%3D"
                    width="100%"
                    height="931px"
                    allowFullScreen
            ></iframe>
        </DialogContent>
    </Dialog>)
}
