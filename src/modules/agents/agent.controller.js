const agentService = require('./agent.service');

const createAgent = async (req, res, next) => {
    try {
        const { name, email, is_active } = req.body;
        const agent = await agentService.createAgent({ name, email, is_active });
        res.status(201).json(agent);
    } catch (error) {
        next(error);
    }
};

const getAllAgents = async (req, res, next) => {
    try {
        const agents = await agentService.getAllAgents();
        res.json(agents);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createAgent,
    getAllAgents
};
