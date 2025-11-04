import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className={'container'}>
        <h2>Frontend Recruitment Test</h2>
        <p>Environment ready. Tasks coming soon...</p>
      </main>
      <Footer />
    </>
  );
};
