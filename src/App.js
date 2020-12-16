import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="mui-appbar mui--z1 purple-col">

        <div className="mui-container">
          <table>
            <tr className="mui--appbar-height">
              <td className="mui--text-title">Help Who Needs</td>
              <td className="mui--text-right">
                <ul className="mui-list--inline mui--text-body2">
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
      </header>
      <div id="content-wrapper" className="mui--text-center">

        <div className="mui--appbar-height"></div>
        <h1>Help Who Needs</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere blanditiis aspernatur animi, voluptatem
        labore nostrum nihil modi temporibus error eum!
        Molestiae voluptas voluptatem possimus libero cupiditate neque facilis architecto obcaecati.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempore dolore deleniti quaerat,
        doloribus consequuntur.
        Facere dicta, minus temporibus in laborum, repellat praesentium maxime eum excepturi autem non!
        Obcaecati, veritatis!
    </p>
        <button className="mui-btn mui-btn--raised" onclick="location.href='Login.html'">I need Help</button>
        <button className="mui-btn mui-btn--raised" onclick="location.href='Registration.html'">I can Help</button>
        <div className="push"></div>
      </div>
      <footer>
        <div className="mui-container mui--text-center">
          Made by <a href="https://github.com/YourTechAngels">YourTechAngels</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
