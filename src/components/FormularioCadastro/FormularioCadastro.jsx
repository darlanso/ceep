
import React, { Component } from 'react';
import './style.css';

import PropTypes from 'prop-types';

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.title = '';
    this.text = '';
  }
  _handleTitulo(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }
  _handleText(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }
  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title,this.text);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._createNote.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleText.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
                    Criar Nota
        </button>
      </form>
    );
  }
}
FormularioCadastro.propTypes = {
  createNote: PropTypes.func
};
export default FormularioCadastro;
