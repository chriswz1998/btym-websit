import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
    try {
        const section = await db.section.findMany()
        const subSection = await db.subSection.findMany()
        const subSectionLinks = await db.subSectionLinks.findMany()

        const combinedSections = section.map(section => ({
            ...section,
            subSections: subSection.filter(subSection => subSection.section_id === section.section_id).map(subSection => ({
                ...subSection,
                links: subSectionLinks.filter(link => link.subSection_id === subSection.subSection_id)
            }))
        }));

        return NextResponse.json( combinedSections )
    } catch( error ) {
        console.error( 'requestGet', error )
        return new NextResponse( 'Internal Error', { status: 500 } )
    }
}
