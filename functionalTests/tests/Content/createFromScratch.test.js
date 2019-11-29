const Login = require('../../pages/Login');
const Dashboard = require('../../pages/Dashboard');
const Content = require('../../pages/Content');
const Editor = require('../../pages/Editor');
const PostManagement = require('../../pages/PostManagement');
const Calendar = require('../../pages/Calendar');
const Sidebar = require('../../pages/Sidebar');
const testData = require('../../utils/data.json');
//const { populateSensitiveData:populateSensitiveData } = require('../../utils/populateSensitiveData.js')

const login = new Login();
const dashboard = new Dashboard();
const content = new Content();
const editor = new Editor();
const postManagement = new PostManagement();
const calendar = new Calendar();
const sidebar = new Sidebar();

beforeEach(function() {
  //populateSensitiveData(testData);
  browser.url('/');
  login.loginFlow(testData.validUsername, testData.validPassword);
  dashboard.dashboardTitle.waitForDisplayed(3000);
});

describe('Content', () => {
  it('Create FB content from scratch and publish it now!', () => {
    sidebar.mediaEditorButton.click();
    content.title.waitForDisplayed(3000);
    content.createFromScratchButton.click();
    editor.editorTitle.waitForDisplayed(3000);
    editor.saveImageFlow();
    postManagement.postManagementTitle.waitForDisplayed(3000);
    postManagement.fbPostNowFlow();
    calendar.calendarTitle.waitForDisplayed(7000);
    assert.exists(calendar.calendarTitle);
  }, 3);
});
