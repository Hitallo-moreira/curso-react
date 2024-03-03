
import Banner from "../../components/Banner";
import bannerImage from "../../assets/banner-player.png"
import Title from "../../components/Title";
import styles from "./player.module.css";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import { useState, useEffect } from "react";

function Player() {
    const [video, setVideo] = useState([]);
    const parameters = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Hitallo-moreira/cinetag-api/videos?id=${parameters.id}`)
            .then(response => response.json())
            .then(data => {
                setVideo(...data)
            })
    }, [])

    if(!video) {
        return <NotFound />
    }

    return (
        <>
            <Banner image={bannerImage} />
            <Title>
                <h1>Player</h1>
            </Title>
            <section className="styles.container">
                <iframe
                    width="100%" 
                    height="100%" 
                    src={video.link}
                    title={video.title}
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </section>
        </>
    )
}

export default Player;