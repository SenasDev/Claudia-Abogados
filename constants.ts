import { Language, TranslationDictionary, TeamMember } from './types';

export const CONTENT: Record<Language, TranslationDictionary> = {
  [Language.ES]: {
    meta: {
      homeTitle: "LexImmobiliaria | Abogados Inmobiliarios Expertos",
      aboutTitle: "Sobre Nosotros | LexImmobiliaria",
      servicesTitle: "Servicios Legales Inmobiliarios",
      contactTitle: "Contacto | LexImmobiliaria",
      description: "Estudio jurídico líder en España especializado en derecho inmobiliario, contratos y litigios."
    },
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      contact: "Contacto"
    },
    home: {
      heroTitle: "Expertos en Derecho Inmobiliario",
      heroSubtitle: "Protegemos su patrimonio con asesoría legal de vanguardia en compraventas, arrendamientos y litigios en toda España.",
      cta: "Agendar Consulta",
      experienceTitle: "Por qué elegirnos",
      testimonialsTitle: "Lo que dicen nuestros clientes"
    },
    about: {
      title: "Defendiendo sus Intereses Inmobiliarios",
      subtitle: "Más de 20 años de experiencia combinada en el sector legal español.",
      valuesTitle: "Nuestros Valores",
      teamTitle: "Nuestro Equipo"
    },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Soluciones integrales para propietarios, inversores y arrendatarios.",
      list: [
        {
          id: 'contracts',
          title: "Contratos y Arrendamientos",
          description: "Redacción y revisión experta de contratos de alquiler y compraventa para garantizar seguridad jurídica.",
          icon: "FileText"
        },
        {
          id: 'litigation',
          title: "Litigios Inmobiliarios",
          description: "Defensa agresiva en disputas de propiedad, desahucios y vicios ocultos.",
          icon: "Gavel"
        },
        {
          id: 'advisory',
          title: "Asesoría en Inversión",
          description: "Due diligence completa para inversores extranjeros y locales en el mercado español.",
          icon: "TrendingUp"
        },
        {
          id: 'compliance',
          title: "Cumplimiento Normativo",
          description: "Gestión de licencias, permisos y regularización de propiedades ante el registro.",
          icon: "ShieldCheck"
        }
      ]
    },
    contact: {
      title: "Hablemos de su Caso",
      subtitle: "La primera consulta es clave para definir su estrategia legal.",
      formName: "Nombre Completo",
      formEmail: "Correo Electrónico",
      formType: "Tipo de Consulta",
      formMessage: "Mensaje",
      submit: "Enviar Mensaje",
      success: "Mensaje enviado correctamente. Nos pondremos en contacto pronto.",
      infoTitle: "Información de Contacto"
    }
  },
  [Language.EN]: {
    meta: {
      homeTitle: "LexImmobiliaria | Expert Real Estate Lawyers",
      aboutTitle: "About Us | LexImmobiliaria",
      servicesTitle: "Real Estate Legal Services",
      contactTitle: "Contact | LexImmobiliaria",
      description: "Leading law firm in Spain specializing in real estate law, contracts, and litigation."
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact"
    },
    home: {
      heroTitle: "Real Estate Law Experts",
      heroSubtitle: "Protecting your assets with cutting-edge legal advice on sales, leases, and litigation throughout Spain.",
      cta: "Schedule Consultation",
      experienceTitle: "Why Choose Us",
      testimonialsTitle: "Client Testimonials"
    },
    about: {
      title: "Defending Your Real Estate Interests",
      subtitle: "Over 20 years of combined experience in the Spanish legal sector.",
      valuesTitle: "Our Values",
      teamTitle: "Our Team"
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive solutions for owners, investors, and tenants.",
      list: [
        {
          id: 'contracts',
          title: "Contracts & Leases",
          description: "Expert drafting and review of rental and sales contracts to ensure legal security.",
          icon: "FileText"
        },
        {
          id: 'litigation',
          title: "Real Estate Litigation",
          description: "Aggressive defense in property disputes, evictions, and hidden defects.",
          icon: "Gavel"
        },
        {
          id: 'advisory',
          title: "Investment Advisory",
          description: "Complete due diligence for foreign and local investors in the Spanish market.",
          icon: "TrendingUp"
        },
        {
          id: 'compliance',
          title: "Regulatory Compliance",
          description: "Management of licenses, permits, and property regularization with the registry.",
          icon: "ShieldCheck"
        }
      ]
    },
    contact: {
      title: "Let's Discuss Your Case",
      subtitle: "The first consultation is key to defining your legal strategy.",
      formName: "Full Name",
      formEmail: "Email Address",
      formType: "Inquiry Type",
      formMessage: "Message",
      submit: "Send Message",
      success: "Message sent successfully. We will contact you soon.",
      infoTitle: "Contact Information"
    }
  }
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Elena Rodríguez",
    role: "Partner / Litigator",
    image: "https://picsum.photos/400/400?random=1",
    bio: "Specialist in complex property disputes with 15 years of courtroom experience."
  },
  {
    name: "James Wilson",
    role: "Senior Associate",
    image: "https://picsum.photos/400/400?random=2",
    bio: "Focuses on international investment and cross-border real estate contracts."
  },
  {
    name: "Sofía Martínez",
    role: "Legal Consultant",
    image: "https://picsum.photos/400/400?random=3",
    bio: "Expert in urban planning regulations and municipal compliance."
  }
];