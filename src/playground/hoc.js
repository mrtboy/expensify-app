//Higher order Component (HOC)

import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
  <div>
    <h2>Info</h2>
    <p>The info is there is a details => {props.info}</p>
  </div>
);

const withAdminWarning = (WrappingComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please dont share!</p>}
      <WrappingComponent {...props}/>
    </div>
  );
};

const requireAuthentication = (WrappingComponent) => {
  return (props) => (
    <div>
      {props.isAuthenthicated ? (<WrappingComponent {...props}/>) : (<p>please Login in</p>)}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenthicated={false} info="The are the details"/>, document.getElementById('app'));

