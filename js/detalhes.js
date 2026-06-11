const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error');
const errorMessage = document.getElementById('errorMessage');
const playerDetails = document.getElementById('playerDetails');

async function initDetails() {
    try {
        const params = new URLSearchParams(window.location.search);
        const playerIndex = params.get('id');
        if (!playerIndex) throw new Error('ID nao fornecido');
        const players = await getPlayersList();
        if (!players || !players[playerIndex]) throw new Error('Jogador nao encontrado');
        loadingDiv.style.display = 'none';
        renderPlayerDetails(players[playerIndex]);
    } catch (error) {
        loadingDiv.style.display = 'none';
        errorDiv.style.display = 'block';
        errorMessage.textContent = error.message;
    }
}

function translatePosition(position) {
    const pos = position?.toLowerCase() || '';
    if (pos.includes('goalkeeper')) return 'Goleiro';
    if (pos.includes('defender')) return 'Defesa';
    if (pos.includes('midfielder')) return 'Meio-Campo';
    return pos.includes('winger') ? 'Ponta' : 'Atacante';
}

function renderPlayerDetails(playerData) {
    const p = playerData.player;
    const s = playerData.statistics ? playerData.statistics[0] : {};
    const g = s.games || {};
    const go = s.goals || {};

    document.getElementById('playerName').textContent = p.name || 'N/A';
    document.getElementById('playerPosition').textContent = translatePosition(g.position);
    
    const img = document.getElementById('playerImage');
    img.src = p.photo || 'https://via.placeholder.com/300x400';
    img.onerror = () => img.src = 'https://via.placeholder.com/300x400';
    
    document.getElementById('playerNumber').textContent = g.number || '-';
    document.getElementById('playerHeight').textContent = p.height || '-';
    document.getElementById('playerBirth').textContent = p.birth?.date ? new Date(p.birth.date).toLocaleDateString('pt-BR') : '-';
    document.getElementById('playerNationality').textContent = p.nationality || '-';
    document.getElementById('playerFoot').textContent = 'Direito';
    
    document.getElementById('playerApearances').textContent = g.appearences || 0;
    document.getElementById('playerGoals').textContent = go.total || 0;
    document.getElementById('playerAssists').textContent = go.assists || 0;
    
    playerDetails.style.display = 'block';
}
document.addEventListener('DOMContentLoaded', initDetails);
