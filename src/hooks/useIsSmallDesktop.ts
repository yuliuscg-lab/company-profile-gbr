import { useTheme, useMediaQuery } from '@mui/material';

export const useIsSmallDesktop = () => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down('lg'));
};
