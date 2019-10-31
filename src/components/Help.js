import React from "react";
import Spinner from './Spinner';
import '../content/scss/modal.scss';

export default class Help extends React.Component {
  render() {
    return (
      <div className={'modal'}>
        <div className={'modal__header'}>
          <h1>Помощь</h1>
          <Spinner/>
        </div>
        <div className={'modal__content'}>
          <p>ТЕКСТ СПРАВКИ</p>

          <a
            className={'button-close'}
            onClick={() => {
              this.setState({exit: false});
              this.props.hideModal();
            }}>OK</a>
        </div>
      </div>
    );
  }
}
