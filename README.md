# Currículo Interativo - Desenvolvedor Web

Um currículo moderno e responsivo criado em HTML, CSS e JavaScript com animações e gráficos funcionais.

## 🚀 Características

- **Design Moderno**: Layout clean e profissional
- **Responsivo**: Adaptável para desktop, tablet e mobile
- **Animações**: Efeitos suaves e interativos
- **Gráficos Funcionais**: Barras de progresso animadas para habilidades
- **Estatísticas Dinâmicas**: Contadores animados
- **Foto de Perfil**: Integração com sua imagem
- **Tema Escuro**: Toggle entre tema claro e escuro
- **Impressão Otimizada**: CSS específico para impressão
- **Cópia Rápida**: Clique no email/telefone para copiar

## 📁 Estrutura dos Arquivos

```
curriculo/
├── index.html          # Estrutura principal
├── style.css           # Estilos e animações
├── script.js           # Interatividade e animações
├── perfil.jpg          # Sua foto de perfil
└── README.md           # Este arquivo
```

## ✏️ Como Personalizar

### 1. Informações Pessoais
No arquivo `index.html`, edite as seguintes seções:

**Dados pessoais (linha ~15-25):**
```html
<h1>SEU NOME AQUI</h1>
<h2>Desenvolvedor Web Full Stack</h2>
<p class="bio">Sua biografia profissional...</p>
```

**Contatos (linha ~27-47):**
```html
<span>seuemail@exemplo.com</span>
<span>(11) 99999-9999</span>
<span>linkedin.com/in/seulinkedin</span>
<span>github.com/seugithub</span>
<span>São Paulo, SP</span>
```

### 2. Habilidades Técnicas
Edite as barras de progresso (linha ~55-95):

```html
<div class="skill-item">
    <div class="skill-header">
        <span>Tecnologia</span>
        <span>90%</span> <!-- Porcentagem -->
    </div>
    <div class="skill-bar">
        <div class="skill-progress" data-skill="90"></div> <!-- Mesmo valor -->
    </div>
</div>
```

### 3. Experiência Profissional
Atualize o timeline (linha ~105-135):

```html
<div class="timeline-item">
    <div class="timeline-date">2023 - Atual</div>
    <div class="timeline-content">
        <h4>Seu Cargo</h4>
        <h5>Nome da Empresa</h5>
        <ul>
            <li>Suas responsabilidades e conquistas</li>
        </ul>
    </div>
</div>
```

### 4. Projetos
Modifique os cards de projeto (linha ~145-175):

```html
<div class="project-card">
    <div class="project-header">
        <h4>Nome do Projeto</h4>
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
        </div>
    </div>
    <p>Descrição do projeto...</p>
    <div class="project-links">
        <a href="seu-github-link" class="project-link">
            <i class="fab fa-github"></i> Código
        </a>
        <a href="seu-demo-link" class="project-link">
            <i class="fas fa-external-link-alt"></i> Demo
        </a>
    </div>
</div>
```

### 5. Formação
Atualize a seção de educação (linha ~185-205):

```html
<div class="education-item">
    <div class="education-content">
        <h4>Seu Curso</h4>
        <h5>Instituição - Período</h5>
        <p>Descrição da formação...</p>
    </div>
</div>
```

### 6. Estatísticas
Modifique os números (linha ~215-235):

```html
<div class="stat-card">
    <div class="stat-number" data-count="50">0</div> <!-- Valor final -->
    <div class="stat-label">Projetos Concluídos</div>
</div>
```

### 7. Foto de Perfil
Substitua o arquivo `perfil.jpg` pela sua foto ou altere o nome no HTML:

```html
<img src="sua-foto.jpg" alt="Foto de Perfil">
```

## 🎨 Personalização de Cores

No arquivo `style.css`, você pode alterar as cores principais:

```css
/* Cor principal (azul) */
#3498db → sua-cor-preferida

/* Cor secundária (azul escuro) */
#2980b9 → sua-cor-secundaria

/* Cor de fundo do header */
#2c3e50 → sua-cor-header
```

## 📱 Como Visualizar

1. Abra o arquivo `index.html` em qualquer navegador moderno
2. Para desenvolvimento local, você pode usar:
   - Live Server (extensão do VS Code)
   - Python: `python -m http.server 8000`
   - Node.js: `npx serve .`

## 🖨️ Impressão

O currículo possui estilos otimizados para impressão. Use:
- Ctrl+P (Windows/Linux) ou Cmd+P (Mac)
- Ou clique no botão de impressão no canto superior direito

## 🌙 Funcionalidades Extras

- **Tema Escuro**: Botão no canto superior direito
- **Barra de Progresso**: Mostra o progresso da leitura
- **Animações Suaves**: Ativadas ao rolar a página
- **Cópia Rápida**: Clique no email/telefone para copiar
- **Scroll Suave**: Links internos com animação

## 🔧 Tecnologias Utilizadas

- HTML5 semântico
- CSS3 com Flexbox e Grid
- JavaScript ES6+
- Font Awesome (ícones)
- Google Fonts (Poppins)

## 📝 Dicas Importantes

1. **Mantenha o conteúdo conciso** - O currículo deve ser direto e objetivo
2. **Use números específicos** - Quantifique suas conquistas
3. **Atualize regularmente** - Mantenha as informações sempre atuais
4. **Teste em diferentes dispositivos** - Verifique a responsividade
5. **Optimize as imagens** - Use fotos em boa resolução mas com tamanho otimizado

## 🎯 Para Recrutadores

Este currículo foi especialmente desenvolvido para impressionar recrutadores de RH com:
- Visual profissional e moderno
- Informações bem organizadas
- Demonstração prática de habilidades técnicas
- Facilidade de navegação e leitura
- Destaque para projetos e conquistas

---

**Boa sorte na sua busca por uma vaga de Desenvolvedor Web! 🚀**
