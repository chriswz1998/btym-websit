import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(req: Request) {
    try {
        const { html_content, subSectionLinks_id } = await req.json();
        const postResult = await db.articles.create({
            data: {
                html_content,
                subSectionLinks_id
            }
        })
        return NextResponse.json({ message: "Article created successfully", article: postResult }, { status: 201 })
    } catch( error ) {
        console.error( 'requestGet', error )
        return new NextResponse( 'Internal Error', { status: 500 } )
    }
}
