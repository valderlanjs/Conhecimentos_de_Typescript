Criando Interfaces.


* Criar um arquivo TypeScript com funções que utilizam interfaces para tipar as respostas de requisições à API do GitHub.

- Funções:
1. Obter dados de um usuário:

- Recebe um nome de usuário do GitHub.
- Faz uma requisição GET na API do GitHub.
- Salva o usuário retornado em uma lista.
- Utiliza apenas alguns dados do retorno da API.
    1. ID (number).
    2. Login (string).
    3. Name (string).
    4. Public Repos (number).
    5. Repos URL (string).

- Valida se o usuário não foi encontrado.

2. Mostrar informações de um usuário e seus repositórios.

- Mostra informações de um usuário salvo.
- Mostra alguns dos seus repositórios públicos.
- Faz a requisição na URL Repos URL do usuário.
- Mostra apenas alguns dados dos repositórios:
    1. Name (string).
    2. Description (string).
    3. Fork (boolean).
    4. Stargazers Count (number).

3. Mostrar todos os usuários salvos.

4. Calcular soma de repositórios dos usuários.

5. Mostrar top 5 usuários com mais repositórios públicos.

Dicas: 
Usar Fetch API.
Converter response para JSON.
Salvar usuários em uma lista.