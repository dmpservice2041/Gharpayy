const express = require('express');
const agentRoutes = require('./modules/agents/agent.routes');
const leadRoutes = require('./modules/leads/lead.routes');
const visitRoutes = require('./modules/visits/visit.routes');
const { getDashboardStats } = require('./modules/dashboard.controller');

const app = express();

app.use(express.json());

// Routes
app.use('/agents', agentRoutes);
app.use('/leads', leadRoutes);
app.use('/visits', visitRoutes);
app.get('/dashboard', getDashboardStats);


app.use((err, req, res, next) => {
    console.error('[App Error]', err.stack);
    res.status(err.status || 500).json({
        error: {
            message: err.message || 'Internal Server Error'
        }
    });
});

module.exports = app;
