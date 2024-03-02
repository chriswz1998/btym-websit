import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import {NextApiRequest, NextApiResponse} from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        const id = req.query.id;
        if (!id) {
            res.status(400).json({ message: 'Bad Request: ID is required' });
            return;
        }
        const postResult = await db.articles.findMany({
            where: {
                subSectionLinks_id: parseInt(id as string, 10)
            }
        });
        res.status(200).json(postResult);
    } catch (error) {
        console.error('GET request error', error);
        res.status(500).json({ message: 'Internal Error' });
    }
}

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
