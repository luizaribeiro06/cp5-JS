![](./fiap.png)

# Web development


| Checkpoint        | 5      | ```CURSO:```     | ENGENHARIA DE SOFTWARE |
| ----------------- | ------ | ---------------- | ---------------------- |
| ```DISCIPLINA:``` | Webdev | ```PROFESSOR:``` | Marcelo Amorim         |

# Passo a passo da tarefa

1. Clonar este repositório
   
~~~bash
git clone https://github.com/mmamorim/CP5-Webdev.git
~~~

2. Abrir pasta clonada com o VSCode
3. Abrir terminal
4. Executar instalação dos pacotes

~~~bash
npm install
~~~

5. Executar o projeto

~~~bash
npm run dev
~~~

# Mudanças feitas:

- Modificar apenas o componente ```FakeUser.jsx```
   * Adicionar a captura da inicialização do componente via ```useEffect``` que realizará a chamada da API e receberá os dados de um usuário falso via a API **randomuser** alterarando os dados via ```setUser()``` que implicará na atualização da renderização do componente JSX (HTML).
   * Adicionar o evento de clique ao Icone de atualização para novamente carregar um novo usuário.  

