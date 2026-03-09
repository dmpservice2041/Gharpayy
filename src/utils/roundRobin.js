let currentAgentIndex = 0;

/**
 * Assigns an agent to a lead using round-robin logic.
 * @param {Array} agents - List of active agents.
 * @returns {Object|null} - The assigned agent or null if no agents are available.
 */
const getNextAgent = (agents) => {
    if (!agents || agents.length === 0) return null;

    const agent = agents[currentAgentIndex % agents.length];
    currentAgentIndex = (currentAgentIndex + 1) % agents.length;

    return agent;
};

module.exports = { getNextAgent };
