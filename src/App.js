import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';
import './assets/app.css';

class App extends Component{
  constructor(){
    super();
   
    this.state = {
      notes: []
    };
  }
  createNote(title,text){
    const newNote = {title,text};
    this.setState({
      notes: [...this.state.notes,newNote]
    }); 
  }
  render() {
    return (
      <section className='conteudo'>
        <FormularioCadastro createNote={this.createNote.bind(this)}/>
        <ListaDeNotas notes={this.state.notes} />
      </section>
    );
  }
}


export default App;
