const prisma = require('../../config/db');
const { getNextAgent } = require('../../utils/roundRobin');
const agentService = require('../agents/agent.service');

const createLead = async (data) => {
    const activeAgents = await agentService.getActiveAgents();
    const assignedAgent = getNextAgent(activeAgents);

    return prisma.lead.create({
        data: {
            ...data,
            assignedAgentId: assignedAgent?.id,
            status: 'NEW',
            lastActivityAt: new Date()
        }
    });
};

const updateLeadStatus = (id, status) => {
    return prisma.lead.update({
        where: { id },
        data: {
            status,
            lastActivityAt: new Date()
        }
    });
};

const getLeadById = (id) => {
    return prisma.lead.findUnique({
        where: { id }
    });
};

const getAllLeads = () => {
    return prisma.lead.findMany({
        include: { agent: true }
    });
};

const getLeadsByStage = async () => {
    const result = await prisma.lead.groupBy({
        by: ['status'],
        _count: { id: true }
    });

    return result.reduce((acc, curr) => {
        acc[curr.status] = curr._count.id;
        return acc;
    }, {});
};

module.exports = {
    createLead,
    updateLeadStatus,
    getLeadById,
    getAllLeads,
    getLeadsByStage
};
