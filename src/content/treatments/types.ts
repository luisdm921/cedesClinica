export type TreatmentCategory =
  | "odontologia"
  | "ortodoncia"
  | "armonizacion-orofacial";

export type TreatmentImage = {
  src: string;
  alt: string;
};

export type TreatmentFaq = {
  question: string;
  answer: string;
};

export type TreatmentCase = {
  title: string;
  before: TreatmentImage;
  after: TreatmentImage;
};

export type TreatmentStep = {
  title: string;
  description: string;
};

export type TreatmentContent = {
  slug: string;
  status: "draft" | "published";
  category: TreatmentCategory;
  name: string;
  seo: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow?: string;
    title: string;
    summary: string;
    image?: TreatmentImage;
  };
  description: string[];
  differentiators: string[];
  faq: TreatmentFaq[];
  process?: TreatmentStep[];
  cases?: TreatmentCase[];
  relatedTreatmentSlugs?: string[];
  whatsappMessage: string;
  editorial: {
    source: string;
    reviewed: boolean;
    notes?: string[];
  };
};
