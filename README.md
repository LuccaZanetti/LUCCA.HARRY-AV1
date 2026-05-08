# Real Madrid - Aplicação Web Dinâmica

## Descrição do Projeto

Aplicação web responsiva que consome dados de uma API de futebol pública e exibe informações sobre o Real Madrid, incluindo história, troféus e elenco de jogadores.

O projeto foi desenvolvido como avaliação de Desenvolvimento Web com Bootstrap, focando em:
- Consumo de APIs REST usando Fetch API
- Manipulação de dados JSON com async/await
- Interface responsiva com Bootstrap
- JavaScript puro (sem frameworks)
- Organização modular de código
- Versionamento com Git/GitHub

---

## Estrutura do Projeto

```
av1-dwb-real-madrid-2bimestre/
│
├── index.html              # Página inicial com listagem de jogadores
├── detalhes.html           # Página de detalhes do jogador
│
├── css/
│   └── style.css           # Estilos customizados com Bootstrap
│
├── js/
│   ├── api.js              # Módulo de requisições da API
│   ├── script.js           # Script da página inicial
│   └── detalhes.js         # Script da página de detalhes
│
└── README.md               # Este arquivo
```

---

## Funcionalidades

### Parte 1 - Página de Listagem (5,0 pontos)

✅ **Consumo de API**
- Integração com API-SPORTS (api-football.com)
- Requisições usando Fetch API com async/await
- Tratamento de erros e fallback com dados de demonstração

✅ **Manipulação de Dados**
- Conversão e interpretação de dados JSON
- Extração de informações relevantes de jogadores
- Cálculo de estatísticas agregadas

✅ **Interface Responsiva**
- Layout com Bootstrap 5
- Grid responsivo (mobile-first)
- Cards de jogadores com imagens e estatísticas
- Feedback visual de carregamento (spinner)

✅ **Organização de Arquivos**
- HTML, CSS e JavaScript separados
- Módulo de API isolado (`api.js`)
- Estrutura clara e mantenível

✅ **Feedbacks**
- Indicador de carregamento durante requisição
- Mensagens de erro com detalhes
- Tratamento de fallback com dados demo

### Parte 2 - Navegação e Detalhes (5,0 pontos)

✅ **Página de Detalhes**
- Visualização completa de informações do jogador
- Estatísticas detalhadas (aparições, gols, assistências)
- Dados pessoais (nacionalidade, data de nascimento, altura, peso)

✅ **Navegação**
- Links entre páginas de listagem e detalhes
- Uso de URLSearchParams para passar parâmetros
- Botão "Voltar" funcional

✅ **Organização de Código**
- Módulo de API reutilizável
- Scripts separados por página (`script.js`, `detalhes.js`)
- Funções bem nomeadas e documentadas

✅ **Documentação**
- README completo e atualizado
- Comentários no código
- Instruções de uso

---

## Tecnologias Utilizadas

### Obrigatórias
- ✅ **HTML5** - Estrutura semântica
- ✅ **CSS3** - Estilos com animações
- ✅ **Bootstrap 5** - Framework CSS responsivo
- ✅ **JavaScript Puro** - Sem frameworks (React, Vue, Angular)
- ✅ **Fetch API** - Requisições HTTP assíncronas
- ✅ **Async/Await** - Programação assíncrona
- ✅ **JSON** - Formato de dados
- ✅ **Git & GitHub** - Versionamento

### Complementares
- CDN para Bootstrap e ícones
- API-SPORTS (API de Futebol)
- Placeholder de imagens

---

