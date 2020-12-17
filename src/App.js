import Header from './components/structure/Header'
import Footer from './components/structure/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="content-wrapper" className="mui--text-center">

        <div className="mui--appbar-height"></div>
        <h1>Help Who Needs</h1>
        <p>Our TechForGood project aims to match a volunteer with a vulnerable person who is shielding 
          in these unprecedented times. Hence our application is called HelpWhoNeeds. The app will aim 
          to match a volunteer with a vulnerable person in their immediate local area helping with chores 
          such as shopping, GP visits, prescriptions, dog walking or just some social contact with the 
          appropriate measures in place. We hope this app brings some comfort and relief to the users with a 
          sense of moral and social obligation.
    </p>
        <button className="mui-btn mui-btn--raised" onclick="location.href='Login.html'">I need Help</button>
        <button className="mui-btn mui-btn--raised" onclick="location.href='Registration.html'">I can Help</button>
        <div className="push"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
