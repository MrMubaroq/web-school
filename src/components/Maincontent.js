import Hero from "./Hero";
import Cardjurusan from "./Cardjurusan";
import Cardkegiatan from "./Cardkegiatan";
import jurusan1 from "./../assets/foto-belajar.jpg";
import jurusan2 from "./../assets/belajar.jpg";
import jurusan3 from "./../assets/foto.jpg";
import Kegiatan1 from "./../assets/kegiatan1.jpg"
import Kegiatan2 from "./../assets/kegiatan2.jpg"
import Kegiatan3 from "./../assets/kegiatan3.jpg"

const Maincontent = ()=> {
    return (
        <div>
        <Hero />
        <div className="Container">
            <div className="row">
                <div className="col-12 text-center my-5">
                    <h1>jurusan sekolah</h1>
                </div>
            </div>
            <div className="row justify-content-center">
            <div className="col-lg-4 col-12">
                        <Cardjurusan image={jurusan1}/>
                </div>
                <div className="col-lg-4 col-12">
                    <Cardjurusan image={jurusan2}/>
                </div>
                <div className="col-lg-4 col-12">
                    <Cardjurusan image={jurusan3}/>
                </div>
            </div>

            <div className="row">
                <div className="col-12 text-center my-5">
                    <h1>Kegiatan</h1>
                </div>
                <div className="col-12 my-3">
                    <Cardkegiatan image={Kegiatan1} description="ini adalah kegiatan bersama"/>
                </div>
                <div className="col-12 my-3">
                    <Cardkegiatan image={Kegiatan2} description="ini adalah kegiatan bersama"/>
                </div>
                <div className="col-12 my-3">
                    <Cardkegiatan image={Kegiatan3} description="ini adalah kegiatan bersama"/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Maincontent;