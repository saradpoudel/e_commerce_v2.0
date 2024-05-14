import * as yup from 'yup';

const registerSchema = yup
    .object({
        firstName: yup.string().required('First name is required'),
        lastName: yup.string().required('Last name is required'),
        mobile: yup.string().optional(),
        email: yup.string().email('Invlid email address').required('Email is rquired'),
        password: yup.string().required('Password is required'),
        verifyPassword: yup.string().oneOf([yup.ref("password")], 'Password does not match')
    }).required();

export default registerSchema;

