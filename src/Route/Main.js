// import * as Movie from '../Container/Movie/Movie';
// import * as Template from '../Components/PageTemplate/Template';

// Movie
import _MovieHome from 'Container/Movie/MovieHome';
import _MovieAbout from 'Container/Movie/MovieAbout';
import _MovieLogin from 'Container/Movie/MovieLogin';
import _MovieFooter from 'Container/Movie/MovieFooter';
import _MovieMenu from 'Container/Movie/MovieMenu';
import _MovieBoard from 'Container/Movie/MovieBoard';
import _MovieList from 'Container/Movie/MovieList';
import _MovieIndex from 'Container/Movie/MovieIndex';
import _MoviePoster from 'Container/Movie/MoviePoster';
import _MovieDetail from 'Container/Movie/MovieDetail';


// Drama
import _DramaHome from 'Container/Drama/DramaHome'

// Template
import _PlainTemplate from 'Components/PageTemplate/PlainTemplate';
import _WhiteTemplate from 'Components/PageTemplate/WhiteTemplate';
import _BlackTemplate from 'Components/PageTemplate/BlackTemplate';

// Base
import _Header from 'Components/Base/Header';



/**
 * Exports
 */
export const MovieIndex = _MovieIndex;
export const MovieHome = _MovieHome;
export const MovieAbout = _MovieAbout;
export const MovieLogin = _MovieLogin;
export const MovieFooter = _MovieFooter;
export const MovieMenu = _MovieMenu;
export const MovieBoard = _MovieBoard;
export const MovieList = _MovieList;
export const MoviePoster = _MoviePoster;
export const MovieDetail = _MovieDetail;

export const DramaHome = _DramaHome;

export const PlainTemplate = _PlainTemplate;
export const WhiteTemplate = _WhiteTemplate;
export const BlackTemplate = _BlackTemplate;

export const Header = _Header;



// 한번 둘러싸서 cra에서 webpack.config.js가 안보임
// React-script
// eject
// craco 