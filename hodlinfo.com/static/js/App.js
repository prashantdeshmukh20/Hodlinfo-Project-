import React, {
    Component
} from "react";
import {
    Route,
    BrowserRouter
} from "react-router-dom";
import "./App.css";
import {
    MainPage
} from "./components/MainPage";
import TermsAndConditions from "./components/TermsAndConditions";
import {
    Telegram
} from "./components/Telegram";
import {
    ContactPage
} from "./components/ContactPage";
import {
    createBrowserHistory
} from "history";
import PrivacyPolicy from "./components/PrivacyPolicy";

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( <
            BrowserRouter >
            <
            div className = "App" >
            <
            Route path = "/"
            exact component = {
                MainPage
            }
            /> <
            Route path = "/hodl/terms-and-conditions"
            exact component = {
                TermsAndConditions
            }
            /> <
            Route path = "/hodl/privacy-policy"
            exact component = {
                PrivacyPolicy
            }
            /> <
            Route path = "/:id"
            exact component = {
                MainPage
            }
            /> <
            Route path = "/contact/query"
            exact component = {
                ContactPage
            }
            /> <
            Route path = "/connect/telegram"
            component = {
                Telegram
            }
            />

            <
            /div> <
            /BrowserRouter>
        );
    }
}

export default App;