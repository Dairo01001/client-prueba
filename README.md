# client-prueba

Para empezar hacer
```bash 
    npm install
    npm start
```

Si por alguna razon corre el proyecto en local tener en cuenta que este nesecita la api la cual esta en https://github.com/Dairo01001/api-prueba, si quieres cambiar el puerto en que va a correr el servidor por favor tambien cambiarlo en el archivo index.jsx que esta en src.

```js
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:3005'; // Puerto en el corres el servidor

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
```