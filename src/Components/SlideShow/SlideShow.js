import { Carousel } from "./Carousel";

function SlideShow (props) {
    return (
      <Carousel id="slideShow" className="carousel slide" data-bs-ride="carousel" align="center">
        <div className="carousel-inner">
          {props.images.map((image, i) => (
            <div
              key={i}
              className={`carousel-item ${i === 0 ? 'active': ''}`}> 
                <img alt={i} src={image.url} className="rounded" />
            </div>
          ))}
        </div>
        <ol className="carousel-indicators list-inline">
          {props.images.map((image, i) => (
            <li key={i} className={`list-inline-item ${i === 0 ? 'active': ''}`}>
              <a
                href="/" 
                id={`carousel-selector-${i}`}
                className={`${i === 0 ? 'selected': ''}`}
                data-bs-slide-to={i}
                data-bs-target="#slideShow">
                  <img alt={i} src={image.url} className="img-fluid rounded" />
              </a> 
            </li>
          ))}
        </ol>
      </Carousel>
    )
}

export default SlideShow;