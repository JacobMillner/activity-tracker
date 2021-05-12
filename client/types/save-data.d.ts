interface SaveData {
  user?: User;
  activities?: array<Activity>;
  settings?: Settings;
  dataVersion?: string;
}
interface User {
  username: string;
}

interface Settings {
  theme: String;
}

interface Tracker {
  tracking: boolean;
  startTime: number;
  selectedActivity: number;
}

interface Activity {
  id: number;
  name: string;
  totalTime: number;
  timeThisWeek: number;
  LlastTrackedDate: number;
}

interface ActivityEntries {
  entries: array<ActivityEntry>;
}

interface ActivityEntry {
  date: number;
  activity: string;
  duration: number;
}
