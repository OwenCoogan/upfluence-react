import { atom } from 'recoil';

function generateEmptyWeeklySchedule() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const emptySchedule = [];
  for (const day of daysOfWeek) {
    const hours = [];
    for (let i = 0; i < 24; i++) {
      const timeslot = { posts: [] };
      hours.push(timeslot);
    }
    emptySchedule.push({ day, hours });
  }
  console.log(emptySchedule);
  return emptySchedule;
}

export const sortedWeeklyScheduleAtom = atom({
  key: 'sortedPostList',
  default: generateEmptyWeeklySchedule(),
});
