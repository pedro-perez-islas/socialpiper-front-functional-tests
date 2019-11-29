class SignupPage { 

  get firstNameInput() { return $('#firstName'); }
  get lastNameInput() { return $('#lastName'); }
  get businessNameInput() { return $('#businessName'); }
  get emailInput() { return $('#email'); }
  get passwordInput() { return $('#password'); }
  get signupButton() { return $('#signupButton'); }
  get errorMessage() { return $('#error-message'); }

  signupFlow(firstName, lastName, businessName, signupEmail, signupPassword) {
    this.firstNameInput.setValue(firstName);
    this.lastNameInput.setValue(lastName);
    this.businessNameInput.setValue(businessName);
    this.emailInput.setValue(signupEmail);
    this.passwordInput.setValue(signupPassword);
    this.signupButton.click();
  }

}
module.exports = SignupPage;
