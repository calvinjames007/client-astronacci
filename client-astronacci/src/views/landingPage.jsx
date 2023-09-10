import Navbar from '../components/navbar';
import Card from 'react-bootstrap/Card';
import '../styles/landingPage.css'

import { useSelector, useDispatch } from 'react-redux';
import { fetchVideo } from '../store/actions/actionCreator';
import { useEffect, useState } from 'react';

import axios from 'axios';

export default function landingPage() {
    const {videos, isLoading} = useSelector((state) => state);
    const dispatch = useDispatch();
    const userStatus = localStorage.getItem('status');

    
    const [news, setNews] = useState([])
    
    useEffect(() => {
        const loadNews = async () => {
            const response = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-08-10&sortBy=publishedAt&apiKey=1a412c8fc0c14668a65390a7a65c252a")
            setNews(response.data.articles);
        };
        
        loadNews();
        dispatch(fetchVideo());
        
    }, [dispatch])
    
    const limitedNews =
    userStatus === 'Premium'
      ? news.slice(0, 10)
      : userStatus === 'Regular'
      ? news.slice(0, 3)
      : news;

    return (
        <>
            <Navbar />
            <div className="container-fluid bg-transparent my-4 p-5" style={{ minHeight: '100vh', width: '150vh' }}>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4 justify-content-center">
                {isLoading ? (
                    // Show a loading indicator or message while fetching data
                    <p>Loading...</p>
                ) : (
                    <>
                    {/* Map over videos when data is available */}
                    {videos.map((video) => (
                        <div className="col" key={video.id}>
                        <Card style={{ width: '15rem', height: '18rem' }}>
                            <div className="ratio ratio-16x9">
                            <iframe src={video.linkYoutube} allowFullScreen></iframe>
                            </div>
                            <Card.Body>
                            <Card.Title style={{ fontSize: '15px' }}>{video.title}</Card.Title>
                            </Card.Body>
                        </Card>
                        </div>
                    ))}

                    {/* Map over news articles when data is available */}
                    {limitedNews.map((article, index) => (
                        <div className="col" key={index}>
                        <Card style={{ width: '15rem', height: '45rem' }}>
                            <Card.Img variant="top" src={article.urlToImage} alt={article.title} />
                            <Card.Body>
                            <Card.Title>{article.title}</Card.Title>
                            <Card.Text>{article.description}</Card.Text>
                            <Card.Link href={article.url} target="_blank" rel="noopener noreferrer">
                                Read More
                            </Card.Link>
                            </Card.Body>
                        </Card>
                        </div>
                    ))}
                    </>
                )}
                </div>
            </div>
        </>
    )
}