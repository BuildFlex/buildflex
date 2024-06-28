import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import BInput from '@components/Input';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <h1>Buildflex Design</h1>
    <BInput disabled={true} />
    <BInput error />
    <BInput success />
    <BInput warning />
  </StrictMode>
);
