import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import './SignUp.css';

const SignUp = () => {

    const { register,  formState: { errors }, handleSubmit } = useForm();
    const {createUser,updateUser} = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
   
    const handleSignUp = (data) => {
      
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role);
                        navigate(from, {replace: true});
                        toast.success("Signup Successfully !!!")
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
            
            });
    }

    const saveUser = (name, email, role) =>{
        const user ={name, email, role};
        fetch('https://asm-used-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
          
        })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
        <div className='w-[510px] p-12 bg-form  border-form'>
            <h2 className='text-3xl text-center  font-bold'>Sign up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full ">
                        <label className="label">
                        <span className="label-text text-xl font-semibold py-4">Name</span>
                        </label>
                        <input type="text"  {...register("name", 
                        {  required: "Name Address is required"}
                        )} placeholder="name" className="input input-bordered w-full "  />
                        {errors.name && <p className='text-red-600 mt-2'>{errors.name?.message}</p>}
                        </div> 

                  <div>
                          <label className="label my-3">
                            {" "}
                            <span className="label-text  text-xl font-semibold py-4">Select Your Account</span>
                          </label>
                          <select
                            className="select select-bordered w-full"
                            {...register("role", {
                              required: "Account Must be Select",
                            })}
                          >
                            <option selected>Buyer</option>
                            <option>Seller</option>
                          </select>
                          {errors.account && (
                            <p className="text-red-500">{errors.account.message}</p>
                          )}
          </div>
                       

            <div className="form-control w-full ">
                        <label className="label ">
                        <span className="label-text text-xl font-semibold py-4">Email</span>
                        </label>
                        <input type="email"  {...register("email", 
                        {  required: "Email Address is required"}
                        )} placeholder="email" className="input input-bordered w-full "  />
                        {errors.email && <p className='text-red-600 mt-2'>{errors.email?.message}</p>}
                        </div>
                        
            <div className="form-control w-full ">
                        <label className="label my-3">
                        <span className="label-text text-xl font-semibold ">Password</span>
                        </label>
                        <input type="password" {...register("password",
                         { required: "Password Address is required",
                         minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                         pattern: {value:/(?=.*[A-Z])(?=.*[0-9])/, message: 'Password must be strong and one uppercase or one number'}
                        },
                         
                        )} placeholder="password" className="input input-bordered w-full "   />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label my-3">
                        <span className="label-text text-xl ">Forget password</span>
                        </label>
                        </div>
                        <p>Already have an account <Link className='text-red-700' to="/login"><strong>Please Log In</strong></Link></p>
                        <input className='btn btn-success my-6 text-semibold text-black w-full' value="Sign up" type="submit" />

        </form>
        </div>
    </div>
    );
};

export default SignUp;