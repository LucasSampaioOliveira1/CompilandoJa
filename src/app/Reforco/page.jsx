'use client'

import { useMemo, useState } from 'react';
import Header from '../components/Header';




const materias = [
    'Algoritimos 1 2 3',
    'Estrutura de Dados',
    'Banco de Dados',
    'Programação Orientada a Objetos (POO)',
    'Sistemas Operacionais',
    'Lógica de Programação',
    'Inteligência Artificial',
    'Sistemas Distribuidos',
    'Pesquisa e Ordenação',
    'Engenharia de Software',
    'Lógica Matemática (Abstrata)',
    'Programação Web - Front End',
    'Arquitetura de Computadores',
    'Desenvolvimento Web - Back End',
    'Matemática para Computação',
    'Programação Funcional',
    'Programação Lógica ',
    'Desenvolvimento Desktop',
    'Algebra Linear e Geometria p/ Computação',
    'Arquitetura de Sistemas',
    'Linguagens de Programação',
    'Programação Mobile',
    'Segurança da Informação',
    'Teoria da Computação',
    'Testes de Software',
    'Computação Gráfica',
    'Gestão de Projetos',
    'Teoria dos Grafos',
    'Compiladores',
    'Desenvolvimento de Games',
];


const Reforco = () => {

    const [busca, setBusca] = useState('');



   const  materiasFiltradas = useMemo(() => {
    const lowerBusca = busca.toLowerCase();
    return materias.filter((materias) => materias.toLowerCase().includes(lowerBusca));
   }, [busca]) 

    return ( 
        <section className='App mb-10'>
            <Header/>

            <h1 className="text-pink-400 font-abc text-3xl mt-32 text-center font-bold max-md:text-2xl max-md:mt-20"> Matérias de reforço </h1>

            {/* <input type="text" value={busca} onChange={(ev) => setBusca(ev.target.value)}/> */}

            
                <form className="max-w-md mx-auto mt-10 mb-10">   
                    {/* <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label> */}
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="text" value={busca} onChange={(ev) => setBusca(ev.target.value)} id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-slate-400 rounded-lg bg-slate-400 focus:ring-pink-400 focus:border-pink-400 dark:bg-gray-700 dark:border-slate-400 dark:placeholder-gray-400 dark:text-slate-400 dark:focus:ring-pink-400 dark:focus:border-pink-400" placeholder="Pesquisar Metéria" required />
                        {/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                    </div>
                </form>


            <ul className='flex flex-wrap justify-center border-2 border-slate-400 p-10 gap-10 max-md:p-5'>
                {materiasFiltradas.map((materias) => (
                    <li className='text-slate-400 flex flex-wrap justify-center border-2 border-pink-400 p-5 rounded-lg hover:border-pink-700 max-md:p-3' key={materias}>{materias}</li>
                ))}
            </ul>
        </section>
     );
}
 
export default Reforco;