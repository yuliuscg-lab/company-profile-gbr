import { Box, Typography, IconButton, Drawer} from '@mui/material';
import { Close, MenuOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../../common/Sidebar';
import { ROUTES } from '../../../routes/routePaths';
import LogoGBR from '../../../assets/logo-gembira/logo-gbr.png';
import UserAvatar from './UserAvatar';
import { useIsMobile } from '../../../hooks/useIsMobile';

const titleMap: Record<string, string> = {
  [ROUTES.CMSARTICLES]: 'Artikel',
  [ROUTES.CMSUSERS]: 'Kelola Pengguna',
  [ROUTES.CMSANALYTICS]: 'Analitik',
}

export default function DashboardLayout() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pageTitle = titleMap[location.pathname] ?? 'Artikel'

  const isMobile = useIsMobile();

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#F4F7FB' }}>
      <Box sx={{display:isMobile?'none':'block'}}>
        <Sidebar isMobilee={false}/>
      </Box>
      

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
          <UserAvatar isMobile={false}/>
          <IconButton sx={{display:isMobile?'block':'none',':hover': { bgcolor: 'transparent' }}} disableRipple onClick={()=>setIsOpen(!isOpen)}>
            {
              isOpen? <Close fontSize='medium'/>:<MenuOutlined fontSize="medium"/>
            }
          </IconButton>
          <Drawer
          anchor="right" open={isOpen && isMobile} onClose={()=>setIsOpen(!isOpen)} sx={{width:275,  '& .MuiDrawer-paper': {
            width: 275}}}>
              
            <Sidebar isMobilee={true}/>

        </Drawer>
        </Box>

        <Box sx={{ flex: 1, p: 4 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}