# POC - Implementação de controle de acesso baseado em permissões

## Modelos de controle de acesso (contexto de sistemas de segurança)

- **RBAC (Role-Based Access Control):** O acesso é concedido com base no papel (role) de um usuário (admin, owner, etc);
- **ABAC (Attribute-Based Access Control):** O acesso é concedido não com base no papel do usuário, mas nos recursos que o usuário pode acessar.

## Vantagens e Destantagens

### RBAC

#### Vantagens

- **Simplicidade:** É mais fácil de entender e implementar do que modelos mais complexos;
- **Administração centralizada:** Você pode gerenciar permissões em um nível de função, em vez de um nível de usuário individual;
- **Redução de erros:** Ao agrupar permissões em funções, você reduz a chance de cometer erros ao atribuir permissões.

#### Desvantagens

- **Rigidez:** Pode não ser flexível o suficiente para lidar com casos de uso complexos ou dinâmicos;
- **Acumulação de funções:** Em sistemas maiores, os usuários podem acumular mais funções do que realmente precisam, potencialmente levando a problemas de segurança;
- **Manutenção:** À medida que a aplicação cresce, pode ser desafiador gerenciar e revisar constantemente as funções para garantir que elas atendam às necessidades atuais.

### ABAC

#### Vantagens

- **Flexibilidade:** É altamente flexível e pode lidar com uma ampla variedade de casos de uso de controle de acesso, incluindo os complexos.
- **Granularidade:** Permite controle de acesso mais granular, já que as decisões são tomadas com base em múltiplos atributos;
- **Adaptabilidade:** Pode se adaptar facilmente a ambientes em mudança, considerando mais atributos ou mudando as regras conforme necessário.

#### Desvantagens

- **Complexidade:** É mais complexo de implementar e entender do que RBAC;
- **Administração:** A criação e manutenção de políticas ABAC pode ser mais trabalhosa do que simplesmente atribuir funções em RBAC.


## Como rodar o projeto

### Server

- `cd server`;
- Instalar as dependências: `yarn install`;
- Subir a app: `yarn dev`.

### Client

- `cd client`;
- Instalar as dependências: `yarn install`;
- Subir a app: `yarn dev`.

## Proposta

- Criação de um hook que consulta um serviço, que baseado nos parâmetros informados retorna uma lista de permissões. Esse hook pode ser utilizado no lugar de lógicas que utilizam os status codes de erro como parte da regra de negócio, impedindo que a requisição seja feita;
- Criar um componente que, utilizando o hook mencionado, controla a exibição de seu conteúdo (`children`) com base nas permissões recebidas como propriedade.

### Hook

```tsx
import { useCommunityPermissions } from "@/hooks";

function Component () {
  const { hasPermissions } = useCommunityPermissions();

  const hasReadCommunityPermission = hasPermissions(["community.read"]);

  return (
    // ...
  )
}
```

### Componente

```tsx
import { HasPermission } from "@/components";

function Component () {
  return (
    <>
      {/* ... */}

      <HasPermission permissions={["community.create"]}>
        {/* ... */}
      </HasPermission>

      {/* ... */}
    </>
  )
}
```