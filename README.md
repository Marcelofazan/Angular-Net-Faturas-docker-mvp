
## 🌐 Angular-Net-Faturas-docker-mvp
Aplicativo de Faturas Multilanguage (PT,ENG e ES) em Angular 21 e API com autenticação Jwt em C# ASP.NET Core 10 EF com banco de dados Postgres.

#### 🎨 Aqui está uma demonstração do projeto
<img width="1262" height="612" alt="Faturas" src="https://github.com/user-attachments/assets/a8f2c027-b366-4fc9-9495-78881e68af3d" />

#### 📋 O que voçê vai ver nesse Projeto
| Tecnologia | Descrição |
|-----------|-----------|
| **BCrypt** | Algoritmo de hashing criptográfico utilizado para armazenar senhas de forma segura |
| **CORS** | Mecanismo de segurança implementado no navegador e não uma responsabilidade do frontend ou backend |
| **Fluent Validation** | Biblioteca para regras de validação de forma simples, legível e desacoplada |
| **LocalStorage** | Armazenamento em cache de dados no navegador de forma persistente em pares de chave e valor |
| **JWT**  | É um crachá digital usado para identificar usuários e trocar informações de forma segura entre computadores |
| **MailKit**  | Biblioteca usada para criar, enviar e receber e-mails. |
| **QuestPDF**  | biblioteca open-source para o ecossistema .NET que permite gerar documentos PDF |
| **Serilog**  | Bibliotecas de registro de logs (diagnóstico) |


#### 💬 Requisitos do Projeto
- Necessário Docker instalado.
- Necessário configurar arquivo **.env**

Modifique alterando [SEU_EMAIL] e [SUA_SENHA] no arquivo **.env** .
```bash
EMAIL_USERNAME=[SEU_EMAIL]
EMAIL_PASSWORD=[SUA_SENHA_APP]
JWT_SECRET=ChaveGarantidaComMaisDeSessentaEQuatroCaracteresParaPreencherOs512BitsNecessariosDoAlgoritmo!!!
```

#### 🔄 Executar a aplicação Docker

VSCode Terminal [1]

- Criar Container
```bash
docker compose up --build --force-recreate
```

VSCode Terminal [2]
- Fechar Container
```bash
docker compose down 
```

O projeto ira rodar em **http://localhost:8081**

#### 🔄 Executar a aplicação Desenvolvimento Local

VSCode Terminal [1.1]

- Restaurar dependencias .Net
```build
dotnet restore
```

- Executar Build do Projeto
```bash
dotnet run
```
Para utilizar a API necessário autorização JWT e deve ser colocado antes do Token a palavra **Bearer** .

```bash  
Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIwYjgxMjBmOC0yM2YyLTQxMjktOTc2My04ZmM
```

A API ira rodar **http://localhost:8080/swagger/index.html**


#### Separação de responsabilidades 
- Todos os métodos de serviço retornam `ResponseModel`/`ResponseModel<T>` (`Message`, `IsSucceeded`, `StatusCode`, `Errors`).
- Em vez de lançar exceções para falhas de negócio esperadas (recurso não encontrado, validação, conflitos de estado) utilizando os métodos de fábrica estáticos `ResponseModel.Success(...)`/`ResponseModel.Failure(...)`. 
- Todas as ações de *controller* executam `return StatusCode(result.StatusCode, result);` de forma padronizada. 
- Apenas exceções verdadeiramente inesperadas devem chegar ao manipulador de erro 500 do `ExceptionMiddleware`.


#### ⚙️ Configuração - Gmail - Senha de app
Com senha de Verificação em Duas Etapas ativa no https://mail.google.com/, siga estes passos exatos:

Acesse o painel da sua Conta do Google. Clique na aba Segurança no menu lateral.

No campo de busca no topo da página, digite Senhas de app e clique na opção que aparecer.

Escolha um nome qualquer para identificar (ex: ProjetoLanchinho).Clique em Criar.

O Google vai exibir uma senha de 16 letras dentro de uma caixa amarela.

Copie essa senha (ignore os espaços, use as 16 letras juntas).

Modifique [SEU_EMAIL] e [SUA_SENHA] no arquivo **appsettings.json** .
```json
  "EmailConfig": {
    "From": "[SEU_EMAIL]",
    "SmtpServer": "smtp.gmail.com",
    "Port": 587,
    "UserName": "[SEU_EMAIL]",
    "Password": "[SUA_SENHA_APP]"
  },
```

