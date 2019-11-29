const Login = require('../../pages/Login.js');
const Dashboard = require('../../pages/Dashboard.js');
const Settings = require('../../pages/Settings.js');
const testData = require('../../utils/data.json');
//const { populateSensitiveData:populateSensitiveData } = require('../../utils/populateSensitiveData.js')

const login = new Login();
const dashboard = new Dashboard();
const settings = new Settings();

describe('Settings tests', () => {
  it('Change user password', () => {
    //populateSensitiveData(testData);
    browser.url('/');
    login.loginFlow(testData.validUsername, testData.validPassword);
    dashboard.dashboardTitle.waitForDisplayed(3000);
    dashboard.profileButton.waitForDisplayed(3000);
    dashboard.profileButton.click();
    dashboard.settingsButton.click();
    settings.changePassword(testData.passwordEdit);
    browser.refresh(); 
    browser.refresh(); 
    login.loginButton.waitForDisplayed(3000);
    assert.exists(login.loginButton, 'New password');
  }, 3);

  it('Login with edited password', () => {
    //populateSensitiveData(testData);
    browser.url('/');
    login.loginFlow(testData.validUsername, testData.passwordEdit);
    dashboard.dashboardTitle.waitForDisplayed(3000);
    dashboard.profileButton.waitForDisplayed(3000);
    dashboard.profileButton.click();
    dashboard.settingsButton.click();
    settings.changePassword(testData.validPassword);
    browser.refresh();
    browser.refresh();
    login.loginButton.waitForDisplayed(3000);
    assert.exists(login.loginButton, 'Original password');
  }, 3);

  it('Login with original password', () => {
    //populateSensitiveData(testData);
    browser.url('/');
    login.loginFlow(testData.validUsername, testData.validPassword);
    dashboard.dashboardTitle.waitForDisplayed(3000);
    assert.exists(dashboard.dashboardTitle, 'Login with original password!!');
  }, 3);
});
