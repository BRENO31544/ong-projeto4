# ONG Sabedoria e Alegria

## Descrição do Projeto

O projeto **ONG Sabedoria e Alegria** é um site institucional desenvolvido para fins acadêmicos na disciplina de **Front-End** do curso de **Análise e Desenvolvimento de Sistemas (ADS)**.
O objetivo é apresentar as ações da ONG, promover o voluntariado e facilitar o cadastro de doadores e colaboradores por meio de uma interface responsiva, acessível e moderna.

---

## Funcionalidades Principais

### Estrutura SPA (Single Page Application)

O site utiliza um sistema de navegação **SPA** (implementado com JavaScript Vanilla) para exibir as seções sem recarregar a página.
A navegação é feita por **hashes na URL** (`#home`, `#projetos`, `#cadastro`) controlados pelo arquivo `router.js`.

**Características:**

* Transição suave entre seções com animações CSS;
* Atualização automática do link ativo no menu;
* Retorno automático ao topo da página a cada mudança de seção.

---

### Tema Claro e Escuro

O site possui um **modo escuro (dark mode)** implementado com CSS Custom Properties e controlado via JavaScript (`theme.js`).

**Recursos:**

* Ícone alterna entre 🌙 e ☀️;
* Preferência de tema salva no `localStorage`;
* Transição suave entre os modos.

---

### Design Responsivo

A interface foi projetada com **CSS Grid e Flexbox**, garantindo adaptação a diferentes dispositivos:

* Layouts específicos para **mobile**, **tablet** e **desktop**;
* **Menu hambúrguer** funcional para telas pequenas;
* Cards de projetos ajustáveis com `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`.

---

### Formulário Validado

O formulário de cadastro (`#cadastro`) permite o registro de voluntários e doadores com **validação em tempo real**:

**Recursos:**

* Máscaras automáticas para CPF e telefone (`mask.js`);
* Validação completa do CPF (`validation.js`);
* Campos obrigatórios e mensagens de erro personalizadas;
* Bloqueio do envio caso o CPF seja inválido.

---

### Navegação Acessível

O projeto segue **boas práticas de acessibilidade web (WCAG)**:

* Uso de atributos ARIA (`aria-label`, `aria-haspopup`, `aria-modal`, `role`);
* Estrutura semântica com `header`, `main`, `section`, `nav`, `footer`;
* Foco e leitura acessíveis com `tabindex`;
* Contraste de cores adequado e botões com `:focus` visível.

---

### Modal Interativo

Um **modal de feedback** é exibido ao clicar no botão *"Avalie sua Experiência"*.
O modal possui suporte a acessibilidade, foco e fechamento com o botão `×`.

---

###  Organização do Projeto

```
 ong-projeto/
│
├── index.html
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── style.min.css
│   ├── img/
│   │   ├── projeto1.jpg
│   │   ├── projeto2.jpg
│   │   └── projeto3.jpg
│   └── js/
│       ├── router.js
│       ├── validation.js
│       ├── mask.js
│       └── theme.js
│
└── README.md
```

---

## Tecnologias Utilizadas

* **HTML5** — Estrutura semântica e acessível;
* **CSS3** — Design responsivo com variáveis e media queries;
* **JavaScript Vanilla (ES6)** — Controle da navegação, temas e validações;
* **LocalStorage API** — Armazenamento da preferência de tema;
* **ARIA Roles e atributos semânticos** — Melhor experiência para leitores de tela.

---

## Destaques Técnicos

* Implementação de **transições CSS suaves** entre seções;
* Menu **dropdown com submenu** totalmente funcional em desktop e mobile;
* **Botões acessíveis** com foco visível e feedback visual;
* **Código modularizado** por função (router, máscara, tema e validação);
* Preparado para **minificação de arquivos** (`.min.css` e `.min.js`).

---

## Link do Projeto

[🔗 Acesse o site publicado no GitHub Pages](https://breno31544.github.io/ong-projeto/)

---

## Autor

**Breno Felix**
Estudante de Análise e Desenvolvimento de Sistemas
Projeto desenvolvido para fins acadêmicos — Cruzeiro do Sul Virtual (2025)
