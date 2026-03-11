# 📺 YouTube Clone - Projeto Final (Replication)
---

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)

Este projeto consiste na replicação do layout de canal do YouTube proposto pelo Figma Community, focado em demonstrar habilidades de front-end responsivo, manipulação de estado com JavaScript e containerização profissional.

---

## 🚀 Requisitos Implementados

### 🎨 Layout e Estilização
- [x] **Grid System**: Organização das seções de vídeos e alinhamento do conteúdo principal com fluidez.
- [x] **Flexbox**: Aplicado em todas as barras de navegação (header, sub-nav e footer) e para centralização de elementos.
- [x] **Responsividade Total**: Layout adaptável para Desktop (sidebar fixa/retrátil), Tablet e Mobile (header simplificado e navegação inferior).

### ⚙️ Funcionalidades JavaScript
- [x] **Navegação Lateral Expansível**: Menu hambúrguer que alterna entre os estados compacto e expandido (Desktop).
- [x] **Modal de Opções (Mobile Only)**: Botão de "três pontos" aciona um modal inferior (bottom-sheet) seguindo padrões nativos.
- [x] **Sistema de Inscrição com Persistência**: Botão "Inscrever-se" com alteração visual e armazenamento no `localStorage` (estado mantido após refresh).

### 🐳 Infraestrutura com Docker
- [x] **Aplicação Containerizada**: Encapsulamento em container Docker utilizando **Nginx (Alpine)**.
- [x] **Orquestração com Compose**: Arquivo `docker-compose.yml` para gerenciamento de portas e volumes.

---

## 🔧 Como Rodar o Projeto

Para visualizar a aplicação rodando via Docker em segundos:

1.  Certifique-se de que o Docker está instalado e ativo.
2.  Abra o terminal na pasta raiz do projeto e execute:

```bash
docker compose up --build

3. Abra o navegador e acesse: http://localhost:8080

👤 Aluno(a): Sara Pereira de Almeida

🏫 Instituto 3C: Code Academy