const prisma = require('../config/db');
const leadService = require('./leads/lead.service');
const visitService = require('./visits/visit.service');

const getDashboardStats = async (req, res, next) => {
    try {
        const [totalLeads, leadsByStage, visitsScheduled] = await Promise.all([
            prisma.lead.count(),
            leadService.getLeadsByStage(),
            visitService.countScheduledVisits()
        ]);

        res.json({
            totalLeads,
            leadsByStage,
            visitsScheduled,
            bookingsConfirmed: leadsByStage['BOOKED'] || 0
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { getDashboardStats };
