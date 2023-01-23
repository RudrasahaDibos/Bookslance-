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
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url =`https://api.imgbb.com/1/upload?key=${imagesStorageKey}`;

    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(res =>res.json())
    .then(data => {
        console.log('imggg',data)
        if(result.success){
            const img = result.data.url;
            const doctor = {
          
                name: data.name,
                Authorname:data.Authorname,
                Quantity:data.quantity,
                Price:data.price,
                shipping:data.shipping,
                img : img
            }
        }
    })
        
  }
  
//   if (isLoading) {
//     return <Loading></Loading>;
//   }

  return (
    <div className=" ml-96">
      <h1 className="text-2xl ml-24">Add A New Book</h1>
      <form
        className="grid  justify-items-center  card w-full max-w-sm shadow-2xl bg-base-100  "
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
            {errors.Authorname?.type === "required" && (
              <span class="label-text-alt text-red-600 ">
                {errors.Authorname.message}
              </span>
            )}
          </label>
        </div>
       
        <div class="form-control w-full max-w-xs  ">
          <label class="label">
            <span class="label-text">Quantity</span>
          </label>
          <input
            type="number"
            placeholder="Quantity"
            class="input input-bordered w-full max-w-xs"
            {...register("quantity", {
              required: {
                value: true,
                message: "Quantity is requried ",
              },
            })}
          />
          <label class="label">
            {errors.quantity?.type === "required" && (
              <span class="label-text-alt text-red-600 ">
                {errors.quantity.message}
              </span>
            )}
          </label>
        </div>
        <div class="form-control w-full max-w-xs  ">
          <label class="label">
            <span class="label-text">Price</span>
          </label>
          <input
            type="number"
            placeholder="Price"
            class="input input-bordered w-full max-w-xs"
            {...register("price", {
              required: {
                value: true,
                message: "price is requried ",
              },
            })}
          />
          <label class="label">
            {errors.price?.type === "required" && (
              <span class="label-text-alt text-red-600 ">
                {errors.price.message}
              </span>
            )}
          </label>
        </div>
        <div class="form-control w-full max-w-xs  ">
          <label class="label">
            <span class="label-text">Shipping</span>
          </label>
          <input
            type="number"
            placeholder="Shipping"
            class="input input-bordered w-full max-w-xs"
            {...register("shipping", {
              required: {
                value: true,
                message: "Shipping is requried ",
              },
            })}
          />
          <label class="label">
            {errors.shipping?.type === "required" && (
              <span class="label-text-alt text-red-600 ">
                {errors.shipping.message}
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
            {errors.image?.type === "required" && (
              <span class="label-text-alt text-red-600 ">
                {errors.image.message}
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
