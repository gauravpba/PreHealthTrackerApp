export class RequestModel {
  constructor(
  public activityCategory: string,
  public activityType: string,
  public startDate: string,
  public endDate: string,
  public averageHoursWorked: number,
  public totalHoursWorked: number,
  public organization: string,
  public contactName: string,
  public contactTitle: string,
  public contactInfo: string,
  public activitySummary: string,
  public skillsLearned: string
  ) {}
}

// export class RequestModel {
//   constructor(
//
//   public events: { activityCategory: string,
//   activityType: string,
//   startDate: string,
//   endDate: string,
//   hoursWorked: number,
//   organization: string,
//   contactName: string,
//   contactTitle: string,
//   contactInfo: string,
//   activitySummary: string,
//   skillsLearned: string
//   }) {}
// }
// export class RequestModel {
//   constructor(
//     events: {
//       activityCategory:string;
//     }
//   ) {
//   }
// }
