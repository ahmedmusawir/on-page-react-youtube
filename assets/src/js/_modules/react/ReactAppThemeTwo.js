import React from 'react';

function ReactAppThemeTwo() {
  const handleClick = () => {
    console.log('Running React App 2');
    alert('Running React App 2');
  };
  return (
    <div className='app-content container'>
      <h1 className='jumbotron'>React App 2 Works!</h1>
      <article>
        <h3>This is coming from ON PAGE REACT theme</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          eos fugiat vel necessitatibus dolores molestiae quas, praesentium eos
          eos fugiat vel necessitatibus dolores molestiae quas, praesentium eos
          fugiat vel necessitatibus dolores molestiae quas, praesentium fugiat
          vel necessitatibus dolores molestiae quas, praesentium similique, est
          minima consequatur sit aspernatur nostrum nulla et maxime maiores
          distinctio possimus!
        </p>
        <button className='btn btn-danger' onClick={handleClick}>
          Click Works!
        </button>
      </article>
    </div>
  );
}

export default ReactAppThemeTwo;
