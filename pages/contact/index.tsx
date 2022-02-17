/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Alert from '@mui/material/Alert';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

import TextField from '../../components/reusable/TextField';
import styles from '../../styles/contact/Contact.module.css';
import { contacts } from '../../stub/contacts';
import TextArea from '../../components/reusable/TextArea';
import { Message } from '../../helpers/types/message.type';
import { ErrorStatus } from '../../helpers/types/error.type';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Full Names'),
  email: Yup.string().email().required().label('Email'),
  message: Yup.string().required().label('Message'),
});

const Contact: NextPage = () => {
  const queryClient = useQueryClient();
  const [response, setResponse] = useState<ErrorStatus>({
    message: '',
    status: '',
    has_response: false,
  });

  const handleSendMessage = async ({ name, email, message }: Message) => {
    const { data: response } = await axios.post('/api/contact', {
      name,
      email,
      message,
    });
    return response.data;
  };

  const { mutate, isLoading, error } = useMutation(handleSendMessage, {
    onSuccess: () => {
      setResponse({
        message: 'Message sent successfully',
        status: 'success',
        has_response: true,
        severity: 'success',
      });
    },
    onError: () => {
      let errorMessage = 'Something went wrong';
      if (error instanceof Error) {
        errorMessage = `${error.message}`;
        setResponse({
          message: errorMessage,
          status: 'failed',
          has_response: true,
          severity: 'error',
        });
      } else {
        setResponse({
          message: errorMessage,
          status: 'failed',
          has_response: true,
          severity: 'error',
        });
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries('create');
    },
  });

  const handleSubmitMessage = (data: Message, { resetForm }: any) => {
    mutate(data);
    resetForm();
  };
  return (
    <div className={styles.container}>
      <div className={styles.contactWrapper}>
        {response.has_response && (
          <Alert
            variant='outlined'
            severity={response.severity}
            className='fixed shadow-2xl cursor-pointer bottom-20'
            onClose={() =>
              setResponse({
                message: '',
                status: '',
                has_response: false,
              })
            }
          >
            {response.message}
          </Alert>
        )}
        <span className={styles.contactTitle}>Get in touch!</span>
        <span className={styles.subTitle}>
          Contact Me for any inquiries you might have
        </span>
        <div className={styles.contactDetails}>
          {contacts.map((contact, index) => (
            <div className={styles.contactDetail} key={index + 1}>
              <Image src={contact.imageUrl} width={51.96} height={41.28} />
              <span className={styles.subTitle}>{contact.title}</span>
            </div>
          ))}
        </div>

        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          onSubmit={handleSubmitMessage}
          validationSchema={validationSchema}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            errors,
            handleBlur,
            touched,
            isValid,
          }) => (
            <form className={styles.formContainer} onSubmit={handleSubmit}>
              <div className={styles.inputContainer}>
                <div className={styles.inputLeft}>
                  <div className={styles.inputs}>
                    <>
                      <TextField
                        label='Your Name'
                        name='name'
                        type='text'
                        placeholder='Full Names'
                        onChange={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                      />
                      {touched.name && errors.name && (
                        <Alert
                          variant='outlined'
                          severity='error'
                          className='cursor-pointer'
                        >
                          {errors.name}
                        </Alert>
                      )}
                    </>
                    <>
                      <TextField
                        label='Your Email'
                        name='email'
                        type='email'
                        placeholder='Email Address'
                        onChange={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                      />
                      {touched.email && errors.email && (
                        <Alert
                          variant='outlined'
                          severity='error'
                          className='cursor-pointer'
                        >
                          {errors.email}
                        </Alert>
                      )}
                    </>
                  </div>
                </div>
                <div className={styles.inputRight}>
                  <>
                    <TextArea
                      label='Your Message'
                      name='message'
                      placeholder='leave your message'
                      inputStyle='min-h-[7.5rem]'
                      onChange={handleChange('message')}
                      onBlur={handleBlur('message')}
                      value={values.message}
                    />
                    {touched.message && errors.message && (
                      <Alert
                        variant='outlined'
                        severity='error'
                        className='cursor-pointer'
                      >
                        {errors.message}
                      </Alert>
                    )}
                  </>
                </div>
              </div>
              <button
                className={styles.formButton}
                type='submit'
                disabled={!isValid}
              >
                {isLoading ? (
                  <div className='flex items-center justify-center'>
                    <CircularProgress size={25} style={{ color: 'white' }} />
                    <span className='ml-2'>Sign up for free</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
