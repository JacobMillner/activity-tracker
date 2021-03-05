export interface SaveData {
  user: User;
  activities: Array<Activity>;
  settings: Settings;
  dataVersion: String;
}

export interface User {
  username: String;
}

export interface Settings {
  theme: String;
}

export interface Tracker {
  tracking: Boolean;
  startTime: Number;
  selectedActivity: Number;
}

export interface Activity {
  id: Number;
  name: String;
  totalTime: Number;
  timeThisWeek: Number;
  LlastTrackedDate: Number;
}

export interface ActivityEntries {
  entries: Array<ActivityEntry>;
}

export interface ActivityEntry {
  date: Number;
  activity: String;
  duration: Number;
}
