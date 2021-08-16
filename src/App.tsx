import Header from './components/header';
import GlobalStyle from './styles/global';
import {ThemeProvider, DefaultTheme} from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistentedState from './utils/usePersistentedState';


function App() {

  const[theme, setTheme] = usePersistentedState<DefaultTheme>('Theme',light);

  const toggleTheme = () => {
    setTheme(theme.title ==='light'? dark : light)
  }

  return (
    <ThemeProvider theme = {theme} >
      <div className="App">
        <GlobalStyle/>
        <Header toggleTheme = {toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
