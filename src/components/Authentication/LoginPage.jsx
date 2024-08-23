import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useLocation } from 'react-router-dom';
import { z } from 'zod';
import { getUser, login } from '../../services/userServices';

const schema = z.object({
	email: z
		.string()
		.email({ message: 'Please enter valid Email Address.' })
		.min(3),
	password: z
		.string()
		.min(8, { message: 'Password should be at least 8 Characters.' }),
});

const LoginPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: zodResolver(schema) });

	const [formError, setFormError] = useState('');
	const location = useLocation();

	const onSubmit = async (formData) => {
		try {
			await login(formData);
			const { state } = location;
			window.location = state ? state.form : '/';
		} catch (err) {
			if (err.response && err.response.status === 400) {
				setFormError(err.response.data.message);
			}
		}
	};

	if (getUser()) {
		return <Navigate to="/" />;
	}

	return (
		<>
			<section className="flex items-center justify-center min-h-screen bg-gray-100">
				<form
					action=""
					onSubmit={handleSubmit(onSubmit)}
					className="w-full max-w-md py-8 px-6 bg-white rounded shadow-md"
				>
					<h2 className="text-3xl font-bold mb-6 text-center">
						Login Form
					</h2>

					<div className="form_inputs">
						<div className="flex flex-col mb-5">
							<label
								htmlFor="email"
								className="text-lg font-semibold mb-2"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								className="h-12 px-3 text-lg font-medium border rounded outline-none focus:ring-2 focus:ring-majorelle-blue"
								placeholder="Enter your Email Address"
								{...register('email')}
							/>
							{errors.email && (
								<em className="form_error text-red-600">
									{errors.email.message}
								</em>
							)}
						</div>
						<div className="flex flex-col mb-5">
							<label
								htmlFor="password"
								className="text-lg font-semibold mb-2"
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								className="h-12 px-3 text-lg font-medium border rounded outline-none focus:ring-2 focus:ring-majorelle-blue"
								placeholder="Enter your password No"
								{...register('password')}
							/>
							{errors.password && (
								<em className="form_error text-red-600">
									{errors.password.message}
								</em>
							)}
						</div>

						{formError && (
							<em className="form_error text-xs text-red-500">
								{formError}
							</em>
						)}

						<button
							type="submit"
							className="h-12 w-full mt-6 text-lg font-semibold bg-majorelle-blue text-white rounded 
                            hover:bg-dark-majorelle-blue focus:outline-none focus:ring-2 focus:ring-majorelle-blue"
						>
							Submit
						</button>
					</div>
				</form>
			</section>
		</>
	);
};

export default LoginPage;
