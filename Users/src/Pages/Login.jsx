import React from "react";

function Login() {
  const [loginState, setLoginState] = React.useState("Sing Up");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onsubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <form action="" className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start pb-5 p-8 min-w-[340px] md:min-w-[400px] lg:min-w-[520px] bg-white rounded-lg shadow-lg">
        <p className="text-2xl font-semibold">
          {loginState === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p>
          Please {loginState === "Sign Up" ? "Sign Up " : "Login "} to book
          appointment
        </p>

        {loginState === 'Sign Up' &&  <div >
          <p className="w-full text-md font-medium">Full Name</p>
          <input
            className= {`border border-zinc-500 rounded min-w-[340px] md:min-w-[400px] lg:min-w-[520px] p-2 mt-1 `}
            type="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>}

       

        <div>
          <p className="w-full text-md font-medium">Your Email</p>
          <input
            className="border border-zinc-500 rounded min-w-[340px] md:min-w-[400px] lg:min-w-[520px] p-2 mt-1"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <p className="w-full text-md font-medium">Your Password</p>
          <input
            className="border border-zinc-500 rounded min-w-[340px] md:min-w-[400px] lg:min-w-[520px] p-2 mt-1"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="min-w-[340px] md:min-w-[400px] lg:min-w-[520px] bg-blue-200 hover:bg-blue-600 hover:text-amber-100 py-2 rounded-md text-base font-semibold cursor-pointer">
          {loginState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <p className="text-sm">
          {loginState === "Sign Up"
            ? "Already have an account? "
            : "Don't have an account? "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() =>
              setLoginState((prev) => (prev === "Sign Up" ? "Login" : "Sign Up"))
            }
          >
            {loginState === "Sign Up" ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </form>
  );
}

export default Login;
