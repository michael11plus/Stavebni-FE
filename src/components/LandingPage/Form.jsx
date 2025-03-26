import React, { useRef, useState } from 'react';
import '../../styles/landing-page.css';
import '../../styles/animations.css';
import { Col, Container, Row } from 'react-bootstrap';
import { OutlinedInput, FormControl, InputLabel, FormHelperText, TextField, FormControlLabel, Checkbox, Divider, Typography } from '@mui/material';
import { airplane } from '../../assets';

const Form = () => {
    const [emailError, setEmailError] = useState(false);
    const [sendFormAnimation, setSendFormAnimation] = useState(false);
    const [formHit, setFormHit] = useState(true);
    const formRef = useRef(null);

    const nameRef = useRef(null);
    const lastNameRef = useRef(null);
    const telRef = useRef(null);
    const emailRef = useRef(null);
    const textFieldRef = useRef(null);

    const handleEmailBlur = (e) => {
        const value = e.target.value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(value) || !value?.trim()) {
            setEmailError(false);
        } else {
            setEmailError(true);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const lastName = lastNameRef.current.value;
        const phone = telRef.current.value;
        const email = emailRef.current.value;

        console.log('Form submitted with:', {
            name,
            lastName,
            phone,
            email,
        });

    };

    const handleAnimationEnd = (e) => {
        if (e.animationName === 'send-form') {
            setSendFormAnimation(false);
        }
    };

    React.useEffect(() => {
        const handleScroll = () => {
            if (formRef.current) {
                const servicesRect = formRef.current.getBoundingClientRect();
                if (servicesRect.top + 120 <= window.innerHeight) {
                    setFormHit(true);
                }
                else
                    setFormHit(false);
            }

        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);   
        }
    }, []);

    return (
        <Container ref={formRef} className='section form' fluid>
            <Row className={`bg-white base-width ${formHit ? 'a--fade-in-move-up' : 'opacity-0'}`}>
                <Col xs={12} md={5} className='form-container--right-bottom'>
                    <form className='d-flex flex-column justify-content-center align-items-center' onSubmit={handleSubmit}>
                        <p className='form--header-text mb-5'>
                            Napište nám
                        </p>
                        <FormControl fullWidth variant="outlined" className='mb-3'>
                            <InputLabel htmlFor="name">Jméno</InputLabel>
                            <OutlinedInput inputRef={nameRef} id="name" placeholder='Jan' label="Jméno" />
                        </FormControl>
                        <FormControl fullWidth variant="outlined" className='mb-3'>
                            <InputLabel htmlFor="lastName">Příjmení</InputLabel>
                            <OutlinedInput inputRef={lastNameRef} id="lastName" placeholder='Novák' label="Příjmení" />
                        </FormControl>
                        <FormControl fullWidth variant="outlined" className="mb-3">
                            <InputLabel htmlFor="tel" sx={{background: 'white', paddingRight: '4px'}}>Telefonní číslo</InputLabel>
                            <OutlinedInput
                                inputRef={telRef}
                                type='number'
                                id="tel" 
                                label="Telephone"
                                placeholder='+420 777 666 555'
                                sx={{
                                    '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
                                        display: 'none',
                                    },
                                    '& input[type="number"]': {
                                        MozAppearance: 'textfield',
                                    }
                                }}
                            />
                        </FormControl>
                        <FormControl className='mb-5' fullWidth variant="outlined" error={emailError}>
                            <InputLabel htmlFor="email" sx={{background: 'white', paddingRight: '4px'}}>Emailová adresa</InputLabel>
                            <OutlinedInput
                                inputRef={emailRef}
                                id="email"
                                type="email"
                                placeholder="jan.novak@email.cz"
                                onBlur={handleEmailBlur}
                                label="Příjmení"
                            />
                            {emailError && <FormHelperText>Invalid email address</FormHelperText>}
                        </FormControl>
                        <TextField
                            className='mb-4'
                            inputRef={textFieldRef}
                            label="Více informací"
                            variant="outlined"
                            fullWidth
                            placeholder="Více informací..."
                            multiline
                            rows={4}
                            required
                        />
                        <FormControlLabel
                            className='mb-3'
                            sx={{
                                fontSize: '10px',
                            }}
                            control={
                                <Checkbox
                                    defaultChecked
                                    color='default'
                                    sx={{
                                        color: 'black',
                                        '&.Mui-checked': {
                                          color: 'black',
                                        },
                                      }}
                                />
                            }
                            label={
                                <Typography
                                    sx={{
                                        fontSize: '12px',
                                        display: 'flex'
                                    }}
                                >
                                    <span style={{cursor: 'default'}}>Souhlasím s&nbsp;</span>
                                    <span className='form--conditions-agreement-text'>obchodními podmínkami.</span>
                                </Typography>
                            }
                        />
                        <button
                            className=" position-relative button--black__submit-form"
                            style={{overflow: 'hidden'}}
                            onMouseEnter={() => setSendFormAnimation(true)}
                            onMouseLeave={() => {
                                setSendFormAnimation(false);
                            }}
                            type='submit'
                        >
                            {sendFormAnimation && <img
                                src={airplane}
                                height={48}
                                className={`position-absolute airplane-icon ${sendFormAnimation ? 'form-submit' : ''}`}
                                onAnimationEnd={handleAnimationEnd}
                                alt='Papírová vlaštovka'
                            />}
                            <div>
                                Odeslat
                            </div>
                        </button>
                    </form>
                </Col>
                <Col className='py-4 d-flex'>
                    <Divider orientation="vertical" />
                </Col>
                <Col xs={12} md={6} className='form-container--left-top d-none d-md-flex flex-md-column align-items-center'>
                    <p className='form--header-text mb-5' style={{fontWeight: '400'}}>
                        Konzultace zdarma
                    </p>
                    <p style={{fontSize: '1.5rem', fontWeight: '300'}}>
                        Ať už máte otázky, potřebujete radu, nebo si chcete promluvit o svém projektu, náš tým je připraven vás podpořit – bez jakýchkoli závazků.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Form;
