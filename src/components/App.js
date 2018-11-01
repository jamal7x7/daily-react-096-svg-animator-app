import React, { Component } from 'react'
import '../styles/App.sass'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'> SVG Animator App </h1>
  </header>
)

const Main = (props) => (
  <div className='game'>

    

  </div>
)

const Side = () => (
  <div className='score'>

      

  </div>
)



class  SVGAnimatorApp extends Component {
  
  state = {
    
  }



  componentDidMount() {
    
  

  }


      render () {
    return (
      <div className='App-container'>

        <Side />
        <Main />
       

      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    < SVGAnimatorApp />

  </div>
)

export default App

