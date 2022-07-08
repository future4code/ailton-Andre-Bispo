import React, {useEffect,useState} from 'react';
import { getNewProfile } from '../../../services/apis';
import {
   Container,
   ContainerGeral,
   Bio,
   Photo,
   Name,
   Age,
 } from './HomeStyled';

export function Home(props){
  const [profile,setProfile] = useState({})
  const [loading,setLoading] = useState (true) 
  useEffect(()=>{
getNewProfile(setLoading,setProfile)
  },[])
  return (
   
    <ContainerGeral>
       {loading ? <h1>Carregando</h1>
      :
        (<Container> Perfil
          <Photo src ={profile.photo}></Photo>
        <Name>{profile.name}</Name>
        <Age>{profile.age}</Age>
        <Bio>{profile.bio}</Bio>
        <button>match</button>
        <button>deni</button>
        </Container>)
      }
      
        <button onClick={() => {props.setPageChangeProps('match')}}>Matchs</button>
    </ContainerGeral>
  )
}