// script.js - Script principal da página de listagem

/**
 * Elementos do DOM
 */
const playersContainer = document.getElementById('playersContainer');
const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error');
const errorMessage = document.getElementById('errorMessage');

/**
 * Inicializa a página
 */
async function init() {
    try {
        // Mostrar carregamento
        loadingDiv.style.display = 'block';
        errorDiv.classList.add('d-none');
        playersContainer.innerHTML = '';

        // Buscar lista de jogadores
        const players = await getPlayersList();

        // Verificar se obteve dados
        if (!players || players.length === 0) {
            throw new Error('Nenhum jogador encontrado');
        }

        // Esconder carregamento
        loadingDiv.style.display = 'none';

        // Renderizar jogadores
        renderPlayers(players);
    } catch (error) {
        console.error('Erro ao inicializar página:', error);
        loadingDiv.style.display = 'none';
        errorDiv.classList.remove('d-none');
        errorMessage.textContent = error.message || 'Erro ao carregar jogadores';
    }
}

/**
 * Mapeia posições para cores
 */
function getPositionBadgeClass(position) {
    const pos = position?.toLowerCase() || '';
    if (pos.includes('goalkeeper')) return 'bg-warning';
    if (pos.includes('defender')) return 'bg-danger';
    if (pos.includes('midfielder')) return 'bg-info';
    if (pos.includes('winger') || pos.includes('striker')) return 'bg-success';
    return 'bg-secondary';
}

/**
 * Traduz posição para português
 */
function translatePosition(position) {
    const pos = position?.toLowerCase() || '';
    if (pos.includes('goalkeeper')) return 'Goleiro';
    if (pos.includes('defender')) return 'Zagueiro';
    if (pos.includes('midfielder')) return 'Meio-Campo';
    if (pos.includes('winger')) return 'Ponta';
    if (pos.includes('striker')) return 'Atacante';
    return position || 'N/A';
}

/**
 * Renderiza os jogadores na página
 * @param {Array} players - Array de jogadores
 */
function renderPlayers(players) {
    playersContainer.innerHTML = '';

    players.forEach((playerData, index) => {
        const player = playerData.player;
        const stats = playerData.statistics ? playerData.statistics[0] : null;

        // Criar card do jogador
        const card = document.createElement('div');
        card.className = 'col-md-6 col-lg-4 col-xl-3';
        
        const imageUrl = player.photo || 'https://via.placeholder.com/300x400?text=Jogador';
        const position = stats?.games?.position || 'N/A';
        const positionTranslated = translatePosition(position);
        const positionBadgeClass = getPositionBadgeClass(position);
        const goals = stats?.goals?.total || 0;
        const assists = stats?.goals?.assists || 0;
        const appearances = stats?.games?.appearences || 0;

        card.innerHTML = `
            <div class="card h-100 player-card">
                <div class="position-badge ${positionBadgeClass} text-white">
                    ${positionTranslated}
                </div>
                <div class="player-image-wrapper">
                    <img src="${imageUrl}" 
                         class="card-img-top player-image" 
                         alt="${player.name}" 
                         loading="lazy"
                         onerror="this.src='https://via.placeholder.com/300x400?text=Indisponível'">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${player.name}</h5>
                    <p class="card-text text-muted small">${player.nationality}</p>
                    <div class="player-stats mb-3">
                        <span class="badge bg-primary me-2">#${stats?.games?.number || 'N/A'}</span>
                        <span class="badge bg-secondary">${player.age} anos</span>
                    </div>
                    <div class="stats-row">
                        <div class="stat-item">
                            <span class="stat-value">${appearances}</span>
                            <span class="stat-label">Jogos</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-value">${goals}</span>
                            <span class="stat-label">Gols</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-value">${assists}</span>
                            <span class="stat-label">Assist.</span>
                        </div>
                    </div>
                </div>
                <div class="card-footer bg-white">
                    <a href="detalhes.html?id=${index}" class="btn btn-primary btn-sm w-100">
                        Ver Detalhes
                    </a>
                </div>
            </div>
        `;

        playersContainer.appendChild(card);
    });
}

/**
 * Event Listeners
 */
document.addEventListener('DOMContentLoaded', init);
