const Login = require('../../pages/Login.js');
const Dashboard = require('../../pages/Dashboard.js');
const Settings = require('../../pages/Settings.js');
const testData = require('../../utils/data.json');
//const { populateSensitiveData:populateSensitiveData } = require('../../utils/populateSensitiveData.js')

const login = new Login();
const dashboard = new Dashboard();
const settings = new Settings();

describe('Settings tests', () => {
  it('Edit business information', () => {
    //populateSensitiveData(testData);
    browser.url('/');
    login.loginFlow(testData.validUsername, testData.validPassword);
    dashboard.profileButton.waitForDisplayed(3000);
    dashboard.profileButton.click();
    dashboard.settingsButton.click();
    settings.editBusinessSettings();
  }, 3);
});
