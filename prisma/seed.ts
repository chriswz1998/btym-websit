import { PrismaClient } from '@prisma/client'
// import { PrismaClient } from '../../node_modules/.prisma/client'

const prisma = new PrismaClient()

async function main() {
    //在此编写 Prisma Client 查询
    const user = await prisma.provinceBanner.create( {
        data: {
            province: 'british-columbia', image: 'https://i.ibb.co/p1LzNvg/Pq-Gi2yhf-GWdej-Shit-Vb6w1j3-Xn-Xi8-KIue1gxx37k.png'
        }
    } );
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