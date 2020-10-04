import React from 'react';
import './App.css';
import Header from './components/Header';
import Info from './components/Info';
import Animation from './components/Animation';
import MainMenu from './components/MainMenu';
import Panel from './components/Panel';
import Footer from './components/Footer';


class App extends React.Component {
    render = () => {
        return (
            <div>
                <Header/>
                <section class="main-content">
                    <Info/>
                    <Animation/>
                    <MainMenu/>
                    <Panel/>
                </section>
                <Footer/>
            </div>
        );
    }
}

export default App;