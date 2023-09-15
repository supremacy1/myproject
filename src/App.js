import UilReact from '@iconscout/react-unicons/icons/uil-react'
import './comp.css'
import Rightbar from './components/rigthside/right';
import Main from './components/main/main';
import Liftbar from './components/left/lift';
import ChatApp from './components/left/chat';
import Chat from './components/left/chat';

function App() {
  return (
   <>
   <div className='help'>
   <Rightbar /> 
     <Main />
   <Liftbar />  
   </div>
   </>
  );
}

export default App;
