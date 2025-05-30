import React from 'react';
import {ScrollView} from 'react-native'
import Titulo from './componentes/Titulo'
import Saudacao from './componentes/saudacao'
import FotoPerfil from './componentes/FotoPerfil'
import CartaoUsuario from './componentes/CartaoUsuario'


export default function App(){
  return(<ScrollView> 
    
    <Titulo/>
    <Saudacao pessoa ='Sara'/>
    
    <FotoPerfil/>

    <CartaoUsuario
     nome ='Eduarda' descricao='programadora' 
     img='perfil01'
     />
      <CartaoUsuario
     nome ='João' descricao='designer' 
     img='perfil02'
     />
     
    
    </ScrollView>
  );
}