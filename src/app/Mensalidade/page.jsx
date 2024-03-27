import Header from '../components/Header';

const Mensalidade = () => {
    return ( 
        <section>
            <Header/>
            <h1 className="text-pink-400 font-abc text-3xl mt-32 text-center font-bold max-md:text-2xl max-md:mt-20"> Confira nossos pacotes </h1>

            <div className="flex flex-wrap justify-evenly mt-28 max-md:gap-10 max-md:mb-10">
                <div className='border-2 border-slate-400 p-5 hover:border-pink-400 hover:scale-125 duration-200 shadow-3xl text-slate-400 hover:text-pink-400 w-96 max-md:w-72'>
                    <h1 className=" text-center p-5 font-bold text-3xl max-md:text-2xl border-b-2 border-slate-400">Front End</h1>
                    <p className=" text-center p-5 font-bold text-2xl max-md:text-xl"><strong>R$250 Por mês</strong></p>
                    {/* <p className=" text-center p-5 font-bold text-2xl max-md:text-xl"><strong>1 Ano e 6 Meses de Curso</strong></p>
                    <p className=" text-center p-5 font-bold text-2xl max-md:text-xl"><strong>1 Aula por semana</strong></p>
                    <p className=" text-center p-5 font-bold text-2xl max-md:text-xl"><strong>Duração: 1h:20min</strong></p> */}
                    <a href="https://wa.me/message/TRRVX2V5KCXXK1" target='_blank'><button className=" text-slate-400 hover:text-pink-400 text-center p-5 font-bold text-lg border-2 border-slate-400 hover:border-pink-400 w-full">Escolher</button></a>
                </div>

                <div className='border-2 border-slate-400 p-5 hover:border-pink-400 hover:scale-125 duration-200 shadow-3xl text-slate-400 hover:text-pink-400 w-96 max-md:w-72'>
                    <h1 className=" text-center p-5 font-bold text-3xl max-md:text-2xl border-b-2 border-slate-400">Back End</h1>
                    <p className=" text-center p-5 font-bold text-2xl max-md:text-xl">R$250 <strong>Por mês</strong></p>
                    <a href="https://wa.me/message/TRRVX2V5KCXXK1" target='_blank'><button className=" text-slate-400 hover:text-pink-400 text-center p-5 font-bold text-lg border-2 border-slate-400 hover:border-pink-400 w-full">Escolher</button></a>
                </div>

                <div className='border-2 border-slate-400 p-5 hover:border-pink-400 hover:scale-125 duration-200 shadow-3xl text-slate-400 hover:text-pink-400 w-96 max-md:w-72'>
                    <h1 className=" text-center p-5 font-bold text-3xl max-md:text-2xl border-b-2 border-slate-400">Fullstack</h1>
                    <p className=" text-center p-5 font-bold text-2xl max-md:text-xl">R$400 <strong>Por mês</strong></p>
                    <a href="https://wa.me/message/TRRVX2V5KCXXK1" target='_blank'><button className=" text-slate-400 hover:text-pink-400 text-center p-5 font-bold text-lg border-2 border-slate-400 hover:border-pink-400 w-full">Escolher</button></a>
                </div>
            </div>
            
        </section>
     );
}
 
export default Mensalidade;