
import Banner from "../../components/Banner";
import Title from "../../components/Title";
import bannerImage from "../../assets/banner-home.png"
import Card from "../../components/Card";
import styles from "./home.module.css";
import { useEffect, useState } from "react";

function Home() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Hitallo-moreira/cinetag-api/videos')
            .then(response => response.json())
            .then(data => {
                setVideos(data)
            })
    }, [])

    return (
        <>
           <Banner image={bannerImage} />
           <Title>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
           </Title>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    )
}

export default Home;