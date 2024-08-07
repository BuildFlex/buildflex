export interface ITheme {
  name: string;
  // primaryColor: string;
  // borderRadiusBase: string;
  // backgroundColor: string;
  backgroundColor: string;
  color: string;
  hexCode: string;
  linearBackground: string;
}
const defaultTheme = {
  name: 'ocean-blue',
  // primaryColor: '#15A0A3',
  // borderRadiusBase: '0.8rem',
  color: 'text-theme-ocean-blue',
  hexCode: '#087AAF',
  backgroundColor: 'bg-theme-ocean-blue',
  linearBackground: 'bg-gradient-ocean-blue',
};

export default defaultTheme;
