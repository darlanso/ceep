import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';
class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.title}</h3>
        </header>
        <p className="card-nota_texto">{this.props.text}</p>
      </section>
    );
  }
}
CardNota.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
};
export default CardNota;