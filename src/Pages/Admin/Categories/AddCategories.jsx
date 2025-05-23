import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addCategory } from '../../../Api/Category';

const AddCategories = () => {
    const [serverError, setServerError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const navigate = useNavigate();

    const initialValues = {
        name: '',
        image: null,  // Adding an image field to initialValues
    };

    const validationSchema = Yup.object({
        name: Yup.string().trim().required('Category name is required'),
        image: Yup.mixed()
            .nullable()
            .test('fileSize', 'File too large', value =>
                !value || (value && value.size <= 5 * 1024 * 1024)
            )
            .test('fileType', 'Unsupported file format', value =>
                !value || (value && ['image/jpeg', 'image/png'].includes(value.type))
            ),
    });

    useEffect(() => {
        return () => {
            if (previewUrl) {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [previewUrl]);

    const onSubmit = async (values, { setSubmitting, resetForm }) => {
        setServerError(null);
        setSuccessMessage(null);
        try {
            console.log('Form values:', values);
            const response = await addCategory(values);
            if (response.success) {
                setSuccessMessage('Category added successfully!');
                setSelectedImage(null); // Reset selected image
                setPreviewUrl(null); // Reset preview URL
                resetForm();
            } else {
                setServerError(response.message || 'Failed to add category');
            }
        } catch (error) {
            console.error(error);
            setServerError('Something went wrong. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <div className="flex justify-between items-center text-gray-800 pt-4">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-4 px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded"
                >
                    ← Back
                </button>
            </div>
            <div className="max-w mx-auto bg-white p-6">
                <h2 className="text-2xl font-bold text-center text-[#455f8c] mb-6">
                    Add New Category
                </h2>
                {serverError && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
                        <strong>Error:</strong> {serverError}
                    </div>
                )}
                {successMessage && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4">
                        {successMessage}
                    </div>
                )}
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting, setFieldValue }) => (
                        <Form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Category Name
                                </label>
                                <Field
                                    name="name"
                                    type="text"
                                    placeholder="e.g. Rings, Anklets"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-[#455f8c] focus:border-[#455f8c] shadow-sm"
                                />
                                <ErrorMessage name="name" component="div" className="text-sm text-red-500 mt-1" />
                            </div>
                            <div>
                                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                    Category Image
                                </label>
                                <input
                                    id="image"
                                    name="image"
                                    type="file"
                                    accept="image/jpeg, image/png"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (file) {
                                            setSelectedImage(file);
                                            setPreviewUrl(URL.createObjectURL(file)); // create preview URL
                                            setFieldValue('image', file);
                                        }
                                    }}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-[#455f8c] focus:border-[#455f8c] shadow-sm"
                                />
                                <ErrorMessage name="image" component="div" className="text-sm text-red-500 mt-1" />
                                {previewUrl && (
                                    <div className="mt-4">
                                        <strong>Preview:</strong>
                                        <img
                                            src={previewUrl}
                                            alt="Selected preview"
                                            className="mt-2 w-32 h-32 object-cover border rounded-md"
                                        />
                                    </div>
                                )}

                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-2 px-4 text-white bg-[#455f8c] hover:bg-[#3a4e74] rounded-xl transition duration-200"
                            >
                                {isSubmitting ? 'Adding...' : 'Add Category'}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
};

export default AddCategories;
