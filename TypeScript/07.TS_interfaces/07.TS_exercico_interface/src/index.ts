interface GithubUserResponse {
    id: number;
    login: string;
    name: string;
    bio: string;
    public_repos: number;
    repos_url: string;
    message?: "Not Found";
}

// resposta a requisição pelos repositórios do usuário.
interface GithubRepoResponse {
    name: string;
    description: string;
    fork: boolean;
    stargazers_count: number;
}


const users: GithubUserResponse[] = []

async function fetchUser(username: string) {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const user: GithubUserResponse = await response.json()
    
    if (user.message) {
        console.log('Usuário não encontrato!')
    } else {
        users.push(user)

        console.log(
            `Usuário ${user.login} foi salvo\n` + 
            `\nid: ${user.id}\n` +
            `\login: ${user.login}\n` +
            `\nNome: ${user.name}\n ` +
            `\nBio: ${user.bio}\n ` +
            `\nRepositórios públicos: ${user.public_repos}\n ` 
        )
    }
}

async function showUser(username: string) {
    const user = users.find(user => user.login === username)

    if (typeof user === 'undefined') {
        console.log("Usuário não encontrato.")
    } else {
        const response = await fetch(user.repos_url)
        const repos: GithubRepoResponse[] = await response.json()

        let message = `id: ${user.id}\n` +
             `\nLogin: ${user.login}\n` + 
             `\nNome: ${user.name}\n` +
             `\nBio: ${user.bio}\n` +
             `\nRepositórios Públicos: ${user.public_repos}\n`


        repos.forEach(repo => {
            message += `\nNome: ${repo.name}\n` +
              `\nDescrição: ${repo.description}\n` +
              `\nEstrelas: ${repo.stargazers_count}\n` +
              `\nÉ um fork: ${repo.fork ? 'Sm' : 'Não'}\n`
        })

        console.log(message)
    }
}


function showAllUsers() {
    let message = 'Usuários:\n'

    users.forEach(user => {
        message += `\n ${user.login}`
    })

    console.log(message)
}

function showReposTotal() {
    const reposTotal = users.reduce((accumlator, users) => accumlator + users.public_repos, 0)

    console.log(`O grupo possui um total de ${reposTotal} repositórios públicos.`)
}


function showTopFive() {
    const topFive = users.slice().sort((a, b) => b.public_repos - a.public_repos).slice(0, 5)

    let message = "Top 5 usuários com mais repositórios públicos:\n"

    topFive.forEach((user, index) => {
        message += `\n${index + 1} - ${user.login}: ${user.public_repos} repositórios`
    })

    console.log(message)
}

async function main() {
    await fetchUser('valderlanjs')
    await fetchUser('isaacpontes')
    await fetchUser('julianaconde')
    await fetchUser('lucasqueirogaa')
    await fetchUser('frans200')
    await fetchUser('leDragox')

    await showUser('valderlanjs')
    await showUser('isaacpontes')

    showAllUsers()
    showReposTotal()
    showTopFive()
}

main()