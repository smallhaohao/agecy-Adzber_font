export interface ContactForm {
  name: string;
  email: string;
  company: string;
  serviceType: string;
  details: string;
}

export interface ContactRecord extends ContactForm {
  _id: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface CareerApplication {
  firstName: string;
  lastName: string;
  email: string;
  linkedin: string;
  notes: string;
  region: string;
  resumeUrl?: string;
}

export interface CareerApplicationRecord extends CareerApplication {
  _id: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
}