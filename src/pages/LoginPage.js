import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import LocaleContext from '../contexts/LocaleContext';
import { login } from '../utils/network-data';
 
function LoginPage({ loginSuccess }) {
  const { locale } = useContext(LocaleContext);

  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
 
    if (!error) {
      loginSuccess(data);
    }
  };
 
  return (
    <section className='login-page'>
      <h2>{locale === 'id'
          ? 'Masuk Ke aplikasi'
          : 'Login to use app'}
          </h2>
      <LoginInput login={onLogin} />
      <p>{locale === 'id' ? 'Belum punya akun?' : `Dont'have an Account?`}{' '}
        <Link to="/register">
          {locale === 'id' ? 'Daftar di sini.' : 'Register Here'}
        </Link></p>
    </section>
  );
};
 
LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};
 
export default LoginPage;