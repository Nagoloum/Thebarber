export const bookingDefaults = {
  slotMinutes: 30,
  minLeadTimeHours: 2,
  cancellationLimitHours: 24,
  maxBookingsPerStaffAndSlot: 1,
  suggestedAlternatives: 3,
} as const;

export const privacyDefaults = {
  analyticsProvider: "Matomo ou Plausible EU",
  transactionalEmailProvider: "Brevo ou Mailjet",
  smsProvider: "OVH SMS, Brevo SMS ou Octopush",
  dataRetentionMonths: 36,
  consentCookieName: "thebarber_cookie_consent",
} as const;
