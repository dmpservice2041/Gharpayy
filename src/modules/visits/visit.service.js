const prisma = require('../../config/db');
const leadService = require('../leads/lead.service');

const scheduleVisit = async (data) => {
    const { leadId, propertyName, visitDate, visitTime } = data;

    const visit = await prisma.visit.create({
        data: {
            leadId,
            propertyName,
            visitDate: new Date(visitDate),
            visitTime,
            visitStatus: 'scheduled'
        }
    });

    await leadService.updateLeadStatus(leadId, 'VISIT_SCHEDULED');

    return visit;
};

const getVisitsByLead = (leadId) => {
    return prisma.visit.findMany({
        where: { leadId }
    });
};

const countScheduledVisits = () => {
    return prisma.visit.count({
        where: { visitStatus: 'scheduled' }
    });
};

module.exports = {
    scheduleVisit,
    getVisitsByLead,
    countScheduledVisits
};
