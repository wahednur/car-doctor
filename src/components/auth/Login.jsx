import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { userLogin } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    userLogin(email, password)
      .then((result) => {
        console.log(`${result.user} Login successfully`);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container mx-auto mt-10 mb-32">
      <Helmet>
        <title>User Login</title>
      </Helmet>
      <div className="flex flex-col md:flex-row md:justify-between gap-6">
        <div className="img w-full md:w-1/2">
          <img src="/public/assets/images/login/login.svg" alt="" />
        </div>
        <div className="log-res border w-full md:w-1/2 rounded-lg">
          <h1 className="text-4xl text-center mt-6 font-bold md:mt-[75px]">
            Login
          </h1>
          <div className="p-6 md:p-[75px]">
            <form onSubmit={handleLogin}>
              <div className="space-y-8">
                <div className="form-grp">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="form-control"
                  />
                </div>
                <div className="form-grp">
                  <label htmlFor="email">Email</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Your email"
                    className="form-control"
                  />
                </div>
                <input
                  type="submit"
                  value="Sign in"
                  className="cbtn cbtn-orange text-white w-full"
                />
              </div>
            </form>
            <div className="text-center mt-6">
              <p>Or Sign In with</p>
              <div className="log-social flex justify-center gap-4 mt-6">
                <img src="/assets/images/fb.svg" alt="" />
                <img src="/assets/images/in.svg" alt="" />
                <img src="/assets/images/google.svg" alt="" />
              </div>
            </div>
            <p className="mt-4 text-center">
              You don&apos;t have an account?
              <Link
                to="/sign-up"
                className="text-dr-orange font-bold hover:text-black transition-all"
              >
                {" "}
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
