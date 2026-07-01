import { ArticleOutlined, BarChartOutlined, GroupOutlined } from "@mui/icons-material"
import type { SvgIconProps } from "@mui/material"
import { CMS_PATHS } from "../routes/routePaths"


type ISidebarMenuItem = {
    label: string
    icon: React.ElementType<SvgIconProps>
    path: string
    comingSoon: boolean
}

const SidebarMenuItems: ISidebarMenuItem[] = [
    { label: 'Artikel', icon: ArticleOutlined, path: CMS_PATHS.ARTICLES, comingSoon: false },
    { label: 'Kelola Pengguna', icon: GroupOutlined, path: CMS_PATHS.USERS, comingSoon: true },
    { label: 'Analitik', icon: BarChartOutlined, path: CMS_PATHS.ANALYTICS, comingSoon: true },
]

export default SidebarMenuItems