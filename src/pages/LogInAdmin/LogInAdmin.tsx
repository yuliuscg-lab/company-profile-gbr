import { Box } from '@mui/material'
import { Grid } from '@mui/material'
import LoginForm from '../../components/common/LoginForm'
import LoginBranding from './LoginBranding'
import LogoGBR from '../../assets/logo-gembira/logo-gbr.png'

export default function LoginPage() {
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex' }}>
        <Grid container sx={{ flex: 1 }}>
            <Grid
            size={{ xs: 0, md: 5 }}
            sx={{ bgcolor: 'secondary.main', display: { xs: 'none', md: 'flex' } }}>
                <LoginBranding/>
            </Grid>
            <Grid
            size={{ xs: 12, md: 7 }}
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column' ,p: 4, position:'relative' }}
            >
            <Box component='img' src={LogoGBR} sx={{position:'absolute', top:20, right:20 ,width:'5rem'}}/>
            <LoginForm />
            </Grid>
        </Grid>
        </Box>
    )
}
