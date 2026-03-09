const leadService = require('./lead.service');

const createLead = async (req, res, next) => {
    try {
        const { name, phone, source } = req.body;
        const lead = await leadService.createLead({ name, phone, source });
        res.status(201).json(lead);
    } catch (error) {
        next(error);
    }
};

const updateStatus = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const lead = await leadService.updateLeadStatus(id, status);
        res.json(lead);
    } catch (error) {
        next(error);
    }
};

const getAllLeads = async (req, res, next) => {
    try {
        const leads = await leadService.getAllLeads();
        res.json(leads);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createLead,
    updateStatus,
    getAllLeads
};
