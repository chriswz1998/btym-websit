import { NextResponse } from 'next/server'
import { db } from '@/lib/db'


export async function GET() {
    try {
        const form = await db.applicationFromUser.findMany()
        return NextResponse.json( form )
    } catch( error ) {
        console.error( 'requestGet', error )
        return new NextResponse( 'Internal Error', { status: 500 } )
    }
}

export async function POST( req: Request ) {
    try {
        const { name, email, title, content } = await req.json()
        const form = await db.applicationFromUser.create( {
            data: {
                name, email, content, title
            }
        } )
        return NextResponse.json( form )
    } catch( error ) {
        console.error( 'requestPost', error )
        return new NextResponse( 'Internal Error', { status: 500 } )
    }
}

