"use client";

import { useForm, SubmitHandler } from 'react-hook-form';

interface FormValues {
  firstName: string;
  middleName: string;
  lastName: string;
}

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }, 
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await new Promise ((resolve)=>setTimeout(resolve,5000));
    console.log("submitting the form", data);
  };

  return (
    

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 justify-center items-center  mt-10 bg-lime-400 w-[400px] md:ml-96 font-normal"
    >
      <div className="flex flex-1 flex-col">
        <label htmlFor="firstName">First Name</label>
        <input className="border border-black"
          type="text"
          {...register('firstName', {
            required: 'First name is required',
            maxLength: {
            value: 8,
            message: 'First name cannot exceed 8 characters',
            },
            minLength: {
              value: 3,
              message: 'First name must be at least 3 characters long',
            },
        })}
        
        />
        {/* Display error message */}
        {errors.firstName && <span className='text-red-500 text-sm mt-1 '>{errors.firstName.message}</span>}
      </div>

      <div className="flex flex-1 flex-col ">
        <label htmlFor="middleName">Middle Name</label>
        <input
          id="middleName"
          type="text"
          {...register('middleName' ,{required:'Middle name is required', 
            maxLength:{value:6,message:'middle name can not exceed 6 characters',},
            minLength:{value:3, message:'at least 3 characters are needed',},})}
            className="border border-black"
            />
      </div>
      {errors.middleName && <span className='text-red-500 text-sm mt-1 '>{errors.middleName.message}</span>}

      <div className="flex flex-1 flex-col">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          {...register('lastName' ,
            { pattern:{
                value: /^[A-Za-z]+$/i,
                message:'message is not as per pattern'
             }
            })}
            
            className="border border-black"
            />
      </div>
      {errors.lastName && <span className='text-red-500 text-sm mt-1 '>{errors.lastName.message}</span>}

      
        <input type="submit" className="flex-1 bg-black text-lime-400 py-2 px-6 rounded" disabled={isSubmitting} value ={isSubmitting ? "Submitting" :"submit"}/>
        
    
      
    </form>
    
  );
};
