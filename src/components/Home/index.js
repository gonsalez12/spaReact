import React, { Component } from 'react';

import Inicio from '../Inicio';
import Sobre from '../Sobre';
import Contato from '../Contato';
import '../../style.css'

class Home extends Component{
 constructor(props){
   super(props);
   this.state = {

   }



 }

 render(){
   return(
    <div>
      <Inicio/>
      <Sobre/>
      <Contato/>
    </div>
   );
 }

}

export default Home;
