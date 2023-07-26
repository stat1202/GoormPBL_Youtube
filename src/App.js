import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShortsPage from './pages/ShortsPage';
import LibraryPage from './pages/LibraryPage';
import SubscriptionPage from './pages/SubscriptionPage';
import Header from './components/Header';
import Nav from './components/Nav';
import { styled } from 'styled-components';

const MainStyle = styled.main`
  box-sizing: border-box;
  padding-top: 72px;
  padding-left: 100px;
`

function App() {
  // const player = document.getElementById('player')
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <MainStyle>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/shorts" element={<ShortsPage/>}/>
          <Route path="/feed/library" element={<LibraryPage/>}/>
          <Route path="/feed/subscriptions" element={<SubscriptionPage/>}/>
        </Routes>
      </MainStyle>
      
    </div>
  );
}

export default App;
