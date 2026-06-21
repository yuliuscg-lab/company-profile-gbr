
import NavBar from './components/layout/NavBar/NavBar';
import AppRoutes from './routes/AppRoutes';
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";

function App() {


  return (
    <div className="app">
      <NavBar/>
      <main>
        <AppRoutes/>
      </main>
    </div>
  )
}

export default App
