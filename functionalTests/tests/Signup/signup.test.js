const LoginPage = require('../../pages/Login.js');
const SignupPage = require('../../pages/Signup.js');
const WelcomePage = require('../../pages/Welcome.js');
const testData = require('../../utils/data.json');
//const { populateSensitiveData:populateSensitiveData } = require('../../utils/populateSensitiveData.js');

const login = new LoginPage();
const signup = new SignupPage();
const welcome = new WelcomePage();

function getInstantDateTime(){
  let d = new Date(),
  timeStamp = [d.getMonth()+1,
             d.getDate(),
             d.getFullYear()].join('/')+"."+
             [d.getHours(),
             d.getMinutes(),
             d.getSeconds()].join('.');
  return timeStamp;
}

const userInfo  = getInstantDateTime();
const userEmail = "mail" + userInfo + "@mail.com";

describe('Signup process', () => {
  it('Create a new account', () => {
    //populateSensitiveData(testData);
    browser.url('/');
    login.signupButton.click();
    signup.signupFlow("Name" + userInfo, "LastName" + userInfo, "Business" + userInfo, userEmail, testData.signupPassword);
    assert.equal('Welcome to SocialPiper', welcome.welcomeMessage.getText());
  }, 3);
});
