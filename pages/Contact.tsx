import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLanguage } from '../contexts';
import { CONTENT } from '../constants';
import { SEOHead } from '../components/SEOHead';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  type: string;
  message: string;
};

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language];
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    // Simulate API Call
    console.log("Form Data Submitted:", data);
    // In a real app, use emailjs or fetch here
    setTimeout(() => {
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <>
      <SEOHead pageKey="contactTitle" />
      
      <div className="bg-slate-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold font-serif mb-2">{t.contact.title}</h1>
        <p className="text-slate-300">{t.contact.subtitle}</p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12 bg-white dark:bg-surface-paper rounded-2xl shadow-xl overflow-hidden">
          
          {/* Contact Info Side */}
          <div className="w-full lg:w-1/3 bg-slate-50 dark:bg-surface-dark p-8 lg:p-12 border-b lg:border-r lg:border-b-0 border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold mb-8 font-serif text-slate-900 dark:text-white">{t.contact.infoTitle}</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg text-primary-700 dark:text-primary-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Madrid Office</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Paseo de la Castellana, 100<br/>
                    28046 Madrid, España
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg text-primary-700 dark:text-primary-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{language === 'es' ? 'Teléfono' : 'Phone'}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">+34 912 345 678</p>
                  <p className="text-slate-500 text-xs mt-1">{language === 'es' ? 'Lunes a Viernes, 9am - 7pm' : 'Mon-Fri, 9am - 7pm'}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg text-primary-700 dark:text-primary-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">info@leximmobiliaria.es</p>
                </div>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="mt-8 w-full h-48 bg-slate-200 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.004369635746!2d-3.6905!3d40.4500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228e23705d39f%3A0xa8fff6d26e2b1988!2sP.%C2%BA%20de%20la%20Castellana%2C%20100%2C%2028046%20Madrid!5e0!3m2!1sen!2ses!4v1630000000000!5m2!1sen!2ses" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-2/3 p-8 lg:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">{t.contact.formName}</label>
                  <input
                    {...register("name", { required: true })}
                    className={`w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-surface-dark border ${errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all`}
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1">Required</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">{t.contact.formEmail}</label>
                  <input
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    className={`w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-surface-dark border ${errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all`}
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1">Valid email required</span>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">{t.contact.formType}</label>
                <select
                  {...register("type")}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-surface-dark border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                >
                  <option value="general">General Inquiry</option>
                  <option value="contracts">Contracts & Leases</option>
                  <option value="litigation">Litigation / Disputes</option>
                  <option value="investment">Investment</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">{t.contact.formMessage}</label>
                <textarea
                  rows={5}
                  {...register("message", { required: true })}
                  className={`w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-surface-dark border ${errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all`}
                ></textarea>
                {errors.message && <span className="text-red-500 text-xs mt-1">Required</span>}
              </div>

              <button
                type="submit"
                className="w-full bg-primary-700 hover:bg-primary-800 text-white font-bold py-4 rounded-lg shadow-lg transition-transform active:scale-95"
              >
                {t.contact.submit}
              </button>

              {isSubmitted && (
                <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-center animate-in fade-in">
                  {t.contact.success}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
