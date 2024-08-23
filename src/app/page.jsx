import { Github, Linkedin, Instagram, ArrowDownToLine, ArrowBigRight, MessageCircle, MapPin } from 'lucide-react';
import Header from './components/Header';

export default function Home() {
  return (
    <section>
      <Header/>
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
              <ArrowBigRight />
              Aulas Para Adolescentes

            </h1>

            <h1 className='flex flex-wrap text-slate-400 font-bold text-2xl gap-2'>
              <ArrowBigRight />
              Aulas Para Adultos

            </h1>

            <h1 className='flex flex-wrap text-slate-400 font-bold text-2xl gap-2'>
              <ArrowBigRight />
              Reforço Para Universitários

            </h1>

          </div>


          <h1 className='text-pink-400 mt-10 font-bold text-xl'>Para mais informações entre em contato </h1>
          <div className='flex flex-wrap gap-4 mt-3 max-sm:justify-center'>

            <a href="https://wa.me/message/TRRVX2V5KCXXK1" className="text-sm font-semibold text-slate-400 hover:text-pink-400 transition duration-500" target="_blank">
              <MessageCircle />
            </a>

            <a href="https://www.instagram.com/compilandoja/" className="text-sm font-semibold text-slate-400 hover:text-pink-400 transition duration-500" target="_blank">
              <Instagram />
            </a>

            <a href="https://www.google.com.br/maps/place/R.+Moema,+267+-+Divino+Esp%C3%ADrito+Santo,+Vila+Velha+-+ES,+29107-250/@-20.3456708,-40.2988322,17z/data=!3m1!4b1!4m6!3m5!1s0xb81617261d7101:0x9b56e51aba83cba!8m2!3d-20.3456758!4d-40.2962573!16s%2Fg%2F11ckqmrpzc?entry=ttu" className="text-sm font-semibold text-slate-400 hover:text-pink-400 transition duration-500" target="_blank">
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


      </div>
      
      {/* Sessão professores */}

      {/* <div class="box">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <h1 className="text-pink-400 font-abc text-3xl mt-52 text-center font-bold max-md:text-2xl">Professores do Compilando JA</h1>    

     <div className='flex flex-wrap justify-evenly mt-24 mb-10 max-md:gap-10'>
      
            <div className='bg-gray-900 border-2 border-slate-400 hover:border-pink-400 shadow-3xl'>
              <h1 className='text-slate-400 text-center p-5 font-bold text-xl'>
                  Thallis Duarte
                </h1>
                <img className='bg-slate-500' src="./Thallis.png" alt="Thallis" width={270}/>
                <h1 className='text-slate-400 text-center p-5 font-bold text-xl'>
                  Diretor
                </h1>

                <div className='flex flex-wrap justify-center gap-5 mb-10'>
                  <a href='https://www.instagram.com/thallisduartee' className='text-slate-400 hover:text-pink-400' target="_blank">
                    <Instagram />
                  </a>

                  <a href='https://github.com/LucasSampaioOliveira' className='text-slate-400 hover:text-pink-400' target="_blank">
                    <Github />
                  </a>

                  <a href='#'>
                    <Instagram />
                  </a>
                </div>
            </div>


            <div className='bg-gray-900 border-2 border-slate-400 hover:border-pink-400 shadow-3xl'>
              <h1 className='text-slate-400 text-center p-5 font-bold text-xl'>
                  Lucas Sampaio
                </h1>
                <img className='bg-slate-500' src="./Lucas.png" alt="Lucas" width={270}/>
                <h1 className='text-slate-400 text-center p-5 font-bold text-xl'>
                  Professor Front End
                </h1>

                <div className='flex flex-wrap justify-center gap-5 mb-10'>
                  <a href='https://www.instagram.com/lucas.sampaio33/' className='text-slate-400 hover:text-pink-400' target="_blank">
                    <Instagram />
                  </a>

                  <a href='https://github.com/LucasSampaioOliveira' className='text-slate-400 hover:text-pink-400' target="_blank">
                    <Github />
                  </a>

                  <a href='#'>
                    <Instagram />
                  </a>
                </div>
            </div>


            <div className='bg-gray-900 border-2 border-slate-400 hover:border-pink-400 shadow-3xl'>
              <h1 className='text-slate-400 text-center p-5 font-bold text-xl'>
                  Michael Dias
                </h1>
                <img className='bg-slate-500' src="./Maicon.png" alt="Lucas" width={270}/>
                <h1 className='text-slate-400 text-center p-5 font-bold text-xl'>
                  Professor Back End
                </h1>

                <div className='flex flex-wrap justify-center gap-5 mb-10'>
                  <a href='https://www.instagram.com/smichaelferreirade?igsh=dWxoa2tjZHRvM2Jl' className='text-slate-400 hover:text-pink-400' target="_blank">
                    <Instagram />
                  </a>

                  <a href='https://github.com/LucasSampaioOliveira' className='text-slate-400 hover:text-pink-400' target="_blank">
                    <Github />
                  </a>

                  <a href='#'>
                    <Instagram />
                  </a>
                </div>
            </div>
     </div> */}


    </section>
  );
}
