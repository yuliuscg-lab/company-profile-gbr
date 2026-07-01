import { Box, Typography, Card } from '@mui/material'
import { ConstructionOutlined } from '@mui/icons-material'

type ComingSoonProps = {
  title: string
  description?: string
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
        py: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        px: 3,
      }}
    >
      <Box
        sx={{
          width: 64, height: 64, borderRadius: '50%',
          bgcolor: '#185FA51A', color: 'secondary.main',
          display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2.5,
        }}
      >
        <ConstructionOutlined sx={{ fontSize: 30 }} />
      </Box>
      <Typography sx={{ fontWeight: 600, fontSize: 18, color: '#1F2937', mb: 0.5 }}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: 14, color: '#9CA3AF', maxWidth: 360 }}>
        {description ?? 'Fitur ini sedang kami siapkan dan akan segera hadir.'}
      </Typography>
    </Card>
  )
}
