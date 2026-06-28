import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import useFetch from "../../../hooks/useFetch";
import SummaryTitleTag from "../../../components/common/SummaryTitleTag";
import ContentTitle from "../../../components/common/ContentTitle";
import ContentSummary from "../../../components/common/ContentSummary";

interface IRandomUser {
    results: {
        name: {title: string, first: string, last: string}
        picture: {large:string, medium:string, thumbnail:string}
    }[]
    info: {
        seed:string
        results: number
        page:number
        version:string
    }
}

interface ITeamMember {
    nama:string
    foto:string
    roles:string
    bio:string 
}

const teamMembersBase: Omit<ITeamMember,'nama'|'foto'>[] = [
    {
        roles:'Founder & Master Peracik',
        bio:'Memulai dari meracik umpan di teras rumah pada 2009, Slamet kini memimpin riset formula yang sudah memenangkan ratusan lomba.'
    },
    {
        roles:'Kepala Riset & Nutrisi',
        bio:'Ahli teknologi pangan yang memastikan setiap pelet punya profil nutrisi dan aroma yang konsisten di setiap batch produksi.'
    },
    {
        roles:'Lead Field Tester',
        bio:'Pemancing profesional yang menguji setiap formula langsung di kolam dan laut sebelum produk dirilis ke pasaran.'
    },
    {
        roles:'Manajer Operasional',
        bio:'Mengawal rantai produksi food-grade dari bahan baku hingga pengemasan agar mutu Tarikan selalu terjaga.'
    },
]

const Teams = () => {
    const {data, isLoading, error} = useFetch<IRandomUser>(
        'https://randomuser.me/api/?results=4'
    )

    if(isLoading) return <p>Loading ... </p>
    if(error) return <p>Error:{error.message}</p>
    if(!data) return null;

    const teamMembers:ITeamMember[] = teamMembersBase.map((member,index)=>{
        const person = data.results[index];

        return {
            ...member,
            nama:person?`${person.name.title} ${person.name.first} ${person.name.last}`:'',
            foto:person?person.picture.large:'',
        };
    });

    return (
        <Box component="section" sx={{ height: 'auto', p: { xs: 4, md: 10 }, bgcolor:'#ebf3ff'}}>
            <Box sx={{mb:4}}>
                <SummaryTitleTag title={'di balik layar'}/>
                <ContentTitle text={'tim yang bekerja dengan hati'}/>
                <ContentSummary summary={'Suasana kerja kami santai tapi serius soal mutu. Setiap orang didorong bereksperimen, berbagi temuan, dan turun langsung ke lapangan untuk membuktikan setiap formula.'}/>
                <ContentSummary summary={'Karena kami percaya: umpan terbaik hanya lahir dari tim yang benar-benar mencintai dunia memancing.'}/>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                {teamMembers.map((member) => (
                    <Card key={member.nama} sx={{ width: 600, p: 2, display:'flex', borderRadius:'16px', bgcolor:'white', gap:2, border:2, borderColor:'secondary.main' }}>
                        <Avatar
                            src={member.foto}
                            sx={{ width: 80, height: 80, mb: 2 }}
                        />
                        <CardContent sx={{ p: 0}}>
                            <Box>
                                <Typography sx={{fontWeight:'bold', fontSize:20}}>{member.nama}</Typography>
                                <Typography color="secondary" sx={{ mb: 1, fontSize:20 }}>
                                    {member.roles}
                                </Typography>
                            </Box>
                            <Typography sx={{ opacity: 0.7, fontSize:18 }}>
                                {member.bio}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    )
}

export default Teams;