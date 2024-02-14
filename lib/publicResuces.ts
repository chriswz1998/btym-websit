export interface NavigationItem{
    engDes: string;
    subItem: {
        subTitle: string; items: ({ productName: string; productDes: string; link: string })[]
    };
    title: string
}

export const navigationItem1: NavigationItem[] = [ {
    title: '商业类移民', engDes: 'BUSINESS STREAM', subItem: {
        subTitle: '', items: [ {
            productName: '联邦创业移民', productDes: 'Federal Start-Up Visa', link: '/business/FederalStartUp'
        }, {
            productName: '联邦自雇移民', productDes: 'Federal Self-employed', link: '/business/FederalSelfEmployed'
        }, {
            productName: 'BC省企业家移民', productDes: 'BCPNP-EI', link: '/business/FederalStartUp'
        }, {
            productName: 'BC省十万小镇试点', productDes: 'BCPNP-EI Regional Pilot', link: '/business/FederalStartUp'
        }, {
            productName: '萨省企业家移民', productDes: 'SINP-EI', link: '/business/FederalStartUp'
        }, {
            productName: '萨省农场主移民', productDes: 'Farm Owner & Operator', link: '/business/FederalStartUp'
        }, {
            productName: '魁省投资移民', productDes: 'Quebec Investor Program', link: '/business/FederalStartUp'
        }, {
            productName: '魁省企业家移民', productDes: 'Quebec-EI', link: '/business/FederalStartUp'
        }, {
            productName: '曼省企业家移民', productDes: 'MPNP-EI', link: '/business/FederalStartUp'
        }, {
            productName: 'PEI企业家移民', productDes: 'PEIPNP-EI', link: '/business/FederalStartUp'
        }, {
            productName: '纽省企业家移民', productDes: 'NLPNP-EI', link: '/business/FederalStartUp'
        } ]
    }
}, {
    title: '联邦快速通道', engDes: 'EXPRESS ENTRY ', subItem: {
        subTitle: '', items: [ {
            productName: '加拿大经验类', productDes: 'Canadian Experience Class', link: '/business/FederalStartUp'
        }, {
            productName: '海外联邦技术类', productDes: 'Federal Skilled Worker', link: '/business/FederalStartUp'
        }, {
            productName: '联邦技工类', productDes: 'Federal Skilled Trade', link: '/business/FederalStartUp'
        } ]
    }
}, {
    title: '家庭团聚类移民', engDes: 'FAMILY SPONSORSHIP  ', subItem: {
        subTitle: '', items: [ {
            productName: '父母|祖父母团聚移民',
            productDes: 'Parents & Grandparents sponsor',
            link: '/business/FederalStartUp'
        }, {
            productName: '子女|养子女团聚', productDes: 'Child or Other Dependent', link: '/business/FederalStartUp'
        }, {
            productName: '配偶|伴侣团聚', productDes: 'Spouse or Common Law Partner', link: '/business/FederalStartUp'
        } ]
    }
}, {
    title: '省提名移民', engDes: 'PROVINCIAL NOMINEE', subItem: {
        subTitle: '', items: [ {
            productName: 'BC省企业家移民', productDes: 'BCPNP_Skill Immigration', link: '/business/FederalStartUp'
        }, {
            productName: '阿省企业家移民', productDes: 'AINP_Skill Immigration', link: '/business/FederalStartUp'
        }, {
            productName: '安省企业家移民', productDes: 'OINP_Skill Immigration', link: '/business/FederalStartUp'
        }, {
            productName: '曼省技术移民', productDes: 'MPNP_Skill Immigration', link: '/business/FederalStartUp'
        }, {
            productName: '纽省技术移民', productDes: 'NLPNP_Skill Immigration', link: '/business/FederalStartUp'
        } ]
    }
}, {
    title: '留学工签转移民', engDes: 'STUDY&VISA TO IMMIGRATION', subItem: {
        subTitle: '', items: [ {
            productName: '留学转移民', productDes: 'Study to Immigration', link: '/business/FederalStartUp'
        }, {
            productName: '全球人才引进', productDes: 'Global Talent Stream', link: '/business/FederalStartUp'
        }, {
            productName: 'ICT内部员工转移',
            productDes: 'Intra-Company Transfers (ICT Work Permit)',
            link: '/business/FederalStartUp'
        }, {
            productName: '加拿大体验计划',
            productDes: 'International Experience Canada',
            link: '/business/FederalStartUp'
        } ]
    }
}, {
    title: '其它签证', engDes: 'OTHER VISA & PERMIT', subItem: {
        subTitle: '', items: [ {
            productName: '访问签证申请及续签',
            productDes: 'Visitor Visa Apply & Renew',
            link: '/business/FederalStartUp'
        }, {
            productName: '探亲超级签证', productDes: 'Super Visa', link: '/business/FederalStartUp'
        }, {
            productName: '实习工签', productDes: 'Co-op Work Permit', link: '/business/FederalStartUp'
        }, {
            productName: '毕业后工签', productDes: 'Post Graduate Work Permit', link: '/business/FederalStartUp'
        }, {
            productName: '配偶/伴侣工签',
            productDes: 'Spouse or Common Law Partner Work Permit',
            link: '/business/FederalStartUp'
        }, {
            productName: '商务考察签证', productDes: 'Apply Visa for a Business Visit', link: '/business/FederalStartUp'
        } ]
    }
}, {
    title: '移民常用工具', engDes: 'TOOLS FOR IMMIGRATION', subItem: {
        subTitle: '', items: [ {
            productName: '语言考试成绩转换', productDes: 'Test Score to CLB Converter', link: '/business/FederalStartUp'
        }, {
            productName: '省提名职业清单', productDes: 'Occupation in-demand List', link: '/business/FederalStartUp'
        }, {
            productName: '移民历史抽签查询', productDes: 'History Draw Search', link: '/business/FederalStartUp'
        }, {
            productName: '加拿大技术移民评分标准',
            productDes: 'Find out how to calculate your points',
            link: '/business/FederalStartUp'
        }, {
            productName: '体检与无犯罪记录',
            productDes: 'Physical Exam & Criminal Record',
            link: '/business/FederalStartUp'
        }, {
            productName: '新移民入境须知',
            productDes: 'Landing Instruction for Newcomers',
            link: '/business/FederalStartUp'
        } ]
    }
} ];
export const navigationItem2: NavigationItem[] = [ {
    title: '加拿大教育概览', engDes: 'CANADIAN EDUCATION OVERVIEW', subItem: {
        subTitle: '', items: [ {
            productName: '中小学排名', productDes: 'K-12 School Ranking', link: '/business/FederalStartUp'
        }, {
            productName: '公校概览', productDes: 'Introduction of Public School', link: '/business/FederalStartUp'
        }, {
            productName: '私校概览', productDes: 'Introduction of Private School', link: '/business/FederalStartUp'
        }, {
            productName: '职业专科教育', productDes: 'Art College', link: '/business/FederalStartUp'
        }, {
            productName: '大学教育', productDes: 'University in Canada', link: '/business/FederalStartUp'
        }, {
            productName: '大学排名', productDes: 'University Ranking', link: '/business/FederalStartUp'
        }, {
            productName: '英语学习', productDes: 'English Study', link: '/business/FederalStartUp'
        } ]
    }
}, {
    title: '学校申请', engDes: 'SCHOOL APPLICATION', subItem: {
        subTitle: 'K-12中小学教育', items: [ {
            productName: '中小学申请', productDes: 'K-12 School Application', link: '/business/FederalStartUp'
        }, {
            productName: '大学申请', productDes: 'University Application', link: '/business/FederalStartUp'
        }, {
            productName: '职业技术|培训申请',
            productDes: 'Certificate Program Application',
            link: '/business/FederalStartUp'
        }, {
            productName: '私校申请',
            productDes: 'Private School|University Application',
            link: '/business/FederalStartUp'
        }, {
            productName: '加拿大高校推荐',
            productDes: 'Recommended Education Institutes',
            link: '/business/FederalStartUp'
        } ]
    }
}, {
    title: '签证许可', engDes: 'VISA & PERMIT FOR INTERNATIONAL STUDENT', subItem: {
        subTitle: 'K-12中小学教育', items: [ {
            productName: '实习工签', productDes: 'Co-op Work Permit', link: '/business/FederalStartUp'
        }, {
            productName: '毕业后工签 PGWP', productDes: 'PGWP', link: '/business/FederalStartUp'
        }, {
            productName: '留学生配偶工签', productDes: 'Student\'s Spouse Work Permit', link: '/business/FederalStartUp'
        }, {
            productName: '升降学工签', productDes: 'Student\'s Spouse Work Permit', link: '/business/FederalStartUp'
        }, {
            productName: '配偶开放工签', productDes: 'Spouse Open Work Permit', link: '/business/FederalStartUp'
        } ]
    }
}, {
    title: '学生相关工作许可', engDes: 'STUDENT\'S PERMITS APPLICATION', subItem: {
        subTitle: 'K-12中小学教育', items: [ {
            productName: '学签续签', productDes: 'Study Permit Extension', link: '/business/FederalStartUp'
        }, {
            productName: '陪读签证',
            productDes: 'Visitor Visa for Accompanying Parents',
            link: '/business/FederalStartUp'
        }, {
            productName: '转学工签', productDes: 'School Transfer', link: '/business/FederalStartUp'
        }, {
            productName: '配偶开放工签', productDes: 'Spouse Open Work Permit', link: '/business/FederalStartUp'
        } ]
    }
}, {
    title: '加拿大高访认的教育机构', engDes: 'DESIGNATED LEARNING INSTITUTIONS', subItem: {
        subTitle: 'K-12中小学教育', items: [ {
            productName: '英属哥伦比亚省DLI', productDes: 'DLI in British Columbia', link: '/business/FederalStartUp'
        }, {
            productName: '安大略省DLI', productDes: 'DLI in Ontario', link: '/business/FederalStartUp'
        }, {
            productName: '曼尼托巴省DLI', productDes: 'DLI in Manitoba', link: '/business/FederalStartUp'
        }, {
            productName: '艾伯塔省DLI', productDes: 'DLI in Alberta', link: '/business/FederalStartUp'
        }, {
            productName: '萨斯喀彻温省DLI', productDes: 'DLI in Saskatchewan', link: '/business/FederalStartUp'
        }, {
            productName: '新布伦瑞克省认证教育机构', productDes: 'DLI in NewBrunswick', link: '/business/FederalStartUp'
        }, {
            productName: '新斯科舍省认证教育机构', productDes: 'DLI in Nova Scotia', link: '/business/FederalStartUp'
        } ]
    }
} ];
export const navigationItem3: NavigationItem[] = [ {
    title: '加拿大资讯速览', engDes: 'Quick view news of canada', subItem: {
        subTitle: '', items: [ {
            productName: '留学资讯', productDes: 'news of study', link: '/business/FederalStartUp'
        }, {
            productName: '移民资讯', productDes: 'news of immigration', link: '/business/FederalStartUp'
        }, {
            productName: '生活资讯', productDes: 'news of life', link: '/business/FederalStartUp'
        } ]
    }
} ];


export const how_item_res = [ {
    url: '/123as.png', href: '/employer', text: '安省'
}, {
    url: '/assdaaas.png', href: '/employer', text: 'BC'
}, {
    url: '/bcassad.png', href: '/employer', text: '萨省'
}, {
    url: '/sds1asaz.png', href: '/employer', text: '阿省'
}, {
    url: '/wwqeqwe.png', href: '/employer', text: 'NS省'
} ]