import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Play, Sparkles, Star, Zap, Infinity as InfinityIcon, BookOpen, Clock } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-brand-accent/30 selection:text-brand-dark relative">
      <div className="fixed inset-0 dot-grid opacity-5 pointer-events-none z-[-1]"></div>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-brand-bg/80 border-b card-border">
        <div className="flex items-center gap-2">
          <span className="font-serif font-black text-2xl uppercase tracking-tighter text-brand-dark">Fluentify.</span>
          <span className="text-[10px] font-semibold tracking-widest uppercase opacity-60 italic max-md:hidden">Curated Learning</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-widest text-brand-dark">
          <a href="#method" className="hover:opacity-50 transition-opacity">Методика</a>
          <a href="#courses" className="hover:opacity-50 transition-opacity">Курсы</a>
          <a href="#reviews" className="hover:opacity-50 transition-opacity">Отзывы</a>
        </div>
        <button className="text-brand-accent text-[11px] font-bold uppercase tracking-widest hover:opacity-70 transition-opacity flex items-center gap-2">
          Начать бесплатно
          <ArrowRight className="w-4 h-4" />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8 relative z-10"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-accent">Est. 2024 / Autumn</span>
              <div className="h-[1px] w-12 bg-brand-dark opacity-20"></div>
            </div>
            <h1 className="text-[80px] md:text-[140px] font-serif font-black leading-[0.85] tracking-tighter text-brand-dark text-balance mb-8">
              Заговори<br />
              <span className="italic text-brand-accent text-6xl md:text-[110px] ml-4 md:ml-12 block leading-[1]">на английском.</span>
              Свободно.
            </h1>
            <p className="text-lg font-light opacity-80 max-w-md leading-relaxed text-balance">
              A bespoke curriculum designed for visionaries. Забудь про скучные учебники и зубрежку.
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-8">
              <button className="bg-brand-accent text-white px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:brightness-110 transition-all shadow-xl shadow-orange-900/10 mb-2">
                Start Inquiry
              </button>
              <button className="bg-transparent text-brand-dark px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] card-border hover:bg-black/5 transition-all flex items-center gap-2 mb-2">
                <Play className="w-4 h-4 fill-brand-dark" />
                Как проходят уроки
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Playful abstract hero image placeholder */}
            <div className="aspect-[4/5] rounded-tl-[10rem] rounded-br-[10rem] bg-brand-dark overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1771&auto=format&fit=crop" 
                alt="Students learning" 
                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 mix-blend-luminosity transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Element 1 */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-12 -left-6 md:-left-8 bg-white/80 backdrop-blur-md card-border rounded-full py-3 px-6 flex items-center gap-4"
              >
                <div>
                  <p className="text-sm font-serif italic text-brand-dark opacity-80">Оценка 4.9/5</p>
                  <p className="text-[9px] uppercase tracking-widest text-brand-dark font-bold">1000+ Students</p>
                </div>
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 -right-6 md:-right-8 bg-brand-accent text-white card-border-light rounded-full py-3 px-6 flex items-center gap-3"
              >
                <p className="text-[10px] font-bold uppercase tracking-widest">80% Practice</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="bg-brand-dark py-6 w-full overflow-hidden border-y card-border relative flex">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-dark to-transparent z-10" />
        <motion.div 
          animate={{ x: [0, -1035] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap items-center gap-12 text-brand-bg/40 font-serif italic text-3xl tracking-wide"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="hover:text-brand-accent transition-colors cursor-default">Speaking</span>
              <span className="text-sm font-sans not-italic text-brand-bg/20 uppercase tracking-widest">/</span>
              <span className="text-white hover:text-brand-accent transition-colors cursor-default">Vocabulary</span>
              <span className="text-sm font-sans not-italic text-brand-bg/20 uppercase tracking-widest">/</span>
              <span className="hover:text-brand-accent transition-colors cursor-default">Listening</span>
              <span className="text-sm font-sans not-italic text-brand-bg/20 uppercase tracking-widest">/</span>
              <span className="text-white hover:text-brand-accent transition-colors cursor-default">Grammar</span>
              <span className="text-sm font-sans not-italic text-brand-bg/20 uppercase tracking-widest">/</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bento Grid Methodology */}
      <section id="method" className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <div className="flex items-baseline space-x-4 mb-4">
            <span className="serif text-3xl italic text-brand-dark opacity-30">01.</span>
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase opacity-40">Methodology</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tighter text-brand-dark max-w-3xl mb-8 leading-[0.9]">
            Как мы делаем сложное <br/><span className="italic font-light text-brand-accent">простым.</span>
          </h2>
          <p className="text-lg font-light opacity-80 max-w-xl">
            Никакой магии, только проверенные когнитивные методики, современные технологии и очень много практики.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-6 auto-rows-[minmax(300px,auto)]">
          {/* Card 1: Large Span */}
          <div className="md:col-span-8 bg-brand-dark rounded-3xl p-10 md:p-14 card-border text-white flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 dot-grid-light opacity-10" />
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-serif italic mb-6 text-brand-bg">Языковой барьер? <br/> Не слышали.</h3>
              <p className="font-light opacity-60 max-w-md text-lg leading-relaxed mb-12">
                С первого урока ты будешь говорить. Ошибаться — нормально. Молчать — нет. Мы поможем преодолеть страх общения за пару недель.
              </p>
            </div>
            <div className="relative z-10 flex justify-between items-end border-t card-border-light pt-6">
               <span className="text-[10px] uppercase font-bold tracking-widest text-brand-accent">Immersion</span>
               <MessageCircle className="w-5 h-5 opacity-40" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="md:col-span-4 bg-brand-accent rounded-3xl p-10 border border-brand-accent text-white transition-all flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-serif italic mb-4">Актуальная лексика</h3>
              <p className="font-light opacity-80 text-sm leading-relaxed mb-8">
                Учим слова из Netflix, TikTok и реальных рабочих переписок, а не "London is the capital of Great Britain".
              </p>
            </div>
            <div className="flex justify-between items-end border-t border-white/20 pt-6">
              <span className="text-[10px] uppercase font-bold tracking-widest text-white/60">Lexicon</span>
              <Zap className="w-5 h-5 text-white/80" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="md:col-span-4 bg-white/40 backdrop-blur-sm rounded-3xl p-10 card-border flex flex-col justify-between hover:bg-white/60 transition-colors">
            <div>
              <h3 className="text-2xl font-serif italic text-brand-dark mb-4">Интерактивная платформа</h3>
              <p className="font-light opacity-60 text-sm leading-relaxed mb-8">
                Домашние задания, тренажер слов и прогресс-трекер всегда под рукой в твоем телефоне.
              </p>
            </div>
            <div className="flex justify-between items-end border-t card-border pt-6">
               <span className="text-[10px] uppercase font-bold tracking-widest text-brand-dark opacity-40">Digital</span>
               <InfinityIcon className="w-5 h-5 opacity-40" />
            </div>
          </div>

           {/* Card 4 */}
          <div className="md:col-span-4 bg-white/40 backdrop-blur-sm rounded-3xl p-10 card-border flex flex-col justify-between hover:bg-white/60 transition-colors">
            <div>
              <h3 className="text-2xl font-serif italic text-brand-dark mb-4">Уроки по 50 минут</h3>
              <p className="font-light opacity-60 text-sm leading-relaxed mb-8">
                Идеальный тайминг для сохранения максимальной концентрации и усвоения материала.
              </p>
            </div>
             <div className="flex justify-between items-end border-t card-border pt-6">
               <span className="text-[10px] uppercase font-bold tracking-widest text-brand-dark opacity-40">Focus</span>
               <Clock className="w-5 h-5 opacity-40" />
            </div>
          </div>

          {/* Card 5 */}
          <div className="md:col-span-4 rounded-3xl p-10 card-border flex flex-col justify-center items-center text-center space-y-6">
            <h3 className="text-3xl font-serif italic text-brand-dark">Готов начать?</h3>
            <button className="bg-brand-dark text-white w-full py-4 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-black/80 transition-colors">
              Пройти тест
            </button>
          </div>
        </div>
      </section>

      {/* Courses/Pricing */}
      <section id="courses" className="py-32 px-6 md:px-12 relative">
        <div className="absolute top-0 inset-x-0 h-[1px] card-border"></div>
        <div className="max-w-7xl mx-auto">
           <div className="mb-20 text-center md:text-left">
            <div className="flex items-baseline space-x-4 mb-4 justify-center md:justify-start">
              <span className="serif text-3xl italic text-brand-dark opacity-30">02.</span>
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase opacity-40">Curriculum</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tighter text-brand-dark mb-6 leading-[0.9]">
              Выбери свой <br/><span className="italic font-light text-brand-accent">формат.</span>
            </h2>
            <p className="text-lg font-light opacity-80 max-w-xl mx-auto md:mx-0">
              Независимо от твоего уровня, у нас есть программа, которая приведет тебя к цели.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Plan 1 */}
            <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-10 card-border relative flex flex-col overflow-hidden group">
              <div className="mb-8">
                <h3 className="text-3xl font-serif italic text-brand-dark mb-4">Групповой</h3>
                <p className="font-light opacity-60 text-sm h-12 leading-relaxed">Идеально для практики общения и мотивации в команде (до 6 человек).</p>
              </div>
              <div className="mb-10 flex justify-between items-end border-b card-border pb-6">
                <span className="text-4xl font-light tracking-tighter text-brand-dark">4 500₽</span>
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-40">/мес</span>
              </div>
              <ul className="space-y-4 mb-12 flex-1">
                {[
                  "8 занятий в месяц",
                  "Разговорный клуб 1 раз в неделю",
                  "Персональный фидбек",
                  "Доступ к интерактивной платформе"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-1 h-1 rounded-full bg-brand-dark mt-2 opacity-30 shrink-0"></div>
                    <span className="text-brand-dark opacity-80 font-light text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-transparent card-border text-brand-dark py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-black/5 transition-colors">
                Выбрать тариф
              </button>
            </div>

            {/* Plan 2: Highlighted */}
            <div className="bg-brand-dark rounded-3xl p-10 card-border text-white relative flex flex-col md:-translate-y-4 group overflow-hidden">
               <div className="absolute inset-0 dot-grid-light opacity-10" />
              <div className="absolute top-8 right-8">
                <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-brand-accent">
                  Curated
                </span>
              </div>
              <div className="mb-8 relative z-10">
                <h3 className="text-3xl font-serif italic text-white mb-4">Индивидуальный</h3>
                <p className="font-light opacity-60 text-sm h-12 leading-relaxed">Тет-а-тет с преподавателем. Программа адаптируется под твои личные цели.</p>
              </div>
              <div className="mb-10 flex justify-between items-end border-b card-border-light pb-6 relative z-10">
                <span className="text-4xl font-light tracking-tighter text-brand-accent">9 900₽</span>
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-40">/мес</span>
              </div>
              <ul className="space-y-4 mb-12 flex-1 relative z-10">
                {[
                  "Всё из Группового тарифа",
                  "Индивидуальная программа",
                  "Гибкое расписание занятий",
                  "Подготовка к собеседованиям/IELTS",
                  "Поддержка преподавателя 24/7"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-1 h-1 rounded-full bg-brand-accent mt-2 shrink-0"></div>
                    <span className="text-white/80 font-light text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-brand-accent text-white py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:brightness-110 shadow-xl shadow-orange-900/10 transition-all relative z-10">
                Выбрать тариф
              </button>
            </div>

            {/* Plan 3 */}
             <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-10 card-border relative flex flex-col overflow-hidden group">
              <div className="mb-8">
                <h3 className="text-3xl font-serif italic text-brand-dark mb-4">Носитель языка</h3>
                <p className="font-light opacity-60 text-sm h-12 leading-relaxed">Полное погружение с преподавателями из США и Великобритании.</p>
              </div>
              <div className="mb-10 flex justify-between items-end border-b card-border pb-6">
                <span className="text-4xl font-light tracking-tighter text-brand-dark">14 900₽</span>
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-40">/мес</span>
              </div>
              <ul className="space-y-4 mb-12 flex-1">
                {[
                  "Занятия только с носителями",
                  "Сленг, идиомы и акценты",
                  "Культурный контекст",
                  "Продвинутый уровень (B2+)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-1 h-1 rounded-full bg-brand-dark mt-2 opacity-30 shrink-0"></div>
                    <span className="text-brand-dark opacity-80 font-light text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-transparent card-border text-brand-dark py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-black/5 transition-colors">
                 Выбрать тариф
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA Footer */}
      <footer className="bg-brand-dark text-white pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid-light opacity-5 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 relative z-10">
          <div className="md:col-span-7">
             <div className="flex items-baseline space-x-4 mb-8">
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase opacity-40">Contact</span>
              <div className="flex-1 h-[1px] card-border-light"></div>
            </div>
            <h2 className="text-5xl md:text-8xl font-serif font-black tracking-tighter leading-[0.85] mb-8">
              Твой английский <br/>не должен больше <br/><span className="italic font-light text-brand-accent">ждать.</span>
            </h2>
            <p className="font-light opacity-60 text-lg max-w-md leading-relaxed mb-12">
              Запишись на бесплатную консультацию. Мы определим твой уровень и составим roadmap обучения.
            </p>
          </div>
          
          <div className="md:col-span-5 flex flex-col justify-center">
            <div className="bg-white/5 backdrop-blur-sm card-border-light p-8 rounded-3xl">
              <form className="flex flex-col gap-6">
                <input 
                  type="email" 
                  placeholder="E-mail Address" 
                  className="bg-transparent text-white border-b card-border-light pb-4 outline-none placeholder:text-white/40 font-light text-sm focus:border-brand-accent transition-colors w-full"
                />
                <input 
                  type="text" 
                  placeholder="Your Name (Optional)" 
                  className="bg-transparent text-white border-b card-border-light pb-4 outline-none placeholder:text-white/40 font-light text-sm focus:border-brand-accent transition-colors w-full"
                />
                <button className="bg-brand-accent text-white py-4 mt-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:brightness-110 transition-colors w-full">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t card-border-light flex flex-col md:flex-row justify-between items-end gap-6 text-[10px] uppercase font-bold tracking-widest text-white/40">
           <div className="flex items-baseline space-x-2">
            <span className="font-serif font-black text-xl uppercase tracking-tighter text-white">Fluentify.</span>
          </div>
          <div className="flex gap-8">
            <div className="space-y-1 text-right">
              <div className="opacity-40">Philosophy</div>
              <div className="text-white/80 font-medium">Language as Architecture</div>
            </div>
             <div className="space-y-1 text-right">
              <div className="opacity-40">Legal</div>
              <div className="text-white/80 font-medium hover:text-brand-accent cursor-pointer transition-colors">Privacy / Terms</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
