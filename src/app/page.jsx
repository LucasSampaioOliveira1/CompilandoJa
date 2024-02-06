import { Github, Linkedin, Instagram, ArrowDownToLine, ArrowBigRight, MessageCircle, MapPin } from 'lucide-react';

export default function Home() {
  return (
   <section>
        <div className="flex flex-wrap justify-around gap-28 p-52 max-sm:p-0 max-md:p-10 max-sm:mt-10 max-sm:text-center" id='resume'>
            <div>
                {/* <h1 className="text-yellow-200 font-abc">
                    Compilando Ja
                </h1> */}

                <h1 className="text-pink-400 font-abc text-4xl font-bold max-md:text-2xl">
                    INSCRIÇÕES
                </h1>

                <h1 className="text-pink-400 font-abc text-7xl font-bold max-md:text-4xl">
                    ABERTAS
                </h1>
                <h1 className="text-slate-400 font-abc text-4xl font-bold mt-10 max-md:text-2xl">
                   Aprenda a programar na prática!
                </h1>


                <div className='mt-10'>
                  
                      <h1 className='flex flex-wrap text-slate-400 font-bold text-2xl gap-2'>
                        <ArrowBigRight/>
                        Aulas Para Adolescentes
                          
                      </h1>

                      <h1 className='flex flex-wrap text-slate-400 font-bold text-2xl gap-2'>
                        <ArrowBigRight/>
                        Aulas Para Adultos
                          
                      </h1>

                      <h1 className='flex flex-wrap text-slate-400 font-bold text-2xl gap-2'>
                        <ArrowBigRight/>
                        Reforço Para Universitários
                          
                      </h1>

                </div>


                <h1 className='text-pink-400 mt-10 font-bold text-xl'>Para mais informações entre em contato </h1>
                <div className='flex flex-wrap gap-4 mt-3'>
                    
                    <a href="https://github.com/LucasSampaioOliveira" className="text-sm font-semibold text-slate-400 hover:text-pink-400 transition duration-500" target="_blank">
                      <MessageCircle />
                    </a>

                    <a href="https://www.linkedin.com/in/lucas-sampaio-0aa72320b/" className="text-sm font-semibold text-slate-400 hover:text-pink-400 transition duration-500" target="_blank">
                      <Instagram/>
                    </a>

                    <a href="https://www.instagram.com/lucas.sampaio33/" className="text-sm font-semibold text-slate-400 hover:text-pink-400 transition duration-500" target="_blank">
                      <MapPin />
                    </a>
                </div>

                {/* <div className='mt-10 w-64 p-4 shadow-3xl rounded-xl'>
                    <a href="./LucasSampaioOliveira-Currículo.pdf" className="flex gap-2 font-semibold text-white transition hover:text-yellow-200 duration-500 text-xl" target="_blank" download="LucasSampaioOliveira-Currículo">
                        Download Currículo
                        <ArrowDownToLine/>
                    </a>
                </div> */}

            </div>

            <div>
                <div className="w-96 shadow-3xl mb-16 rounded-3xl max-md:w-64"><img src="./logo.png" alt="Lucas" /></div>
        </div>

            {/* <div class="box">
                <span></span>
                <span></span>
                <span></span>
            </div> */}


        </div>
   </section>
  );
}
