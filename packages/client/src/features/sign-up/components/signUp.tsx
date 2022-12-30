import React from 'react'
import { useForm } from 'react-hook-form'
import {
  createTheme,
  ThemeProvider,
  Container,
  CssBaseline,
  Box,
  Button,
  Typography,
  Link as MuiLink,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import {
  validatePassword,
  validateLogin,
} from '../../sign-in/services/validation'
import { SignUpData } from '../types'
import { Input } from '../../sign-in/components/input'
import { PasswordInput } from '../../sign-in/components/passwordInput'

const theme = createTheme()

export function SignUp() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      first_name: '',
      second_name: '',
      login: '',
      phone: '',
      password: '',
      confirm_password: '',
    },
    mode: 'onChange',
  })

  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  const onSubmit = (data: SignUpData) => console.log(data)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        component="main"
        maxWidth="xl"
        sx={{
          minHeight: '100vh',
          display: 'flex',
        }}>
        <Box
          sx={{
            margin: 'auto',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
            padding: '25px',
            borderRadius: '25px',
            width: '400px',
          }}>
          <Typography
            sx={{
              fontSize: '32px',
              fonrWeight: 'bolder',
            }}
            color="black"
            align="center">
            {'Enter to your account'}
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="login"
              control={control}
              rules={validateLogin}
              errors={errors}
              label="Введите Логин"
            />
            <PasswordInput
              name="password"
              control={control}
              rules={validatePassword}
              errors={errors}
              label="Введите Пароль"
              handleShow={showPassword}
              handleClick={handleClickShowPassword}
              handleMouseDown={handleMouseDownPassword}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                borderRadius: '10px',
                fontSize: 16,
                mt: 2,
                backgroundColor: '#2a2f3f',
                '&:hover': {
                  background: '#1976d2',
                },
              }}>
              Войти
            </Button>
            <MuiLink
              color="#fff"
              component={RouterLink}
              to={'/'}
              type="button"
              variant="button"
              underline="none"
              sx={{
                display: 'block',
                textAlign: 'center',
                fontSize: 16,
                padding: '6px 16px',
                lineHeight: 1.75,
                textTransform: 'uppercase',
                borderWidth: '3px',
                borderRadius: '10px',
                mt: 2,
                backgroundColor: '#2a2f3f',
                '&:hover': {
                  background: '#1976d2',
                },
              }}>
              Зарегистрироваться
            </MuiLink>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
