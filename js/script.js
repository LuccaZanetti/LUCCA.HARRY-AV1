const playersContainer = document.getElementById('playersContainer');
const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error');
const errorMessage = document.getElementById('errorMessage');

async function init() {
    try {
        loadingDiv.style.display = 'block';
        errorDiv.classList.add('d-none');
        const players = await getPlayersList();
        loadingDiv.style.display = 'none';
        if (!players || players.length === 0) throw new Error('Nenhum jogador');
        renderPlayers(players);
    } catch (error) {
        loadingDiv.style.display = 'none';
        errorDiv.classList.remove('d-none');
        errorMessage.textContent = error.message || 'Erro ao carregar';
    }
}

function getPositionBadgeClass(position) {
    const pos = position?.toLowerCase() || '';
    if (pos.includes('goalkeeper')) return 'bg-warning';
    if (pos.includes('defender')) return 'bg-danger';
    if (pos.includes('midfielder')) return 'bg-info';
    return 'bg-success';
}

function translatePosition(position) {
    const pos = position?.toLowerCase() || '';
    if (pos.includes('goalkeeper')) return 'Goleiro';
    if (pos.includes('defender')) return 'Defesa';
    if (pos.includes('midfielder')) return 'Meio';
    return 'Ataque';
}

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
                    <div class="player-image" style="background: linear-gradient(135deg, #0066cc 0%, #00d4ff 100%); width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 3.5rem; color: white; font-weight: 800;">
                        ${player.name.split(' ').map(n => n[0]).join('')}
                    </div>
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
                    <a href="detalhes.html?id=${index}" target="_blank" class="btn btn-primary btn-sm w-100">
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
