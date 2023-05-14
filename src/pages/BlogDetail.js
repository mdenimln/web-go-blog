import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function BlogDetail() {
    const params = useParams();
    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(true);
    const [notFound, setnotFound] = useState(false);

    useEffect(() => {
        const getArticle = async () => {
            const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);
           

            if(!request.ok){
                setnotFound(true);
            }
            const response = await request.json();
            setArticle(response);
            setLoading(false);
        }
        getArticle();
    }, [params])

    if(notFound){
        return <h1>Artikel tidak ditemukan :(</h1>
    }
    return(
        <section>
            {loading ? (
                <i>Loading article...</i>
            ) : (
                <article>
                    <h1>{article.title}</h1>
                    <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
                    <img src={article.imageUrl} alt={article.title}/>
                    <p>{article.summary}</p>
                    <p>
                        Source: <a href={article.url} target="_blank" rel="noreferrer">{article.newsSite}</a>
                    </p>
                </article>
            )}
        </section>
    )
}