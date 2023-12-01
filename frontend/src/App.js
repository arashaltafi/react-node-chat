import { react } from 'react';
import { faker } from '@faker-js/faker/locale/fa';
import Author from './Component/Autor';
import Socket from './Component/SocketIO';
import Form from './Component/Form';

const App = () => {

  const handleClick = (name) => {
    alert(name)
  }

  return (
    <div className="bg-[#CFD8DC] text-center flex flex-col items-center justify-center pt-8">
      <Socket />
      <Author faker={faker} color={"bg-red-500"} click={handleClick}>Test Children</Author>
      <Author faker={faker} color={"bg-sky-500"} click={handleClick}>
        <div>
          <h1>Test h1</h1>
          <h2>Test h2</h2>
        </div>
        <div>
          <h3>Test h3</h3>
          <h4>Test h4</h4>
        </div>
      </Author>
      <Author faker={faker} color={"bg-teal-500"} click={handleClick}/>
      <Author faker={faker} color={"bg-yellow-500"} click={handleClick}/>
      <Form />
    </div>
  );
}

export default App;
