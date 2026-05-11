// Dados das plantas com áudio disponível
const plantsData = {
    norte: [
        {
            id: 'acre',
            name: 'Acre (AC)',
            plant: {
                name: 'Seringueira',
                scientific: 'Hevea brasiliensis',
                slogan: 'A árvore que verte o "leite" da floresta.',
                audio: 'assets/audio/acre-audio.mp3'
            }
        },
        {
            id: 'amapa',
            name: 'Amapá (AP)',
            plant: {
                name: 'Castanheira-do-Pará',
                scientific: 'Bertholletia excelsa',
                slogan: 'A gigante generosa da Amazônia que nutre',
                audio: 'assets/audio/amapa-audio.mp3'
            }
        },
        {
            id: 'amazonas',
            name: 'Amazonas (AM)',
            plant: {
                name: 'Vitória-Régia',
                scientific: 'Victoria amazonica',
                slogan: 'A rainha do rio que enfeitava os sonhos indígenas',
                audio: 'assets/audio/amazonas-audio.mp3'
            }
        },
        {
            id: 'para',
            name: 'Pará (PA)',
            plant: {
                name: 'Açaizeiro',
                scientific: 'Euterpe oleracea',
                slogan: 'O fruto roxo que virou energia de milhões',
                audio: 'assets/audio/para-audio.mp3'
            }
        },
        {
            id: 'rondonia',
            name: 'Rondônia (RO)',
            plant: {
                name: 'Mogno',
                scientific: 'Swietenia macrophylla',
                slogan: 'Madeira nobre que testemunhou séculos da floresta',
                audio: 'assets/audio/rondonia-audio.mp3'
            }
        },
        {
            id: 'roraima',
            name: 'Roraima (RR)',
            plant: {
                name: 'Caimbé',
                scientific: 'Curatella americana',
                slogan: 'A xerófita que desafia as secas da savana',
                audio: 'assets/audio/roraima-audio.mp3'
            }
        },
        {
            id: 'tocantins',
            name: 'Tocantins (TO)',
            plant: {
                name: 'Fava-de-Bolota',
                scientific: 'Parkia pendula',
                slogan: 'A leguminosa que alimenta a biodiversidade',
                audio: 'assets/audio/tocantins-audio.mp3'
            }
        }
    ],
    nordeste: [
        { id: 'alagoas', name: 'Alagoas (AL)', available: false },
        { id: 'bahia', name: 'Bahia (BA)', available: false },
        { id: 'ceara', name: 'Ceará (CE)', available: false },
        { id: 'maranhao', name: 'Maranhão (MA)', available: false },
        { id: 'paraiba', name: 'Paraíba (PB)', available: false },
        { id: 'pernambuco', name: 'Pernambuco (PE)', available: false },
        { id: 'piaui', name: 'Piauí (PI)', available: false },
        { id: 'rio-grande-do-norte', name: 'Rio Grande do Norte (RN)', available: false },
        { id: 'sergipe', name: 'Sergipe (SE)', available: false }
    ],
    'centro-oeste': [
        { id: 'distrito-federal', name: 'Distrito Federal (DF)', available: false },
        { id: 'goias', name: 'Goiás (GO)', available: false },
        { id: 'mato-grosso', name: 'Mato Grosso (MT)', available: false },
        { id: 'mato-grosso-do-sul', name: 'Mato Grosso do Sul (MS)', available: false }
    ],
    sudeste: [
        {
            id: 'minas-gerais',
            name: 'Minas Gerais (MG)',
            plant: {
                name: 'Quaresmeira',
                scientific: 'Tibouchina granulosa',
                slogan: 'A flor roxa que anuncia a quaresma nas montanhas',
                audio: 'assets/audio/minas-gerais-audio.mp3'
            }
        },
        {
            id: 'rio-de-janeiro',
            name: 'Rio de Janeiro (RJ)',
            plant: {
                name: 'Manacá-da-Serra',
                scientific: 'Pleroma mutabile',
                slogan: 'A flor que muda de cor, revelando a magia da Mata Atlântica',
                audio: 'assets/audio/rio-de-janeiro-audio.mp3'
            }
        },
        {
            id: 'sao-paulo',
            name: 'São Paulo (SP)',
            plant: {
                name: 'Painera',
                scientific: 'Ceiba speciosa',
                slogan: 'A gigante do cerrado que se veste de rosa ao amanhecer',
                audio: 'assets/audio/sao-paulo-audio.mp3'
            }
        },
        { 
            id: 'espirito-santo', 
            name: 'Espírito Santo (ES)',
            plant: {
                name: 'Jequitibá-rosa',
                scientific: 'Cariniana legalis',
                slogan: 'Um dos maiores gigantes da Mata Atlântica',
                audio: 'assets/audio/espirito-santo-audio.mp3'
            }
        }
    ],
    sul: [
        {
            id: 'parana',
            name: 'Paraná (PR)',
            plant: {
                name: 'Araucária',
                scientific: 'Araucaria angustifolia',
                slogan: 'A conífera sagrada que encurva sob o peso das nuvens',
                audio: 'assets/audio/parana-audio.mp3'
            }
        },
        {
            id: 'rio-grande-do-sul',
            name: 'Rio Grande do Sul (RS)',
            plant: {
                name: 'Erva-Mate',
                scientific: 'Ilex paraguariensis',
                slogan: 'O ritual ancestral que une culturas na roda de chimarrão',
                audio: 'assets/audio/rio-grande-do-sul-audio.mp3'
            }
        },
        {
            id: 'santa-catarina',
            name: 'Santa Catarina (SC)',
            plant: {
                name: 'Imbuia',
                scientific: 'Ocotea porosa',
                slogan: 'A madeira aromática que respira a brisa da Mata Atlântica',
                audio: 'assets/audio/santa-catarina-audio.mp3'
            }
        }
    ]
};

