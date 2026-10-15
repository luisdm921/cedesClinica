export type DoctorProfileContent = {
  status: "draft" | "published";
  slug: "dra-consuelo-chapa-garza";
  seo: {
    title: string;
    description: string;
  };
  hero: {
    name: string;
    specialties: string[];
    summary: string;
    image: {
      src: string;
      alt: string;
    };
  };
  location: {
    name: string;
    address: string;
  };
  externalProfiles: {
    label: string;
    url: string;
  }[];
  biography: string[];
  education: string[];
  approach: string[];
  featuredTechnique?: {
    name: string;
    description: string[];
  };
  treatmentSlugs: string[];
  whatsappMessage: string;
  editorial: {
    source: string;
    reviewed: boolean;
    notes?: string[];
  };
};
