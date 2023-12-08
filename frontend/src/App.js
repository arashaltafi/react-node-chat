import Socket from './Component/SocketIO';
import './Component/Firebase';

const App = () => {

  return (
    <div className="bg-[#CFD8DC] text-center flex flex-col items-center justify-center pt-8">
        <Socket />
    </div>
  );
}

export default App;