// Tema
function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const saved = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    applyTheme(saved);
    toggle.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark-mode');
        applyTheme(isDark ? 'light' : 'dark');
    });
}

function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.body.classList.toggle('dark-mode', isDark);
    localStorage.setItem('theme', theme);
    document.getElementById('themeToggle').textContent = isDark ? '🌙' : '☀️';
}

// Renderizar cards dos estados
function renderStates() {
    const container = document.getElementById('statesContainer');
    container.innerHTML = '';

    const regions = [
        { id: 'norte', name: 'Norte', data: plantsData.norte },
        { id: 'nordeste', name: 'Nordeste', data: plantsData.nordeste },
        { id: 'centro-oeste', name: 'Centro-Oeste', data: plantsData['centro-oeste'] },
        { id: 'sudeste', name: 'Sudeste', data: plantsData.sudeste },
        { id: 'sul', name: 'Sul', data: plantsData.sul }
    ];

    regions.forEach(region => {
        const section = document.createElement('section');
        section.className = 'region-section';
        section.id = `region-${region.id}`;

        const title = document.createElement('h2');
        title.textContent = region.name;
        section.appendChild(title);

        const grid = document.createElement('div');
        grid.className = 'states-grid';

        region.data.forEach(state => {
            const card = createStateCard(state);
            grid.appendChild(card);
        });

        section.appendChild(grid);
        container.appendChild(section);
    });
}

function createStateCard(state) {
    const card = document.createElement('article');
    card.className = 'state-card';
    card.id = `state-${state.id}`;

    const name = document.createElement('h3');
    name.className = 'state-name';
    name.textContent = state.name;
    card.appendChild(name);

    if (state.available === false) {
        const unavailable = document.createElement('div');
        unavailable.className = 'unavailable';
        unavailable.textContent = '📋 Arquivo ainda não disponível';
        card.appendChild(unavailable);
    } else {
        const info = document.createElement('div');
        info.className = 'plant-info';

        const commonName = document.createElement('div');
        commonName.className = 'plant-common-name';
        commonName.textContent = state.plant.name;

        const scientific = document.createElement('div');
        scientific.className = 'plant-scientific-name';
        scientific.textContent = state.plant.scientific;

        info.appendChild(commonName);
        info.appendChild(scientific);
        card.appendChild(info);

        const slogan = document.createElement('div');
        slogan.className = 'plant-slogan';
        slogan.textContent = `"${state.plant.slogan}"`;
        card.appendChild(slogan);

        const actions = document.createElement('div');
        actions.className = 'actions';

        // Botão de Áudio
        const audioBtn = document.createElement('button');
        audioBtn.className = 'audio-button btn btn-primary';
        audioBtn.textContent = '🔊';
        audioBtn.setAttribute('aria-label', `Reproduzir áudio de ${state.plant.name}`);
        audioBtn.addEventListener('click', () => playAudio(state.plant.audio, audioBtn));

        // Novo: Botão de PDF
        const pdfBtn = document.createElement('button');
        pdfBtn.className = 'audio-button btn btn-primary'; // Você pode ajustar essa classe conforme o seu CSS
        pdfBtn.textContent = '📄'; // Ícone de documento
        pdfBtn.setAttribute('aria-label', `Abrir PDF com dados de ${state.name}`);
        pdfBtn.addEventListener('click', () => {
            // Gera o caminho do arquivo dinamicamente com base no ID do estado
            const pdfPath = `assets/dados/${state.id}-dados.pdf`;
            window.open(pdfPath, '_blank'); // Abre o PDF em uma nova aba do navegador
        });

        // Adicionando os botões na div actions
        actions.appendChild(audioBtn);
        actions.appendChild(pdfBtn); 
        
        card.appendChild(actions);
    }

    return card;
}

// Reprodutor de áudio
let currentAudio = null;
let currentButton = null;

function playAudio(audioPath, button) {
    // 1. Verifica se o botão clicado é o mesmo que está tocando no momento
    if (currentAudio && currentButton === button) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Zera o tempo para recomeçar do início numa próxima vez
        button.textContent = '🔊'; // Volta o ícone original
        currentAudio = null;
        currentButton = null;
        return; // Sai da função para não iniciar o áudio novamente
    }

    // 2. Se houver um áudio tocando de OUTRO estado, para ele primeiro
    if (currentAudio) {
        currentAudio.pause();
        if (currentButton) currentButton.textContent = '🔊';
    }

    // 3. Inicia o novo áudio
    const audio = new Audio(audioPath);
    currentAudio = audio;
    currentButton = button;

    button.textContent = '🔇';
    audio.play().catch(error => {
        console.error('Erro ao reproduzir áudio:', error);
        button.textContent = '⚠️';
    });

    audio.addEventListener('ended', () => {
        button.textContent = '🔊';
        currentAudio = null;
        currentButton = null; // Limpa também a referência do botão
    });
}

// Clique no mapa
function setupMapInteraction() {
    document.querySelectorAll('.state').forEach(state => {
        state.setAttribute('tabindex', '0');
        state.addEventListener('click', () => scrollToState(state.id));
        state.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                scrollToState(state.id);
            }
        });
    });
}

function scrollToState(stateId) {
    const element = document.getElementById(`state-${stateId}`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        element.focus();
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderStates();
    setupMapInteraction();
});
