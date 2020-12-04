import React, { Component } from 'react';

class Inicio extends Component{
 constructor(props){
   super(props);
   this.state = {

   }



 }

 render(){
   return(
    <div className="home" id="home">
      <h1>
          Bem-vindo a Home
      </h1>
      <h2>
          Aprendendo SPA na pratica com React js
      </h2>
      <h3>
          Evoluindo a cada dia
      </h3>
    </div>
   );
 }

}

export default Inicio;
