import { react } from 'react';
import { faker } from '@faker-js/faker/locale/fa';
import Author from './Component/Autor';
import Socket from './Component/SocketIO';
import './Component/Firebase';
import Form from './Component/Form';
import Test from './Component/Test';
import { Routes, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Profile from './Component/Profile';
import { QueryClientProvider, QueryClient } from 'react-query';
import ReactFormHook from './Component/ReactFormHook';
import CustomHook from './Component/CustomHook';

const App = () => {

  const client = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } });

  const handleClick = (name) => {
    alert(name)
  }

  return (
    <div className="bg-[#CFD8DC] text-center flex flex-col items-center justify-center pt-8">
      <QueryClientProvider client={client}>
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
        <Author faker={faker} color={"bg-teal-500"} click={handleClick} />
        <Author faker={faker} color={"bg-yellow-500"} click={handleClick} />
        <Form />
        <Test />
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/profile/:name?/:family?' element={<Profile />} />
            <Route path='*' element={<div> Not Found 404 </div>} />
          </Routes>

          <nav>
            <Link to='/'><h1 className={'m-2 p-2 bg-pink-400'}>Home</h1></Link>
            <Link to='/contact'><h1 className={'m-2 p-2 bg-pink-400'}>Contact</h1></Link>
            <Link to='/about'><h1 className={'m-2 p-2 bg-pink-400'}>About</h1></Link>
          </nav>
        </Router>

        <ReactFormHook />
        <CustomHook />
      </QueryClientProvider>
    </div>
  );
}

export default App;
