export interface SaveData {
  user?: User;
  activities?: array<Activity>;
  settings?: Settings;
  dataVersion?: string;
}

export interface User {
  username: string;
}

export interface Settings {
  theme: String;
}

export interface Tracker {
  tracking: boolean;
  startTime: number;
  selectedActivity: number;
}

export interface Activity {
  id: number;
  name: string;
  totalTime: number;
  timeThisWeek: number;
  LlastTrackedDate: number;
}

export interface ActivityEntries {
  entries: array<ActivityEntry>;
}

export interface ActivityEntry {
  date: number;
  activity: string;
  duration: number;
}
