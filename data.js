function initData() {
  const users = getStorage(STORAGE_KEYS.USERS);
  if (users.length === 0) {
    const adminUser = {
      id: generateId(),
      email: 'admin@example.com',
      password: 'admin123',
      nickname: '管理员',
      isAdmin: true,
      createdAt: new Date().toISOString()
    };
    
    const testUser = {
      id: generateId(),
      email: 'user@example.com',
      password: '123456',
      nickname: '游客小明',
      isAdmin: false,
      createdAt: new Date().toISOString()
    };
    
    setStorage(STORAGE_KEYS.USERS, [adminUser, testUser]);
  }

  const articles = getStorage(STORAGE_KEYS.ARTICLES);
  if (articles.length === 0) {
    const sampleArticles = [
      {
        id: 'article_1',
        title: '成都茶馆文化',
        type: '民俗',
        content: '成都茶馆不仅是休闲场所，更是社交中心。从清晨到深夜，茶馆里总是坐满了人，人们在这里聊天、打牌、听评书。茶馆文化体现了成都人慢节奏的生活方式和乐观豁达的性格。\n\n成都的茶馆文化历史悠久，可以追溯到清代。当时的茶馆不仅是人们休息的地方，更是商业交易、信息交流的重要场所。如今，茶馆依然是成都人生活中不可或缺的一部分。',
        knowledgePoints: [
          '成都茶馆历史可追溯到清代，已有数百年历史',
          '盖碗茶是成都茶馆的特色，由茶盖、茶碗、茶船三部分组成',
          '茶馆是成都人社交的重要场所，体现了悠闲的生活态度'
        ],
        sources: [
          '《成都茶馆文化研究》，四川大学出版社',
          '成都市非物质文化遗产保护中心官网',
          '《老成都的茶馆记忆》，四川文艺出版社'
        ],
        coverImage: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800',
        createdAt: new Date().toISOString()
      },
      {
        id: 'article_2',
        title: '川剧变脸艺术',
        type: '非遗',
        content: '川剧变脸是川剧表演的特技之一，用于揭示剧中人物的内心及思想感情的变化。变脸手法主要有"抹脸"、"吹脸"、"扯脸"等，其中"扯脸"是最为精彩的一种。\n\n变脸艺术不仅需要高超的技巧，还需要演员具备良好的身体素质和心理素质。每一次变脸都是一次视觉盛宴，让观众叹为观止。',
        knowledgePoints: [
          '变脸是川剧的绝活，被誉为"中国戏剧一绝"',
          '变脸手法有抹脸、吹脸、扯脸等多种',
          '变脸已被列入国家级非物质文化遗产名录'
        ],
        sources: [
          '《川剧艺术概论》，四川人民出版社',
          '中国非物质文化遗产网',
          '《川剧变脸的秘密》，成都日报'
        ],
        coverImage: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800',
        createdAt: new Date().toISOString()
      },
      {
        id: 'article_3',
        title: '宽窄巷子的前世今生',
        type: '历史渊源',
        content: '宽窄巷子是成都遗留下来的较成规模的清朝古街道，由宽巷子、窄巷子、井巷子平行排列组成。这里保留了老成都的院落文化，是体验成都慢生活的绝佳去处。\n\n宽窄巷子的历史可以追溯到康熙年间，当时是八旗子弟的聚居地。如今，这里已成为成都最具代表性的文化旅游景点之一，吸引着来自世界各地的游客。',
        knowledgePoints: [
          '宽窄巷子由宽巷子、窄巷子、井巷子三条平行街道组成',
          '这里曾是清朝八旗子弟的聚居地',
          '保留了老成都的院落文化和市井生活'
        ],
        sources: [
          '《成都历史文化街区研究》，西南交通大学出版社',
          '成都市文化广电旅游局官网',
          '《宽窄巷子历史文化保护规划》'
        ],
        coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800',
        createdAt: new Date().toISOString()
      }
    ];
    
    setStorage(STORAGE_KEYS.ARTICLES, sampleArticles);
  }

  const fengwu = getStorage(STORAGE_KEYS.FENGWU);
  if (fengwu.length === 0) {
    const sampleFengwu = [
      {
        id: 'fengwu_1',
        name: '成都火锅',
        type: '美食',
        description: '成都火锅以麻辣鲜香著称，锅底通常用牛油、辣椒、花椒等熬制，食材丰富多样，是成都人聚餐的首选。',
        image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400',
        createdAt: new Date().toISOString()
      },
      {
        id: 'fengwu_2',
        name: '蜀绣',
        type: '手艺',
        description: '蜀绣是中国四大名绣之一，以针法严谨、片线光亮、针脚平齐、色彩明快著称，具有很高的艺术价值。',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
        createdAt: new Date().toISOString()
      },
      {
        id: 'fengwu_3',
        name: '杜甫草堂',
        type: '景点',
        description: '杜甫草堂是唐代诗人杜甫流寓成都时的故居，现为著名的文化景点和博物馆，展示了杜甫的生平和诗歌成就。',
        image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400',
        createdAt: new Date().toISOString()
      },
      {
        id: 'fengwu_4',
        name: '郫县豆瓣',
        type: '特产',
        description: '郫县豆瓣是成都的特产调味品，被誉为"川菜之魂"，是川菜烹饪不可或缺的调料，具有浓郁的酱香和辣味。',
        image: 'https://images.unsplash.com/photo-1599940824399-b87987ced72a?w=400',
        createdAt: new Date().toISOString()
      },
      {
        id: 'fengwu_5',
        name: '锦里古街',
        type: '景点',
        description: '锦里是成都著名的商业步行街，古色古香，汇集了各种小吃和手工艺品，是体验成都传统文化的好去处。',
        image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=400',
        createdAt: new Date().toISOString()
      }
    ];
    
    setStorage(STORAGE_KEYS.FENGWU, sampleFengwu);
  }

  const travelogues = getStorage(STORAGE_KEYS.TRAVELOGUES);
  if (travelogues.length === 0) {
    const sampleTravelogues = [
      {
        id: 'travelogue_1',
        title: '漫步宽窄巷子',
        location: '宽窄巷子',
        content: '今天下午来到了宽窄巷子，阳光正好，漫步在青石板路上，感受着老成都的韵味。巷子里有很多特色小店，卖着各种手工艺品和小吃。找了一家茶馆坐下，点了一杯盖碗茶，看着人来人往，感觉时光都慢了下来。',
        image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600',
        authorId: 'test_user',
        authorNickname: '游客小明',
        status: 'approved',
        createdAt: new Date().toISOString()
      }
    ];
    
    setStorage(STORAGE_KEYS.TRAVELOGUES, sampleTravelogues);
  }

  const locations = getStorage(STORAGE_KEYS.LOCATIONS);
  if (locations.length === 0) {
    const sampleLocations = [
      {
        id: 'location_1',
        name: '宽窄巷子',
        latitude: 30.6700,
        longitude: 104.0630,
        description: '成都历史文化街区，由宽巷子、窄巷子、井巷子组成，保留了老成都的院落文化。',
        relatedArticles: ['article_3'],
        relatedFengwu: ['fengwu_5'],
        relatedTravelogues: ['travelogue_1']
      },
      {
        id: 'location_2',
        name: '杜甫草堂',
        latitude: 30.6586,
        longitude: 104.0354,
        description: '唐代诗人杜甫流寓成都时的故居，现为著名的文化景点和博物馆。',
        relatedArticles: ['article_1'],
        relatedFengwu: ['fengwu_3'],
        relatedTravelogues: []
      },
      {
        id: 'location_3',
        name: '锦里',
        latitude: 30.6468,
        longitude: 104.0456,
        description: '古色古香的商业街，汇集了各种小吃和手工艺品。',
        relatedArticles: ['article_1', 'article_2'],
        relatedFengwu: ['fengwu_1', 'fengwu_2', 'fengwu_4', 'fengwu_5'],
        relatedTravelogues: []
      },
      {
        id: 'location_4',
        name: '武侯祠',
        latitude: 30.6472,
        longitude: 104.0438,
        description: '中国唯一的君臣合祀祠庙，纪念诸葛亮及三国英雄。',
        relatedArticles: [],
        relatedFengwu: ['fengwu_5'],
        relatedTravelogues: []
      }
    ];
    
    setStorage(STORAGE_KEYS.LOCATIONS, sampleLocations);
  }

  const solarTerms = getStorage('solarTerms');
  if (solarTerms.length === 0) {
    const sampleSolarTerms = [
      {
        id: 'st-1703123456789',
        name: '立春',
        season: '春',
        recommend: '吃春饼、去龙泉驿看桃花',
        custom: '打春牛、咬春，迎春纳福',
        image: 'https://images.unsplash.com/photo-1495954484750-af469f2f9b67?w=600',
        locationId: 'location_1',
        locationName: '宽窄巷子',
        createdAt: new Date().toISOString()
      },
      {
        id: 'st-1705801856789',
        name: '夏至',
        season: '夏',
        recommend: '吃凉面、人民公园喝茶乘凉',
        custom: '祭地、称人，消夏避伏',
        image: 'https://images.unsplash.com/photo-1526304640581-d3487e92ba8f?w=600',
        locationId: 'location_1',
        locationName: '宽窄巷子',
        createdAt: new Date().toISOString()
      },
      {
        id: 'st-1707616256789',
        name: '立秋',
        season: '秋',
        recommend: '贴秋膘、吃西瓜啃秋',
        custom: '啃秋、晒秋，祭祀土地',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
        locationId: 'location_1',
        locationName: '宽窄巷子',
        createdAt: new Date().toISOString()
      },
      {
        id: 'st-1709430656789',
        name: '冬至',
        season: '冬',
        recommend: '吃羊肉汤、包饺子',
        custom: '祭祖、数九，画九九消寒图',
        image: 'https://images.unsplash.com/photo-1541519463658-c73969963b4e?w=600',
        locationId: 'location_3',
        locationName: '锦里',
        createdAt: new Date().toISOString()
      }
    ];
    
    setStorage('solarTerms', sampleSolarTerms);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initData();
});