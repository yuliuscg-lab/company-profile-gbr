import { Box, Grid, Typography, Card, Chip } from '@mui/material'
import { ArticleOutlined, GroupOutlined, VisibilityOutlined, TrendingUpOutlined } from '@mui/icons-material'

const stats = [
  { label: 'Total Artikel', value: '24', icon: <ArticleOutlined />, color: '#185FA5' },
  { label: 'Total Pengguna', value: '8', icon: <GroupOutlined />, color: '#0EA5E9' },
  { label: 'Total Kunjungan', value: '3.2K', icon: <VisibilityOutlined />, color: '#16A34A' },
  { label: 'Pertumbuhan', value: '+12%', icon: <TrendingUpOutlined />, color: '#D97706' },
]

const recentArticles = [
  { title: 'Tips Menulis Artikel SEO', status: 'Published', date: '24 Jun 2026' },
  { title: 'Panduan Onboarding Tim Baru', status: 'Draft', date: '22 Jun 2026' },
  { title: 'Update Fitur CMS Bulan Ini', status: 'Published', date: '18 Jun 2026' },
]

export default function DashboardPage() {
  return (
    <Box>
      <Grid container spacing={2.5} sx={{ mb: 3 }}>
        {stats.map((s) => (
          <Grid key={s.label} size={{ xs: 12, sm: 6, md: 3 }}>
            <Card sx={{ p: 2.5, borderRadius: 3, boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
              <Box
                sx={{
                  width: 44, height: 44, borderRadius: 2,
                  bgcolor: `${s.color}1A`, color: s.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1.5,
                }}
              >
                {s.icon}
              </Box>
              <Typography sx={{ fontSize: 24, fontWeight: 700, color: '#1F2937' }}>
                {s.value}
              </Typography>
              <Typography sx={{ fontSize: 13, color: '#6B7280' }}>{s.label}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Card sx={{ p: 3, borderRadius: 3, boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
        <Typography sx={{ fontWeight: 600, mb: 2, color: '#1F2937' }}>
          Artikel Terbaru
        </Typography>
        {recentArticles.map((a, i) => (
          <Box
            key={a.title}
            sx={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              py: 1.5, borderBottom: i !== recentArticles.length - 1 ? '1px solid #F1F3F6' : 'none',
            }}
          >
            <Box>
              <Typography sx={{ fontSize: 14.5, fontWeight: 500, color: '#1F2937' }}>
                {a.title}
              </Typography>
              <Typography sx={{ fontSize: 12.5, color: '#9CA3AF' }}>{a.date}</Typography>
            </Box>
            <Chip
              label={a.status}
              size="small"
              sx={{
                bgcolor: a.status === 'Published' ? '#DCFCE7' : '#FEF3C7',
                color: a.status === 'Published' ? '#16A34A' : '#B45309',
                fontWeight: 500,
                fontSize: 12,
              }}
            />
          </Box>
        ))}
      </Card>
    </Box>
  )
}
