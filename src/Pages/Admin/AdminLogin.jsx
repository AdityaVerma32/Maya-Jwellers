import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { adminLogin } from '../../Api/Admin';
import useAuthStore from '../../Store/useAuthStore';
import { useState } from 'react';

const AdminLogin = () => {

    const [loginError, setLoginError] = useState(null);

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
    });

    const onSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await adminLogin(values)
            if (response.success) {
                // Save token and user details to Zustand store and localStorage
                useAuthStore.getState().login(response.data.user, response.data.token);
            } else {
                setLoginError(response.message)
            }
        } catch (error) {
            console.error(error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f9fafb] px-4">
            <div className="w-full max-w-sm p-6 bg-white rounded-2xl shadow-lg">
                {
                    loginError && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                            <strong className="font-bold">Error! </strong>
                            <span className="block sm:inline">{loginError}</span>
                        </div>
                    )
                }
                <h2 className="text-2xl font-bold text-center text-[#455f8c] mb-6">
                    Maya Jewellers Admin
                </h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>
                    {({ isSubmitting }) => (
                        <Form className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="admin@mayajewellers.com"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-[#455f8c] focus:border-[#455f8c] shadow-sm"
                                />
                                <ErrorMessage name="email" component="div" className="text-sm text-red-500 mt-1" />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <Field
                                    name="password"
                                    type="password"
                                    placeholder="••••••••"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-[#455f8c] focus:border-[#455f8c] shadow-sm"
                                />
                                <ErrorMessage name="password" component="div" className="text-sm text-red-500 mt-1" />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-2 px-4 text-white bg-[#455f8c] hover:bg-[#3a4e74] rounded-xl transition duration-200"
                            >
                                {isSubmitting ? 'Logging in...' : 'Login'}
                            </button>
                        </Form>
                    )}
                </Formik>
                <p className="text-xs text-gray-500 text-center mt-4">
                    © 2025 Maya Jewellers. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default AdminLogin;
