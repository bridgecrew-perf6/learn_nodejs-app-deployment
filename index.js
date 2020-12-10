'use strict';

const express = require('express');

const PORT = process.env.PORT ?? 8080;

const app = express();

const createHeader = (pageName) => (
  `<header>
    <h1>${pageName} page</h1>
    <nav>
      <ul>
        <li>
          <a href="/">Home page</a>
        </li>
        <li>
          <a href="/about">About page</a>
        </li>
      </ul>
    </nav>
  </header>`
);

app.get('/', (req, res) => {
  res.end(createHeader('Home'));
});

app.get('/about', (req, res) => {
  res.end(createHeader('About'));
});

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}`);
});
