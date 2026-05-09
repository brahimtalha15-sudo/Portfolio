export type Lang = 'en' | 'fr';

export const translations = {
  en: {
    // Nav
    nav_home: 'Home',
    nav_projects: 'Projects',
    nav_contact: 'Contact',

    // Hero
    hero_title: 'Data Analyst',
    hero_value: 'I turn messy business data into clear decisions.',
    hero_sub1: 'I work with companies to understand what their data is actually saying.',
    hero_sub2: 'From raw exports to visual dashboards — structured, readable, actionable.',
    hero_cta_projects: 'View Projects',
    hero_cta_contact: 'Contact',

    // What I Do
    what_label: 'What I Do',
    what_title: 'From raw data to business clarity',
    what_1: 'Understand the business problem before touching the data',
    what_2: 'Clean and structure messy, inconsistent datasets',
    what_3: 'Build dashboards that decision-makers actually use',
    what_4: 'Surface patterns, anomalies, and insights that matter',

    // Featured Project
    featured_label: 'Featured Project',
    featured_context: 'A Casablanca retail store had 2024 sales data — but no visibility into what was actually happening.',
    featured_result: 'I cleaned the data, built a proper data model, and delivered a 3-page Power BI dashboard that helped them plan stock, staffing, and product decisions.',
    featured_link: 'Read the full case study →',

    // How I Work
    how_label: 'How I Work',
    how_title: 'A clear, repeatable process',
    how_step1_title: 'Understand the business',
    how_step1_desc: 'Start with the real problem, not the data',
    how_step2_title: 'Clean and structure',
    how_step2_desc: 'Make the data reliable before anything else',
    how_step3_title: 'Analyze and model',
    how_step3_desc: 'Find the patterns that matter',
    how_step4_title: 'Deliver clarity',
    how_step4_desc: 'Dashboards and insights built for decision-makers',

    // Skills
    skills_label: 'Skills',
    skills_title: 'Tools I work with',

    // Contact
    contact_label: 'Contact',
    contact_title: "Let's talk",
    contact_desc: "Have a project in mind or just want to connect? I'm open to new opportunities.",
    contact_email: 'Send an email',
    contact_linkedin: 'LinkedIn',

    // Projects Page
    projects_page_title: 'Projects',
    projects_page_subtitle: 'Real problems. Clear solutions. Business impact.',

    // Project Detail Sections
    detail_context: 'Context',
    detail_problem: 'Problem',
    detail_approach: 'Approach',
    detail_decisions: 'Key Decisions',
    detail_outcome: 'Outcome & Insights',
    detail_learned: 'What I Learned',
    detail_back: '← Back to projects',
    detail_tools: 'Tools',
    detail_status: 'Status',

    // Status
    status_completed: 'Completed',
    status_progress: 'In Progress',

    // Footer
    footer_copy: '© 2024 Brahim Talha. All rights reserved.',
  },
  fr: {
    // Nav
    nav_home: 'Accueil',
    nav_projects: 'Projets',
    nav_contact: 'Contact',

    // Hero
    hero_title: 'Analyste de Données',
    hero_value: 'Je transforme des données brutes en décisions claires.',
    hero_sub1: "Je travaille avec des entreprises pour comprendre ce que leurs données révèlent vraiment.",
    hero_sub2: 'Des exports bruts aux tableaux de bord visuels — structuré, lisible, actionnable.',
    hero_cta_projects: 'Voir les Projets',
    hero_cta_contact: 'Contact',

    // What I Do
    what_label: 'Ce que je fais',
    what_title: 'Des données brutes à la clarté métier',
    what_1: 'Comprendre le problème métier avant de toucher aux données',
    what_2: 'Nettoyer et structurer des données désorganisées',
    what_3: 'Construire des tableaux de bord que les décideurs utilisent vraiment',
    what_4: 'Identifier les tendances, anomalies et insights qui comptent',

    // Featured Project
    featured_label: 'Projet Phare',
    featured_context: 'Un magasin de vêtements à Casablanca avait ses données de ventes 2024 — mais aucune visibilité sur la réalité du terrain.',
    featured_result: "J'ai nettoyé les données, construit un modèle de données structuré, et livré un tableau de bord Power BI en 3 pages qui a aidé à planifier le stock, le personnel et les décisions produit.",
    featured_link: 'Lire l\'étude de cas complète →',

    // How I Work
    how_label: 'Ma Méthode',
    how_title: 'Un processus clair et reproductible',
    how_step1_title: 'Comprendre le métier',
    how_step1_desc: 'Commencer par le vrai problème, pas les données',
    how_step2_title: 'Nettoyer et structurer',
    how_step2_desc: 'Rendre les données fiables avant tout',
    how_step3_title: 'Analyser et modéliser',
    how_step3_desc: 'Trouver les tendances qui ont de l\'importance',
    how_step4_title: 'Livrer la clarté',
    how_step4_desc: 'Tableaux de bord et insights pensés pour les décideurs',

    // Skills
    skills_label: 'Compétences',
    skills_title: 'Outils avec lesquels je travaille',

    // Contact
    contact_label: 'Contact',
    contact_title: 'Parlons-en',
    contact_desc: "Vous avez un projet ou souhaitez simplement échanger ? Je suis ouvert aux nouvelles opportunités.",
    contact_email: 'Envoyer un email',
    contact_linkedin: 'LinkedIn',

    // Projects Page
    projects_page_title: 'Projets',
    projects_page_subtitle: 'Vrais problèmes. Solutions claires. Impact métier.',

    // Project Detail Sections
    detail_context: 'Contexte',
    detail_problem: 'Problème',
    detail_approach: 'Approche',
    detail_decisions: 'Décisions Clés',
    detail_outcome: 'Résultats & Insights',
    detail_learned: "Ce que j'ai appris",
    detail_back: '← Retour aux projets',
    detail_tools: 'Outils',
    detail_status: 'Statut',

    // Status
    status_completed: 'Terminé',
    status_progress: 'En cours',

    // Footer
    footer_copy: '© 2024 Brahim Talha. Tous droits réservés.',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
