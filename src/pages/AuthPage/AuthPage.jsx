import SignUpForm from '../../components/SignUpForm';

const AuthPage = ({ setUser }) => {
  return (
    <section>
      <div>
        <h1>Auth Page</h1>
        <SignUpForm setUser={setUser} />
      </div>
    </section>
  );
};

export default AuthPage;
