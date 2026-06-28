import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineContent,
    timelineItemClasses,
} from '@mui/lab';
import { Box, Typography } from "@mui/material";

interface TimelineData {
    year: string
    title: string
    description: string
}

const timelineData: TimelineData[] = [
    {
        year: '2009',
        title: 'AWAL DARI DAPUR KECIL',
        description:
            'Slamet Wijaya mulai meracik umpan untuk komunitas pemancing lokal di teras rumahnya.',
    },
    {
        year: '2014',
        title: 'PABRIK PERTAMA',
        description:
            'Permintaan melonjak, Tarikan membangun fasilitas produksi food-grade pertamanya.',
    },
    {
        year: '2018',
        title: 'TIM RISET TERBENTUK',
        description:
            'Bergabungnya ahli nutrisi pangan membawa formulasi ke level laboratorium.',
    },
    {
        year: '2025',
        title: 'JUARA NASIONAL',
        description:
            'Lebih dari 320 kemenangan lomba dan distribusi ke seluruh penjuru Indonesia.',
    },
]

export default function TimeLine() {
    return (
        <Box sx={{ bgcolor: '#transparent', py: 1, px: 2 }}>
            <Timeline 
                position='right'
                sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
        },
    }}
            >
                {timelineData.map((item, index) => (
                    <TimelineItem key={item.year}>
                        <TimelineSeparator>
                            <TimelineDot
                                sx={{
                                    bgcolor: '#fff',
                                    border: '3px solid',
                                    borderColor: '#0f766e',
                                    boxShadow: 'none',
                                    width: 16,
                                    height: 16,
                                    m: 0,
                                }}
                            />
                            {index !== timelineData.length - 1 && (
                                <TimelineConnector sx={{ bgcolor: '#cbd5e1' }} />
                            )}
                        </TimelineSeparator>
                        <TimelineContent sx={{ pb: 2, pt: 0 }}>
                            <Typography
                                sx={{
                                    color: '#ea580c',
                                    fontWeight: 700,
                                    fontSize: '1.1rem',
                                    mb: 0.2,
                                }}
                            >
                                {item.year}
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#1e293b',
                                    fontWeight: 700,
                                    fontSize: '1.15rem',
                                    mb: 0.5,
                                }}
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#64748b',
                                    fontSize: '0.95rem',
                                    lineHeight: 1.6,
                                    maxWidth: 480,
                                }}
                            >
                                {item.description}
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Box>
    )
}