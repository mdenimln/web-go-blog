import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './Blog.css';
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
                <div className='container'>
                    {articles.map((article) => {
                        return(
                            <article key={article.id }>
                                <img className='image-article' src={article.imageUrl} alt={article.title} />
                                <div className='title'>
                                <h2>
                                    <Link style={{color: 'white'}} to={`/blog/${article.id}`}>{article.title}</Link>
                                </h2>
                                <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
                                </div>
                                
                            </article>
                        )
                    })}
                </div>
                
            )}
        </section>
    )
}