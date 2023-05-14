import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
export default function Blog() {
    const [ articles, setArticles ] = useState([]);
    const [ load, setLoad ] = useState(true);

    useEffect(() => {
        const getArticles = async () => {
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles');

            const response = await request.json();

            setArticles(response);
            setLoad(false);
            console.log(response)
        }

        getArticles()
    }, [])

    return(
        <section>
            <h1>Halaman Blog</h1>
            <p>Ini adalah tulisan tulisan saya (tapi boong)</p>
            {load ? 
            (
                <i>Loading article..</i>
            ) : (
                <div>
                    {articles.map((article) => {
                        return(
                            <article key={article.id }>
                                <h2>
                                    <Link to={`/blog/${article.id}`}>{article.title}</Link>
                                </h2>
                                <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
                            </article>
                        )
                    })}
                </div>
                
            )}
        </section>
    )
}