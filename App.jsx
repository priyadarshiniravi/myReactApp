import React from 'react';

class Header extends React.Component {
   render() {
      return (
         <h1>
            This is a basic React App
         </h1>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <p>
            Basic setup for the react app was done
         </p>
      );
   }
}

class Page extends React.Component {
   render() {
      return (
        <div>
          <Header/>
          <Content/>
        </div>      
      );
   }
}

export default Page;
