import React, {
    Component
} from 'react';
import {
    Header
} from "./Header";
import {
    Footer
} from "./Footer";
import cookie from 'react-cookies';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ReactGA from 'react-ga';
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';
import Spinner from 'react-bootstrap/Spinner';

const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;
ReactGA.initialize(TRACKING_ID);

ReactGA.pageview(window.location.pathname + window.location.search);

export class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLightTheme: parseInt(cookie.load('isLightTheme')),
            data: null,
            validated: false,
            UserName: '',
            UserLastName: '',
            UserEmail: '',
            UserPhone: '',
            UserPrivacy: '',
            UserRadio: '',
            onConfirm: false,
            loadingButton: false,
        };
    }

    onThemeButtonClick = () => {
        this.setState((oldState) => {
            return {
                isLightTheme: !oldState.isLightTheme
            }
        }, () => {
            let val = this.state.isLightTheme ? 1 : 0;
            cookie.save('isLightTheme', val, {
                path: '/'
            })
        })
    };

    handleSubmit = async (event) => {

        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            this.setState({
                loadingButton: true
            });
            var data = {
                FirstName: this.state.UserName,
                LastName: this.state.UserLastName,
                Email: this.state.UserEmail,
                PhoneNumber: this.state.UserPhone,
                PrivacyAccept: this.state.UserPrivacy,
                EmailCommunication: this.state.UserRadio
            }

            var form_data = new FormData();
            for (var key in data) {
                form_data.append(key, data[key]);
            }
            await axios.post('https://script.google.com/macros/s/AKfycbxCpWtbw6E4eB5OEZBs9sQo-Pfn8C8FZo5O5-ttrkhBe-bl8CL43ke8N0MGywugo8Cq-Q/exec', form_data).then(response => {
                this.setState({
                    UserName: '',
                    UserLastName: '',
                    UserEmail: '',
                    UserPhone: '',
                    UserPrivacy: '',
                    UserRadio: '',
                    onConfirm: true
                });
                this.setState({
                    loadingButton: false
                });
            });
        }
        this.setState({
            validated: true
        });
    };


    inputEventName = async (event) => {
        this.setState({
            UserName: event.target.value
        });
    }
    inputEventLastName = async (event) => {
        this.setState({
            UserLastName: event.target.value
        });
    }
    inputEventEmail = async (event) => {
        this.setState({
            UserEmail: event.target.value
        });
    }
    inputEventPhone = async (event) => {
        this.setState({
            UserPhone: event.target.value
        });
    }
    inputEventPrivacy = async (event) => {
        this.setState({
            UserPrivacy: event.target.value
        });
    }
    inputEventRadio = async (event) => {
        this.setState({
            UserRadio: event.target.value
        });
    }
    onConfirm = async (event) => {
        this.setState({
            onConfirm: false
        });
        window.location.reload();
    }
    onCancel = async (event) => {
        this.setState({
            onConfirm: false
        });
        window.location.reload();
    }
    render() {
            return ( <
                div className = {
                    ("theme-") + (this.state.isLightTheme ? "light" : "dark")
                } >
                <
                Header isLightTheme = {
                    this.state.isLightTheme
                }
                onThemeButtonClick = {
                    this.onThemeButtonClick
                }
                hideAssetCurrencyButtons isTelegramPage /
                > {
                    this.state.onConfirm && ( <
                        SweetAlert success title = "Thank You!"
                        onConfirm = {
                            this.onConfirm
                        }
                        onCancel = {
                            this.onCancel
                        }
                        style = {
                            {
                                color: '#0c0f48'
                            }
                        } >
                        Form submitted successfully. <
                        /SweetAlert>)
                    } <
                    div className = "padding-bottom-50"
                    id = "queryForm" >
                    <
                    div className = "container" >
                    <
                    div className = "row my-5 pt-5 d-flex justify-content-center align-items-center" >
                    <
                    div className = "col-md-12" >
                    <
                    h2 style = {
                        {
                            textAlign: "center"
                        }
                    } >
                    <
                    span style = {
                        {
                            fontSize: "8vh",
                            lineHeight: "8vh",
                            fontWeight: "400",
                            fontStyle: "normal"
                        }
                    } > You Can 't Just Build Landing Pages. <
                    /span> <
                    /h2> <
                    /div> <
                    div className = "col-md-12" >
                    <
                    h2 style = {
                        {
                            textAlign: "center"
                        }
                    } >
                    <
                    span style = {
                        {
                            fontSize: "8vh",
                            lineHeight: "8vh",
                            fontWeight: "400",
                            fontStyle: "normal"
                        }
                    } > Learn to Optimize Like Talia Wolf. <
                    /span> <
                    /h2> <
                    /div>                             <
                    /div> <
                    div className = "row justify-content-center align-items-center d-flex" >
                    <
                    div className = "col-md-6" >
                    <
                    img src = "//d9hhrg4mnvzow.cloudfront.net/unbounce.com/saas-optimization-guide/944dfe68-talia_10fb0ex000000000000028.png"
                    alt = ""
                    loading = "lazy"
                    className = "w-100" / >
                    <
                    div className = "mt-5"
                    style = {
                        {
                            height: "auto"
                        }
                    } >
                    <
                    p style = {
                        {
                            textAlign: "left",
                            lineHeight: "31px"
                        }
                    } >
                    <
                    span style = {
                        {
                            fontSize: "18px",
                            fontStyle: "normal",
                            fontWeight: "200"
                        }
                    } >
                    Hodlinfo Magazine is a brand - new newspaper that explores far deeper information about important occurrences,
                    data points,
                    stories,
                    and developments in all the events in the crypto world in the most effective manner. <
                    /span> <
                    span style = {
                        {
                            fontSize: "18px",
                            fontStyle: "normal",
                            fontWeight: "200"
                        }
                    } > We work hard to give you the most thorough information about the cryptocurrency sector,
                    including all of the most recent data,
                    trends,
                    and market statistics,
                    as well as the most significant projects that will affect how you view the market. <
                    /span> <
                    /p> <
                    p style = {
                        {
                            textAlign: "left",
                            lineHeight: "31px"
                        }
                    } >
                    <
                    span style = {
                        {
                            fontSize: "18px",
                            fontStyle: "normal",
                            fontWeight: "200"
                        }
                    } > Our mind - blowing blogs and articles are the source of all this knowledge.Which will provide you with an outline of how the most recent technological developments and the latest crypto projects around the world are altering everything and impacting the methods and business strategies. <
                    /span> <
                    /p> <
                    /div> <
                    /div> <
                    div className = "col-md-6 p-4" >

                    <
                    Form className = "px-5 py-4 shadow"
                    noValidate validated = {
                        this.state.validated
                    }
                    onSubmit = {
                        this.handleSubmit
                    }
                    style = {
                        {
                            border: "1px solid #ededed"
                        }
                    } >
                    <
                    h2 className = "text-center mb-4"
                    style = {
                        {
                            fontSize: "32px",
                            fontWeight: "300"
                        }
                    } > Get Your Free Guide < /h2> <
                    Row className = "mb-3" >
                    <
                    Form.Group as = {
                        Col
                    }
                    md = "12"
                    controlId = "validationCustom01" >
                    <
                    Form.Label > FIRST NAME * < /Form.Label> <
                    Form.Control
                    required
                    type = "text"
                    name = 'FirstName'
                    pattern = "[a-zA-Z]{5,}"
                    title = "Minimum 5 letters"
                    onChange = {
                        this.inputEventName
                    }
                    defaultValue = "" /
                    >
                    <
                    Form.Control.Feedback type = "invalid" > This field is required! < /Form.Control.Feedback> <
                    /Form.Group> <
                    /Row> <
                    Row className = "mb-3" >
                    <
                    Form.Group as = {
                        Col
                    }
                    md = "12"
                    controlId = "validationCustom02" >
                    <
                    Form.Label > LAST NAME < /Form.Label> <
                    Form.Control
                    type = "text"
                    name = 'LastName'
                    onChange = {
                        this.inputEventLastName
                    }
                    defaultValue = "" /
                    >
                    <
                    /Form.Group> <
                    /Row> <
                    Row className = "mb-3" >
                    <
                    Form.Group as = {
                        Col
                    }
                    md = "12"
                    controlId = "validationCustomUsername" >
                    <
                    Form.Label > YOUR WORK EMAIL * < /Form.Label> <
                    Form.Control
                    required
                    type = "email"
                    name = "Email"
                    pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    onChange = {
                        this.inputEventEmail
                    }
                    defaultValue = "" /
                    >
                    <
                    Form.Control.Feedback type = "invalid" > This field is required! < /Form.Control.Feedback> <
                    /Form.Group> <
                    /Row> <
                    Row className = "mb-3" >
                    <
                    Form.Group as = {
                        Col
                    }
                    md = "12"
                    controlId = "validationCustomUsername" >
                    <
                    Form.Label > Phone Number * < /Form.Label> <
                    Form.Control
                    required
                    type = "text"
                    name = "Phone"
                    pattern = "[6-9]{1}[0-9]{9}"
                    title = "Phone number with 6-9 and remaing 9 digit with 0-9"
                    onChange = {
                        this.inputEventPhone
                    }
                    defaultValue = "" /
                    >
                    <
                    Form.Control.Feedback type = "invalid" > This field is required! < /Form.Control.Feedback> <
                    /Form.Group> <
                    /Row> <
                    Form.Group className = "mb-3" >
                    <
                    Form.Check
                    required
                    label = "I have read and agree to company Privacy Policy. *"
                    feedback = "You must agree before submitting."
                    feedbackType = "invalid"
                    value = "true"
                    onChange = {
                        this.inputEventPrivacy
                    }
                    /> <
                    /Form.Group> <
                    Form.Group className = "mb-3" >
                    <
                    Form.Label > I would like to Opt - In to receive email communications from Hodlinfo.* < /Form.Label> {
                        ['radio'].map((type) => ( <
                            div key = {
                                `inline-${type}`
                            }
                            className = "mb-3" >
                            <
                            Form.Check required inline label = "YES"
                            name = "group1"
                            type = {
                                type
                            }
                            id = {
                                `inline-${type}-1`
                            }
                            value = "yes"
                            onChange = {
                                this.inputEventRadio
                            }
                            /> <
                            Form.Check required inline label = "NO"
                            name = "group1"
                            type = {
                                type
                            }
                            id = {
                                `inline-${type}-2`
                            }
                            value = "no"
                            onChange = {
                                this.inputEventRadio
                            }
                            /> <
                            /div>
                        ))
                    } <
                    /Form.Group> {
                        !this.state.loadingButton ?
                            ( < Button type = "submit"
                                className = "col-md-12"
                                style = {
                                    {
                                        background: '#3dc6c1',
                                        borderColor: '#3dc6c1'
                                    }
                                } > Send Me the Guide! < /Button>):
                                ( < Button variant = "primary"
                                    className = "col-md-12 d-flex justify-content-center align-items-center"
                                    disabled style = {
                                        {
                                            background: '#3dc6c1',
                                            borderColor: '#3dc6c1'
                                        }
                                    } >
                                    <
                                    Spinner as = "span"
                                    animation = "border"
                                    size = "sm"
                                    role = "status"
                                    aria - hidden = "true"
                                    className = 'mx-2' /
                                    >
                                    Loading...
                                    <
                                    /Button>
                                )
                            }


                            <
                            Form.Group className = "mb-3" >
                            <
                            p align = "left"
                        style = {
                            {
                                padding: "1rem",
                                fontSize: "13px",
                                fontWeight: "300",
                                lineHeight: "1.1",
                                marginBottom: "0em",
                                color: "#c2c2c2"
                            }
                        } > By opting - in , you expressly consent and authorize Hodlinfo to send you email communication regarding relevant content, products, and services.Hodlinfo will share the information you provide with the following partners, who will use your information
                        for similar purposes: ActiveCampaign and GetUpLift.You further authorize Hodlinfo to pass your information to ActiveCampaign and GetUpLift
                        for these purposes. < /p> <
                            /Form.Group> <
                            /Form>                            <
                            /div> <
                            /div> <
                            div className = "row d-flex justify-content-center flex-column-reverse flex-lg-row flex-md-row"
                        style = {
                                {
                                    padding: "150px 0"
                                }
                            } >
                            <
                            div className = "col-lg-3 col-md-3 col-sm-12 d-flex justify-content-center justify-content-center" >
                            <
                            img src = "//d9hhrg4mnvzow.cloudfront.net/unbounce.com/saas-optimization-guide/0f000508-ross-simmonds_106t06q000000000000028.png"
                        alt = ""
                        loading = "lazy"
                        className = "img-responsive img-fluid" / >
                            <
                            /div> <
                            div className = "col-lg-9 col-md-9 col-sm-12" >
                            <
                            p style = {
                                {
                                    fontSize: '3vh'
                                }
                            } > “There are a lot of resources out there about SaaS marketing and creating landing pages that convert.But I 've never seen one this in-depth and packed with actionable insight. From psychology to copywriting—Talia covers it all.”</p> <
                            p className = "my-5"
                        style = {
                                {
                                    textAlign: "left"
                                }
                            } > < span style = {
                                {
                                    fontSize: "22px",
                                    lineHeight: "25.6px",
                                    fontStyle: "normal",
                                    fontWeight: "500"
                                }
                            } > Ross Simmonds, < /span> <
                            span style = {
                                {
                                    fontSize: "22px",
                                    lineHeight: "25.6px",
                                    fontStyle: "normal",
                                    fontWeight: "200"
                                }
                            } > & nbsp;
                        Founder of Foundation Marketing < /span> <
                            /p> <
                            /div>                                 <
                            /div> <
                            div className = "row d-flex justify-content-center"
                        style = {
                                {
                                    padding: "30px 0px 150px 0px"
                                }
                            } >
                            <
                            div className = "row d-flex justify-content-center w-100 text-center" >
                            <
                            div className = "col-md-12" >
                            <
                            h1 className = "text-center pb-4"
                        style = {
                                {
                                    fontWeight: "200"
                                }
                            } > Brought to You By < /h1> <
                            /div> <
                            /div> <
                            div className = "row d-flex justify-content-center w-100 py-4" >
                            <
                            div className = "col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center py-4" >
                            <
                            a href = "clkn/http/www.unbounce.com/"
                        target = "_blank" >
                            <
                            img src = "//d9hhrg4mnvzow.cloudfront.net/unbounce.com/saas-optimization-guide/c64ff3b8-unbounce-pink_107e02q000000000000028.png"
                        alt = ""
                        loading = "lazy"
                        className = "img-responsive img-fluid"
                        style = {
                            {
                                marginTop: "0.5rem"
                            }
                        }
                        /> <
                        /a>                              <
                        /div> <
                        div className = "col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center py-4" >
                            <
                            a href = "clkn/https/getuplift.co/"
                        target = "_blank" >
                            <
                            img src = "//d9hhrg4mnvzow.cloudfront.net/unbounce.com/saas-optimization-guide/5a3b3f87-getuplift-yellow_107j02t000000000000028.png"
                        alt = ""
                        loading = "lazy"
                        className = "img-responsive img-fluid" / >
                            <
                            /a>                              <
                            /div> <
                            div className = "col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center py-4" >
                            <
                            a href = "clkn/https/www.activecampaign.com/"
                        target = "_blank" >
                            <
                            img src = "//d9hhrg4mnvzow.cloudfront.net/unbounce.com/saas-optimization-guide/b2db5c8a-activecampaign-blue_1087034000000000000028.png"
                        alt = ""
                        loading = "lazy"
                        className = "img-responsive img-fluid"
                        style = {
                            {
                                marginTop: "-0.5rem"
                            }
                        }
                        /> <
                        /a>                             <
                        /div> <
                        /div>                            <
                        /div>                         <
                        /div> <
                        div className = "container-fluid"
                        style = {
                                {
                                    background: '#3dc6c1',
                                    height: '20rem'
                                }
                            } >
                            <
                            div className = "row d-flex justify-content-center w-100 align-items-center align-content-center"
                        style = {
                                {
                                    height: 'inherit'
                                }
                            } >
                            <
                            div className = "col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center my-4" >
                            <
                            h2 className = "text-center"
                        style = {
                                {
                                    fontWeight: '400'
                                }
                            } > Get the Roadmap to Optimize Any SaaS Landing Page < /h2> <
                            /div> <
                            div className = "col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center" >
                            <
                            a href = "#queryForm"
                        className = "d-flex btn align-items-center pointer p-3 px-5"
                        style = {
                                {
                                    width: "max-content",
                                    margin: "10px",
                                    padding: "6px 20px",
                                    borderRadius: "10px",
                                    color: "#0c0f48",
                                    background: '#fff'
                                }
                            } > Let’ s Get the Guide! < /a> <
                            /div> <
                            /div> <
                            /div> <
                            /div> <
                            div className = "footer" >
                            <
                            Footer / >
                            <
                            /div> <
                            /div>
                    )
                }
            }