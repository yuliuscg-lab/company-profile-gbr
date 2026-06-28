    import { Box, TextField, Button, Typography, Link, CircularProgress, IconButton } from '@mui/material'
    import { Login, Mail, Lock, VisibilityOff, Visibility } from '@mui/icons-material'
    import { useFormik } from 'formik'
    import * as Yup from 'yup'
    import { useAuth } from '../../context/AuthContext'
    import { useState } from 'react'

    export default function LoginForm() {
        const { signIn, isAuthenticating } = useAuth()
        const [showPassword, setShowPassword] = useState<boolean>(false);

        const formik = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema: Yup.object({
            email: Yup.string()
            .email('Format email tidak valid')
            .required('Email wajib diisi'),
            password: Yup.string()
            .min(8, 'Password minimal 8 karakter')
            .required('Password wajib diisi'),
        }),
        onSubmit: (values) => {
            console.log('submit dipanggil', values)
            signIn(
            values.email,
            values.password,
            undefined,
            () => formik.setFieldError('password', 'Email atau password salah'),
        )
        },
    })

    return (
        <Box sx={{ width: '100%', maxWidth: 360 }}>
            <Typography variant="overline" sx={{ color: '#185FA5', fontWeight: 500 }}>
                Selamat datang kembali
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 500, mt: 0.5, mb: 0.5 }}>
                Masuk ke akun Anda
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Belum punya akun?{' '}
            <Link href="#" underline="hover">Hubungi admin</Link>
            </Typography>

            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth label="Email" id="email" name="email" type="email"
                    value={formik.values.email} onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    slotProps={{
                        input: {
                        startAdornment: <Mail sx={{ mr: 1, color: 'text.disabled', fontSize: 20 }} />,
                        },
                    }}
                    sx={{ mb: 2, 
                            '& #email:-webkit-autofill': {
                            WebkitBoxShadow: '0 0 0 1000px white inset',
                            WebkitTextFillColor: '#000000',
                            transition: 'background-color 5000s ease-in-out 0s',
                            },
                            '& #email:-webkit-autofill:hover': {
                            WebkitBoxShadow: '0 0 0 1000px white inset',
                            },
                            '& #email:-webkit-autofill:focus': {
                            WebkitBoxShadow: '0 0 0 1000px white inset',
                            },
                    }}
                />

                <TextField
                    fullWidth label="Password" id="password" name="password" type={showPassword?'text':'password'}
                    value={formik.values.password} onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    slotProps={{
                        input: {
                        startAdornment: <Lock sx={{ mr: 1, color: 'text.disabled', fontSize: 20 }} />,
                        endAdornment:(
                            <IconButton onClick={()=> setShowPassword(!showPassword)} edge='end'>
                                {showPassword?<VisibilityOff/>:<Visibility/>}
                            </IconButton>
                        ),
                    },}}
                />

            <Box sx={{ textAlign: 'right', mt: 1, mb: 2.5 }}>
                <Link href="#" variant="body2" underline="hover">Lupa password?</Link>
            </Box>

            <Button
                fullWidth type="submit" variant="contained" size="large"
                disabled={isAuthenticating}
                startIcon={isAuthenticating ? <CircularProgress size={16} color="inherit" /> : <Login />}
                sx={{ bgcolor: 'secondary.main', '&:hover': { bgcolor: '#185FA5' }, py: 1.3, color:'white'}}
            >
                {isAuthenticating ? 'Memproses...' : 'Masuk'}
            </Button>
            </form>
        </Box>
        )
    }