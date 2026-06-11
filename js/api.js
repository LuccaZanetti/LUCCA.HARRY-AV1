const API_BASE_URL = 'https://api.api-football.com/v3';
const API_KEY = 'demo';

async function fetchData(url) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'x-apisports-key': API_KEY }
        });
        if (!response.ok) throw new Error(`Erro: ${response.status}`);
        return await response.json();
    } catch (error) {
        return getDemoPlayers();
    }
}

async function getPlayersList() {
    try {
        const url = `${API_BASE_URL}/players?team=541&season=2023`;
        const data = await fetchData(url);
        return (data.response && data.response.length > 0) ? data.response : getDemoPlayers();
    } catch (error) {
        return getDemoPlayers();
    }
}

async function getPlayerDetails(playerId) {
    try {
        const url = `${API_BASE_URL}/players?id=${playerId}`;
        const data = await fetchData(url);
        return (data.response && data.response.length > 0) ? data.response[0] : getDemoPlayer(playerId);
    } catch (error) {
        return getDemoPlayer(playerId);
    }
}

function getDemoPlayers() {
    return [
        {id:1,player:{id:1,name:'Vinícius Júnior',age:24,birth:{date:'2000-07-12',country:'Brazil'},nationality:'Brazil',height:'180 cm',weight:'76 kg',photo:'https://img.realmadrid.com/img/vertical_380px/2024-25/vinicius_jr.jpg'},statistics:[{games:{appearences:267,lineups:251,number:20,position:'Winger'},goals:{total:92,assists:54},cards:{yellow:16,red:0}}]},
        {id:2,player:{id:2,name:'Kylian Mbappé',age:25,birth:{date:'1998-12-20',country:'France'},nationality:'France',height:'178 cm',weight:'77 kg',photo:'https://img.realmadrid.com/img/vertical_380px/2024-25/mbappe.jpg'},statistics:[{games:{appearences:98,lineups:89,number:9,position:'Striker'},goals:{total:78,assists:28},cards:{yellow:8,red:0}}]},
        {id:3,player:{id:3,name:'Jude Bellingham',age:21,birth:{date:'2003-06-17',country:'England'},nationality:'England',height:'186 cm',weight:'82 kg',photo:'https://img.realmadrid.com/img/vertical_380px/2024-25/bellingham.jpg'},statistics:[{games:{appearences:89,lineups:82,number:5,position:'Midfielder'},goals:{total:28,assists:12},cards:{yellow:12,red:0}}]},
        {id:4,player:{id:4,name:'Thibaut Courtois',age:32,birth:{date:'1992-01-11',country:'Belgium'},nationality:'Belgium',height:'188 cm',weight:'86 kg',photo:'https://img.realmadrid.com/img/vertical_380px/2024-25/courtois.jpg'},statistics:[{games:{appearences:550,lineups:548,number:1,position:'Goalkeeper'},goals:{total:0,assists:0,conceded:145},cards:{yellow:2,red:0}}]},
        {id:5,player:{id:5,name:'Éder Militão',age:26,birth:{date:'1996-01-18',country:'Brazil'},nationality:'Brazil',height:'186 cm',weight:'81 kg',photo:'https://img.realmadrid.com/img/vertical_380px/2024-25/militao.jpg'},statistics:[{games:{appearences:245,lineups:240,number:3,position:'Defender'},goals:{total:8,assists:2},cards:{yellow:12,red:1}}]},
        {id:6,player:{id:6,name:'Toni Kroos',age:34,birth:{date:'1990-01-04',country:'Germany'},nationality:'Germany',height:'180 cm',weight:'78 kg',photo:'https://img.realmadrid.com/img/vertical_380px/2024-25/kroos.jpg'},statistics:[{games:{appearences:540,lineups:525,number:8,position:'Midfielder'},goals:{total:67,assists:187},cards:{yellow:42,red:0}}]},
        {id:7,player:{id:7,name:'Luka Modrić',age:38,birth:{date:'1985-09-09',country:'Croatia'},nationality:'Croatia',height:'172 cm',weight:'74 kg',photo:'https://img.realmadrid.com/img/vertical_380px/2024-25/modric.jpg'},statistics:[{games:{appearences:689,lineups:665,number:19,position:'Midfielder'},goals:{total:98,assists:167},cards:{yellow:48,red:1}}]},
        {id:8,player:{id:8,name:'Rodrygo',age:23,birth:{date:'2000-01-09',country:'Brazil'},nationality:'Brazil',height:'181 cm',weight:'78 kg',photo:'https://img.realmadrid.com/img/vertical_380px/2024-25/rodrygo.jpg'},statistics:[{games:{appearences:156,lineups:118,number:21,position:'Winger'},goals:{total:38,assists:22},cards:{yellow:12,red:0}}]},
        {id:9,player:{id:9,name:'Federico Valverde',age:26,birth:{date:'1998-04-22',country:'Uruguay'},nationality:'Uruguay',height:'182 cm',weight:'80 kg',photo:'https://img.realmadrid.com/img/vertical_380px/2024-25/valverde.jpg'},statistics:[{games:{appearences:167,lineups:142,number:15,position:'Midfielder'},goals:{total:24,assists:18},cards:{yellow:18,red:1}}]},
        {id:10,player:{id:10,name:'Ferland Mendy',age:29,birth:{date:'1995-06-08',country:'France'},nationality:'France',height:'180 cm',weight:'73 kg',photo:'https://img.realmadrid.com/img/vertical_380px/2024-25/mendy.jpg'},statistics:[{games:{appearences:198,lineups:185,number:19,position:'Defender'},goals:{total:3,assists:8},cards:{yellow:14,red:0}}]},
        {id:11,player:{id:11,name:'Nacho Fernández',age:34,birth:{date:'1990-01-08',country:'Spain'},nationality:'Spain',height:'179 cm',weight:'78 kg',photo:'https://img.realmadrid.com/img/vertical_380px/2024-25/nacho.jpg'},statistics:[{games:{appearences:389,lineups:370,number:6,position:'Defender'},goals:{total:12,assists:5},cards:{yellow:28,red:2}}]},
        {id:12,player:{id:12,name:'Lucas Vázquez',age:33,birth:{date:'1991-07-01',country:'Spain'},nationality:'Spain',height:'180 cm',weight:'75 kg',photo:'https://img.realmadrid.com/img/vertical_380px/2024-25/lucas_vazquez.jpg'},statistics:[{games:{appearences:321,lineups:298,number:17,position:'Defender'},goals:{total:14,assists:18},cards:{yellow:32,red:1}}]}
    ];
}

function getDemoPlayer(playerId) {
    const players = getDemoPlayers();
    if (playerId >= 0 && playerId < players.length) return players[playerId];
    return players[0];
}
