# 🌿 Flora Brasileira com IA Sensorial

Um site one-page responsivo para explorar as plantas nativas do Brasil através de histórias e sons.

## 📋 Estrutura

```
website/
├── index.html                    # HTML5 semântico
├── css/styles.css               # CSS3 responsivo + tema Light/Dark
├── js/script.js                 # JavaScript com interatividade
├── assets/audio/                # 13 áudios MP3 das plantas
└── README.md                    # Este arquivo
```

## 🚀 Como Usar

### 1. Abrir o Site

**Opção A: Servidor Local (Recomendado)**
```bash
cd website
python -m http.server 8000
```
Depois acesse: `http://localhost:8000`

**Opção B: Diretamente**
- Clique duplo em `index.html` (algumas funcionalidades podem ser limitadas)

### 2. Interagir com o Site

- **Tema**: Clique no botão ☀️/🌙 para alternar Light/Dark Mode
- **Mapa**: Clique em qualquer estado para rolar para a seção correspondente
- **Áudio**: Clique em ▶️ para reproduzir o som (13 plantas têm áudio)
- **Não Disponível**: Estados sem áudio mostram "Arquivo ainda não disponível"
- **Responsivo**: Funciona em mobile, tablet e desktop

## 📊 Plantas Disponíveis

### ✅ Com Áudio (13)

| Região | Estados |
|--------|---------|
| **Norte** | Acre, Amapá, Amazonas, Pará, Rondônia, Roraima, Tocantins |
| **Sudeste** | Minas Gerais, Rio de Janeiro, São Paulo |
| **Sul** | Paraná, Rio Grande do Sul, Santa Catarina |

### ⏳ Sem Áudio (14)

| Região | Estados |
|--------|---------|
| **Nordeste** | Alagoas, Bahia, Ceará, Maranhão, Paraíba, Pernambuco, Piauí, Rio Grande do Norte, Sergipe |
| **Centro-Oeste** | Distrito Federal, Goiás, Mato Grosso, Mato Grosso do Sul |
| **Sudeste** | Espírito Santo |

## 🎨 Personalização

### Mudar Cores
Edite `css/styles.css` na seção `:root`:
```css
:root {
    --accent: #2e7d32;           /* Verde principal */
    --accent-light: #81c784;     /* Verde claro */
    --bg-primary: #ffffff;       /* Fundo branco */
    --bg-secondary: #f5f5f0;     /* Fundo cinza */
    --text-primary: #1a1a1a;     /* Texto principal */
}
```

### Mudar Fontes
Na seção `body` de `css/styles.css`:
```css
font-family: 'sua-fonte-aqui', sans-serif;
```

## ♿ Acessibilidade

- ✅ HTML5 semântico com ARIA labels
- ✅ Navegação por teclado (Tab, Enter, Space)
- ✅ Tema escuro para reduzir fadiga
- ✅ Contraste WCAG AA
- ✅ Suporte a preferência de movimento reduzido

## 📱 Responsividade

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: até 767px
- Mapa com pinch-zoom suportado

## 🔧 Tecnologias

- **HTML5**: Semântica, ARIA
- **CSS3**: Flexbox, Grid, Custom Properties
- **JavaScript**: ES6+, LocalStorage
- **SVG**: Mapa interativo com 27 estados

## 📁 Arquivos

### index.html
- HTML5 semântico
- SVG do mapa do Brasil com 27 estados clicáveis
- Estrutura responsiva

### css/styles.css
- Flexbox para layout responsivo
- Theme Light/Dark com CSS Custom Properties
- Paleta harmônica: verde, bege, tons neutros
- Media queries para mobile/tablet/desktop

### js/script.js
- Gerenciamento de tema (localStorage)
- Renderização dinâmica de cards de plantas
- Reprodutor de áudio com play/pause
- Navegação por clique no mapa
- Acessibilidade por teclado

### assets/audio/
Contém 13 arquivos MP3:
- acre-audio.mp3
- amapa-audio.mp3
- amazonas-audio.mp3
- minas-gerais-audio.mp3
- para-audio.mp3
- parana-audio.mp3
- rio-de-janeiro-audio.mp3
- rio-grande-do-sul-audio.mp3
- rondonia-audio.mp3
- roraima-audio.mp3
- santa-catarina-audio.mp3
- sao-paulo-audio.mp3
- tocantins-audio.mp3

## 🎯 Próximos Passos

Para completar o site com as 14 plantas faltantes:

1. Adicione os áudios MP3 em `assets/audio/` para os estados sem áudio
2. Edite `js/script.js` na seção `plantsData` para adicionar os dados das plantas faltantes
3. Siga o mesmo formato das plantas existentes

**Exemplo:**
```javascript
{
    id: 'bahia',
    name: 'Bahia',
    plant: {
        name: 'Nome Popular',
        scientific: 'Gênero espécie',
        slogan: 'Descrição breve',
        audio: 'assets/audio/bahia-audio.mp3'
    }
}
```

## 📧 Criadoras

**Izadora Alves** e **Marina Micas** © 2026

Processo Criativo: [Acessar](https://docs.google.com/document/d/1Zxdykr8BO2soSFMpBQfI22gw89WXAuWi4FlmBYlkvEk/edit?usp=sharing)

Página Web: [Acessar](https://projetos-ebat.github.io/Flora-Brasileira-com-IA-Sensorial/)

---

**Desenvolvido com ❤️ para a Flora Brasileira**
