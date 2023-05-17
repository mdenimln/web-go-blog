import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './BlogDetail.css';

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
    const cardStyles = {
        container: {
          display: "flex",
          width: '100%',
          boxShadow: "0 0 3px 2px #cec7c759",
          flexDirection: 'column',
          alignItems: 'center',
        },
        title: {
            textAlign: 'center'
        },
        image: {
            width: '80%',

        },
        source: {
            textAlign: 'start',
            width: '80%'
        }

    }

    if(notFound){
        return <h1>Artikel tidak ditemukan :(</h1>
    }
    return(
        <section>
            {loading ? (
                <i>Loading article...</i>
            ) : (
                <article style={cardStyles.container}>
                    <img style={cardStyles.image} src={article.imageUrl} alt={article.title}/>
                    <div>
                        <h1 style={cardStyles.title}>{article.title}</h1>
                        <p>{article.summary}</p>
                        <br></br>
                        <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
                        <p>Source: <a href={article.url} target="_blank" rel="noreferrer">  {article.newsSite}</a></p>
                    </div>
                    
                    <p style={cardStyles.source}>
                        
                    </p>
                </article>
            )}
        </section>
    )
}