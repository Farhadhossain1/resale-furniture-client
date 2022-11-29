import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import './LogIn.css';



const LogIn = () => {
    const { register,  formState: { errors }, handleSubmit } = useForm();
    const {signIn,googleSignUp} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        googleSignUp(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            const userInfo ={name: user?.displayName, email: user?.email, role:"Buyer"};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data)
        })
            toast.success('User Created Successfully !!!')
        })
        .catch(error =>{
            console.log(error)
        })
    }
   

    const handleLogin = data =>{
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            // toast.success('log in successfully');
            toast.success('User Log In successfully !!!')
        })
        .catch(error =>{
            console.log(error.message);
            setLoginError(error.message);
        })
    }
    
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-[510px] p-12 bg-form  border-form'>
                <h2 className='text-3xl text-center  font-bold'>Log In</h2>

            <form onSubmit={handleSubmit(handleLogin)}>
                

                <div className="form-control w-full ">
                            <label className="label">
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
                            <input className='btn btn-success my-6  text-black w-full' value="Login" type="submit" />
                            {
                                loginError && <p className='text-red-500'>{loginError}</p>
                            }
            </form>
            <p>New to AllForm <Link className='text-secondary' to="/signup"><strong>Create new Account</strong></Link></p>
            <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline btn-success w-full'><FcGoogle className='text-2xl mx-2'></FcGoogle>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default LogIn;