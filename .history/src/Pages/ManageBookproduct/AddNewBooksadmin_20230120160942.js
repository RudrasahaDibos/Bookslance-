import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const Add = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,reset
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch(`http://localhost:5000/service`).then((res) => res.json())
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
      const image = data.image[0];
      const formData = new FormData();
      formData.append('image', image);
      const url =`https://api.imgbb.com/1/upload?key=${imagesStorageKey}`;

      fetch(url, {
        method: 'POST',
        body: formData
      })
      .then(res =>res.json())
      .then(result=>{
           if(result.success){
            const img = result.data.url;
            const doctor = {
          
                name: data.name,
                email: data.email,
                Edu :data.Edu,
                Specialty:data.Specialty,
                img : img
            }
            ///send to your database;
            fetch('http://localhost:5000/doctor',{
                method:'POST',
                headers:{
                    "content-type": "application/json",
                    authorization:`Bearer ${localStorage.getItem('accesstoken')} `
                },
                body: JSON.stringify(doctor)
            })
            .then(res=>res.json())
            .then(inserted =>{
                if(inserted.insertedId){
                    toast.success('Doctors add successFuly')
                    reset()
                }
                else{
                    toast.error('Failed to Add A doctors')
                }

            })
           }
        
      })
  };
  
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-2xl">Add Some Doctors</h1>
      <form
        className="grid  justify-items-center card w-full max-w-sm shadow-2xl bg-base-100  "
        onSubmit={handleSubmit(onSubmit)}
      >
        {/*name*/}
        <div class="form-control w-full max-w-xs  ">
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

        <div class="form-control w-full max-w-xs  ">
          <label class="label">
            <span class="label-text">Education</span>
          </label>
          <input
            type="text"
            placeholder="Education"
            class="input input-bordered w-full max-w-xs"
            {...register("Edu", {
              required: {
                value: true,
                message: "Education is requried ",
              },
            })}
          />
          <label class="label">
            {errors.Edu?.type === "required" && (
              <span class="label-text-alt text-red-600 ">
                {errors.Edu.message}
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
            {services.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}{" "}
              </option>
            ))}
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

export default AddDoctors;
