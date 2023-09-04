# POC - Implementação de controle de acesso baseado em permissões

## Modelos de controle de acesso (contexto de sistemas de segurança)

- **RBAC (Role-Based Access Control):** O acesso é concedido à base do papel (role) de um usuário (admin, owner, etc);
- **ABAC (Attribute-Based Access Control):** O acesso é concedido não com base no papel do usuário, mas nos recursos que o usuário pode acessar.

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