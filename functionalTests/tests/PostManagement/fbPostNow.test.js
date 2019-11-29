const Login = require('../../pages/Login');
const Dashboard = require('../../pages/Dashboard');
const Calendar = require('../../pages/Calendar');
const PostManagement = require('../../pages/PostManagement');
const testData = require('../../utils/data.json');
//const { populateSensitiveData:populateSensitiveData } = require('../../utils/populateSensitiveData.js')

const login = new Login();
const dashboard = new Dashboard();
const calendar = new Calendar();
const postManagement = new PostManagement();

beforeEach(function() {
  //populateSensitiveData(testData);
  browser.url('/');
  login.loginFlow(testData.validUsername, testData.validPassword);
  dashboard.dashboardTitle.waitForDisplayed(3000);
});

describe('Publishing process', () => {
  it('Facebook - Post now!', () => {
    browser.url('/publishing');
    calendar.createPostSaturday.click();
    postManagement.postManagementTitle.waitForDisplayed(3000);
    postManagement.fbPostNowFlow();
    calendar.calendarTitle.waitForDisplayed(7000);
    assert.exists(calendar.calendarTitle);
  }, 3);
});
