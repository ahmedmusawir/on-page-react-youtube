import React, { Component } from 'react';

class ReactAppThemeOne extends React.Component {
  handleClick(e) {
    console.log('Running React App 1');
    alert('Running React App 1');
  }

  render() {
    return (
      <div className='app-content container'>
        <h1 className='jumbotron'>React App 1 Works!</h1>
        <article>
          <h3>This is coming from ON PAGE REACT theme</h3>
          <p>
            similique, est minima consequatur sit aspernatur nostrum nulla et
            eos fugiat vel necessitatibus dolores molestiae quas, praesentium
            eos fugiat vel necessitatibus dolores molestiae quas, praesentium
            eos fugiat vel necessitatibus dolores molestiae quas, praesentium
            eos fugiat vel necessitatibus dolores molestiae quas, praesentium
            eos fugiat vel necessitatibus dolores molestiae quas, praesentium
            maxime maiores distinctio possimus! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Cupiditate
          </p>
          <button className='btn btn-danger' onClick={this.handleClick}>
            Click Works!
          </button>
        </article>
      </div>
    );
  }
}

export default ReactAppThemeOne;
