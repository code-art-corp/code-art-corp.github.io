import React from 'react';
import logo from './logo.png';
import devlogo from './social_media_icons/dev.to.png'
import mediumlogo from './social_media_icons/medium.png'
import './App.css';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function App() {

  return (
    <>
      <div className="App">
        <img src={logo} alt="logo" />
        <p className='Title'>
          Code Art
        </p>
        <p className='Description'>
        Code art is a group of people interested in sharing their knowledge in software architecture and development as an artistic process.
        </p>

        <div className='Content'>
          <p className='TitleSection'>
            See our articles at:
          </p>
          <div className='SocialMediaIcons'>
            <a href='https://dev.to/'>
              <div className='Icon'>
                <img src={devlogo} width={100} alt="logo" />
                <p className='Description'> Dev </p>
              </div>
            </a>

            <a href='https://medium.com/'>
              <div className='Icon'>
                <img src={mediumlogo} width={100} alt="logo" />
                <p className='Description'> Medium </p>
              </div>
            </a>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
