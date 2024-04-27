import i1 from './Image/1.png';
import i2 from './Image/2.png';
import i3 from './Image/3.png';

function ImgSlider(){
    return(
        <div>
            <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
            <div class="carousel-inner">
            <div className="carousel-item active">
                    <img src={i1} className="d-block imgcrop w-100" alt="Active" />
                </div>
                <div className="carousel-item">
                    <img src={i2} className="d-block imgcrop w-100" alt="Active" />
                </div>
                <div className="carousel-item">
                    <img src={i3} className="d-block imgcrop w-100" alt="Active" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    )
}
export default ImgSlider;