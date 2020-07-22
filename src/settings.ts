interface ISettings {
  title: string // Overrides the default title
  showSettings: boolean // Controls settings panel display
  showSidebarLogo: boolean // Controls siderbar logo display
  fixedHeader: boolean // If true, will fix the header component
  errorLog: string[] // The env to enable the errorlog component, default 'production' only
  sidebarTextTheme: boolean // If true, will change active text color for sidebar based on theme
}

// 系统的一些配置
const settings: ISettings = {
    title: '区域管控系统',
    showSettings: true,
    fixedHeader: true,
    showSidebarLogo: true,
    errorLog: ['production'],
    sidebarTextTheme: true
};

export default settings;
