class Sidebar {

  get header() { return $('.MuiToolbar-gutters'); }
  get sidebarLogo() { return $('.MuiAvatar-img'); }
  get dashboardButton() { return $('.MuiListItemText-primary=Dashboard'); }
  get mediaEditorButton() { return $('.MuiListItemText-primary=Media Editor'); }
  get postManagementButton() { return $('.MuiListItemText-primary=Post Management'); }
  get boostPopstButton() { return $('.MuiListItemText-primary=Boost Post'); }
  get communityButton() { return $('.MuiListItemText-primary=Community'); }

}
module.exports = Sidebar;
