document.addEventListener('DOMContentLoaded', () => {
    const idols = [
        { 
            name: '(G)I-DLE', 
            description: '成員: Miyeon、Minnie、Soyeon、Yuqi與Shuhua', 
            details: '出道日期: 2018年5月2日。代表作: "LATATA", "HANN (Alone)", "Oh my god"',
            company: '經紀公司: Cube娛樂',
            fandom: '粉絲名: Neverland',
            meaning: '團名意思: 團名是「(女)我-們」的意思，由代表女孩的「여자 - G - 女」、英文個人的 「아이 - I - 我」、韓文複數的「들 - DLE - 們」組成，意味著擁有獨特個性的六人所組成的團體。',
            image: 'gidle_group_image.jpg',
            members: [
                { name: 'Miyeon', description: '主唱' },
                { name: 'Minnie', description: '主唱、副唱' },
                { name: 'Soyeon', description: '隊長、主唱、副唱、領舞、Rapper' },
                { name: 'Yuqi', description: '主唱、副唱、領舞、Rapper' },
                { name: 'Shuhua', description: '副唱、領舞' }
            ]
        },
        { 
            name: 'aespa', 
            description: '成員: Karina、 Giselle、 Winter 與 NingNing', 
            details: '出道日期: 2020年11月17日。代表作: "Black Mamba", "Next Level", "Savage"',
            company: '經紀公司: SM',
            fandom: '粉絲名: MY，寓意:  在虛擬角色所居住的Kwangya（曠野）中，MY寓意為「最珍貴的朋友」。',
            meaning: '團名意思: aespa（符號化為æspa）是由寓意「化身」（Avatar）及「經歷」（Experience）的首寫字母組成的「ae」加上有「雙面」之意的「Aspect」結合，團體也將根據各種活動體現團體的主旨——「遇見另一個自我化身，體驗全新世界」。',
            image: 'aespa_image.jpg',
            members: [
                { name: 'Karina', description: '隊長、全能' },
                { name: 'Winter', description: '全能' },
                { name: 'Giselle', description: '全能' },
                { name: 'Ningning', description: '全能' }
                
            ]

        },
        { 
            name: 'IVE', 
            description: '成員: Gaeul、Yujin、Rei、Wonyoung、Liz與Leeseo', 
            details: '出道日期: 2021年12月1日。代表作: "ELEVEN", "LOVE DIVE"' ,
            company: '經紀公司: STARSHIP娛樂',
            fandom: '粉絲名: 「DIVE」，而這個名稱緣起於IVE的團體問候語「Dive into IVE」，並與「IVE」的英文發音結合而成，表示IVE與粉絲一同享受音樂和舞台，同時沉浸於IVE無窮的魅力當中。',
            meaning: '團名意思: IVE的團名是由「I HAVE」的縮寫而來，作為一個完整的女子團體組合，期盼以與眾不同、自信美麗的「IVE」風格和形象展現所擁有的一切事物。',
            image: 'IVE_image.jpg',
            members: [
                { name: 'YUJIN', description: '隊長、領唱、領舞' },
                { name: 'GAEUL', description: '主舞、領饒舌' },
                { name: 'REI', description: '主饒舌、副唱' },
                { name: 'WONYOUNG', description: '副唱' },
                { name: 'LIZLEESEO', description: '主唱' },
                { name: 'WONYOUNG', description: '副唱' }
            ]
        },
        { 
            name: 'LE SSERAFIM', 
            description: '成員: Sakura、Kim Chaewon、Huh Yunjin、Kazuha與Hong Eunchae', 
            details: '出道日期: 2022年5月2日。代表作: "FEARLESS", "ANTIFRAGILE"', 
            company: '經紀公司: SOURCE MUSIC',
            fandom: '粉絲名: 「FEARNOT（피어나）」，與韓語綻放「Blooming（피어나）」諧音，寓意著無所畏懼「FEARLESS」不斷前行的LE SSERAFIM，以及給予LE SSERAFIM支持與喜愛的無畏「FEAR NOT」粉絲們相聚的每一個瞬間都在全新綻放',
            meaning: '團名意思: 團名LE SSERAFIM由「I m Fearless」以相同字母異序詞的方式而組成，蘊含著不被世人的目光所動搖、無畏地前進的自信心和強烈的意志',
            image: 'LE SSERAFIM_image.jpg',
            members: [
                { name: 'Kim Chaewon', description: '隊長' },
                { name: 'Sakura', description: '無官方定位' },
                { name: 'Huh Yunjin', description: '無官方定位' },
                { name: 'Kazuha', description: '無官方定位' },
                { name: 'Hong Eunchae', description: '無官方定位' }
            ]
        },
        { 
            name: 'TWICE', 
            description: '成員: 娜璉、Momo、子瑜、定延、志效、Sana、Mina、多賢與彩瑛', 
            details: '出道日期: 2015年10月20日。代表作: "Cheer Up", "TT", "Fancy"', 
            company: '經紀公司: JYP娛樂',
            fandom: '粉絲名: 「ONCE（韓語：원스；日語：ワンス）」，名稱於2015年11月3日於官方Instagram中公布，意指「ONCE」與「TWICE」有著「粉絲們只要給予一次的愛，我們就會以兩倍的愛去報答大家。」的意思',
            meaning: '團名意思: 團名「TWICE」由JYP娛樂公司創辦者朴軫永取名，寓意為「讓大眾透過耳朵一次，再由眼睛一次，獲得雙重的感動。」的意思',
            image: 'TWICE_image.jpg',
            members: [
                { name: 'Jihyo', description: '隊長、主唱、領舞' },
                { name: 'Nayeon', description: '領唱、領舞' },
                { name: 'Jeongyeon', description: '領唱' },
                { name: 'Momo', description: '主舞、副唱、副Rapper' },
                { name: 'Sana', description: '副唱' },
                { name: 'Dahyun', description: '領Rapper、副唱' },
                { name: 'Chaeyoung', description: '主Rapper、副唱' },
                { name: 'Tzuyu', description: '門面、領舞、副唱、忙內' }
            ]
        },
        { 
            name: 'NewJeans', 
            description: '成員: Minji、Haerin、Hanni、Danielle與Hyein', 
            details: '出道日期: 2022年7月22日。代表作: "Attention", "Hype Boy"' ,
            company: '經紀公司: ADOR',
            fandom: '粉絲名: 「Bunnies」（버니즈），意思是「與NewJeans（Tokki）是朋友一樣的存在」，愛稱也被稱為「토끼」（Tokki，兔子的意思）',
            meaning: '團名意思: 團名「NewJeans」由「New Jeans」組成，寓意像「新牛仔褲」一樣怎麼穿都不會膩，亦具有「New Genes」的意思，指的是「迎來新一代流行音樂的團體」',
            image: 'NewJeans_image.jpg',
            members: [
                { name: 'Minji', description: '官方未設置隊長及團體定位' },
                { name: 'Hanni', description: '官方未設置隊長及團體定位' },
                { name: 'Danielle', description: '官方未設置隊長及團體定位' },
                { name: 'Haerin', description: '官方未設置隊長及團體定位' },
                { name: 'Hyein', description: '官方未設置隊長及團體定位' }
            ]
        },
        { 
            name: 'NMIXX', 
            description: '成員: Lily、Haewon、Sullyoon、Bae、Jiwoo與Kyujin', 
            details: '出道日期: 2022年2月22日。代表作: "O.O", "DICE"', 
            fandom: '粉絲名: NSWER（엔써），字面意思是「正確答案」（answer），也是「North、South、West、East、Route」的縮寫。寓意為NMIXX將踏上旅程，即使在迷失方向的時刻，也能夠與粉絲一起找到自己的道路',
            meaning: '團名意思: 團名NMIXX是由兩個部分組成：N具有現在（now）、全新（new）、下一個（next）和未知數n等多重意義，MIX則象徵團體所展現的多樣面貌，兩詞組合而成的NMIXX即有「新時代的最佳團體」之意',
            image: 'NMIXX_image.jpg',
            members: [
                { name: 'HaeWon', description: '隊長、主唱、Dance' },
                { name: 'Lily', description: '主唱、Dance' },
                { name: 'SullYoon', description: '領唱、Dance、門面' },
                { name: 'Bae', description: '領唱、Dance' },
                { name: 'JiWoo', description: 'Vocal、Rap、Dance' },
                { name: 'KyuJin', description: 'Vocal​​​​​​​、Rap、Dance​​​​​​​、忙內' }
                
            ]
        }
    ];

    if (document.getElementById('idols-content')) {
        const idolList = document.getElementById('idols-content');
        idols.forEach((idol, index) => {
            const div = document.createElement('div');
            div.classList.add('item');
            div.innerHTML = `<h3>${idol.name}</h3><p>${idol.description}</p>`;
            div.addEventListener('click', () => {
                // 保存選中的偶像數據到localStorage
                localStorage.setItem('selectedIdol', JSON.stringify(idol));
                // 導航到詳細頁面
                window.location.href = 'idol.html';
            });
            idolList.appendChild(div);
        });
    }

    if (document.getElementById('idol-detail')) {
        // 從localStorage中獲取選中的偶像數據
        const selectedIdol = JSON.parse(localStorage.getItem('selectedIdol'));
        if (selectedIdol) {
            document.getElementById('idol-name').innerText = selectedIdol.name;
            document.getElementById('idol-description').innerText = selectedIdol.description;
            document.getElementById('idol-details').innerText = selectedIdol.details;
            if (selectedIdol.company) {
                document.getElementById('idol-company').innerText = selectedIdol.company;
            }
            if (selectedIdol.fandom) {
                document.getElementById('idol-fandom').innerText = selectedIdol.fandom;
            }
            if (selectedIdol.meaning) {
                document.getElementById('idol-meaning').innerText = selectedIdol.meaning;
            }
            if (selectedIdol.image) {
                document.getElementById('idol-image').src = selectedIdol.image;
                document.getElementById('idol-image').alt = selectedIdol.name;
            }
            if (selectedIdol.members) {
                const membersList = document.getElementById('idol-members');
                selectedIdol.members.forEach(member => {
                    const listItem = document.createElement('li');
                    listItem.innerText = `${member.name}: ${member.description}`;
                    membersList.appendChild(listItem);
                });
            }
        }
    }
});