import * as Yup from 'yup';
import * as services from '../../components/common/AxiosService';
import * as authServices from '../../components/Auth/AuthService';

export const userFormikConfig = (userInitialData, validateUser, setEmailConflictFlag, setConflictedEmail) => {
    
    return {

        initialValues: userInitialData,
        enableReinitialize: true,
        validate: validateUser,
        validateOnChange: false,  // I wanted to validate only on blur

        validationSchema: Yup.object({
            name: Yup.string().required('Imię nie może być puste!'),
            surname: Yup.string().required('Nazwisko nie może być puste!'),
            email: Yup.string().required('Adres email nie może być pusty!').email('Nieprawidłowy adres email!'),
        }),

        onSubmit: values => {
            services.setAuthorizedUserInfo(
                values,
                (response) => {
                    authServices.authenticationService.setNewToken(response.headers.authorization);
                    alert('Dane użytkownika zostały zaktualizowane.');
                },
                (error) => {
                    handleError(error, values, setEmailConflictFlag, setConflictedEmail);
                }
            );
        },

    };

}

export const passwordFormikConfig = () => {
    
    return {

        initialValues: {
            newPassw: '',
            repeatPassw: '',
        },

        validateOnChange: false,
  
        validationSchema: Yup.object().shape({
            newPassw: Yup.string().required('Hasło nie może być puste!'),
            repeatPassw: Yup.string().required('Hasło nie może być puste!').oneOf([Yup.ref('newPassw'), null], 'Powtórzone hasło nie zgadza się z pierwszym!'),
        }),

        onSubmit: values => {
            services.setAuthorizedUserPassword(
                values,
                (response) => {
                    authServices.authenticationService.setNewToken(response.headers.authorization);
                    alert('Dane użytkownika zostały zaktualizowane.');
                },
                (error) => {
                    handleError(error, values);
                }
            );
        },
        
    }

}

const handleError = (error, values, setEmailConflictFlag, setConflictedEmail) => {
    
    if(error.response?.status === 409) {
        setEmailConflictFlag(true);
        setConflictedEmail(values.email);
    } else {
        console.log(error);
    }

}