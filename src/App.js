import React from 'react';
// import { Helmet } from 'react-helmet';
import './Styles/Base/Reset.css';
// import logo from './logo.svg';
// import './App.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import Index from './Views/Index';
import { BrowserRouter, withRouter } from 'react-router-dom';

const IndexComponent = withRouter(props => <Index {...props} />);

function App() {
  return (
    <BrowserRouter>
      {/* <Helmet>
        <title>Phantom05</title>
        <meta
        name="description"
        content="개발자들을 위한 취향저격 블로그 서비스. 어디서 글 쓸지 고민하지 말고 벨로그에서 시작하세요."
        />
      </Helmet> */}
      <div className="App">
        {/* <Parent /> */}
        {/* <MovieComponent /> */}
        {/* <DramaHome /> */}
        <IndexComponent  />
      </div>
    </BrowserRouter>
  );
}

export default App;

