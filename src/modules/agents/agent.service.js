const prisma = require('../../config/db');

const createAgent = (data) => {
    return prisma.agent.create({ data });
};

const getAllAgents = () => {
    return prisma.agent.findMany();
};

const getActiveAgents = () => {
    return prisma.agent.findMany({
        where: { isActive: true }
    });
};

const getAgentById = (id) => {
    return prisma.agent.findUnique({
        where: { id }
    });
};

module.exports = {
    createAgent,
    getAllAgents,
    getActiveAgents,
    getAgentById
};