## Como Usar

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/av1-dwb-real-madrid-2bimestre.git
   cd av1-dwb-real-madrid-2bimestre
   ```

2. **Abra no navegador:**
   - Opção 1: Clique duplo em `index.html`
   - Opção 2: Use Live Server no VS Code
   - Opção 3: `python -m http.server` (Python 3)

### Navegação

1. **Página Inicial** (`index.html`)
   - Visualiza história e troféus do Real Madrid
   - Lista de jogadores em cards responsivos
   - Clique em "Ver Detalhes" para mais informações

2. **Página de Detalhes** (`detalhes.html?id=X`)
   - Informações completas do jogador
   - Estatísticas na carreira
   - Dados pessoais (nacionalidade, idade, etc.)

---

## API Utilizada

### Fonte: api-football.com (API-SPORTS)

**Endpoints principais:**
- `GET /players?team=541&season=2023` - Lista jogadores
- `GET /players?id={playerId}` - Detalhes do jogador

**Dados fornecidos:**
- Informações pessoais (nome, idade, nacionalidade)
- Estatísticas (gols, assistências, aparições)
- Fotos de perfil
- Posição e número da camisa

**Fallback:**
Em caso de indisponibilidade da API, a aplicação usa dados de demonstração com jogadores reais do Real Madrid.

---

## Exemplos de Dados

### Resposta da API (Simplificada)
```json
{
  "player": {
    "id": 85,
    "name": "Cristiano Ronaldo",
    "age": 38,
    "height": "187 cm",
    "weight": "84 kg",
    "nationality": "Portugal",
    "photo": "https://media.api-sports.io/players/33.png"
  },
  "statistics": [
    {
      "games": {
        "appearences": 292,
        "number": 7,
        "position": "Attacker"
      },
      "goals": {
        "total": 450,
        "assists": 100
      }
    }
  ]
}
```

---

## Funcionalidades JavaScript

### Módulo API (`api.js`)
- `fetchData(url)` - Requisição genérica com fetch
- `getPlayersList()` - Obtém lista de jogadores
- `getPlayerDetails(playerId)` - Obtém detalhes de um jogador
- `getDemoPlayers()` - Dados de fallback

### Script Principal (`script.js`)
- `init()` - Inicialização da página
- `renderPlayers(players)` - Renderiza cards de jogadores
- Gerenciamento de estado (loading, erro, sucesso)

### Script de Detalhes (`detalhes.js`)
- `initDetails()` - Inicialização da página de detalhes
- `renderPlayerDetails(playerData)` - Exibe detalhes completos
- Leitura de parâmetros da URL com URLSearchParams

---

## Responsividade

A aplicação é totalmente responsiva para:
- 📱 Celulares (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Grandes telas (1920px+)

Breakpoints Bootstrap utilizados:
- `col-md-*` - Tablets em diante
- `col-lg-*` - Desktops
- `col-xl-*` - Grandes telas

---

## Critérios de Avaliação

### Parte 1 - Página de Listagem (5,0 pts)
- ✅ Lógica de Consumo (2,0 pts): Fetch + Async/Await + JSON
- ✅ Setup de Ambiente (1,5 pts): HTML, CSS, JS separados
- ✅ Interface (1,0 pt): Bootstrap responsivo
- ✅ GitHub (0,5 pt): Repositório com versionamento

### Parte 2 - Navegação e Detalhes (5,0 pts)
- ✅ Viabilidade Técnica (2,0 pts): Página funcional + API
- ✅ Organização/UX (2,0 pts): Navegação + Feedback
- ✅ GitHub e Docs (1,0 pt): README atualizado

---

## Possíveis Melhorias Futuras

1. **Backend**
   - Integração com autenticação
   - Cache de dados
   - Compressão de respostas

2. **Frontend**
   - Filtros por posição
   - Ordenação de jogadores
   - Busca por nome
   - Modo dark/light
   - Gráficos de estatísticas (Chart.js)

3. **UX/UI**
   - Paginação
   - Lazy loading de imagens
   - Transições animadas
   - Toasts de notificação

4. **Performance**
   - Service Workers (PWA)
   - Compressão de assets
   - CDN para imagens
   - Minificação de código

---

## Troubleshooting

### ❌ Não carrega os jogadores
**Solução:** A API pode ter restrições. A aplicação usa dados de demonstração automaticamente.

### ❌ Imagens não aparecem
**Solução:** Isso é esperado se a API não retornar URLs válidas. Placeholders são usados.

### ❌ Página de detalhes em branco
**Solução:** Verifique que o parâmetro `id` está na URL (ex: `detalhes.html?id=0`)

### ❌ CORS error
**Solução:** A API pode bloquear requisições. Use dados demo ou proxy CORS.

---

## Autor

Desenvolvido como avaliação de Desenvolvimento Web com Bootstrap.

**Curso:** Desenvolvimento Web com Bootstrap  
**Período:** 2º Bimestre  
**Instituição:** [Sua Instituição]

---

## Licença

Este projeto é fornecido como é, apenas para fins educacionais.

---

## Dados Utilizados

Os dados de jogadores (quando disponíveis) vêm da API-SPORTS e são propriedade intelectual de seus respectivos proprietários. O Real Madrid é propriedade do Real Madrid Club de Fútbol S.A.D.

**Nota:** Este projeto foi desenvolvido para fins educacionais e de avaliação. As imagens e dados dos jogadores são fornecidos por APIs públicas e são de propriedade de seus respectivos proprietários.

---

## Versionamento Git

```bash
# Inicializar repositório
git init

# Adicionar arquivos
git add .

# Commit inicial
git commit -m "Initial commit: Real Madrid web app with API integration"

# Adicionar remote (GitHub)
git remote add origin https://github.com/seu-usuario/av1-dwb-real-madrid-2bimestre.git

# Push para GitHub
git branch -M main
git push -u origin main
```

---

## Contato

Para dúvidas ou sugestões, entre em contato!

**GitHub:** [seu-usuario/av1-dwb-real-madrid-2bimestre](https://github.com/seu-usuario/av1-dwb-real-madrid-2bimestre)
