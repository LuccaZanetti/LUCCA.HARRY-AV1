// detalhes.js - Script da página de detalhes do jogador

/**
 * Elementos do DOM
 */
const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error');
const errorMessage = document.getElementById('errorMessage');
const playerDetails = document.getElementById('playerDetails');

/**
 * Inicializa a página de detalhes
 */
async function initDetails() {
    try {
        // Obter ID do jogador da URL
        const params = new URLSearchParams(window.location.search);
        const playerIndex = params.get('id');

        if (!playerIndex) {
            throw new Error('ID do jogador não fornecido');
        }

        // Buscar lista de jogadores e pegar o específico
        const players = await getPlayersList();

        if (!players || players[playerIndex] === undefined) {
            throw new Error('Jogador não encontrado');
        }

        const playerData = players[playerIndex];

        // Esconder carregamento
        loadingDiv.style.display = 'none';

        // Renderizar detalhes do jogador
        renderPlayerDetails(playerData);

    } catch (error) {
        console.error('Erro ao carregar detalhes:', error);
        loadingDiv.style.display = 'none';
        errorDiv.style.display = 'block';
        errorMessage.textContent = error.message || 'Erro ao carregar detalhes do jogador';
    }
}

/**
 * Traduz posição para português
 */
function translatePosition(position) {
    const pos = position?.toLowerCase() || '';
    if (pos.includes('goalkeeper')) return 'Goleiro';
    if (pos.includes('defender')) return 'Zagueiro';
    if (pos.includes('midfielder')) return 'Meio-Campista';
    if (pos.includes('winger')) return 'Ponta';
    if (pos.includes('striker')) return 'Atacante';
    return position || 'N/A';
}

/**
 * Renderiza os detalhes do jogador
 * @param {Object} playerData - Dados do jogador
 */
function renderPlayerDetails(playerData) {
    const player = playerData.player;
    const stats = playerData.statistics ? playerData.statistics[0] : null;
    const games = stats?.games || {};
    const goals = stats?.goals || {};
    const cards = stats?.cards || {};

    // Preencher informações básicas
    document.getElementById('playerName').textContent = player.name || 'N/A';
    
    const positionTranslated = translatePosition(games.position);
    document.getElementById('playerPosition').textContent = positionTranslated;
    
    const playerImageElement = document.getElementById('playerImage');
    playerImageElement.src = player.photo || 'https://via.placeholder.com/300x400?text=Indisponível';
    playerImageElement.alt = player.name || 'Jogador';
    playerImageElement.onerror = function() {
        this.src = 'https://via.placeholder.com/300x400?text=Indisponível';
    };
    
    document.getElementById('playerNumber').textContent = games.number || '-';
    document.getElementById('playerHeight').textContent = player.height || '-';
    document.getElementById('playerWeight').textContent = player.weight || '-';
    document.getElementById('playerAge').textContent = player.age || '-';

    // Informações pessoais
    if (player.birth && player.birth.date) {
        const birthDate = new Date(player.birth.date);
        document.getElementById('playerBirth').textContent = birthDate.toLocaleDateString('pt-BR', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    } else {
        document.getElementById('playerBirth').textContent = '-';
    }
    
    document.getElementById('playerNationality').textContent = player.nationality || '-';
    document.getElementById('playerFoot').textContent = 'Direito';
    document.getElementById('playerMainPosition').textContent = positionTranslated;

    // Estatísticas
    document.getElementById('playerApearances').textContent = games.appearences || 0;
    document.getElementById('playerGoals').textContent = goals.total || 0;
    document.getElementById('playerAssists').textContent = goals.assists || 0;
    document.getElementById('playerYellowCards').textContent = cards.yellow || 0;

    // Bio/Descrição com posição e nacionalidade melhor descritos
    let bioText = `${player.name} é um jogador do Real Madrid, um dos maiores clubes do futebol mundial. `;
    
    if (games.position) {
        bioText += `${positionTranslated} de grande habilidade, `;
    }
    
    if (player.nationality) {
        bioText += `natural da ${player.nationality}, `;
    }
    
    if (games.appearences) {
        bioText += `com ${games.appearences} aparições pelo clube`;
    }
    
    if (goals.total) {
        bioText += ` e ${goals.total} gols marcados`;
    }
    
    bioText += `. ${player.name} é parte importante do elenco do Real Madrid na busca pelos títulos europeus.`;
    
    document.getElementById('playerBio').textContent = bioText.trim().replace(/  +/g, ' ');

    // Mostrar detalhes
    playerDetails.style.display = 'block';
}

/**
 * Event Listeners
 */
document.addEventListener('DOMContentLoaded', initDetails);
