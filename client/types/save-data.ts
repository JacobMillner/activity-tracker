export interface SaveData {
  User: User;
  Activities: Array<Activity>;
  Settings: Settings;
  DataVersion: String;
}

export interface User {
  Username: String;
}

export interface Settings {
  Theme: String;
}

export interface Tracker {
  Tracking: Boolean;
  StartTime: Number;
  SelectedActivity: Number;
}

export interface Activity {
  id: Number;
  Name: String;
  TotalTime: Number;
  TimeThisWeek: Number;
  LastTrackedDate: Number;
}
