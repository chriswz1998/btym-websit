import { PrismaClient } from '@prisma/client'
import {article, subSection} from '../lib/tests'

const prisma = new PrismaClient()


async function main() {
    console.log(`Start seeding ...`);
    for(const item of article){
        await prisma.subSectionLinks.create({
            data: {
                name: item.productName,
                description: item.productDes,
                link: item.link,
                subSection_id: 12
            },
        });
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