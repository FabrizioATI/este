//Importar elementos de Nextjs
import Head from "next/head";
//Importar Hooks de Reacts

import NavBar from "../../../components/header";
import BarraLateral from "../../../components/admin/barra_lateral";

import Link from 'next/link'
import useFetch from '../../hooks/useFetch'
import endPoints from '../../../services/rest/api'
import { deleteProject } from '../../hooks/delete'



//Componente Principal Home
export default function Home() {

    const project = useFetch(endPoints.project.project_list)
    const handleDelete = (id) => {
        deleteProject(id).then(() => {})
    }
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-black">
                <div>
                    <NavBar />
                    <div className="flex overflow-hidden bg-white pt-16">
                        <BarraLateral />
                        <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
                        <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                            <main>
                                {/* SOLICITUDD */}

                                <div id="main-content" className="pt-6 px-4">
                                    <main>
                                        <div className="pt-6 px-4">
                                            <div className="w-full">
                                                <section className="container mx-auto p-6 font-mono">
                                                    <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                                                        <nav className="flex mb-5" aria-label="Breadcrumb">
                                                            <ol className="inline-flex items-center space-x-1 md:space-x-2">
                                                                <li className="inline-flex items-center">
                                                                    <a href="#" className="text-gray-700 hover:text-gray-900 inline-flex items-center">
                                                                        <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                                                        Inicio
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <div className="flex items-center">
                                                                        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" className="evenodd"></path></svg>
                                                                        <a href="#" className="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium">Proyectos</a>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="flex items-center">
                                                                        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" className="evenodd"></path></svg>
                                                                        <span className="text-gray-400 ml-1 md:ml-2 text-sm font-medium" aria-current="page">Proyectos Aprobados</span>
                                                                    </div>
                                                                </li>
                                                            </ol>
                                                        </nav>
                                                        <div className="w-full overflow-x-auto">
                                                            <h1>Aprovados</h1>
                                                            <table className="w-full">
                                                                <thead>
                                                                    <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                                                        <th className="px-4 py-3">ID</th>
                                                                        <th className="px-4 py-3">Nombre Proyecto</th>
                                                                        <th className="px-4 py-3">Descripción</th>
                                                                        <th className="px-4 py-3">Dirección</th>
                                                                        <th className="px-4 py-3">Archivo</th>
                                                                        <th className="px-4 py-3">Nombre Gerente</th>
                                                                        <th className="px-4 py-3">Detalles</th>
                                                                        <th className="px-4 py-3">Acciones</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody className="bg-white">
                                                                    <>
                                                                        {project.map((item, i) => {
                                                                            if (item.state === true) {
                                                                                return (
                                                                                    <>
                                                                                        <tr className="text-gray-700">
                                                                                            <td className="px-4 py-3 text-xs border">
                                                                                                <span className="px-2 py-1 font-semibold leading-tight bg-blue-100 rounded-sm">{item.id} </span>
                                                                                            </td>
                                                                                            <td className="px-4 py-3 text-xs border">
                                                                                                <span className="px-2 py-1 font-semibold leading-tight  bg-blue-100 rounded-sm">{item.nameProject} </span>
                                                                                            </td>
                                                                                            <td className="px-4 py-3 text-xs border">
                                                                                                <span className="px-2 py-1 font-semibold leading-tight bg-blue-100 rounded-sm  line-clamp-4">{item.descriptionProject} </span>
                                                                                            </td>
                                                                                            <td className="px-4 py-3 text-xs border">
                                                                                                <span className="px-2 py-1 font-semibold leading-tight bg-blue-100 rounded-sm">{item.user.lastName} </span>
                                                                                            </td>
                                                                                            <td className="px-4 py-3 text-xs border">
                                                                                                <span className="px-2 py-1 font-semibold leading-tight  bg-blue-100 rounded-sm">{item.nameEnterprise} </span>
                                                                                            </td>
                                                                                            <td className="px-4 py-3 text-xs border">
                                                                                                <span className="px-2 py-1 font-semibold leading-tight  bg-blue-100 rounded-sm">{item.createdAt} </span>
                                                                                            </td>
                                                                                            <td className="px-4 py-3 text-xs border">
                                                                                                <Link href={`actions/[id]`} as={`actions/${item.id}`}>
                                                                                                    Acciones-
                                                                                                </Link>
                                                                                                <Link href={`bonds/[id]`} as={`bonds/${item.id}`}>
                                                                                                    Bonos-
                                                                                                </Link>
                                                                                                <Link href={`investments/[id]`} as={`investments/${item.id}`}>
                                                                                                    Inversiones-
                                                                                                </Link>
                                                                                                <Link href={`loans/[id]`} as={`loans/${item.id}`}>
                                                                                                    Prestamos
                                                                                                </Link>
                                                                                            </td>
                                                                                            <td className="px-4 py-3 text-xs border">
                                                                                                <button
                                                                                                    onClick={() => handleDelete(item.id)}
                                                                                                    class="mb-5 hidden sm:inline-flex ml-5 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3"
                                                                                                >
                                                                                                    <svg
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                        width="16"
                                                                                                        height="16"
                                                                                                        fill="currentColor"
                                                                                                        class="bi bi-trash -ml-1 mr-2 h-4 w-4"
                                                                                                        viewBox="0 0 16 16"
                                                                                                    >
                                                                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                                                        <path
                                                                                                            fill-rule="evenodd"
                                                                                                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                                                                                        />
                                                                                                    </svg>
                                                                                                    ELIMINAR
                                                                                                </button>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </>
                                                                                )
                                                                            }
                                                                        })}
                                                                    </>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                    </main>
                                </div>
                                {/* SOLICITUD FIN */}
                            </main>

                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
}

/*
{<div className="w-full overflow-x-auto px-4">
    <div className="flex flex-col items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 sm:flex-row">
        <a href="#" className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Búsqueda de Proyectos</a>
    </div>
    <form className="bg-gray-100 shadow-md rounded px-8 pt-2 pb-8 mb-2 grid grid-cols-2">
        <div className="mb-2 px-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                ID
            </label>
            <input onChange={handleSearchChangeId} className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
        </div>
        <div className="mb-2 px-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Nombre de Proyecto
            </label>
            <input onChange={handleSearchChangeNombreP} className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" />
        </div>
        <div className="mb-2 px-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
                Nombre del Gerente
            </label>
            <input onChange={handleSearchChangeNGerente} className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
        </div>
        <div className="mb-2 px-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Fecha
            </label>
            <input onChange={handleSearchChangeFecha} className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
        </div>

    </form>
</div>}
*/