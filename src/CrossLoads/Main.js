import {apiAddress} from './Common';
// import * as Movie from '../Container/Movie/Movie';
// import * as Template from '../Components/PageTemplate/Template';

// Movie
// import _MovieHome from 'Containers/Movie/MovieHome';
import _MovieAbout from 'Views/Pages/MovieAbout';
import _MovieLogin from 'Views/Pages/MovieLogin';

// import _MovieMenu from 'Container/Movie/MovieMenu';
import _MovieBoard from 'Views/Pages/MovieBoard';
import _MovieList from 'Containers/Movie/MovieList';
import _MoviePoster from 'Containers/Movie/MoviePoster';
import _MovieDetail from 'Views/Pages/MovieDetail';
import MovieHome from 'Views/Pages/MovieHome';

// import _MovieIndex from 'Container/Movie/MovieIndex';

// // Drama
// import _DramaHome from 'Container/Drama/DramaHome'

// // Template
// import _PlainTemplate from 'Components/PageTemplate/PlainTemplate';
// import _WhiteTemplate from 'Components/PageTemplate/WhiteTemplate';
// import _BlackTemplate from 'Components/PageTemplate/BlackTemplate';

// // Base
import _Header from 'Components/Layout/Header';
import _MovieFooter from 'Containers/Movie/MovieFooter';
import _Test from 'Views/Pages/Test';

import _AuthWrapper from 'Components/Auth/AuthWrapper';


// /**==================================================================
//  * Exports
//  */==================================================================
// export const MovieIndex = _MovieIndex;
// export const MovieHome = _MovieHome;
// export const MovieMenu = _MovieMenu;
export const MovieAbout = _MovieAbout;
export const MovieLogin = _MovieLogin;
export const MovieFooter = _MovieFooter;
export const MovieBoard = _MovieBoard;
export const MovieList = _MovieList;
export const MoviePoster = _MoviePoster;
export const MovieDetail = _MovieDetail;
export const AuthWrapper = _AuthWrapper;

// export const DramaHome = _DramaHome;

// export const PlainTemplate = _PlainTemplate;
// export const WhiteTemplate = _WhiteTemplate;
// export const BlackTemplate = _BlackTemplate;

export const Header = _Header;


export const Test = _Test ;


// 한번 둘러싸서 cra에서 webpack.config.js가 안보임
// React-script
// eject
// craco 







export{
  apiAddress,
  MovieHome
}