const Login = require('../../pages/Login.js');
const SignupPage = require('../../pages/Signup.js');
const Dashboard = require('../../pages/Dashboard.js');
const Settings = require('../../pages/Settings.js');
const testData = require('../../utils/data.json');
//const { populateSensitiveData:populateSensitiveData } = require('../../utils/populateSensitiveData.js');

const login = new Login();
const signup = new SignupPage();
const dashboard = new Dashboard();
const settings = new Settings();

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

describe('Settings tests', () => {
  it('Delete my account', () => {
    // populateSensitiveData(testData);
    browser.url('/');
    login.signupButton.click();
    signup.signupFlow("Name" + userInfo, "LastName" + userInfo, "Business" + userInfo, userEmail, testData.signupPassword);
    dashboard.profileButton.waitForDisplayed(3000);
    dashboard.profileButton.click();
    dashboard.settingsButton.click();
    browser.pause(3000);
    browser.refresh(); 
    browser.pause(3000);
    settings.disableAccountFlow();
    browser.refresh(); 
    browser.refresh(); 
    login.loginButton.waitForDisplayed(3000);
    login.loginFlow(userEmail, testData.signupPassword);
    assert.exists(login.errorMsg);
    browser.pause(9000);
  }, 3);
});
