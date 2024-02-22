import { useState } from 'react';
import './App.css'
import PersonDetail from './components/PersonDetail';
import PersonsDisplay from './components/PersonsDisplay';
import CreateAddressForm from './components/CreateAddressForm';
import CreatePersonForm from './components/CreatePersonForm';
import AvatarUpload from './components/AvatarUpload';

function App() {
  
  const [personId, setPersonId] = useState('');

  return (
  <div className=' h-screen pt-10 bg-slate-900 text-white flex flex-col '>
    <PersonsDisplay setPersonId={setPersonId} />     

    {
      personId && <PersonDetail personId={personId} />
    }

    <CreateAddressForm />
    
    <CreatePersonForm />

    <AvatarUpload />
  </div>
  )
}

export default App
