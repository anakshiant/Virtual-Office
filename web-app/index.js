const routes = require('next-routes')();
const next = require('next');

const PORT = process.env.PORT || 3000;

const app = next({ dev: process.env.NODE_ENV !== 'production' });

routes.add({
  name: 'home',
  pattern: '/',
  page: 'index',
});

const handler = routes.getRequestHandler(app);

const express = require('express');
app.prepare().then(() => {
  express().use(handler).listen(PORT);
});
