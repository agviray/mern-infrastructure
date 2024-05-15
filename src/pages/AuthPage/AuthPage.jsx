import SignUpForm from '../../components/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

const AuthPage = ({ setUser }) => {
  return (
    <section>
      <div>
        <h1>Auth Page</h1>
        <SignUpForm setUser={setUser} />
        <LoginForm setUser={setUser} />
      </div>
    </section>
  );
};

export default AuthPage;
