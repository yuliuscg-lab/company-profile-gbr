import { KeyboardArrowDown, LogoutOutlined } from "@mui/icons-material";
import { Avatar, Box, Menu, MenuItem, Typography } from "@mui/material";
import { useAuth } from "../../../context/AuthContext";
import { useState } from "react";

type Props = {
    isMobile:boolean;
}

const UserAvatar = ({isMobile}:Props) => {

    const { user, signOut } = useAuth()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)


    const userEmail = user?.email || ''
    
    return (
        <><Box
            sx={{ display: isMobile?'flex':{xs:'none', md:'flex'}, alignItems: 'center', gap: 1, cursor: 'pointer' }}
            onClick={(e) => setAnchorEl(e.currentTarget)}
        >
            <Avatar sx={{ width: 36, height: 36, bgcolor: '#185FA5', fontSize: 14 }}>
                {userEmail.charAt(0).toUpperCase()}
            </Avatar>
            <Typography sx={{ fontSize: 14, fontWeight: 500, color: isMobile ? '#E6F1FB' : '#1F2937' }}>
                {userEmail}
            </Typography>
            <KeyboardArrowDown sx={{ fontSize: 18, color: '#9CA3AF' }} />
            </Box><Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
                <MenuItem
                    onClick={() => {
                        setAnchorEl(null);
                        signOut();
                    } }
                    sx={{ gap: 1, color: '#DC2626' }}
                >
                    <LogoutOutlined fontSize="small" /> Keluar
                </MenuItem>
            </Menu></>
    )
}

export default UserAvatar;