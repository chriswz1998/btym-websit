import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    //在此编写 Prisma Client 查询
    const user = await prisma.provinceBanner.createMany( {
        data: [ {
            province: '安大略省', image: 'https://i.ibb.co/2F7JSP6/Ontario.png'
        }, {
            province: '魁北克省', image: 'https://i.ibb.co/dB83QHn/p-PP2t-TRb-JVXGVh5-FUm-Vu-Kb21dv0h-Q3-J6-Ymg31q95.png'
        }, {
            province: '爱德华王子岛省', image: 'https://i.ibb.co/9sDDzJH/QU4-R4-Jb-Fp-AOl72tqzqvj-NIXZk-Tp2-NHyo87-Nychqm.png'
        }, {
            province: '艾尔伯塔省', image: 'https://i.ibb.co/KW20tN3/r85cmaelsak-Hh-RASbvua-LXcf-Ya-Wt-NQVv4-QVNO9yu.png'
        }, {
            province: '曼尼托巴省', image: 'https://i.ibb.co/sRs99sY/2-ELm-Xq9-Xm-FBWe-S5v-ZLbj-Cqa-Io-YRv-P71-Buop-Fra-Kh.png'
        }, {
            province: '萨斯喀彻温省', image: 'https://i.ibb.co/JQNwBkt/Og9-IZt-MMlw-IDJ1-Wv3od-Yb-Qn-Vra7j6b-X5-Ab-N9-Kdd-Q.png'
        }, {
            province: '新斯科舍省', image: 'https://i.ibb.co/LYJXzv2/1-N2kxrjz-KLs6-TZUYa2-B6xt8m-Yfp-CH7l0btn-Co-LDH.png'
        }, {
            province: '纽芬兰和拉布拉多省', image: 'https://i.ibb.co/2M8kBth/c2-Vb-QX87y-JOGGr4-Ri9-UMHm-BUf-NLks-QYMl-Lq5i-Uit.png'

        }, {
            province: '新不伦瑞克省', image: 'https://i.ibb.co/tMHWqkj/r0z-MAiq-XCLh6e-TBZXO5-QJXswr-BEIqlt-Yhrh-MSZc-A.png'
        } ]
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