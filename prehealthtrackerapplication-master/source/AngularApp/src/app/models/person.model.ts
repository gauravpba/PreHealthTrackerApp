export interface PersonModel{
  id?: string;
  name?: string;
  username?: string;
  password?: string;
  events: [{
    activityCategory: string,
    activityType: string,
    startDate: string,
    endDate: string,
    hoursWorked: number,
    organization: string,
    contactName: string,
    contactTitle: string,
    contactInfo: string,
    activitySummary: string,
    skillsLearned: string
  }];
}
