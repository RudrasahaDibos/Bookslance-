import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddNewBooksadmin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,reset
  } = useForm();

  const {} = useQuery("", () =>
    fetch(``).then((res) => res.json())
  );
    const imagesStorageKey ='5214c28229b504651d7c275abc1ea43d';
   /***
    * 3 ways to store images 
    * 1. third party storage ?? free open public storage is ok for practice project 
    * 2.Your own storage in your own server (file system )
    * 3.Database: MongoDb 
    * 
    * YUP: to validate File : Search : Yup file validation for react hook form 
    */



  const onSubmit = async data => {
    console.log('data',data)
      
        
  }
  
//   if (isLoading) {
//     return <Loading></Loading>;
//   }

  return (
    <div>
      <h1 className="text-2xl">Add A New Book</h1>
      <form
        className="grid  justify-items-center card w-full max-w-sm shadow-2xl bg-base-100  "
        onSubmit={handleSubmit(onSubmit)}
      >
        {/*name*/}
        <div class="form-control w-full max-w-xs  ">
          <label class="label">
            <span class="label-text">Enter This Book Name </span>
          </label>
          <input
            type="name"
            placeholder="Enter This Book Name"
            class="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Book Name  is requried ",
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

        <div class="form-control w-full max-w-xs  ">
          <label class="label">
            <span class="label-text">Author Name</span>
          </label>
          <input
            type="text"
            placeholder="Author Name"
            class="input input-bordered w-full max-w-xs"
            {...register("Authorname", {
              required: {
                value: true,
                message: "Authorname is requried ",
              },
            })}
          />
          <label class="label">
            {errors.Edu?.type === "required" && (
              <span class="label-text-alt text-red-600 ">
                {errors.Authorname.message}
              </span>
            )}
          </label>
        </div>
        <div class="form-control w-full max-w-xs  ">
          <label class="label">
            <span class="label-text">Category</span>
          </label>
          <input
            type="text"
            placeholder="Category"
            class="input input-bordered w-full max-w-xs"
            {...register("category", {
              required: {
                value: true,
                message: "Category is requried ",
              },
            })}
          />
          <label class="label">
            {errors.Edu?.type === "required" && (
              <span class="label-text-alt text-red-600 ">
                {errors.category.message}
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
        <div class="form-control  w-full max-w-xs">
          <label class="label">
            <span class="label-text">Specialty </span>
          </label>
          <select
            {...register("Specialty")}
            class="select w-full input-bordered max-w-xs"
          >
            
          </select>
        </div>

        <div class="form-control w-full max-w-xs  ">
          <label class="label">
            <span class="label-text">Photo</span>
          </label>
          <input
            type="file"
          
            class="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Images is requried ",
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


        <br />

        <input
          class="btn btn-primary w-full max-w-xs rounded-box place-items-center"
          type="submit"
          value="add"
        />
      </form>
    </div>
  );
};

export default AddNewBooksadmin;
