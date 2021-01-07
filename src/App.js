import './App.css';

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <div className="app">
      <h1>Hello</h1>
      {/* Header */}
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
      {/* Sidebar */}
      {/* React-router -> Chat screen */}
    </div>
  );
}

export default App;