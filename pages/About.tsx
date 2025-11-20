import React from 'react';
import { useLanguage } from '../contexts';
import { CONTENT, TEAM_MEMBERS } from '../constants';
import { SEOHead } from '../components/SEOHead';

export const About: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language];

  return (
    <>
      <SEOHead pageKey="aboutTitle" />
      
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">{t.about.title}</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">{t.about.subtitle}</p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <img 
                src="https://picsum.photos/800/600?office" 
                alt="Office interior" 
                className="rounded-lg shadow-xl"
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold font-serif text-slate-900 dark:text-white">{t.about.valuesTitle}</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'es' 
                  ? 'En LexImmobiliaria, creemos que la especialización es la clave del éxito. No somos generalistas; vivimos y respiramos derecho inmobiliario. Nuestro compromiso es la transparencia absoluta y la defensa férrea de los activos de nuestros clientes.'
                  : 'At LexImmobiliaria, we believe specialization is the key to success. We are not generalists; we live and breathe real estate law. Our commitment is absolute transparency and the fierce defense of our clients\' assets.'}
              </p>
              <ul className="space-y-4">
                {[
                  language === 'es' ? 'Integridad Profesional' : 'Professional Integrity',
                  language === 'es' ? 'Atención Personalizada' : 'Personalized Attention',
                  language === 'es' ? 'Resultados Medibles' : 'Measurable Results'
                ].map((val, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                    <span className="w-2 h-2 bg-primary-500 rounded-full" />
                    {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-50 dark:bg-surface-paper">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-serif">{t.about.teamTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className="bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-primary-700 dark:text-primary-400 font-medium text-sm mb-4">{member.role}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
