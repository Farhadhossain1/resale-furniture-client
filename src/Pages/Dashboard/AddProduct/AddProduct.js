import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_imageHostKey;

    const handleAddDoctor = data => {
      const image = data.image[0];
      const formData = new FormData();
      formData.append('image', image);
      const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
      fetch(url, {
          method: 'POST',
          body: formData
      })
      .then(res => res.json())
      .then(imgData => {
          if(imgData.success){
              console.log(imgData.data.url);
              toast.success('Add product successfully !!!')
              const product = {
                  
                    old_price: data.old_price,
                    name: data.name,
                    origan_price : data.origan_price,
                    condition : data.condition,
                    phone : data.phone,
                    location : data.location,
                    category_name : data.category_name,
                    description : data.description,
                    purchaseTime : data.purchaseTime,
                    used_time : data.used_time,
                    image : imgData.data.url,
                    seller_name: user?.displayName,
                    email: user?.email,
                    status: "available"
              }

              
              fetch('https://asm-used-server.vercel.app/products', {
                  method: 'POST',
                  headers: {
                      'content-type': 'application/json', 
                  },
                  body: JSON.stringify(product)
              })
              .then(res => res.json())
              .then(result =>{
                  if(result.acknowledged){
                     toast.success(`${data.name} is added successfully`);
                  navigate('/dashboard/seller/myProducts')
                  }
                 
              })
          }
      })
  }
    
    return (
        <div className='h-[1300px] flex justify-center items-center my-16'>
          <div className='w-[550px] p-12 bg-form  border-form'>
            <h2 className="text-4xl text-center text-semibold mt-4">Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
            <div className="form-control w-full mt-5 ">
              <label className="label">
                {" "}
                <span className="label-text font-serif font-semibold">
                  Product Name
                </span>
              </label>
              <input
                type="text"
                {...register("name")}
                className="input input-bordered w-full  "
                required
              />
            </div>
            <div className="form-control w-full mt-5">
              <label className="label">
                {" "}
                <span className="label-text font-serif font-semibold">
                  Product Old Price
                </span>
              </label>
              <input
                type="text"
                {...register("old_price")}
                className="input input-bordered w-full  "
                required
              />
            </div>           
            <div className="form-control w-full mt-5">
              <label className="label">
                {" "}
                <span className="label-text font-serif font-semibold">
                Origan Price 
                </span>
              </label>
              <input
                type="text"
                {...register("origan_price")}
                className="input input-bordered w-full  "
                required
              />
            </div>
            <div className='mt-5'>
                          <label className="label">
                            {" "}
                            <span className="label-text font-serif font-semibold">Product Condition </span>
                          </label>
                          <select
                            className="select select-bordered w-full"
                            {...register("condition", {
                              required: "Account Must be Select",
                            })}
                          >
                            <option selected>Excellent</option>
                            <option>Good</option>
                            <option>Fair</option>
                          </select>
                    </div>                  
            <div className="form-control w-full mt-5">
              <label className="label">
                {" "}
                <span className="label-text font-serif font-semibold">
                 Conduct Number 
                </span>
              </label>
              <input
                type="text"
                {...register("phone")}
                className="input input-bordered w-full  "
                required
              />
            </div>
            <div className='mt-5'>
                          <label className="label">
                            {" "}
                            <span className="label-text font-serif font-semibold">Selected Location </span>
                          </label>
                          <select
                            className="select select-bordered w-full"
                            {...register("location", {
                              required: "Account Must be Select",
                            })}
                          >
                            <option selected>Dhaka</option>
                            <option>	Barisal</option>
                            <option>Khulna</option>
                            <option>	Mymensingh</option>
                            <option>Chittagong</option>
                            <option>	Rajshahi</option>
                            <option>		Rangpur</option>
                            <option>		Sylhet</option>
                          </select>
          </div>
            <div className='mt-5'>
                          <label className="label">
                            {" "}
                            <span className="label-text font-serif font-semibold">Select Category</span>
                          </label>
                          <select
                            className="select select-bordered w-full"
                            {...register("category_name", {
                              required: "Account Must be Select",
                            })}
                          >
                            <option selected>BadRoom</option>
                            <option>KitchenWare</option>
                            <option>LivingRoom</option>
                          </select>
          </div>
          <div className="form-control w-full mt-5">
              <label className="label">
                {" "}
                <span className="label-text font-serif font-semibold">
                Description 
                </span>
              </label>
              <input
                type="text"
                {...register("description")}
                className="input input-bordered w-full  "
                required
              />
            </div>
          <div className="form-control w-full mt-5">
              <label className="label">
                {" "}
                <span className="label-text font-serif font-semibold">
                 Year of Purchase 
                </span>
              </label>
              <input
                type="text"
                {...register("purchaseTime")}
                className="input input-bordered w-full  "
                required
              />
            </div>
          <div className="form-control w-full mt-5">
              <label className="label">
                {" "}
                <span className="label-text font-serif font-semibold">
                 Using Time
                </span>
              </label>
              <input
                type="text"
                {...register("used_time")}
                className="input input-bordered w-full  "
                required
              />
            </div>    
            <div className="form-control w-full mt-5">
                    <label className="label"> <span className="label-text font-serif font-semibold">Upload Your Product Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full " />
                </div>       
                <input className='btn btn-accent w-full mt-16 btn-success' value="Add Product" type="submit" />
            </form>
        </div>
        </div>
    );
};

export default AddProduct;