import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import Banner from "../../components/Banner";
import Title from "../../components/Title";
import bannerImage from "../../assets/banner-home.png"

function Home() {
    return (
        <>
           <Header />
           <Banner image={bannerImage} />
           <Title>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
           </Title>
           <Footer />
        </>
    )
}

export default Home;