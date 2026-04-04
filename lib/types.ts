export type WaitlistEntry = {
  email: string;
  useCase: typeof USE_CASES[number];
  createdAt?: string;
};

export type UserProfile = {
  id: string;
  email: string;
  fullName?: string;
  timezone?: string;
  createdAt: string;
  updatedAt: string;
};
