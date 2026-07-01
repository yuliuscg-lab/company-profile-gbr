// pages/ArticleReaderPage.tsx
import { useParams, useNavigate } from "react-router";
import useFetch from "../../hooks/useFetch";
import type { IArticles } from "../Articles/ArticlesPage";
import backendlessApi from "../../config/axios.config";
import ArticleDetailsPage from "./ArticleDetailsPage";


const ArticleReaderPage = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();

	const { data: article, isLoading, error } = useFetch<IArticles>(
		`/Articles/${id}`,
		undefined,
		backendlessApi,
	);

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;
	if (!article) return null;

	return <ArticleDetailsPage article={article} onBack={() => navigate(-1)} />;
};

export default ArticleReaderPage;