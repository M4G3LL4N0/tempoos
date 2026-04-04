const USE_CASES = [
  "founder",
  "operator",
  "creator",
  "student",
  "professional",
  "other"
] as const;

export type UseCase = (typeof USE_CASES)[number];

export type WaitlistEntry = {
  email: string;
  useCase: UseCase;
  createdAt?: string;
};

export type WaitlistFormValues = {
  email: string;
  useCase: UseCase;
  notes?: string;
};
