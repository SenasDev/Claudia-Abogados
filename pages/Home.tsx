import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts';
import { CONTENT } from '../constants';
import { SEOHead } from '../components/SEOHead';
import { ArrowRight, Shield, Award, Clock } from 'lucide-react';

export const Home: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language];

  return (
    <>
      <SEOHead pageKey="homeTitle" />
      
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale" 
            alt="Modern architecture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center md:text-left md:flex md:items-center md:justify-between">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white font-serif leading-tight tracking-tight">
              {t.home.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-xl">
              {t.home.heroSubtitle}
            </p>
            <div className="pt-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-primary-700/30 transform hover:-translate-y-1"
              >
                {t.home.cta}
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white dark:bg-surface-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-slate-50 dark:bg-surface-paper border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-full mb-4 text-primary-700 dark:text-primary-400">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{language === 'es' ? 'Protección Legal' : 'Legal Protection'}</h3>
              <p className="text-slate-600 dark:text-slate-400">
                {language === 'es' 
                  ? 'Garantizamos la seguridad jurídica en cada transacción.' 
                  : 'We guarantee legal security in every transaction.'}
              </p>
            </div>
            <div className="p-6 rounded-xl bg-slate-50 dark:bg-surface-paper border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-full mb-4 text-primary-700 dark:text-primary-400">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{language === 'es' ? 'Excelencia' : 'Excellence'}</h3>
              <p className="text-slate-600 dark:text-slate-400">
                {language === 'es' 
                  ? 'Reconocidos como líderes en el sector inmobiliario.' 
                  : 'Recognized as leaders in the real estate sector.'}
              </p>
            </div>
            <div className="p-6 rounded-xl bg-slate-50 dark:bg-surface-paper border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-full mb-4 text-primary-700 dark:text-primary-400">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{language === 'es' ? 'Eficiencia' : 'Efficiency'}</h3>
              <p className="text-slate-600 dark:text-slate-400">
                {language === 'es' 
                  ? 'Procesos ágiles para cumplir sus plazos.' 
                  : 'Agile processes to meet your deadlines.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 dark:bg-surface-paper">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-serif">{t.home.testimonialsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {/* Placeholder Testimonial 1 */}
             <div className="bg-white dark:bg-surface-dark p-8 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                <p className="italic text-slate-600 dark:text-slate-300 mb-6">"LexImmobiliaria handled our complex commercial acquisition with incredible attention to detail. Highly recommended."</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold">AS</div>
                  <div>
                    <p className="font-semibold text-sm">Andrew Smith</p>
                    <p className="text-xs text-slate-500">International Investor</p>
                  </div>
                </div>
             </div>
             {/* Placeholder Testimonial 2 */}
             <div className="bg-white dark:bg-surface-dark p-8 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                <p className="italic text-slate-600 dark:text-slate-300 mb-6">"Resolvieron un litigio de tierras que llevaba años estancado en cuestión de meses. Profesionales de primer nivel."</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold">MG</div>
                  <div>
                    <p className="font-semibold text-sm">María García</p>
                    <p className="text-xs text-slate-500">Propietaria</p>
                  </div>
                </div>
             </div>
             {/* Placeholder Testimonial 3 */}
             <div className="bg-white dark:bg-surface-dark p-8 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 md:hidden lg:block">
                <p className="italic text-slate-600 dark:text-slate-300 mb-6">"Expert advice on Spanish rental laws. They made my relocation process seamless and secure."</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold">JL</div>
                  <div>
                    <p className="font-semibold text-sm">Jean Luc</p>
                    <p className="text-xs text-slate-500">Expat Tenant</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};
