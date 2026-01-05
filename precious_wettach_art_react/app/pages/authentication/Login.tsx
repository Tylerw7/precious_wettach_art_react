import { IoIosLock } from "react-icons/io";
import {Label} from '../../../src/components/ui/label'
import { Input } from "../../../src/components/ui/input";
import { Button } from "../../../src/components/ui/button";
import {useForm} from 'react-hook-form'
import {loginSchema, type LoginSchema} from '../../../lib/schemas/loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLoginMutation } from "../../features/account/accountApi";
import React from "react";





const Login = () => {

    const [login, {isLoading}] = useLoginMutation();

    const {register, handleSubmit, formState: {errors}} = useForm<LoginSchema>({
        mode: 'onTouched',
        resolver: zodResolver(loginSchema)
    });

    const onSubmit = async (data: LoginSchema) => {
        await login(data);
    }



  return (
    <div className="mt-[70px] flex justify-center items-center w-full h-screen">

        <form onSubmit={handleSubmit(onSubmit)} className="w-[90vw] sm:w-[500px] bg-[#cfc2ac] flex flex-col justify-center items-center p-4 gap-4 rounded-md">
            
            <IoIosLock size={52}/>
            <h3 className="font-bold text-[2rem]">Sign In</h3>
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

                <Button disabled={isLoading} className="w-[90%]" type="submit">SIGN IN</Button>

                <div className="flex gap-4">
                    <h3>Don't have an account?</h3>
                    <span className="text-blue-400">Sign up</span>
                </div>
            
        </form>

    </div>
  )
}

export default Login