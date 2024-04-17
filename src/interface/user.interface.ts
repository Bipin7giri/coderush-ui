export interface WorkExperienceIF {
  companyName: string;
  startDate: string;
  endDate: string;
  position: string;
  description: string;
}

export interface EducationIF {
  universityName: string;
  startDate: string;
  endDate: string;
  degreeName: string;
}

export interface ResumeIF {
  fileId: string;
  fileName: string;
}

export interface UserIF {
  fullName: string;
  username: string;
  email: string;
  address: string;
  phoneNumber: string;
  location: string;
  position: string;
  avatar: string;
  isBlocked: boolean;
  password: string;
  workExperience: WorkExperienceIF[];
  education: any[];
  resume: ResumeIF[];
}
