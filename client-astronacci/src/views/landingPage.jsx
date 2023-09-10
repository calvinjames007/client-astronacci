import Navbar from '../components/navbar';
import Card from 'react-bootstrap/Card';
import '../styles/landingPage.css'

import { useSelector, useDispatch } from 'react-redux';
import { fetchVideo } from '../store/actions/actionCreator';
import { useEffect } from 'react';

export default function landingPage() {
    const {videos, isLoading} = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchVideo())
    }, [dispatch])

    return (
        <>
            <Navbar />
            <div className="container-fluid bg-transparent my-4 p-5" style={{ minHeight: '100vh', width: '150vh' }}>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4 justify-content-center">
                {isLoading ? (
                    // Show a loading indicator or message while fetching data
                    <p>Loading...</p>
                ) : (
                    // Map over videos when data is available
                    videos.map((video) => (
                    <div className="col" key={video.id}>
                        <Card style={{ width: '15rem' }}>
                        <div className="ratio ratio-16x9">
                            <iframe src={video.linkYoutube} allowFullScreen></iframe>
                        </div>
                        <Card.Body>
                            <Card.Title style={{ fontSize: '15px' }}>{video.title}</Card.Title>
                        </Card.Body>
                        </Card>
                    </div>
                    ))
                )}
                </div>
            </div>
        </>
    )
}