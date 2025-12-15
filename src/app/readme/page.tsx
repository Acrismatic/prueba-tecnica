export default function Page() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 prose prose-slate">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Prueba Técnica Frontend Junior / Mid</h1>
            
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Objetivo</h2>
                <p className="text-gray-600">
                Desarrollar un Backoffice de una tienda donde el usuario pueda ver un listado de productos, consultar el detalle de uno, modificarlo y borrarlo. No hace falta Inicio de sesión. Tampoco es necesario publicar la web en ningún servidor.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Requisitos</h2>
                
                <div className="mb-6">
                    <h3 className="text-xl font-medium text-gray-800 mb-3">1. Funcionalidad de la Aplicación</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li><strong>Listado de Productos:</strong> Crear una página para listar los productos.</li>
                        <li><strong>Detalle de Producto:</strong> Crear una página dinámica que reciba un ID por URL (ej: <code>/producto/1</code>) para ver el detalle.</li>
                        <li><strong>Buscador:</strong> Implementar un buscador de productos.</li>
                        <li><strong>Estados de Carga:</strong> Mostrar un loader o mensaje de "Cargando" mientras el contenido no esté disponible.</li>
                    </ul>
                </div>

                <div className="mb-6">
                    <h3 className="text-xl font-medium text-gray-800 mb-3">2. Stack Tecnológico</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>
                            <strong>Shadcn UI:</strong>
                            <ul className="list-circle pl-5 mt-2 space-y-1">
                                <li>Utilizar varios componentes para la UI.</li>
                                <li>
                                    Extender un componente de shadcn/ui añadiendo nuevas props personalizadas (ej: <code>shadow</code> boolean o <code>rounded</code> con opciones específicas) como por ejemplo: <code>{"<Button variant=\"outline\" rounded=\"top-left\">Registro</Button>"}</code>. Debe estar tipado.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>TanStack React Query:</strong>
                            <ul className="list-circle pl-5 mt-2 space-y-1">
                                <li>Gestión de estado asíncrono.</li>
                                <li>Implementar <strong>CRUD completo</strong> (Create, Read, Update, Delete) usando Queries y Mutations.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="mb-6">
                    <h3 className="text-xl font-medium text-gray-800 mb-3">3. API</h3>
                    <p className="text-gray-700">
                        Utilizar <a href="https://dummyjson.com/docs/products" target="_blank" className="text-blue-600 hover:underline">DummyJSON Products</a> como fuente de datos.
                    </p>
                </div>

                <div className="mb-6">
                    <h3 className="text-xl font-medium text-gray-800 mb-3">4. Organización</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Estructura libre. Se valorará la modularización, orden y buenas prácticas de arquitectura.</li>
                    </ul>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Documentación</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><a href="https://nextjs.org/docs" target="_blank" className="text-blue-600 hover:underline">Next.js</a></li>
                    <li><a href="https://react.dev/reference/react" target="_blank" className="text-blue-600 hover:underline">React</a></li>
                    <li><a href="https://ui.shadcn.com/" target="_blank" className="text-blue-600 hover:underline">Shadcn UI</a></li>
                    <li><a href="https://tanstack.com/query/latest/docs/framework/react/overview" target="_blank" className="text-blue-600 hover:underline">TanStack React Query</a></li>
                    <li><a href="https://dummyjson.com/docs/products" target="_blank" className="text-blue-600 hover:underline">DummyJSON Products</a></li>
                </ul>
            </section>
        </div>
    );
}
