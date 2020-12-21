import React from "react"
import './App.css'
import AppNavBar from "./components/structure/AppNavBar"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

function App() {
  return (
    <div className="App">
          <AppNavBar />
            <Typography align="center">
                <div id="content-wrapper" className="mui--text-center">
                    <h1>Help Who Needs</h1>
                    <p>
                        Our TechForGood project aims to match a volunteer with a vulnerable
                        person who is shielding in these unprecedented times. Hence our
                        application is called HelpWhoNeeds. The app will aim to match a
                        volunteer with a vulnerable person in their immediate local area
                        helping with chores such as shopping, GP visits, prescriptions, dog
                        walking or just some social contact with the appropriate measures in
                        place. We hope this app brings some comfort and relief to the users
                        with a sense of moral and social obligation.
        </p>
                    <Button
                        variant="outlined"
                        color="default"
                        onClick={() => {
                            alert("This works on every component!");
                        }}
                    >
                        I need Help
        </Button>
                    <Button
                        variant="outlined"
                        color="default"
                        onClick={() => {
                            alert("This works on every component!");
                        }}
                    >
                        I can Help
        </Button>
                </div>
            </Typography>
            <footer>
                <div>
                    Made by <a href="https://github.com/YourTechAngels">YourTechAngels</a>
                </div>
            </footer>
    </div>
  );
}

export default App;
