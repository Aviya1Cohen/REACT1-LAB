'use strict';

function Homepage() {
  return (
    <div>
      <p> Welcome!</p>  
      <a href = "/cards"></a>
      <img src="/static/img/balloonicorn.jpg"></img>
    </div>
  );

}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
