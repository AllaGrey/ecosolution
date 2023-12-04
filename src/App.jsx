import { useFont } from './hooks/useFont';
import { fonts } from './constants/fonts';
import { Header } from './components/Header/Header';
import { GlobalStyle } from './components/GlobalStyles/GlobalStyles';
import { Container } from './App.styled';
import { MainSection } from './components/MainSection/MainSection';
import { AboutSection } from './components/AboutSection/AboutSection';
import { CasesSection } from './components/CasesSectoin/CasesSection';
import { FAQSection } from './components/FAQSection/FAQSection';
import { ContactSection } from './components/ContactSection/ContactSection';
import { Footer } from './components/Footer/Footer';

function App() {
  const fontsLoaded = useFont(fonts);

  return fontsLoaded ? (
    <Container>
      <GlobalStyle />
      <Header />
      <MainSection />
      <AboutSection />
      <CasesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </Container>
  ) : <p>Loading....</p>
  }

export default App
