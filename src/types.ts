export type Job = {
  id: number;
  title: string;
  description: string;
  skills: string[];
  certifications: string[];
  contact: string;
  pay: string;
};

export type EventType = {
  id: number;
  title: string;
  image: string;
  description: string;
  jobs: Job[];
  location: string;
  start_date: Date;
  end_date: Date;
  created_date: Date;
};
