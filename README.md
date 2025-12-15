# Prueba Técnica Frontend Junior / Mid

## Objetivo
Desarrollar un Backoffice de una tienda donde el usuario pueda ver un listado de productos, consultar el detalle de uno, modificarlo y borrarlo. No hace falta Inicio de sesión. Tampoco es necesario publicar la web en ningún servidor.

## Repositorio
[Repositorio Prueba técnica](https://github.com/Acrismatic/prueba-tecnica)

## Requisitos

### 1. Funcionalidad de la Aplicación
- **Listado de Productos:** Crear una página para listar los productos.
- **Detalle de Producto:** Crear una página dinámica que reciba un ID por URL (ej: `/producto/1`) para ver el detalle.
- **Buscador:** Implementar un buscador de productos.
- **Estados de Carga:** Mostrar un loader o mensaje de "Cargando" mientras el contenido no esté disponible.

### 2. Stack Tecnológico
- **Shadcn UI:**
  - Utilizar varios componentes para la UI.
  - Extender un componente de shadcn/ui añadiendo nuevas props personalizadas (ej: `shadow` boolean o `corner` con opciones específicas).
  ```tsx
  // Ejemplo
  <Button variant="outline" rounded="top-left">Registro</Button>
  ```
   Debe estar tipado.
- **TanStack React Query:**
  - Gestión de estado asíncrono.
  - Implementar **CRUD completo** (Create, Read, Update, Delete) usando Queries y Mutations.

### 3. API
- Utilizar [DummyJSON Products](https://dummyjson.com/docs/products) como fuente de datos.

### 4. Organización
- Estructura libre. Se valorará la modularización, orden y buenas prácticas de arquitectura.

## Documentación
- [Next.js](https://nextjs.org/docs)
- [React](https://react.dev/reference/react)
- [Shadcn UI](https://ui.shadcn.com/)
- [TanStack React Query](https://tanstack.com/query/latest/docs/framework/react/overview)
- [DummyJSON Products](https://dummyjson.com/docs/products)