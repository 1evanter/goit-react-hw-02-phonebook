import { Formik } from 'formik';
import { StyledForm, StyledField } from './ContactForm.styled';
import { nanoid } from 'nanoid';

export const ContactForm = ({onAdd}) => {
    return (
        <Formik
            initialValues={{
                name: '',
                number: '',
            }}
           
            onSubmit={(values, actions) =>
               { onAdd({...values, id: nanoid()});
    actions.resetForm()}
            }
         
        >
      <StyledForm>
                <label> Name
                <StyledField name="name"   
                    type="text"
                    pattern="^[а-яА-ЯёЁa-zA-Z\s]+$"
                    required />
                </label>
      
                <label> Number
                <StyledField name="number"   
                    type="tel"
                    pattern="\+\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required />
                </label>
        <button type="submit">Add contact</button>
      </StyledForm>
    </Formik>
    )
}