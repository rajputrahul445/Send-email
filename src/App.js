import React, { Component } from "react";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      subject: "",
      message: "",
      emailError: false,
      emailLabelError: true,
      subjectError: false,
      subjectLabelError: true,
      messageError: false,
      messageLabelError: true,
      btnDisable: true,
      isBtnActive: true,
      pageLoader: false,
      emailSent: false
    };
  }

  componentDidUpdate() {
    if (
      this.state &&
      this.state.subject !== "" &&
      this.state.email !== "" &&
      this.state.message !== "" &&
      this.state.isBtnActive
    ) {
      this.setState({ isBtnActive: false, btnDisable: false });
    }
  }

  emailValidation = e => {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (e.target.value && e.target.value.length > 0) {
      if (reg.test(e.target.value) == false) {
        this.setState({
          emailError: true,
          emailLabelError: false,
          btnDisable: true
        });
      } else {
        this.setState({
          emailError: false,
          emailLabelError: false,
          email: e.target.value,
          isBtnActive: true
        });
      }
    } else {
      this.setState({
        emailError: true,
        emailLabelError: true,
        btnDisable: true,
        email: ""
      });
    }
  };

  subjectValidation = e => {
    if (e.target.value && e.target.value.length > 0) {
      this.setState({
        subjectError: false,
        subjectLabelError: false,
        subject: e.target.value,
        isBtnActive: true
      });
    } else {
      this.setState({
        subjectError: true,
        subjectLabelError: true,
        btnDisable: true,
        subject: ""
      });
    }
  };

  messageValidation = e => {
    if (e.target.value && e.target.value.length > 0) {
      this.setState({
        messageError: false,
        messageLabelError: false,
        message: e.target.value,
        isBtnActive: true
      });
    } else {
      this.setState({
        messageError: true,
        messageLabelError: true,
        btnDisable: true,
        message: ""
      });
    }
  };

  submitForm = () => {
    this.setState({ pageLoader: true });
    setTimeout(() => {
      this.setState({ pageLoader: false, emailSent: true });
    }, 3000);
  };
  formReset = e => {
    this.setState({
      email: "",
      subject: "",
      message: "",
      emailError: false,
      emailLabelError: true,
      subjectError: false,
      subjectLabelError: true,
      messageError: false,
      messageLabelError: true,
      btnDisable: true
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="form_wrapper">
          <div className="form_header">
            <h1>Send New Email</h1>
          </div>
          <div className="form_inr">
            <form className="col s12" autoComplete="off">
              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="email"
                    name="email"
                    onInput={this.emailValidation}
                    id="emailId"
                    className={this.state.emailError ? "invalid" : ""}
                  />
                  <label
                    htmlFor="emailId"
                    className={!this.state.emailLabelError ? "active" : ""}
                  >
                    To:
                  </label>
                </div>
                <div className="input-field col s12">
                  <input
                    type="text"
                    name="subject"
                    id="subjectId"
                    onInput={this.subjectValidation}
                    className={this.state.subjectError ? "invalid" : ""}
                  />
                  <label
                    htmlFor="subjectId"
                    className={!this.state.subjectLabelError ? "active" : ""}
                  >
                    Subject:
                  </label>
                </div>
                <div className="input-field col s12">
                  <input
                    type="text"
                    name="message"
                    id="messageId"
                    onInput={this.messageValidation}
                    className={this.state.messageError ? "invalid" : ""}
                  />
                  <label
                    htmlFor="messageId"
                    className={!this.state.messageLabelError ? "active" : ""}
                  >
                    Message:
                  </label>
                </div>
                <div className="submit_btn col s12">
                  <button
                    className="btn"
                    disabled={this.state.btnDisable}
                    onClick={this.submitForm}
                    type="button"
                  >
                    Send
                  </button>
                  <button
                    className="btn reset_btn"
                    type="reset"
                    onClick={this.formReset}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </div>
          {this.state.pageLoader ? (
            <div className="loader">
              <img
                src="https://codeflarelimited.com/blog/wp-content/uploads/2021/01/loading.gif"
                alt=""
              />
            </div>
          ) : null}
          {this.state.emailSent ? (
            <div className="email_loader">
              <img
                src="https://cdn.dribbble.com/users/251688/screenshots/1663480/send-dribbble.gif"
                alt=""
              />
            </div>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}
export default App;
