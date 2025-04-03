import logo from '../assets/logo.jpeg';
import { Container } from './styles.js';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { useState } from 'react';
import Button from '../components/Button';
import { api } from '../Service/api.jsx';

function App() {

  const [nameRepo, setNameRepo] = useState('');
  const [listRepos, setListRepos] = useState([]);

  async function buscadorRepo (){

    const {data} = await api.get(`repos/${nameRepo}`)

    if(data.id){
      const isExist = listRepos.find(repo => repo.id === data.id)

      if(!isExist){
      setListRepos(prev => [...prev, data]);
      setNameRepo('');
      return;
      }
    }
    alert('Repositorio não encontrado')
  }

  function removerRepo(id) {
    setListRepos(prev => prev.filter(repo => repo.id !== id)); 
  }
  
  return (
    <Container>
      <img src={logo} width={72} height={72} alt='github logo'/>
      <Input value={nameRepo} onChange={(e) => setNameRepo(e.target.value)}/>
      <Button onClick={buscadorRepo}/>
      
      {listRepos.map(repo => <ItemRepo repo={repo} removerRepo={removerRepo} key={repo.id}/>)}
    </Container>
  )
}

export default App
