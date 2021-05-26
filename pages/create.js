import { useForm } from "react-hook-form";

import Router from "next/router";

const Create = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      await fetch("/api/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      await Router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex flex-col items-center mt-40'>
      <h1 className='text-4xl font-bold mb-8'>Create a new post</h1>
      <form
        action='submit'
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col w-1/2 m-auto'
      >
        {errors.title && (
          <span className='text-red-400 px-4 pt-2'>This field is required</span>
        )}
        <input
          type='text'
          {...register("title", { required: true })}
          className='bg-gray-50 px-4 py-2 focus:bg-gray-200 mb-2'
          placeholder='title'
        />
        {errors.content && (
          <span className='text-red-400 px-4 pt-2'>This field is required</span>
        )}
        <input
          type='text'
          {...register("content", { required: true })}
          className='bg-gray-50 px-4 py-2 focus:bg-gray-200 mb-2'
          placeholder='content'
        />
        <input className='bg-blue-400 text-white py-2 px-4' type='submit' />
      </form>
    </div>
  );
};

export default Create;
