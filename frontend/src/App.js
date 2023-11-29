import { react } from 'react';
import { faker } from '@faker-js/faker/locale/fa';
import Author from './Component/Autor';

const App = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center mb-8">
      <Author faker={faker} />
      <Author faker={faker} />
      <Author faker={faker} />
    </div>
  );
}

export default App;
