export interface SaveData {
  User: User;
  Subjects: Array<Subject>;
  DataVersion: String
}

export interface User {
  username: String;
}

export interface Subject {
  id: Number;
  Name: String;
  TotalTime: Number;
  TimeThisWeek: Number;
  LastTrackedDate: Number;
}
