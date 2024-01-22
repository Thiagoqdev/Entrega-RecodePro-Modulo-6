import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ClientesList from "./Components/ClientesList";
import PacotesList from "./Components/PacotesList";
import ComprasList from "./Components/ComprasList";
import styles from "./Styles/page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Header />
        <ClientesList />
        <PacotesList />
        <ComprasList />
        <Footer />
      </div>
    </main>
  );
}
