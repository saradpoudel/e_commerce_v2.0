import * as yup from 'yup';

const loginSchema = yup
    .object({
        email: yup.string().email('Invlid email address').required('Email is rquired'),
        password: yup.string().required('Password is required')
    }).required();

export default loginSchema;

