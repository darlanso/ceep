import React, { Component } from 'react';
import CardNota from '../CarNota';
import './style.css';
import PropTypes from 'prop-types';
class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notes.map(({title,text}, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota title={title} text={text}/>
            </li>
          );
        })}
      </ul>
    );
  }
}
ListaDeNotas.propTypes = {
  notes: PropTypes.array
};
export default ListaDeNotas;