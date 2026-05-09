export interface Project {
  slug: string;
  title: { en: string; fr: string };
  tagline: { en: string; fr: string };
  tools: string[];
  status: 'completed' | 'in-progress';
  featured?: boolean;
  detail: {
    context: { en: string; fr: string };
    problem: { en: string; fr: string };
    approach: { en: string; fr: string };
    keyDecisions: { en: string; fr: string };
    outcome: { en: string; fr: string };
    learned: { en: string; fr: string };
  };
}

export const projects: Project[] = [
  {
    slug: 'townteam',
    featured: true,
    title: {
      en: 'Townteam Sales Dashboard',
      fr: 'Tableau de Bord Ventes Townteam',
    },
    tagline: {
      en: 'Turned disorganized retail data into clear performance insights for a Casablanca store.',
      fr: 'Transformé des données retail désorganisées en indicateurs clairs pour un magasin à Casablanca.',
    },
    tools: ['Power BI', 'Power Query', 'Python', 'Figma', 'DAX'],
    status: 'completed',
    detail: {
      context: {
        en: 'A retail store in Casablanca needed to make sense of its 2024 sales data. I met with the Retail Manager to understand how the business operated before touching any data.',
        fr: "Un magasin de vêtements à Casablanca devait comprendre ses données de ventes 2024. J'ai rencontré le Directeur Commercial pour comprendre les opérations avant de toucher aux données.",
      },
      problem: {
        en: 'Sales data was scattered and inconsistent. There was no visibility on product performance, return patterns, or which days drove the most revenue. Decisions were being made without a reliable view of reality.',
        fr: "Les données de ventes étaient dispersées et incohérentes. Aucune visibilité sur les performances produits, les retours, ni les jours les plus rentables. Les décisions étaient prises sans vue fiable de la réalité.",
      },
      approach: {
        en: 'Started with Python to explore and understand the data structure. Switched to Power Query for the actual cleaning — faster and easier to maintain. Built a proper data model in Power BI (separate tables linked by relationships) and created a date table in M for time intelligence. Designed the dashboard layout in Figma before building it.',
        fr: "Commencé avec Python pour explorer la structure des données. Basculé vers Power Query pour le nettoyage réel — plus rapide et plus facile à maintenir. Construit un modèle de données propre dans Power BI avec des tables reliées par des relations, et créé une table de dates en M. Conçu la mise en page du tableau de bord dans Figma avant de le construire.",
      },
      keyDecisions: {
        en: "Chose Power Query over Python for cleaning — the business logic was repeatable and Power Query integrates directly into Power BI, eliminating an extra step. Used a star schema instead of one flat table to keep the model clean and fast. Kept the dashboard focused on what managers actually needed to act on.",
        fr: "Choisi Power Query plutôt que Python pour le nettoyage — la logique était répétable et Power Query s'intègre directement dans Power BI. Utilisé un schéma en étoile plutôt qu'une table plate pour garder le modèle propre et rapide. Tableau de bord centré sur ce dont les managers ont réellement besoin.",
      },
      outcome: {
        en: 'Three dashboard pages: high-level KPIs (Page 1), daily and operational trends (Page 2), and product-level analysis by size, color, and returns (Page 3). Key findings: Saturday is the strongest sales day; some products sell in volume but underperform on revenue; return patterns cluster around specific sizes and categories. These insights directly supported decisions on stock planning, staffing, and store layout.',
        fr: "Trois pages de tableau de bord : KPIs globaux (Page 1), tendances opérationnelles (Page 2), analyse produit par taille, couleur et retours (Page 3). Résultats clés : le samedi est le jour de vente le plus fort ; certains produits vendent en volume mais sous-performent en revenus ; les retours se concentrent sur certaines tailles et catégories. Ces insights ont directement soutenu les décisions de stock, de personnel et de merchandising.",
      },
      learned: {
        en: "Always understand the business before the data. Switching tools mid-project isn't a failure — it's good judgment. A dashboard that a manager actually uses is worth more than one that's technically perfect.",
        fr: "Toujours comprendre le métier avant les données. Changer d'outil en cours de projet n'est pas un échec — c'est du bon jugement. Un tableau de bord qu'un manager utilise vraiment vaut plus qu'un outil techniquement parfait.",
      },
    },
  },
  {
    slug: 'ids',
    title: {
      en: 'School Management System (IDS)',
      fr: 'Système de Gestion Scolaire (IDS)',
    },
    tagline: {
      en: 'Designed and deployed a structured PostgreSQL database for managing students, modules, and exercises.',
      fr: 'Conçu et déployé une base de données PostgreSQL structurée pour gérer étudiants, modules et exercices.',
    },
    tools: ['PostgreSQL', 'pgAdmin 4', 'Render', 'SQL'],
    status: 'completed',
    detail: {
      context: {
        en: 'Part of an AI certification program team project. The system needed to track student activity, exercises, and module progression across multiple courses.',
        fr: "Projet d'équipe dans un programme de certification IA. Le système devait suivre l'activité des étudiants, les exercices et la progression modulaire.",
      },
      problem: {
        en: 'The team needed a reliable, structured backend database that multiple developers could build on top of — with enforceable rules and consistent data.',
        fr: "L'équipe avait besoin d'une base de données backend fiable et structurée que plusieurs développeurs pourraient utiliser, avec des règles imposables et des données cohérentes.",
      },
      approach: {
        en: 'Designed the relational schema in pgAdmin 4. Used foreign keys to enforce data integrity between students, modules, and exercises. Added database triggers to automate key actions. Deployed the database to Render for team access.',
        fr: "Conçu le schéma relationnel dans pgAdmin 4. Utilisé des clés étrangères pour assurer l'intégrité des données entre étudiants, modules et exercices. Ajouté des triggers pour automatiser des actions clés. Déployé la base sur Render pour l'accès de l'équipe.",
      },
      keyDecisions: {
        en: 'Prioritized schema correctness over speed of implementation. Foreign keys and triggers were added from day one to prevent bad data from entering the system.',
        fr: "Priorité donnée à la correction du schéma sur la vitesse d'implémentation. Clés étrangères et triggers ajoutés dès le premier jour pour empêcher des données incorrectes.",
      },
      outcome: {
        en: 'A fully deployed, team-accessible database that the rest of the group could build their application features on. Clean structure, enforced constraints, ready for production use.',
        fr: "Une base de données entièrement déployée et accessible à l'équipe, sur laquelle le groupe a pu construire ses fonctionnalités. Structure propre, contraintes imposées, prête pour la production.",
      },
      learned: {
        en: 'Database design decisions made early have a long reach. Getting the schema right before writing application code saved the team significant rework.',
        fr: "Les décisions de conception de base de données prises tôt ont un impact durable. Avoir le bon schéma avant d'écrire le code applicatif a évité beaucoup de refactoring.",
      },
    },
  },
  {
    slug: 'ats',
    title: {
      en: 'ATS Recruitment System',
      fr: 'Système de Recrutement ATS',
    },
    tagline: {
      en: 'Building an AI-powered pipeline to automatically extract, parse, and score candidates against job descriptions.',
      fr: "Développement d'un pipeline intelligent pour extraire, analyser et scorer automatiquement les candidats par rapport aux offres d'emploi.",
    },
    tools: ['Python', 'PostgreSQL', 'Groq LLM', 'spaCy (NLP)', 'pdfplumber', 'Jupyter', 'Git'],
    status: 'in-progress',
    detail: {
      context: {
        en: 'A team project of 5 people building an Applicant Tracking System (ATS) for recruiters in the Moroccan market. My responsibility covers the entire data pipeline: resume extraction, job description parsing, and candidate scoring.',
        fr: "Projet en équipe de 5 personnes visant à construire un système de suivi des candidatures (ATS) pour les recruteurs du marché marocain. Ma responsabilité couvre l'intégralité du pipeline de données : extraction des CVs, parsing des fiches de poste, et scoring des candidats.",
      },
      problem: {
        en: 'Recruiters manually read dozens of CVs per role, losing hours to repetitive screening. The goal is to automatically rank candidates against a job description and surface the strongest profiles with explainable scores.',
        fr: "Les recruteurs lisent manuellement des dizaines de CVs par poste, perdant des heures en présélection répétitive. L'objectif est de classer automatiquement les candidats par rapport à une offre d'emploi et de faire remonter les meilleurs profils avec des scores explicables.",
      },
      approach: {
        en: 'Three connected Python notebooks forming an end-to-end pipeline. A Resume Extractor that parses French and English PDFs using pdfplumber and Grok (for the MVP), enriching each CV with spaCy-powered signals: action verb quality scoring, quantified achievement detection, and skills-in-experience linking. A JD Extractor that parses raw job descriptions, automatically identifies critical skills by frequency and emphasis analysis, and normalizes the French Bac+N education system. A Scoring Engine that matches each candidate against the job profile using a weighted model across 7 dimensions: skills match with semantic similarity, Groq-rated experience relevance, achievements, language quality, language match, education, and location.',
        fr: "Trois notebooks Python interconnectés formant un pipeline de bout en bout. Un Extracteur de CVs qui parse les PDFs en français et en anglais avec pdfplumber et Groq, enrichissant chaque CV avec des signaux NLP via spaCy : scoring des verbes d'action, détection des réalisations chiffrées, et liaison des compétences à l'expérience réelle. Un Extracteur de Fiches de Poste qui analyse les offres brutes, identifie automatiquement les compétences critiques par fréquence et emphase, et normalise le système Bac+N. Un Moteur de Scoring qui compare chaque candidat au profil de poste sur 7 dimensions : correspondance des compétences avec similarité sémantique, pertinence de l'expérience évaluée par Groq, réalisations chiffrées, qualité du langage, langues, formation, et localisation.",
      },
      keyDecisions: {
        en: 'Used spaCy md models (not sm) to enable word vector semantic similarity for skill matching — catches "data pipeline" matching "ETL" without exact keywords. Separated projects from experience in both extraction and scoring to handle student profiles fairly. Groq experience relevance calls are cached by MD5 hash to avoid redundant API calls. PostgreSQL schema uses JSONB for skills and weights with GIN indexes for fast querying, and Row Level Security for multi-recruiter isolation.',
        fr: "Utilisation des modèles spaCy md (et non sm) pour la similarité sémantique par vecteurs — détecte \"pipeline de données\" comme équivalent à \"ETL\" sans correspondance exacte. Séparation des projets de l'expérience pour évaluer équitablement les profils étudiants. Les appels Groq sont mis en cache par hash MD5 pour éviter les appels redondants. Schéma PostgreSQL avec JSONB et index GIN pour des requêtes rapides, et Row Level Security pour l'isolation multi-recruteurs.",
      },
      outcome: {
        en: 'Pipeline tested on 5 real CVs against a Data Analyst job description (AXA Assurance Maroc). Correctly identified the strongest technical match, flagged missing critical skills, and surfaced student profiles with strong project portfolios separately from experienced candidates.',
        fr: "Pipeline testé sur 5 CVs réels face à une offre Data Analyst (AXA Assurance Maroc). A correctement identifié le meilleur profil technique, signalé les compétences critiques manquantes, et mis en avant les profils étudiants avec des portfolios de projets solides, séparément des candidats expérimentés.",
      },
      learned: {
        en: 'How to design an NLP pipeline that handles real-world messiness — scanned PDFs, French/English mixed text, student profiles with no formal experience, and inconsistent CV formatting. Also learned Git collaboration in a team with branch protection rules and pull request workflows.',
        fr: "Comment concevoir un pipeline NLP qui gère la complexité du monde réel — PDFs mal formatés, texte mixte français/anglais, profils étudiants sans expérience formelle, et CVs aux mises en page inconsistantes. Apprentissage de la collaboration Git en équipe avec des règles de protection de branche et des workflows de pull request.",
      },
    },
  },
];
