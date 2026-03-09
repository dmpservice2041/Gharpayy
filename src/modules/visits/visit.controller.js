const visitService = require('./visit.service');

const scheduleVisit = async (req, res, next) => {
    try {
        const { leadId, propertyName, visitDate, visitTime } = req.body;
        const visit = await visitService.scheduleVisit({ leadId, propertyName, visitDate, visitTime });
        res.status(201).json(visit);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    scheduleVisit
};
