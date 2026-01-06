import React from 'react'
import { useRegisterMutation } from '../../features/account/accountApi'
import { useForm } from 'react-hook-form';
import {registerSchema, type RegisterSchema} from '../../../lib/schemas/registerSchema'
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../../../src/components/ui/button';
import { IoIosLock } from 'react-icons/io';
import { Label } from '../../../src/components/ui/label';
import { Input } from '../../../src/components/ui/input';
import { Link, useNavigate } from 'react-router-dom';



const Register = () => {
    const navigate = useNavigate();
    const [registerUser] = useRegisterMutation();
    const {register, handleSubmit, setError,formState: {errors, isValid, isLoading}} = useForm<RegisterSchema>({
        mode: 'onTouched',
        resolver: zodResolver(registerSchema)
    })

    const onSubmit = async (data: RegisterSchema) => {
        try {
            await registerUser(data).unwrap();
            //navigate('/login')
        } catch (error: any) {
            const errors = error?.data?.errors;
          
            if (errors?.DuplicateEmail?.length) {
              setError('email', {
                type: 'server',
                message: errors.DuplicateEmail[0],
              });
            }
          
            if (errors?.DuplicateUserName?.length) {
              setError('email', {
                type: 'server',
                message: errors.DuplicateUserName[0],
              });
            }
          }
        
    
    }



  return (
    <div className="mt-[70px] flex justify-center items-center w-full h-screen">

        <form onSubmit={handleSubmit(onSubmit)} className="w-[90vw] sm:w-[500px] bg-[#cfc2ac] flex flex-col justify-center items-center p-4 gap-4 rounded-md">
            
            <IoIosLock size={52}/>
            <h3 className="font-bold text-[2rem]">Register</h3>
                <div className="w-[90%] space-y-1">
                    <Label>Email</Label>
                    <Input
                        id="email"
                        type="email"
                        autoFocus
                        placeholder="Enter Email"
                        {...register("email")}
                        className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
                        
                    />
                    {errors.email && (
                        <p className="text-sm text-destructive">
                        {errors.email.message}
                        </p>
                    )}
                </div>

                <div className="w-[90%] space-y-1">
                    <Label>Password</Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Enter Password"
                        {...register("password")}
                        className={errors.password ? "border-destructive focus-visible:ring-destructive" : ""}
                        
                    />
                    {errors.password && (
                        <p className="text-sm text-destructive">
                        {errors.password.message}
                        </p>
                    )}
                </div>

                <Button disabled={isLoading || !isValid} className="w-[90%]" type="submit">REGISTER</Button>

                <div className="flex gap-4">
                    <h3>Have an account?</h3>
                    <Link to='/login' className="text-blue-400">Sign In</Link>
                </div>
            
        </form>

    </div>
  )
}

export default Register