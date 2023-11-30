import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
    try {
        const res = await db.provinceBanner.findMany()
        return NextResponse.json( res )
    } catch( error ) {
        console.error( 'requestGet', error )
        return new NextResponse( 'Internal Error', { status: 500 } )
    }
}
