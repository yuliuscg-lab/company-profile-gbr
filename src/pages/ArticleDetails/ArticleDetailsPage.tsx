import { Box, Chip, Stack, Typography, IconButton, Tooltip, Toolbar } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTimeOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarTodayOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBackOutlined";

/**
 * Shape of an article record as stored in Backendless.
 * Adjust/extend this to match your actual schema if needed.
 */
export interface Article {
	objectId: string;
	title: string;
	content: string; // HTML string
	category: string;
	article_status: "Draft" | "Published";
	img_url?: string | null;
	reading_time?: number | null;
	published_at?: number | string | null;
	created?: number;
	updated?: number;
}

interface ArticleReaderProps {
	article: Article;
	onBack?: () => void;
}

const CATEGORY_COLORS: Record<string, string> = {
	Tips: "#D98A3D",
	Internal: "#7C9A82",
	Produk: "#3E6E8E",
	Berita: "#B0543A",
};

const formatPublishedDate = (timestamp?: number | string | null) => {
	if (!timestamp) return null;
	const date = new Date(timestamp);
	if (Number.isNaN(date.getTime())) return null;
	return date.toLocaleDateString("id-ID", {
		day: "2-digit",
		month: "long",
		year: "numeric",
	});
};

const ArticleReader = ({ article, onBack }: ArticleReaderProps) => {
	const accent = CATEGORY_COLORS[article.category] ?? "#D98A3D";
	const publishedLabel = formatPublishedDate(article.published_at);

	return (
        <>
        <Toolbar/>
		<Box
			sx={{
				bgcolor: "white",
				minHeight: "100vh",
				
			}}
		>

			{/* Hero */}
			<Box
				sx={{
					position: "relative",
					width: "100%",
					height: { xs: 320, md: 460 },
					overflow: "hidden",
				}}
			>
				<Box
					component="img"
					src={article.img_url ?? undefined}
					alt={article.title}
					sx={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
						display: "block",
                        objectPosition:'center'
						
					}}
				/>
				<Box
					sx={{
						position: "absolute",
						inset: 0,
						background:
							"linear-gradient(180deg, rgba(28,37,33,0.15) 0%, rgba(28,37,33,0.15) 40%, rgba(28,37,33,0.92) 100%)",
					}}
				/>

				{onBack && (
					<Tooltip title="Kembali">
						<IconButton
							onClick={onBack}
							sx={{
								position: {md:"fixed", xs:"absolute"},
								top: {md:100, xs:20},
								left: {md:66, xs:20},
								bgcolor: "rgba(250,246,239,0.9)",
								"&:hover": { bgcolor: "#FAF6EF" }
							}}
						>
							<ArrowBackIcon sx={{ color: "#1C2521" }} />
						</IconButton>
					</Tooltip>
				)}

				<Box
					sx={{
						position: "absolute",
						left: 0,
						right: 0,
						bottom: 0,
						px: { xs: 3, md: 8 },
						pb: { xs: 3, md: 5 },
						maxWidth: 880,
						mx: "auto",
					}}
				>
					<Chip
						label={article.category}
						size="medium"
						sx={{
							bgcolor: 'secondary.main',
							color: "#FAF6EF",
							fontWeight: 600,
							letterSpacing: 0.6,
							textTransform: "uppercase",
							fontSize: 14,
							mb: 1.5,
						}}
					/>
					<Typography
						sx={{
							fontWeight: 600,
							fontSize: { xs: 28, md: 42 },
							lineHeight: 1.15,
							color: "#FAF6EF",
						}}
					>
						{article.title}
					</Typography>
				</Box>
			</Box>

			{/* Meta bar — the "horizon line" */}
			<Box
				sx={{
					maxWidth: 880,
					mx: "auto",
					px: { xs: 3, md: 8 },
				}}
			>
				<Stack
					direction="row"
					spacing={3}
					sx={{
						borderBottom: `2px solid`,
						py: 2,
						mt: 0,
                        alignItems:"center",
                        color:'secondary.main'
					}}
				>
					{publishedLabel && (
						<Stack direction="row" spacing={0.75} sx={{alignItems:"center"}}>
							<CalendarTodayIcon sx={{ fontSize: 20, color: "#6B7280" }} />
							<Typography sx={{ fontSize: 17, color: "#6B7280" }}>
								{publishedLabel}
							</Typography>
						</Stack>
					)}
					{!!article.reading_time && (
						<Stack direction="row" spacing={0.75} sx={{alignItems:"center"}}>
							<AccessTimeIcon sx={{ fontSize: 20, color: "#6B7280" }} />
							<Typography sx={{ fontSize: 17, color: "#6B7280" }}>
								{article.reading_time} menit baca
							</Typography>
						</Stack>
					)}
					{article.article_status === "Draft" && (
						<Chip
							label="Draft"
							size="small"
							variant="outlined"
							sx={{ borderColor: "#B0543A", color: "#B0543A", fontWeight: 600 }}
						/>
					)}
				</Stack>
			</Box>

			{/* Body */}
			<Box
				sx={{
					maxWidth: 720,
					mx: "auto",
					px: { xs: 3, md: 0 },
					pt: { xs: 4, md: 6 },
					pb: { xs: 6, md: 10 },
					color: "#1C2521",
					fontSize: 17,
					lineHeight: 1.85,

					"& h3": {
						fontFamily: "'Fraunces', serif",
						fontWeight: 600,
						fontSize: 24,
						mt: 5,
						mb: 1.5,
						color: "#1F4B43",
					},
					"& h4": {
						fontFamily: "'Fraunces', serif",
						fontWeight: 600,
						fontSize: 19,
						mt: 4,
						mb: 1,
						color: "#1C2521",
					},
					"& p": { mb: 2, color: "#33403B" },
					"& ul, & ol": { mb: 2, pl: 3, color: "#33403B" },
					"& li": { mb: 0.75 },
					"& li p": { mb: 0 },
					"& strong": { color: "#1C2521", fontWeight: 600 },
					"& a": { color: accent },
				}}
				dangerouslySetInnerHTML={{ __html: article.content }}
			/>
		</Box>
        </>
	);
};

export default ArticleReader;
