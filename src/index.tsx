import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/users", () => {
      return [
        {
          id: 1,
          name: "João",
          cpf: "123.456.789-01",
          email: "joaozinho@gmail.com",
          admin: false
        },
        {
          id: 2,
          name: "Maria",
          cpf: "123.456.789-23",
          email: "mariazinha@gmail.com",
          admin: true
        },
      ]
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

