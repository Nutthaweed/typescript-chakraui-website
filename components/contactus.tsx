import React, { useState, useCallback} from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'
import axios from 'axios'

const Contactdiv = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
padding-top: 10px;
min-height: 30vh;
align-items: center;
text-align: center;
`

const ContactItems = styled.h2`
font-size: 2.25rem;
line-height: 2.5rem;
font-weight: 700;
`

const ContactImage = styled.div`
padding-botttom: 10;
`

const Contactbox = styled.input`
background-color: transparent;
color: rgb(126 34 206);
outline: 2px solid transparent;
outline-offset: 2px;
border-width: 2px;
border-radius: 1.5rem;
border-color: rgb(126 34 206);
padding-left: 8px;
padding-right: 8px;
padding-top: 2px;
padding-bottom: 2px;
`

const Contactform = styled.form`
display: flex;
flex-direction: column;
gap: 8px;
margin-top: 16px;
padding-left: 10px;
padding-right: 10px;
min-width: 100%;
`
const Contacttextarea = styled.textarea`
background-color: transparent;
color: rgb(126 34 206);
outline: 2px solid transparent;
outline-offset: 2px;
border-width: 2px;
border-radius: 1.5rem;
border-color: rgb(126 34 206);
padding-left: 8px;
padding-right: 8px;
padding-top: 6px;
padding-bottom: 6px;
min-height: 256px;
min-width: 95%;
gap: 6px;
`

const ErrorSpan = styled.span`
display: block;
`

const Errorfont = styled.strong`
font-weight: 700;
`

const ErrorDiv = styled.div`
background-color: rgb(254 226 226);
padding-top: 3px;
padding-bottom: 3px;
padding-left: 4px;
padding-right: 4px;
border-color: rgb(248 113 113);
color: rgb(185 28 28);
border-radius: 0.25rem;
position: relative;
`

const ResponseText = styled.div`
color: white;
font-size: 1.25rem;
line-height: 1.75rem;
font-weight: 700;
padding-left: 4px;
padding-right: 4px;
padding-top: 3px;
padding-bottom: 3px;
`

const ButtonDiv = styled.div`
text-align: center;
margin-top: 10px;
`

const SubmitButton = styled.button`
ิิbackground-color: transparent;
border-radius: 0.25rem;
padding-left: 8px;
padding-right: 8px;
padding-top: 2px;
padding-bottom: 2px;
border-color:gb(126 34 206);
`

const ContactUs: React.FC = () => {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null}
    })
    const [inputs, setInputs ] = useState({
        user: '',
        email: '',
        review: '',
        problem: ''
    })
    

    const handleOnChange = useCallback(e => {
        e.persist()
        setInputs(prev => ({ 
            ...prev,
            [e.target.id]: e.target.value
        }))
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null}
        })
    }, [])

    const handleServerResponse = useCallback((ok, msg) => {
        if (ok) {
            setStatus({
               submitted: true,
               submitting: false,
               info: { error: false, msg}
            })
            setInputs({
                user: '',
                email: '',
                review: '',
                problem: ''
            })
        } else {
            setStatus({
                submitted: false,
                submitting: false,
                info: { error: true, msg}
            })
        }
    }, [])

    const handleSubmit = useCallback((e) => {
      e.preventDefault()
      setStatus(prevStatus => ({
          ...prevStatus, submitting: true
      }))
      axios({
          method: 'POST',
          url: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT_URL,
          data: inputs
      }).then(_response => {
          handleServerResponse(true, 'Thank you for your feedback')
      })
    }, [inputs, handleServerResponse])

    return (
    <Contactdiv>
        <ContactImage>
         <Image  src="/images/logo.png" width={100} height={100} alt="logo contact"/>
        </ContactImage>
     <ContactItems>
         Contact and Support
     </ContactItems>
     <Contactform onSubmit={handleSubmit}>
         {status.info.error && (
             <ErrorDiv role="alert"><Errorfont>Error</Errorfont>: {' '}<ErrorSpan>{status.info.msg}</ErrorSpan></ErrorDiv>
         )}
         {status.submitted ? (
             <ResponseText role="alert">Your message has been successfully sent. Thank for feedback!</ResponseText>
         ): (
             <>
              <Contactbox id="user" name="user" required maxLength={128}  type="text" placeholder="Username" onChange={handleOnChange} value={inputs.user}/>
         <Contactbox id="email" name="email" required maxLength={128}  type="text" placeholder="Email" onChange={handleOnChange} value={inputs.email}/>
         <Contacttextarea id="review" name="review" required maxLength={1048576} placeholder="Review About This Template" onChange={handleOnChange} value={inputs.review}></Contacttextarea>
     <Contacttextarea id="problem" name="problem" required maxLength={1048576} placeholder="Problem About This Template"onChange={handleOnChange} value={inputs.problem}></Contacttextarea>
     <ButtonDiv>
        <SubmitButton type="submit">
            {!status.submitting ? !status.submitted ? 'Submit' : 'Submitted' : 'Submitting...'}
        </SubmitButton>
     </ButtonDiv>
             </>
         )}
     </Contactform>
    </Contactdiv>
    )
}

export default ContactUs