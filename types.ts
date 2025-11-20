export enum Language {
  ES = 'es',
  EN = 'en'
}

export interface NavLink {
  path: string;
  labelKey: keyof TranslationDictionary['nav'];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TranslationDictionary {
  meta: {
    homeTitle: string;
    aboutTitle: string;
    servicesTitle: string;
    contactTitle: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    contact: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    cta: string;
    experienceTitle: string;
    testimonialsTitle: string;
  };
  about: {
    title: string;
    subtitle: string;
    valuesTitle: string;
    teamTitle: string;
  };
  services: {
    title: string;
    subtitle: string;
    list: ServiceItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    formName: string;
    formEmail: string;
    formType: string;
    formMessage: string;
    submit: string;
    success: string;
    infoTitle: string;
  };
}
