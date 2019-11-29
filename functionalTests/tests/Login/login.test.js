const Login = require('../../pages/Login.js');
const Dashboard = require('../../pages/dashboard.js');
const testData = require('../../utils/data.json');
// const { populateSensitiveData:populateSensitiveData } = require('../../utils/populateSensitiveData.js')

const login = new Login();
const dashboard = new Dashboard();

describe('Login tests', () => {
  it('Valid login', () => {
  // populateSensitiveData(testData);
  browser.url('/');
  login.loginFlow(testData.validUsername, testData.validPassword);
  dashboard.dashboardTitle.waitForDisplayed(3000);
  assert.exists(dashboard.dashboardTitle);
  }, 3);
});
