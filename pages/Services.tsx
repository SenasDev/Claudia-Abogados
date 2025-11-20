import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts';
import { CONTENT } from '../constants';
import { SEOHead } from '../components/SEOHead';
import { FileText, Gavel, TrendingUp, ShieldCheck } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText size={32} />,
  Gavel: <Gavel size={32} />,
  TrendingUp: <TrendingUp size={32} />,
  ShieldCheck: <ShieldCheck size={32} />,
};

export const Services: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language];

  return (
    <>
      <SEOHead pageKey="servicesTitle" />
      
      <div className="pt-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold font-serif mb-4 text-slate-900 dark:text-white">{t.services.title}</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.services.list.map((service) => (
              <div key={service.id} className="bg-white dark:bg-surface-paper p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-primary-200 dark:hover:border-primary-800 transition-colors group">
                <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white font-serif">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  to="/contact" 
                  className="text-primary-700 dark:text-primary-400 font-semibold hover:underline decoration-2 underline-offset-4"
                >
                  {language === 'es' ? 'Solicitar Asesoría' : 'Request Advice'} &rarr;
                </Link>
              </div>
            ))}
          </div>

          {/* Additional Info Strip */}
          <div className="mt-20 bg-primary-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold font-serif mb-6">
              {language === 'es' ? '¿No encuentra lo que busca?' : 'Can\'t find what you need?'}
            </h2>
            <p className="mb-8 text-primary-100 max-w-2xl mx-auto">
              {language === 'es' 
                ? 'Manejamos casos complejos a medida. Contáctenos para discutir su situación específica.' 
                : 'We handle complex bespoke cases. Contact us to discuss your specific situation.'}
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-primary-800 hover:bg-slate-100 px-8 py-3 rounded-lg font-bold transition-colors"
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
