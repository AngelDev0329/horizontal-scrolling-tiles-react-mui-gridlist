import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './demo';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StyledEngineProvider injectFirst>
    <Demo />
  </StyledEngineProvider>
);