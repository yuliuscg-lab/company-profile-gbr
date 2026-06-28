import { Box, Typography, Avatar, Menu, MenuItem} from '@mui/material';
import { LogoutOutlined, KeyboardArrowDown } from '@mui/icons-material';
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../../common/Sidebar';
import { useAuth } from '../../../context/AuthContext';
import { ROUTES } from '../../../routes/routePaths';
import LogoGBR from '../../../assets/logo-gembira/logo-gbr.png';

const titleMap: Record<string, string> = {
  [ROUTES.CMSARTICLES]: 'Artikel',
  [ROUTES.CMSUSERS]: 'Kelola Pengguna',
  [ROUTES.CMSANALYTICS]: 'Analitik',
}

export default function DashboardLayout() {
  const location = useLocation()
  const { user, signOut } = useAuth()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const pageTitle = titleMap[location.pathname] ?? 'Artikel'
  const userEmail = user?.email || ''

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#F4F7FB' }}>
      <Sidebar />

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Box
          sx={{
            height: 72,
            px: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            bgcolor: 'white',
            borderBottom: '1px solid #E6EAF0',
            position: 'sticky',
            top: 0,
            zIndex: 10,
          }}
        >
          <Box sx={{display:'flex', gap:2, alignItems:'center'}}>
            <Box component='img' src={LogoGBR} sx={{width:'3rem'}}/>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#1F2937' }}>
              {pageTitle}
            </Typography>
          </Box>
          <Box
            sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            <Avatar sx={{ width: 36, height: 36, bgcolor: '#185FA5', fontSize: 14 }}>
              {userEmail.charAt(0).toUpperCase()}
            </Avatar>
            <Typography sx={{ fontSize: 14, fontWeight: 500, color: '#374151' }}>
              {userEmail}
            </Typography>
            <KeyboardArrowDown sx={{ fontSize: 18, color: '#9CA3AF' }} />
          </Box>

          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
            <MenuItem 
              onClick={() => {
                setAnchorEl(null)
                signOut()
              }} 
              sx={{ gap: 1, color: '#DC2626' }}
            >
              <LogoutOutlined fontSize="small" /> Keluar
            </MenuItem>
          </Menu>
        </Box>

        <Box sx={{ flex: 1, p: 4 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}