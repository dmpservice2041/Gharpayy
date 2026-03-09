const cron = require('node-cron');
const prisma = require('../config/db');

const setupFollowupReminderJob = () => {
    // Run every hour
    cron.schedule('0 * * * *', async () => {
        try {
            const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

            const leads = await prisma.lead.findMany({
                where: {
                    lastActivityAt: { lt: twentyFourHoursAgo },
                    status: { notIn: ['BOOKED', 'LOST'] }
                },
                select: { id: true }
            });

            leads.forEach(lead => console.log(`[Followup] Reminding lead: ${lead.id}`));
        } catch (error) {
            console.error('[Cron Error] Followup job:', error);
        }
    });
};

module.exports = { setupFollowupReminderJob };
