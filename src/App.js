import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShortsPage from './pages/ShortsPage';
import LibraryPage from './pages/LibraryPage';
import SubscriptionPage from './pages/SubscriptionPage';
import Header from './components/Header';
import Nav from './components/Nav';
import { styled } from 'styled-components';
import PlayllistPage from './pages/PlayllistPage';
import WatchPage from './pages/WatchPage';
import MenuSideBar from './components/MenuSideBar';

const MainStyle = styled.main`
  box-sizing: border-box;
  padding-top: 72px;
  padding-left: ${props => props.pathname !== "/watch" ? "100px" : "24px"};
`

function App() {
  const pathname = useLocation().pathname
  return (
    <div className="App">
      <Header/>
      {
        pathname !=="/watch"
        &&
        <Nav/>
      }
      <MenuSideBar/>
      <MainStyle pathname={pathname}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/shorts" element={<ShortsPage/>}/>
          <Route path="/playlist" element={<PlayllistPage/>}/>
          <Route path="/watch" element={<WatchPage/>}/>
          <Route path="/feed/library" element={<LibraryPage/>}/>
          <Route path="/feed/subscriptions" element={<SubscriptionPage/>}/>
        </Routes>
      </MainStyle>
      
    </div>
  );
}

export default App;
