import { Box, List, ListItemButton, ListItemIcon, ListItemText, Typography, Chip } from '@mui/material'
import {
  DashboardOutlined,
  ArticleOutlined,
  GroupOutlined,
  BarChartOutlined,
} from '@mui/icons-material'
import { useNavigate, useLocation } from 'react-router-dom'
import { ROUTES } from '../../routes/routePaths'

const menuItems = [
  { label: 'Artikel', icon: <ArticleOutlined />, path: ROUTES.CMSARTICLES, comingSoon: false },
  { label: 'Kelola Pengguna', icon: <GroupOutlined />, path: ROUTES.CMSUSERS, comingSoon: true },
  { label: 'Analitik', icon: <BarChartOutlined />, path: ROUTES.CMSANALYTICS, comingSoon: true },
]

export default function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Box
      sx={{
        width: 260,
        height: '100vh',
        bgcolor: 'secondary.main',
        display: 'flex',
        flexDirection: 'column',
        position: 'sticky',
        top: 0,
        flexShrink: 0,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 3, py: 3 }}>
        <Box
          sx={{
            width: 42, height: 42, bgcolor: '#185FA5',
            borderRadius: 2, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
          }}
        >
          <DashboardOutlined sx={{ color: '#E6F1FB', fontSize: 26 }} />
        </Box>
        <Box>
          <Typography sx={{ color: '#E6F1FB', fontWeight: 600, fontSize: 18, lineHeight: 1.2 }}>
            CMS Admin
          </Typography>
          <Typography sx={{ color: '#85B7EB', fontSize: 12 }}>
            Content Management
          </Typography>
        </Box>
      </Box>

      <List sx={{ px: 2, mt: 1, flex: 1 }}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path
          
          return (
            <ListItemButton
              key={item.path}
              onClick={() => navigate(item.path)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                py: 1.1,
                bgcolor: isActive ? 'rgba(255,255,255,0.14)' : 'transparent',
                borderLeft: isActive ? '3px solid #E6F1FB' : '3px solid transparent',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.10)' },
                opacity: item.comingSoon ? 0.7 : 1,
              }}
            >
              <ListItemIcon sx={{ color: isActive ? '#E6F1FB' : '#85B7EB', minWidth: 36 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                slotProps={{
                  primary: {
                    sx: {
                      color: isActive ? '#E6F1FB' : '#C9DEF2',
                      fontSize: 14.5,
                      fontWeight: isActive ? 600 : 400,
                    },
                  },
                }}
              />
              {item.comingSoon && (
                <Chip
                  label="Segera"
                  size="small"
                  sx={{
                    height: 20,
                    fontSize: 10.5,
                    bgcolor: 'rgba(255,255,255,0.15)',
                    color: '#E6F1FB',
                  }}
                />
              )}
            </ListItemButton>
          )
        })}
      </List>

      <Box sx={{ px: 3, py: 2.5, borderTop: '1px solid rgba(255,255,255,0.12)' }}>
        <Typography sx={{ color: '#85B7EB', fontSize: 12 }}>
          &copy; {new Date().getFullYear()} CMS Admin
        </Typography>
      </Box>
    </Box>
  )
}