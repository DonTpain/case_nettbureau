import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
class App extends Component {
  render() {
    return (
     <div class="col-sm-12" id="container"> 
     <form>
     <h1>Finn det beste<br/> og billigste lånet</h1>
     <h4>Få tilbud fra flere tilbydere. Tjenesten er helt uforpliktende, og du står fritt til å velge et av tilbudene eller ikke.</h4>
<div>
    <input type="radio" name="radio" id="radio1"/>
    <label for="radio1"><b>Boliglån</b><br/>Boliglån og rammelån fra 2,19% rente.</label>  
</div>
<div>
    <input type="radio" name="radio" id="radio2" />
    <label for="radio2"><b>Billån</b><br/>Lån inntil 100%. Rente fra 3,95%.</label>
</div>
<div>
    <input type="radio" name="radio" id="radio3" />
    <label for="radio3"><b>Forbrukslån</b><br/>Lån opp til 500 000 kr. Rente fra 8,3%.</label>
</div>
<div>
    <input type="radio" name="radio" id="radio4" />
    <label for="radio4"><b>Refinansiering</b><br/>Få orden på økonomien.</label>
</div>
<div>
<button type="submit" className="btn btn-success btn-lg">Få tilbud</button>
</div>
</form>
</div>



    
    );
  }
}

      
export default App;
