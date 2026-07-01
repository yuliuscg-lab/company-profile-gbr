import { Box, CircularProgress, Typography } from '@mui/material'

export default function LoadingPage() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                width: '100vw',
                gap: 2,
            }}
        >
            <CircularProgress size={48} />
            <Typography variant="body1" color="text.secondary">
                Memuat...
            </Typography>
        </Box>
    )
}