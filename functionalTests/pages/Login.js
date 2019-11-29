class LoginPage {
  get emailInput() { return $('#email'); }
  get passwordInput() { return $('#password'); }
  get loginButton() { return $('#login-button'); }
  get signupButton() { return $('.MuiTypography-root=Sign Up'); }
  get errorMsg() { return $('#error-label'); }
  
  loginFlow(email, pass) {
    this.emailInput.setValue(email);
    this.passwordInput.setValue(pass);
    this.loginButton.click();
  }
}
module.exports = LoginPage;
