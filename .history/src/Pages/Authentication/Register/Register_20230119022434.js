import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../Firebase.init";
import UserToken from "../../../Hooks/UserToken";
import Loading from "../../Shared/Loading";

const Register = () => {
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, uppdateerror] = useUpdateProfile(auth);

  const [token] = UserToken(user || guser);

  const navigate = useNavigate();

  let signInError;

  if (loading || gloading) {
    return <Loading></Loading>;
  }

  if (error || gerror || uppdateerror) {
    signInError = (
      <p className="text-red-500">
        {error?.message || gerror?.message || uppdateerror?.message}
      </p>
    );
  }



  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Sign UP NOW !</h1>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="flex flex-col w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/*name*/}
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Enter your Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Enter your name"
                  class="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is requried ",
                    },
                  })}
                />
                <label class="label">
                  {errors.name?.type === "required" && (
                    <span class="label-text-alt text-red-600 ">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>

              {/* Email */}
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Enter your Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  class="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is requried ",
                    },

                    pattern: {
                      value: /[A-Za-z]{3}/,
                      message: "Proveid a vaild email",
                    },
                  })}
                />
                <label class="label">
                  {errors.email?.type === "required" && (
                    <span class="label-text-alt text-red-600 ">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span class="label-text-alt text-red-600 ">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              {/* password */}
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Enter Your password </span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  class="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: " password is requried ",
                    },

                    minLength: {
                      value: 6,
                      message: "minimum length is 6 charecter",
                    },
                  })}
                />
                <label class="label">
                  {errors.password?.type === "required" && (
                    <span class="label-text-alt text-red-600 ">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span class="label-text-alt text-red-600 ">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>

              {signInError}
              <input
                class="btn btn-primary w-full max-w-2xs  rounded-box place-items-center"
                type="submit"
                value="SiGn uP"
              />
            </form>

            <p>
              <small>
                All Ready You are Account{" "}
                <Link to="/login" className="text-primary">
                  Please Login
                </Link>
              </small>
            </p>
            <div class="divider">or</div>
            <button
              onClick={() => signInWithGoogle()}
              class="btn btn-primary rounded-box place-items-center"
            >
              GoogleLogin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
