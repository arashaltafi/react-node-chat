import { react } from 'react';
import { faker } from '@faker-js/faker/locale/fa';
import Author from './Component/Autor';
import Socket from './Component/SocketIO';
import './Component/Firebase';

const App = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center mb-8">
      <Socket />
      <Author faker={faker} color={"bg-red-500"} />
      <Author faker={faker} color={"bg-sky-500"} />
      <Author faker={faker} color={"bg-teal-500"} />
      <Author faker={faker} color={"bg-yellow-500"} />
    </div>
  );
}

export default App;
