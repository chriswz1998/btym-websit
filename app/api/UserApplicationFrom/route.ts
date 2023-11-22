import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const form = await prisma.applicationFromUser.findMany()
    return NextResponse.json(form)
  } catch (error) {
    console.error('requestGet', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}

export async function POST(req: Request) {
  try {

    const { name, email, title, content } = await req.json()
    const data = streamToString(req.body)
    console.log('🚀 ~ file: route.ts ~ line 27 --->', data)
    const form = await prisma.applicationFromUser.create({
      data: {
        name,
        email,
        content,
        title
      }
    })
    return NextResponse.json(form)
  } catch
      (error) {
    console.error('requestPost', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}

async function streamToString(stream: any) {
  const chunks = []
  for await (const chunk of stream) {
    chunks.push(chunk)
  }
  return Buffer.concat(chunks).toString('utf8')
}

