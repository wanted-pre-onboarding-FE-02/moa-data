export interface ITest {
  test: string;
}

export interface IHeartData {
  seq: number;
  member_seq: number;
  avg_beat: number;
  crt_ymdt: string;
}

export interface IStepData {
  seq: number;
  member_seq: number;
  steps: number;
  minutes: number;
  distance: number;
  calorie: number;
  crt_ymdt: string;
}

export interface IDate {
  start: null | Date;
  newEnd: null | Date;
}
