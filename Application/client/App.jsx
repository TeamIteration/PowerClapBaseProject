// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import { GlobalContext, GlobalProvider } from "./Context/GlobalContext"

// make App as a dummy container to display various routes as nav bar

import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './Components/Login.jsx';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import LoginContainer from './Components/LoginContainer.jsx';
import Dashboard from './Components/Dashboard.jsx';
import CreateProject from './Components/CreateProject.jsx';
import ProjectDisplay from './Components/ProjectDisplay.jsx';
import logoutIcon from './assets/logout_FILL1_wght400_GRAD0_opsz48.png';

const App = (props) => {
  // useEffect(() => {
  //   function start() {
  //      gapi.client.init({
  //       clientId: clientId,
  //       scope: ""
  //      })
  //   };
  //   gapi.load('client:auth2', start);
  // })
  return (
    <>
      <header>
        <h1>PowerClap</h1>
      </header>

      <Routes>
        <Route path="/" element={<LoginContainer />} />
        <Route
          path="/dashboard"
          element={
            <>
              <div className="nav">
                <Link to="/">
                  <button className="log-out" type="button">
                    <FaSignOutAlt />
                    &nbsp; Sign Out
                  </button>
                </Link>
              </div>
              <CreateProject />
              <Dashboard />
            </>
          }
        />
        <Route path="/test" element={<ProjectDisplay />} />
      </Routes>
    </>
  );
};

export default App;

// use this to pass the global state to all children
// const App = () => {
//  return (
//    <GlobalProvider>
//      <Main />
//    </GlobalProvider>
//  )
// };

// // use this component as your main app
// const Main = () => {
//  // use state variables by destructuring from useContext(context)
//  const { stateVar, changeStateVar } = useContext(GlobalContext)
//  return (
//    <>
//      {stateVar}
//      <button onClick={() => changeStateVar('newValue')} />
//    </>
//  )
// };

// export default App;

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App
