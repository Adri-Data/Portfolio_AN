
export interface Project {
  id: string;
  title: string;
  description: string;
  metrics: string[];
  tech: string[];
  image: string;
  repo?: string;
  demo?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  points: string[];
  logo?: string;
  isEducation?: boolean;
}

export type Language = 'en' | 'es';

export interface Translation {
  hero_title: string;
  hero_subtitle: string;
  hero_cta: string;
  about_title: string;
  experience_title: string;
  projects_title: string;
  tech_stack_title: string;
  contact_title: string;
  alert_error: string;
  alert_success: string;
  cv_label: string;
  context_quote: string;
  about_desc_1: string;
  about_desc_2: string;
  impact_title: string;
  repo_btn: string;
  case_btn: string;
  private_msg: string;
  paper_btn: string;
  live_btn: string;
  soon_btn: string;
  tech_cat_1: string;
  tech_cat_2: string;
  tech_cat_3: string;
  tech_cat_4: string;
  faq_title: string;
  faq_btn_open: string;
  faq_btn_close: string;
  faq_q1: string;
  faq_a1: string;
  faq_q2: string;
  faq_a2: string;
  faq_q3: string;
  faq_a3: string;
  faq_q4: string;
  faq_a4: string;
  about_cards: any[];
  projects: Project[];
  experiences: Experience[];
}
