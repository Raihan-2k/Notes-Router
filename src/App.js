import React, {useState, useMemo,useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import Archive from './pages/Archive';
import DetailPage from './pages/DetailPage';
import { FiHome } from 'react-icons/fi';
import LoginPage from './pages/LoginPage';
import { getUserLogged, putAccessToken } from './utils/network-data';
import LocaleContext from './contexts/LocaleContext';
import Logout from './components/Logout';
import RegisterPage from './pages/RegisterPage';
import ToggleLocale from './components/ToggleLocale';
import ToggleTheme from './components/ToggleTheme';
import ThemeContext from './contexts/ThemeContext';
import EmptyPage from './pages/EmptyPage';

function App() {
  const home = '/';
  const login = '/*';
  const archive = '/archive';
  const add = '/notes/new';
  const detail = '/DetailPage/:id';
  const register = '/register';
  const emptyPage = '*';

  const [authedUser, setAuthedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'id');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');  

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === 'id' ? 'en' : 'id';
      localStorage.setItem('locale', newLocale);
      return newLocale;
    });
  };

  const localeContextValue = useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  useEffect(() => {
    const fetchGetUserLogged = async () => {
      const { data } = await getUserLogged();

      setAuthedUser(data);
      setLoading(false);
    };

    fetchGetUserLogged();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  

  const themeContextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  const onLoginSucces = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    setAuthedUser(data);
  };

  const onLogout = () => {
    setAuthedUser(null);

    putAccessToken('');
  };

  if (loading) {
    return null;
  }

  if (authedUser === null) {
    return (
      <ThemeContext.Provider value={themeContextValue}>
      <LocaleContext.Provider value={localeContextValue}>
      <div className="app-container">
        <header>
              <h1>
              <Link to="/"> <FiHome /> {locale === 'id' ? 'Beranda' : 'Home Page'} </Link>
              </h1>
              <ToggleLocale />
              <ToggleTheme />
            </header>
            <main>
              <Routes>
                <Route
                  path={login}
                  element={<LoginPage loginSuccess={onLoginSucces} />}
                />
                <Route path={register} element={<RegisterPage />} />
              </Routes>
            </main>
      </div>
      </LocaleContext.Provider>
      </ThemeContext.Provider>
    )
  }


  return (
    <ThemeContext.Provider value={themeContextValue}>
    <LocaleContext.Provider value={localeContextValue}>
    <div className="app-container">
      <header>
        <h1>
          <Link to="/"> <FiHome /> {locale === 'id' ? 'Beranda' : 'Home Page'} </Link>
        </h1>
      <Navigation/>
      <ToggleLocale />
      <ToggleTheme />
      <Logout logout={onLogout} name={authedUser.name} />
      </header>
      <main>
        <Routes>
          <Route path={home} element={<HomePage />} />
          <Route path={archive} element={<Archive />} />
          <Route path={add} element={<AddPage />} />
          <Route path={detail} element={<DetailPage />} />
          <Route path={emptyPage} element={<EmptyPage />} />
        </Routes>
      </main>
    </div>
    </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
  