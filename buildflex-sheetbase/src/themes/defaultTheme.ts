export interface ITheme {
  name: string;
  backgroundColor: string;
  color: string;
  hexCode: string;
  linearBackground: string;
}
const defaultTheme = {
  name: 'ocean-blue',
  color: 'text-theme-ocean-blue',
  hexCode: '#087AAF',
  backgroundColor: 'bg-theme-ocean-blue',
  linearBackground: 'bg-gradient-ocean-blue',
};

export default defaultTheme;
