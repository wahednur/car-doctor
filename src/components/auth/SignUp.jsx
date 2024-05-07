import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log("Handle sign up clicked", name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${user?.email} user created successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error.user);
      });
    form.reset();
  };

  return (
    <div>
      <div className="container mx-auto mt-10 mb-32">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div className="img w-full md:w-1/2">
            <img src="/public/assets/images/login/login.svg" alt="" />
          </div>
          <div className="log-res border w-full md:w-1/2 rounded-lg">
            <h1 className="text-4xl text-center mt-6 font-bold md:mt-[75px]">
              Sign Up
            </h1>
            <div className="p-6 md:p-[75px]">
              <form onSubmit={handleSignUp}>
                <div className="space-y-8">
                  <div className="form-grp">
                    <label htmlFor="email">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="form-control"
                    />
                  </div>
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
                    value="Sign up"
                    className="cbtn cbtn-orange text-white w-full"
                  />
                </div>
              </form>
              <div className="text-center mt-6">
                <p>Or Sign Up with</p>
                <div className="log-social flex justify-center gap-4 mt-6">
                  <img src="/assets/images/fb.svg" alt="" />
                  <img src="/assets/images/in.svg" alt="" />
                  <img src="/assets/images/google.svg" alt="" />
                </div>
              </div>
              <p className="mt-4 text-center">
                Already have an account?
                <Link
                  to="/login"
                  className="text-dr-orange font-bold hover:text-black transition-all"
                >
                  {" "}
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
