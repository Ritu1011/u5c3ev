import "../components/login.css"

export const Login = () => {
  //  use reqres to log user in.

  return (
    <form className="loginform">
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
      /> <br />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
      /> <br />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
