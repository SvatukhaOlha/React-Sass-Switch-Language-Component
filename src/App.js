import SwitchLanguage from './components/header/SwitchLanguage';
import GetData from './data/getData';
import { LanguageProvider } from './context/header/languageContext'

function App() {
  return (
    <LanguageProvider>
      <SwitchLanguage />
      <GetData />
    </LanguageProvider>
  );
}

export default App;
