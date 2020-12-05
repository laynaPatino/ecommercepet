import './listContainerHome.scss'

const Slide = ({text, url = "#"}) => {
    return (
    <div className="slide-track">
        <div className="slide">
            <h3>{text}</h3>
            <img src={url}  alt="" />
        </div>
    </div>)
}

function listContainerHome() {
    return (
    <div className="slider">
        <Slide text="Promociones" url="https://southfloridareporter.s3.amazonaws.com/wp-content/uploads/2020/06/01194012/dogs-cats_87557-9599.jpg"/>
        <Slide text="Sorpresas" url="https://s1.1zoom.me/b5050/312/Dogs_Cats_Guinea_pigs_Chicks_White_background_528063_3840x2160.jpg"/>
        <Slide text="Promociones" url="https://southfloridareporter.s3.amazonaws.com/wp-content/uploads/2020/06/01194012/dogs-cats_87557-9599.jpg"/>
        <Slide text="Personalizadas" url="https://http2.mlstatic.com/D_NQ_NP_944881-MLM41810151952_052020-W.jpg"/>
        <Slide text="Promociones" url="https://southfloridareporter.s3.amazonaws.com/wp-content/uploads/2020/06/01194012/dogs-cats_87557-9599.jpg"/>
        <Slide text="Sorpresas" url="https://s1.1zoom.me/b5050/312/Dogs_Cats_Guinea_pigs_Chicks_White_background_528063_3840x2160.jpg"/>
        <Slide text="Promociones" url="https://southfloridareporter.s3.amazonaws.com/wp-content/uploads/2020/06/01194012/dogs-cats_87557-9599.jpg"/>
        <Slide text="Sorpresas" url="https://s1.1zoom.me/b5050/312/Dogs_Cats_Guinea_pigs_Chicks_White_background_528063_3840x2160.jpg"/>
    </div>
    );
  }
  
export default listContainerHome;
  