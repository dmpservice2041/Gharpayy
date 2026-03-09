require('dotenv').config();
const app = require('./app');
const { setupFollowupReminderJob } = require('./jobs/followupReminder.job');

const PORT = process.env.PORT || 3000;

setupFollowupReminderJob();

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
