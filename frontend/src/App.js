import { react } from 'react';
import { faker } from '@faker-js/faker/locale/fa';
import Author from './Component/Autor';
import Socket from './Component/SocketIO';

const App = () => {

  const handleClick = (name) => {
    alert(name)
  }

  return (
    <div className="text-center flex flex-col items-center justify-center mb-8">
      <Socket />
      <Author faker={faker} color={"bg-red-500"} click={handleClick}>Test Children</Author>
      <Author faker={faker} color={"bg-sky-500"} click={handleClick}/>
      <Author faker={faker} color={"bg-teal-500"} click={handleClick}/>
      <Author faker={faker} color={"bg-yellow-500"} click={handleClick}/>
    </div>
  );
}

export default App;
