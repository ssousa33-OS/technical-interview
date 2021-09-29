import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './components/Home'








function App() {

  const [userList, setUserList] = useState(null)

  useEffect(() => {
    (async () => {
      const response = await axios.get('https://randomuser.me/api/?inc=name,picture,cell,dob,location&results=20')
      const {data} = response
      console.info(data)
      setUserList(data)
    })()
  }, [])
  return (
    
      <Home userList={userList} />
    
  );
}

export default App;
