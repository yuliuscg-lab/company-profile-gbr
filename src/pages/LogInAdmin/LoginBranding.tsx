import { Box, Typography } from '@mui/material'
import {
    DashboardOutlined,
    ArticleOutlined,
    GroupOutlined,
    BarChartOutlined,
} from '@mui/icons-material'

const features = [
    {
    icon: <ArticleOutlined sx={{ color: '#E6F1FB', fontSize: 32 }} />,
    title: 'Manajemen artikel',
    desc: 'Buat, edit, dan publikasikan konten dengan editor yang intuitif.',
    },
    {
    icon: <GroupOutlined sx={{ color: '#E6F1FB', fontSize: 32 }} />,
    title: 'Kelola tim',
    desc: 'Atur peran dan hak akses setiap anggota tim Anda.',
    },
    {
    icon: <BarChartOutlined sx={{ color: '#E6F1FB', fontSize: 32 }} />,
    title: 'Analitik real-time',
    desc: 'Pantau performa konten dan tren pembaca'
    }
]

export default function LoginBranding() {
    return (
        <Box sx={{
            width: '100%', height: '100%',
            bgcolor: '#transparent',
            display: 'flex', flexDirection: 'column',
            justifyContent: 'space-between',
            p: 4,
        }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box sx={{
                width: 54, height: 54, bgcolor: '#185FA5',
                borderRadius: 2, display: 'flex',
                alignItems: 'center', justifyContent: 'center',
            }}>
                <DashboardOutlined sx={{ color: '#E6F1FB', fontSize: 42 }} />
            </Box>
            <Box>
                <Typography sx={{ color: '#E6F1FB', fontWeight: 500, fontSize: 36, lineHeight: 1.2 }}>
                    CMS Admin
                </Typography>
                <Typography sx={{ color: '#85B7EB', fontSize: 16 }}>
                    Content Management System
                </Typography>
            </Box>
        </Box>

        <Box>
            <Typography sx={{ color: '#E6F1FB', fontSize: 36, fontWeight: 500, lineHeight: 1.3, mb: 0.5 }}>
                Kelola konten<br />dengan mudah.
            </Typography>
            <Typography sx={{ color: '#85B7EB', fontSize: 18, lineHeight: 1.6, mb: 3 }}>
                Satu platform untuk semua kebutuhan manajemen konten Anda.
            </Typography>

            {features.map((f) => (
                <Box key={f.title} sx={{ display: 'flex', gap: 1.5, mb: 2 }}>
                    <Box sx={{
                        width: 42, height: 42, bgcolor: '#185FA5',
                        borderRadius: 2, display: 'flex',
                        alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                        {f.icon}
                    </Box>
                    <Box>
                        <Typography sx={{ color: '#E6F1FB', fontSize: 16, fontWeight: 500, mb: 0.2}}>
                            {f.title}
                        </Typography>
                        <Typography sx={{ color: '#85B7EB', fontSize: 14, lineHeight: 1.5 }}>
                            {f.desc}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    </Box>
    )
}
