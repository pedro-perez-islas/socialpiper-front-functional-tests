const Login = require('../../pages/Login.js');
const Dashboard = require('../../pages/Dashboard.js');
const Settings = require('../../pages/Settings.js');
const testData = require('../../utils/data.json');
//const { populateSensitiveData:populateSensitiveData } = require('../../utils/populateSensitiveData.js')

const login = new Login();
const dashboard = new Dashboard();
const settings = new Settings();

describe('Settings tests', () => {
  it('Add a new card', () => {
    //populateSensitiveData(testData);
    browser.url('/');
    login.loginFlow(testData.validUsername, testData.validPassword);
    // browser.pause(4000);
    dashboard.dashboardTitle.waitForDisplayed(3000);
    dashboard.profileButton.waitForDisplayed(3000);
    dashboard.profileButton.click();
    dashboard.settingsButton.click();
    settings.addNewCard();
    browser.pause(4000);

    // login.loginButton.waitForDisplayed(3000);
    // assert.exists(login.loginButton, 'New password');
  }, 3);
});
