import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, Lock, Scale, AlertCircle, CheckCircle2, Info } from 'lucide-react';
import { Navbar } from '../components/Layout/Navbar'; 
import { Footer } from '../components/Layout/Footer'; 

const TermsPage = () => {
  // Função para scroll suave
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar isDarkBg={true} />

      {/* --- HERO SECTION --- */}
      <section className="pt-40 pb-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
              <Scale size={16} /> Jurídico
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Termos de Uso e Privacidade
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Transparência total sobre como operamos e como cuidamos dos seus dados.
            </p>
            <p className="text-sm text-slate-500 mt-4">Última atualização: Fevereiro de 2026</p>
          </motion.div>
        </div>
      </section>

      {/* --- CONTEÚDO PRINCIPAL --- */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* SIDEBAR DE NAVEGAÇÃO (Sticky) */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-32 space-y-2">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 px-4">Índice</h3>
              {[
                { id: 'termos', label: '1. Termos', icon: FileText },
                { id: 'licenca', label: '2. Uso de Licença', icon: CheckCircle2 },
                { id: 'responsabilidade', label: '3. Isenção', icon: AlertCircle },
                { id: 'limitacoes', label: '4-6. Limitações e Links', icon: AlertCircle },
                { id: 'lei', label: 'Lei Aplicável', icon: Scale },
                { id: 'privacidade', label: 'Política de Privacidade', icon: Lock },
                { id: 'cookies', label: 'Cookies e Publicidade', icon: Shield },
                { id: 'compromisso', label: 'Compromisso do Usuário', icon: CheckCircle2 },
                { id: 'mais-info', label: 'Mais Informações', icon: Info },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl text-slate-600 hover:bg-white hover:text-indigo-600 hover:shadow-sm transition-all text-sm font-medium"
                >
                  <item.icon size={18} />
                  {item.label}
                </button>
              ))}

              <div className="mt-8 p-6 bg-indigo-900 rounded-2xl text-white">
                <p className="font-bold mb-2">Dúvidas?</p>
                <p className="text-sm text-indigo-200 mb-4">Entre em contato com nosso suporte jurídico.</p>
                <a href="mailto:francisco@gerencialinfo.com.br" className="text-sm font-bold underline hover:text-indigo-300">
                  Falar com suporte
                </a>
              </div>
            </div>
          </div>

          {/* TEXTO JURÍDICO */}
          <div className="col-span-1 lg:col-span-8 space-y-12">

            {/* Bloco 1: Termos */}
            <SectionBlock id="termos" title="1. Termos">
              <p>
                Ao acessar o site da <strong className="text-indigo-700">Gerencial Informática</strong>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
              </p>
            </SectionBlock>

            {/* Bloco 2: Licença */}
            <SectionBlock id="licenca" title="2. Uso de Licença">
              <p className="mb-4">
                É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site da Gerencial Informática, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4 bg-slate-50 p-6 rounded-xl border border-slate-100">
                <li>Modificar ou copiar os materiais;</li>
                <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
                <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site da Gerencial Informática;</li>
                <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais;</li>
                <li>Transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
              </ul>
              <p>
                Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida pela Gerencial Informática a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrônico ou impresso.
              </p>
            </SectionBlock>

            {/* Bloco 3: Isenção */}
            <SectionBlock id="responsabilidade" title="3. Isenção de responsabilidade">
              <p className="mb-4">
                Os materiais no site da Gerencial Informática são fornecidos 'como estão'. A Gerencial Informática não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
              </p>
              <p>
                Além disso, a Gerencial Informática não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
              </p>
            </SectionBlock>

            {/* Bloco 4, 5, 6: Limitações, Precisão, Links, Modificações */}
            <SectionBlock id="limitacoes" title="4. Limitações e Precisão">
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">4. Limitações</h4>
                  <p>
                    Em nenhum caso a Gerencial Informática ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais na Gerencial Informática, mesmo que a Gerencial Informática tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos consequentes ou incidentais, essas limitações podem não se aplicar a você.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">5. Precisão dos materiais</h4>
                  <p>
                    Os materiais exibidos no site da Gerencial Informática podem incluir erros técnicos, tipográficos ou fotográficos. A Gerencial Informática não garante que qualquer material em seu site seja preciso, completo ou atual. A Gerencial Informática pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, a Gerencial Informática não se compromete a atualizar os materiais.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">6. Links</h4>
                  <p>
                    A Gerencial Informática não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso pela Gerencial Informática do site. O uso de qualquer site vinculado é por conta e risco do usuário.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Modificações</h4>
                  <p>
                    A Gerencial Informática pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
                  </p>
                </div>
              </div>
            </SectionBlock>

            {/* Lei Aplicável */}
            <SectionBlock id="lei" title="Lei aplicável" icon={Scale}>
              <p>
                Estes termos e condições são regidos e interpretados de acordo com as leis da Gerencial Informática e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
              </p>
            </SectionBlock>

            {/* DIVISOR GRANDE */}
            <div className="border-t border-slate-200 my-16 relative">
              <span className="absolute left-1/2 -translate-x-1/2 -top-3.5 bg-slate-50 px-6 text-slate-400 text-sm font-bold uppercase tracking-widest">
                Política de Privacidade
              </span>
            </div>

            {/* Política de Privacidade */}
            <SectionBlock id="privacidade" title="Política de Privacidade" icon={Lock}>
              <p className="mb-4">
                A sua privacidade é importante para nós. É política da Gerencial Informática respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Gerencial Informática, e outros sites que possuímos e operamos.
              </p>
              <p className="mb-4">
                Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
              </p>
              <div className="bg-green-50 border border-green-100 p-6 rounded-xl text-green-800 text-sm leading-relaxed my-6">
                <strong>Retenção de Dados:</strong> Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
              </div>
              <p>
                Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
              </p>
              <p className="mt-4">
                O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
              </p>
              <p className="mt-4">
                Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
              </p>
              <p className="mt-4">
                O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto conosco.
              </p>
            </SectionBlock>

            {/* Cookies e Publicidade */}
            <SectionBlock id="cookies" title="Cookies e Publicidade">
              <p className="mb-4">
                O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.
              </p>
              <p className="mb-4">
                Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.
              </p>
              <p className="mb-4">
                Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados ​​por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.
              </p>
              <p>
                Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente e, quando aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.
              </p>
            </SectionBlock>

            {/* Compromisso do Usuário */}
            <SectionBlock id="compromisso" title="Compromisso do Usuário" icon={Shield}>
              <p className="mb-6">
                O usuário se compromete a fazer uso adequado dos conteúdos e da informação que a Gerencial Informática oferece no site e com caráter enunciativo, mas não limitativo:
              </p>
              <div className="grid gap-4 md:grid-cols-1">
                <CommitmentCard letter="A" text="Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;" />
                <CommitmentCard letter="B" text="Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;" />
                <CommitmentCard letter="C" text="Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) da Gerencial Informática, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados." />
              </div>
            </SectionBlock>

            {/* Mais Informações */}
            <SectionBlock id="mais-info" title="Mais informações" icon={Info}>
              <p>
                Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
              </p>
            </SectionBlock>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// --- Subcomponentes para organizar o código ---

const SectionBlock = ({ id, title, children, icon: Icon }) => (
  <motion.div
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100"
  >
    <div className="flex items-center gap-3 mb-6">
      {Icon && <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><Icon size={24} /></div>}
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
    </div>
    <div className="text-slate-600 leading-relaxed space-y-4 text-base md:text-lg">
      {children}
    </div>
  </motion.div>
);

const CommitmentCard = ({ letter, text }) => (
  <div className="flex gap-4 items-start p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 transition-colors border border-slate-100">
    <div className="w-8 h-8 rounded-full bg-indigo-900 text-white flex items-center justify-center font-bold shrink-0">
      {letter}
    </div>
    <p className="text-sm md:text-base pt-1">{text}</p>
  </div>
);

export default TermsPage;