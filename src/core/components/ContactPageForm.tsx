'use client';
import React, { FormEvent, useState } from 'react';
import Button from './Button';
import { ConfirmSwal, DangerSwal } from '@/core/common/SweetAlerts';
import { useForm, Controller } from 'react-hook-form';
import Chip from './Chip';
import Image from 'next/image';

type Props = {};

const ContactForm = ({}: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      budget: '',
      message: '',
    },
  });

  const handleSubmitForm = async (data: any) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          budget: data.budget,
          message: data.message,
        }),
      });
      if (!res.ok) {
        DangerSwal.fire({
          title: 'Something went wrong',
          html: 'Please try again in some moments',
          icon: 'error',
          confirmButtonText: 'Okay',
        });
      }
      ConfirmSwal.fire({
        title: 'Thank you for connecting',
        html: 'Our ops team will contact you soon!',
        icon: 'success',
        confirmButtonText: 'Okay',
      });
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-full w-full justify-center  py-20">
      <div className="relative flex h-full w-full flex-col items-center justify-center bg-gray-100 px-5 pb-40 md:w-3/4 md:px-32">
        <div className="upDownAnimation absolute left-10 top-10">
          <Image
            src={'/shape-person.png'}
            alt=""
            width={250}
            height={250}
            className="aspect-square h-24 w-24 md:h-32 md:w-32"
          />
        </div>
        <div className="upDownAnimation  bottom-10 right-10 hidden md:absolute md:block">
          <Image
            src={'/shape-face.png'}
            alt=""
            width={200}
            height={200}
            className="h-44 w-44"
          />
        </div>

        <div className="flex flex-col items-center justify-center pt-12 text-center">
          <Chip title="Get in touch" />
          <h2 className="my-3  text-2xl font-bold md:text-4xl">
            Have a project in mind?
          </h2>
          <h3 className="mb-10 text-xl font-bold md:text-2xl">
            {' '}
            Let&rsquo;s Connect
          </h3>
        </div>
        <form
          className="flex h-full w-full flex-col gap-5 rounded-xl bg-white p-8 shadow-lg"
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          {/* first row */}
          <div className="flex flex-col justify-center space-y-8 md:flex-row md:space-x-8 md:space-y-0">
            <div className="flex w-full flex-col">
              <input
                className="rounded-tl-30 placeholder-white::placeholder  w-full  border-b-2 border-solid py-2 pr-12 text-neutral-500 focus:outline-none focus:ring-0 md:pl-4"
                type="text"
                placeholder="Name"
                {...register('name', {
                  required: 'Name is required',
                })}
              />
              {errors.name && (
                <span className="mt-2 text-sm text-red-500">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="flex w-full flex-col">
              <input
                className="rounded-tl-30 placeholder-white::placeholder  w-full border-b-2 border-solid py-2 pr-12 text-neutral-500 focus:outline-none focus:ring-0 md:pl-4"
                type="email"
                placeholder="Email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                })}
              />
              {errors.email && errors.email.type === 'required' && (
                <p className="mt-2 text-sm text-red-500">Email is required.</p>
              )}
              {errors.email && errors.email.type === 'pattern' && (
                <p className="mt-2 text-sm text-red-500">Email is not valid.</p>
              )}
            </div>
          </div>
          {/* second row */}
          <div className="mt-5 flex flex-col justify-center space-y-8 md:flex-row md:space-x-8 md:space-y-0">
            <Controller
              control={control}
              name="subject"
              defaultValue=""
              rules={{ required: 'Subject is required' }}
              render={({ field }) => (
                <div className="flex w-full flex-col">
                  <select
                    {...field}
                    className="rounded-tl-30 w-full border-b-2 border-solid py-2 pr-12 text-neutral-500 focus:outline-none focus:ring-0 md:pl-4"
                  >
                    <option value="">Requirement</option>
                    <option value="Website Design">Website Design</option>
                    <option value="Social Media">Social Media</option>
                    <option value="SEO">SEO</option>
                    <option value="Content Marketing">Content Marketing</option>
                  </select>
                  {errors.subject && (
                    <span className="mt-2 text-sm text-red-500">
                      {errors.subject.message}
                    </span>
                  )}
                </div>
              )}
            />
            <Controller
              control={control}
              name="budget"
              defaultValue=""
              rules={{ required: 'Budget is required' }}
              render={({ field }) => (
                <div className="flex w-full flex-col">
                  <select
                    {...field}
                    className="rounded-tl-30 placeholder-white::placeholder w-full border-b-2 border-solid py-2 pr-12 text-neutral-500 focus:outline-none focus:ring-0 md:pl-4"
                  >
                    <option value="">Your Budget</option>
                    <option value="10,000 - 20,00">10,000 - 20,000</option>
                    <option value="20,000 - 30,000">20,000 - 30,000</option>
                    <option value="30,000 - 50,000">30,000 - 50,000</option>
                    <option value="50,000 - 100,000">50,000 - 100,000</option>
                    <option value="100,000 - 200,000+">
                      100,000 - 200,000+
                    </option>
                  </select>
                  {errors.budget && (
                    <span className="mt-2 text-sm text-red-500">
                      {errors.budget.message}
                    </span>
                  )}
                </div>
              )}
            />
          </div>
          <div className="mt-5 flex w-full flex-col justify-center">
            <Controller
              control={control}
              name="message"
              defaultValue=""
              render={({ field }) => (
                <>
                  <textarea
                    {...field}
                    className="rounded-tl-30 placeholder-white::placeholder w-full border-b-2 border-solid py-2 pr-12 text-neutral-500 focus:outline-none focus:ring-0 md:pl-4"
                    placeholder="Message"
                  />
                </>
              )}
            />
          </div>
          {/* third row */}
          <div className="flex w-full items-center">
            <input type="checkbox" id="checkbox" className="mr-2 h-5 w-5" />
            <label htmlFor="checkbox" className="text-sm">
              I am bound by the terms of the service I accept privacy policy.
            </label>
          </div>
          <div className="mt-5 flex w-full justify-center">
            <Button variant="primary" className="w-full" type="submit">
              Let&rsquo;s Connect
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
