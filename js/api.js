// api.js - Módulo de requisições da API de Futebol

/**
 * Chave da API (usando versão gratuita/demo)
 * Para produção, obter em: https://www.api-football.com/
 */
const API_BASE_URL = 'https://api.api-football.com/v3';
const API_KEY = 'demo'; // Usar API pública demo

/**
 * Realiza uma requisição fetch com tratamento de erros
 * @param {string} url - URL da API
 * @returns {Promise} - Dados da resposta em JSON
 */
async function fetchData(url) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'x-apisports-key': API_KEY
            }
        });

        if (!response.ok) {
            throw new Error(`Erro na API: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        throw error;
    }
}

/**
 * Busca lista de jogadores do Real Madrid
 * @returns {Promise} - Array de jogadores
 */
async function getPlayersList() {
    try {
        // Real Madrid tem ID 541 na API-SPORTS
        const url = `${API_BASE_URL}/players?team=541&season=2023`;
        const data = await fetchData(url);
        
        if (data.response && data.response.length > 0) {
            return data.response;
        } else {
            // Se a API restrita retornar erro, usar dados de demonstração
            return getDemoPlayers();
        }
    } catch (error) {
        console.error('Erro ao buscar lista de jogadores:', error);
        // Retornar dados de demonstração em caso de erro
        return getDemoPlayers();
    }
}

/**
 * Busca detalhes de um jogador específico
 * @param {number} playerId - ID do jogador
 * @returns {Promise} - Dados do jogador
 */
async function getPlayerDetails(playerId) {
    try {
        const url = `${API_BASE_URL}/players?id=${playerId}`;
        const data = await fetchData(url);
        
        if (data.response && data.response.length > 0) {
            return data.response[0];
        }
    } catch (error) {
        console.error('Erro ao buscar detalhes do jogador:', error);
    }
    
    // Retornar dados de demonstração se não encontrar
    return getDemoPlayer(playerId);
}

/**
 * Dados de demonstração - Jogadores do Real Madrid 2025/26
 * 11 Titulares + Banco
 */
function getDemoPlayers() {
    return [
        // GOLEIRO
        {
            id: 1,
            player: {
                id: 1,
                name: 'Thibaut Courtois',
                firstname: 'Thibaut',
                lastname: 'Courtois',
                age: 32,
                birth: { date: '1992-01-11', country: 'Belgium', city: 'Bree' },
                nationality: 'Belgium',
                height: '188 cm',
                weight: '86 kg',
                injured: false,
                photo: 'https://img.realmadrid.com/img/vertical_380px/2024-25/courtois.jpg'
            },
            statistics: [
                {
                    team: { id: 541, name: 'Real Madrid', logo: 'https://media.api-sports.io/teams/541.png' },
                    league: { id: 140, name: 'La Liga', season: 2025 },
                    games: { appearences: 550, lineups: 548, minutes: 49320, number: 1, position: 'Goalkeeper', rating: 7.8, captain: false },
                    substitutes: { in: 2, out: 5, bench: 2 },
                    shots: { total: 0, on: 0 },
                    goals: { total: 0, conceded: 145, assists: 0, own: 0 },
                    passes: { total: 18956, key: 234, accuracy: 72 },
                    tackles: { total: 34, blocks: 156, interceptions: 89 },
                    duels: { total: 234, won: 145 },
                    dribbles: { attempts: 0, success: 0, past: null },
                    fouls: { drawn: 12, committed: 8 },
                    cards: { yellow: 2, red: 0 },
                    penalty: { won: 0, committed: 0, scored: 0, missed: 0, saved: 45 }
                }
            ]
        },
        // DEFESA - ZAGUEIROS E LATERAIS
        {
            id: 2,
            player: {
                id: 2,
                name: 'Éder Militão',
                firstname: 'Éder',
                lastname: 'Militão',
                age: 26,
                birth: { date: '1996-01-18', country: 'Brazil', city: 'Mogi Cruzes' },
                nationality: 'Brazil',
                height: '186 cm',
                weight: '81 kg',
                injured: false,
                photo: 'https://img.realmadrid.com/img/vertical_380px/2024-25/militao.jpg'
            },
            statistics: [
                {
                    team: { id: 541, name: 'Real Madrid', logo: 'https://media.api-sports.io/teams/541.png' },
                    league: { id: 140, name: 'La Liga', season: 2025 },
                    games: { appearences: 245, lineups: 240, minutes: 21600, number: 3, position: 'Defender', rating: 7.9, captain: false },
                    substitutes: { in: 5, out: 8, bench: 6 },
                    shots: { total: 45, on: 18 },
                    goals: { total: 8, conceded: 0, assists: 2, own: 0 },
                    passes: { total: 12345, key: 234, accuracy: 88 },
                    tackles: { total: 345, blocks: 189, interceptions: 267 },
                    duels: { total: 567, won: 389 },
                    dribbles: { attempts: 34, success: 23, past: null },
                    fouls: { drawn: 28, committed: 35 },
                    cards: { yellow: 12, red: 1 },
                    penalty: { won: 5, committed: 2, scored: 0, missed: 0, saved: null }
                }
            ]
        },
        {
            id: 3,
            player: {
                id: 3,
                name: 'José Ignacio Nacho',
                firstname: 'José Ignacio',
                lastname: 'Nacho',
                age: 34,
                birth: { date: '1990-01-08', country: 'Spain', city: 'San Sebastián' },
                nationality: 'Spain',
                height: '179 cm',
                weight: '78 kg',
                injured: false,
                photo: 'https://img.realmadrid.com/img/vertical_380px/2024-25/nacho.jpg'
            },
            statistics: [
                {
                    team: { id: 541, name: 'Real Madrid', logo: 'https://media.api-sports.io/teams/541.png' },
                    league: { id: 140, name: 'La Liga', season: 2025 },
                    games: { appearences: 389, lineups: 370, minutes: 33300, number: 6, position: 'Defender', rating: 7.7, captain: false },
                    substitutes: { in: 19, out: 28, bench: 22 },
                    shots: { total: 67, on: 22 },
                    goals: { total: 12, conceded: 0, assists: 5, own: 1 },
                    passes: { total: 18234, key: 345, accuracy: 87 },
                    tackles: { total: 456, blocks: 234, interceptions: 345 },
                    duels: { total: 678, won: 425 },
                    dribbles: { attempts: 28, success: 15, past: null },
                    fouls: { drawn: 45, committed: 67 },
                    cards: { yellow: 28, red: 2 },
                    penalty: { won: 8, committed: 3, scored: 0, missed: 0, saved: null }
                }
            ]
        },
        {
            id: 4,
            player: {
                id: 4,
                name: 'Ferland Mendy',
                firstname: 'Ferland',
                lastname: 'Mendy',
                age: 29,
                birth: { date: '1995-06-08', country: 'France', city: 'Meaux' },
                nationality: 'France',
                height: '180 cm',
                weight: '73 kg',
                injured: false,
                photo: 'https://img.realmadrid.com/img/vertical_380px/2024-25/mendy.jpg'
            },
            statistics: [
                {
                    team: { id: 541, name: 'Real Madrid', logo: 'https://media.api-sports.io/teams/541.png' },
                    league: { id: 140, name: 'La Liga', season: 2025 },
                    games: { appearences: 198, lineups: 185, minutes: 16650, number: 19, position: 'Defender', rating: 7.6, captain: false },
                    substitutes: { in: 13, out: 18, bench: 15 },
                    shots: { total: 34, on: 8 },
                    goals: { total: 3, conceded: 0, assists: 8, own: 0 },
                    passes: { total: 8234, key: 145, accuracy: 85 },
                    tackles: { total: 267, blocks: 123, interceptions: 189 },
                    duels: { total: 389, won: 245 },
                    dribbles: { attempts: 45, success: 32, past: null },
                    fouls: { drawn: 34, committed: 42 },
                    cards: { yellow: 14, red: 0 },
                    penalty: { won: 2, committed: 1, scored: 0, missed: 0, saved: null }
                }
            ]
        },
        {
            id: 5,
            player: {
                id: 5,
                name: 'Lucas Vázquez',
                firstname: 'Lucas',
                lastname: 'Vázquez',
                age: 33,
                birth: { date: '1991-07-01', country: 'Spain', city: 'Gijón' },
                nationality: 'Spain',
                height: '180 cm',
                weight: '75 kg',
                injured: false,
                photo: 'https://img.realmadrid.com/img/vertical_380px/2024-25/lucas_vazquez.jpg'
            },
            statistics: [
                {
                    team: { id: 541, name: 'Real Madrid', logo: 'https://media.api-sports.io/teams/541.png' },
                    league: { id: 140, name: 'La Liga', season: 2025 },
                    games: { appearences: 321, lineups: 298, minutes: 26820, number: 17, position: 'Defender', rating: 7.5, captain: false },
                    substitutes: { in: 23, out: 32, bench: 28 },
                    shots: { total: 89, on: 28 },
                    goals: { total: 14, conceded: 0, assists: 18, own: 0 },
                    passes: { total: 12567, key: 289, accuracy: 86 },
                    tackles: { total: 298, blocks: 145, interceptions: 178 },
                    duels: { total: 456, won: 289 },
                    dribbles: { attempts: 67, success: 45, past: null },
                    fouls: { drawn: 56, committed: 78 },
                    cards: { yellow: 32, red: 1 },
                    penalty: { won: 3, committed: 2, scored: 0, missed: 0, saved: null }
                }
            ]
        },
        // MEIO-CAMPO
        {
            id: 6,
            player: {
                id: 6,
                name: 'Aurélien Tchouaméni',
                firstname: 'Aurélien',
                lastname: 'Tchouaméni',
                age: 24,
                birth: { date: '2000-01-27', country: 'France', city: 'Fontainebleau' },
                nationality: 'France',
                height: '188 cm',
                weight: '82 kg',
                injured: false,
                photo: 'https://img.realmadrid.com/img/vertical_380px/2024-25/tchouameni.jpg'
            },
            statistics: [
                {
                    team: { id: 541, name: 'Real Madrid', logo: 'https://media.api-sports.io/teams/541.png' },
                    league: { id: 140, name: 'La Liga', season: 2025 },
                    games: { appearences: 95, lineups: 87, minutes: 7830, number: 18, position: 'Midfielder', rating: 7.6, captain: false },
                    substitutes: { in: 8, out: 12, bench: 10 },
                    shots: { total: 45, on: 16 },
                    goals: { total: 5, conceded: 0, assists: 3, own: 0 },
                    passes: { total: 4567, key: 234, accuracy: 88 },
                    tackles: { total: 234, blocks: 123, interceptions: 156 },
                    duels: { total: 345, won: 234 },
                    dribbles: { attempts: 45, success: 28, past: null },
                    fouls: { drawn: 34, committed: 45 },
                    cards: { yellow: 16, red: 1 },
                    penalty: { won: 1, committed: 2, scored: 0, missed: 0, saved: null }
                }
            ]
        },
        {
            id: 7,
            player: {
                id: 7,
                name: 'Jude Bellingham',
                firstname: 'Jude',
                lastname: 'Bellingham',
                age: 21,
                birth: { date: '2003-06-17', country: 'England', city: 'Birmingham' },
                nationality: 'England',
                height: '186 cm',
                weight: '82 kg',
                injured: false,
                photo: 'https://img.realmadrid.com/img/vertical_380px/2024-25/bellingham.jpg'
            },
            statistics: [
                {
                    team: { id: 541, name: 'Real Madrid', logo: 'https://media.api-sports.io/teams/541.png' },
                    league: { id: 140, name: 'La Liga', season: 2025 },
                    games: { appearences: 89, lineups: 82, minutes: 7380, number: 5, position: 'Midfielder', rating: 8.0, captain: false },
                    substitutes: { in: 7, out: 8, bench: 7 },
                    shots: { total: 134, on: 68 },
                    goals: { total: 28, conceded: 0, assists: 12, own: 0 },
                    passes: { total: 5234, key: 456, accuracy: 89 },
                    tackles: { total: 156, blocks: 78, interceptions: 98 },
                    duels: { total: 267, won: 176 },
                    dribbles: { attempts: 78, success: 56, past: null },
                    fouls: { drawn: 67, committed: 42 },
                    cards: { yellow: 12, red: 0 },
                    penalty: { won: 4, committed: 1, scored: 2, missed: 0, saved: null }
                }
            ]
        },
        {
            id: 8,
            player: {
                id: 8,
                name: 'Toni Kroos',
                firstname: 'Toni',
                lastname: 'Kroos',
                age: 34,
                birth: { date: '1990-01-04', country: 'Germany', city: 'Greifswald' },
                nationality: 'Germany',
                height: '180 cm',
                weight: '78 kg',
                injured: false,
                photo: 'https://img.realmadrid.com/img/vertical_380px/2024-25/kroos.jpg'
            },
            statistics: [
                {
                    team: { id: 541, name: 'Real Madrid', logo: 'https://media.api-sports.io/teams/541.png' },
                    league: { id: 140, name: 'La Liga', season: 2025 },
                    games: { appearences: 540, lineups: 525, minutes: 47250, number: 8, position: 'Midfielder', rating: 7.8, captain: false },
                    substitutes: { in: 15, out: 45, bench: 28 },
                    shots: { total: 345, on: 156 },
                    goals: { total: 67, conceded: 0, assists: 187, own: 0 },
                    passes: { total: 46234, key: 5678, accuracy: 91 },
                    tackles: { total: 456, blocks: 234, interceptions: 345 },
                    duels: { total: 678, won: 401 },
                    dribbles: { attempts: 145, success: 98, past: null },
                    fouls: { drawn: 234, committed: 178 },
                    cards: { yellow: 42, red: 0 },
                    penalty: { won: 8, committed: 3, scored: 4, missed: 1, saved: null }
                }
            ]
        },
        {
            id: 9,
            player: {
                id: 9,
                name: 'Luka Modrić',
                firstname: 'Luka',
                lastname: 'Modrić',
                age: 38,
                birth: { date: '1985-09-09', country: 'Croatia', city: 'Zadar' },
                nationality: 'Croatia',
                height: '172 cm',
                weight: '74 kg',
                injured: false,
                photo: 'https://img.realmadrid.com/img/vertical_380px/2024-25/modric.jpg'
            },
            statistics: [
                {
                    team: { id: 541, name: 'Real Madrid', logo: 'https://media.api-sports.io/teams/541.png' },
                    league: { id: 140, name: 'La Liga', season: 2025 },
                    games: { appearences: 689, lineups: 665, minutes: 59850, number: 19, position: 'Midfielder', rating: 7.7, captain: false },
                    substitutes: { in: 24, out: 65, bench: 38 },
                    shots: { total: 478, on: 234 },
                    goals: { total: 98, conceded: 0, assists: 167, own: 0 },
                    passes: { total: 52341, key: 6234, accuracy: 90 },
                    tackles: { total: 567, blocks: 289, interceptions: 412 },
                    duels: { total: 812, won: 512 },
                    dribbles: { attempts: 234, success: 167, past: null },
                    fouls: { drawn: 289, committed: 234 },
                    cards: { yellow: 48, red: 1 },
                    penalty: { won: 12, committed: 4, scored: 8, missed: 2, saved: null }
                }
            ]
        },
        // ATAQUE
        {
            id: 10,
            player: {
                id: 10,
                name: 'Vinícius Júnior',
                firstname: 'Vinícius',
                lastname: 'Júnior',
                age: 24,
                birth: { date: '2000-07-12', country: 'Brazil', city: 'São Gonçalo' },
                nationality: 'Brazil',
                height: '180 cm',
                weight: '76 kg',
                injured: false,
                photo: 'https://img.realmadrid.com/img/vertical_380px/2024-25/vinicius_jr.jpg'
            },
            statistics: [
                {
                    team: { id: 541, name: 'Real Madrid', logo: 'https://media.api-sports.io/teams/541.png' },
                    league: { id: 140, name: 'La Liga', season: 2025 },
                    games: { appearences: 267, lineups: 251, minutes: 22590, number: 20, position: 'Winger', rating: 8.4, captain: false },
                    substitutes: { in: 16, out: 12, bench: 8 },
                    shots: { total: 298, on: 156 },
                    goals: { total: 92, conceded: 0, assists: 54, own: 0 },
                    passes: { total: 5234, key: 789, accuracy: 87 },
                    tackles: { total: 123, blocks: 67, interceptions: 89 },
                    duels: { total: 345, won: 245 },
                    dribbles: { attempts: 234, success: 189, past: null },
                    fouls: { drawn: 134, committed: 45 },
                    cards: { yellow: 16, red: 0 },
                    penalty: { won: 18, committed: 1, scored: 12, missed: 2, saved: null }
                }
            ]
        },
        {
            id: 11,
            player: {
                id: 11,
                name: 'Kylian Mbappé',
                firstname: 'Kylian',
                lastname: 'Mbappé',
                age: 25,
                birth: { date: '1998-12-20', country: 'France', city: 'Bondy' },
                nationality: 'France',
                height: '178 cm',
                weight: '77 kg',
                injured: false,
                photo: 'https://img.realmadrid.com/img/vertical_380px/2024-25/mbappe.jpg'
            },
            statistics: [
                {
                    team: { id: 541, name: 'Real Madrid', logo: 'https://media.api-sports.io/teams/541.png' },
                    league: { id: 140, name: 'La Liga', season: 2025 },
                    games: { appearences: 98, lineups: 89, minutes: 8010, number: 9, position: 'Striker', rating: 8.3, captain: false },
                    substitutes: { in: 9, out: 12, bench: 5 },
                    shots: { total: 267, on: 156 },
                    goals: { total: 78, conceded: 0, assists: 28, own: 0 },
                    passes: { total: 3456, key: 456, accuracy: 88 },
                    tackles: { total: 45, blocks: 23, interceptions: 32 },
                    duels: { total: 178, won: 112 },
                    dribbles: { attempts: 156, success: 118, past: null },
                    fouls: { drawn: 89, committed: 34 },
                    cards: { yellow: 8, red: 0 },
                    penalty: { won: 16, committed: 1, scored: 28, missed: 3, saved: null }
                }
            ]
        },
        {
            id: 12,
            player: {
                id: 12,
                name: 'Rodrygo',
                firstname: 'Rodrygo',
                lastname: 'Goes',
                age: 23,
                birth: { date: '2000-01-09', country: 'Brazil', city: 'Rio de Janeiro' },
                nationality: 'Brazil',
                height: '181 cm',
                weight: '78 kg',
                injured: false,
                photo: 'https://img.realmadrid.com/img/vertical_380px/2024-25/rodrygo.jpg'
            },
            statistics: [
                {
                    team: { id: 541, name: 'Real Madrid', logo: 'https://media.api-sports.io/teams/541.png' },
                    league: { id: 140, name: 'La Liga', season: 2025 },
                    games: { appearences: 156, lineups: 118, minutes: 10620, number: 21, position: 'Winger', rating: 7.9, captain: false },
                    substitutes: { in: 38, out: 28, bench: 18 },
                    shots: { total: 145, on: 78 },
                    goals: { total: 38, conceded: 0, assists: 22, own: 0 },
                    passes: { total: 2345, key: 234, accuracy: 85 },
                    tackles: { total: 67, blocks: 34, interceptions: 45 },
                    duels: { total: 198, won: 124 },
                    dribbles: { attempts: 123, success: 89, past: null },
                    fouls: { drawn: 56, committed: 28 },
                    cards: { yellow: 12, red: 0 },
                    penalty: { won: 6, committed: 0, scored: 5, missed: 1, saved: null }
                }
            ]
        },
        // BANCO
        {
            id: 13,
            player: {
                id: 13,
                name: 'Federico Valverde',
                firstname: 'Federico',
                lastname: 'Valverde',
                age: 26,
                birth: { date: '1998-04-22', country: 'Uruguay', city: 'Montevideo' },
                nationality: 'Uruguay',
                height: '182 cm',
                weight: '80 kg',
                injured: false,
                photo: 'https://img.realmadrid.com/img/vertical_380px/2024-25/valverde.jpg'
            },
            statistics: [
                {
                    team: { id: 541, name: 'Real Madrid', logo: 'https://media.api-sports.io/teams/541.png' },
                    league: { id: 140, name: 'La Liga', season: 2025 },
                    games: { appearences: 167, lineups: 142, minutes: 12780, number: 15, position: 'Midfielder', rating: 7.7, captain: false },
                    substitutes: { in: 25, out: 32, bench: 24 },
                    shots: { total: 134, on: 56 },
                    goals: { total: 24, conceded: 0, assists: 18, own: 0 },
                    passes: { total: 6234, key: 456, accuracy: 86 },
                    tackles: { total: 234, blocks: 123, interceptions: 167 },
                    duels: { total: 367, won: 234 },
                    dribbles: { attempts: 98, success: 67, past: null },
                    fouls: { drawn: 45, committed: 67 },
                    cards: { yellow: 18, red: 1 },
                    penalty: { won: 2, committed: 1, scored: 1, missed: 0, saved: null }
                }
            ]
        },
        {
            id: 14,
            player: {
                id: 14,
                name: 'Brahim Díaz',
                firstname: 'Brahim',
                lastname: 'Díaz',
                age: 25,
                birth: { date: '1999-08-03', country: 'Spain', city: 'Málaga' },
                nationality: 'Spain',
                height: '179 cm',
                weight: '75 kg',
                injured: false,
                photo: 'https://img.realmadrid.com/img/vertical_380px/2024-25/brahim.jpg'
            },
            statistics: [
                {
                    team: { id: 541, name: 'Real Madrid', logo: 'https://media.api-sports.io/teams/541.png' },
                    league: { id: 140, name: 'La Liga', season: 2025 },
                    games: { appearences: 134, lineups: 98, minutes: 8820, number: 23, position: 'Midfielder', rating: 7.6, captain: false },
                    substitutes: { in: 36, out: 32, beach: 28 },
                    shots: { total: 98, on: 45 },
                    goals: { total: 16, conceded: 0, assists: 12, own: 0 },
                    passes: { total: 4567, key: 234, accuracy: 84 },
                    tackles: { total: 123, blocks: 67, interceptions: 89 },
                    duels: { total: 245, won: 145 },
                    dribbles: { attempts: 134, success: 98, past: null },
                    fouls: { drawn: 67, committed: 45 },
                    cards: { yellow: 14, red: 0 },
                    penalty: { won: 3, committed: 0, scored: 2, missed: 1, saved: null }
                }
            ]
        },
        {
            id: 15,
            player: {
                id: 15,
                name: 'Andriy Lunin',
                firstname: 'Andriy',
                lastname: 'Lunin',
                age: 25,
                birth: { date: '1999-02-11', country: 'Ukraine', city: 'Cherkasy' },
                nationality: 'Ukraine',
                height: '187 cm',
                weight: '84 kg',
                injured: false,
                photo: 'https://img.realmadrid.com/img/vertical_380px/2024-25/lunin.jpg'
            },
            statistics: [
                {
                    team: { id: 541, name: 'Real Madrid', logo: 'https://media.api-sports.io/teams/541.png' },
                    league: { id: 140, name: 'La Liga', season: 2025 },
                    games: { appearences: 78, lineups: 76, minutes: 6840, number: 13, position: 'Goalkeeper', rating: 7.4, captain: false },
                    substitutes: { in: 2, out: 3, bench: 8 },
                    shots: { total: 0, on: 0 },
                    goals: { total: 0, conceded: 89, assists: 0, own: 0 },
                    passes: { total: 2134, key: 34, accuracy: 68 },
                    tackles: { total: 12, blocks: 45, interceptions: 23 },
                    duels: { total: 78, won: 45 },
                    dribbles: { attempts: 0, success: 0, past: null },
                    fouls: { drawn: 2, committed: 1 },
                    cards: { yellow: 0, red: 0 },
                    penalty: { won: 0, committed: 0, scored: 0, missed: 0, saved: 18 }
                }
            ]
        }
    ];
}

/**
 * Retorna dados de demonstração de um jogador específico por índice
 */
function getDemoPlayer(playerId) {
    const players = getDemoPlayers();
    // Se for um índice válido, retornar esse jogador
    if (playerId >= 0 && playerId < players.length) {
        return players[playerId];
    }
    // Caso contrário, retornar o primeiro
    return players[0];
}
