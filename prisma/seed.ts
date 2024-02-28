import { PrismaClient } from '@prisma/client'
import { subSection } from '@/lib/test'

const prisma = new PrismaClient()


async function main() {
    console.log(`Start seeding ...`);
    for(const item of subSection){
        const section = await prisma.subSection.create({
            data: {
                name: item.name,
                description: item.description,
                section_id: 1
            },
        });
        console.log(`Created section with id: ${section.section_id}`);
    }
    console.log(`Seeding finished.`);
}

main()
    .catch( ( e ) => {
        console.error( e );
        process.exit( 1 );
    } )
    .finally( async() => {
        // 关闭 Prisma Client
        await prisma.$disconnect();
    } );