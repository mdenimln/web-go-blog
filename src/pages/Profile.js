// import { FaGithub } from 'react-icons/fa';
import profil from '../image/gambar3.png';
import { FaAccusoft, FaUserCircle, FaLinkedinIn, FaTiktok, FaWatchmanMonitoring,} from 'react-icons/fa'
// import fotoMain from '../image/gambar1.png';
import fotoWeb from '../image/tes.png';
import fotoWeb2 from '../image/web.png'
import fotomain2 from '../image/gambar7.jpg';
import logoig from '../image/logoig.png';
import imgIg1 from '../image/gambar5.png';
import imgIg2 from '../image/gambar4.png';
import imgIg3 from '../image/ablitea.png';
import imgIg4 from '../image/gambar9.webp';
import imgIg5 from '../image/motioncdr.jpg';
import imgIg6 from '../image/grafis1.png';
import { Link } from 'react-router-dom';
import logoyt from '../image/logoyt.png';
import fotompls from '../image/mpls.jpg';
import kucing from '../image/kucing.jpg';

export default function Profile() {
    const profile = {
        image: {
            maxWidth: '100%'
        },
        container: {
            maxWidth: '854px',
            minWidth: '853px',
            width: '69%',
            margin: '15px 0 0 0',
        },
        container1: {
            maxWidth: '350px',
            width: '28%',
            minWidth: '10%',
            position: 'fixed',
            top: '100px'
        },
        flex: {
            width: '90%',
            display: 'flex',
            position: 'relative',
            justifyContent: "space-between"
        },
        imgRound: {
            borderRadius: '50px',
            width: '150px',
            
        },
        h1: {
            fontSize: '2.5em',
            fontWeight: '600',
            color: 'white'
        },
        span: {
            fontSize: '1.2em',
            opacity: '0.9',
            color: 'white'
        },
        p: {
            opacity: '0.7',
            fontWeight: '300',
            color: 'white'
        },
    }
    const main = {
        row: {
            height: '405px',
            borderRadius: '10px',
            display: 'flex',
            gap: '36px',
            justifyContent: 'space-between',
            padding: '1px',
        },
        imgMain: {
            height: '405px',
            width: '180px',
            borderRadius: '25px',
        },
        rowed: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            gap: '43px',
        },
        colOne: {
            width: '400px',
            height: '180px',
            display: 'flex',
            justifyContent: 'space-between',
            borderRadius: '25px',
            padding: '20px',
            boxShadow: '0px 0px 1.7px rgb(231, 125, 200)',
            
        },
        imgOne: {
            height: '100%',
            borderRadius: '20px',
            cursor: 'pointer',
            padding: '5px'
        },
        colTwo: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '7px',
            width: '180px',
            height: '180px',
            borderRadius: '25px',
            padding: '25px',
            boxShadow: '0px 0px 1.7px rgb(231, 125, 200)',
        },
        colTwoIner: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '7px',
            width: '180px',
            height: '180px',
            borderRadius: '25px',
            padding: '25px',
            boxShadow: '0px 0px 1.5px rgb(231, 125, 200)',
            background: '#061B65'
        },
        imgTwo: {
            height: ''
        },
        iner: {
            padding: '5px',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px'
        },
        iconLinkedin: {
            fontSize: '1.3em',
            display: 'flex',
            alignItems: 'center' ,
            justifyContent: 'center',
            width: '1.8em',
            height: '1.8em',
            borderRadius: '9px',
            margin: '0 0 7px 0',
            background: '#006699'
        },
        icon: {
            fontSize: '1.3em',
            boxShadow: '0px 0px 1.5px rgb(231, 125, 200)',
            display: 'flex',
            alignItems: 'center' ,
            justifyContent: 'center',
            width: '1.8em',
            height: '1.8em',
            borderRadius: '9px',
            margin: '0 0 7px 0'
        },
        buttonTiktok: {
            padding: '7px 30px',
            background: '#EF2950',
            border: 'none',
            borderRadius: '3px',
            color: 'white'
        },
        p: {
            fontSize: '0.95em',
            lineHeight: '1em',
            color: 'white'
        },
        span: {
            fontSize: '0.8em',
            opacity: '0.7',
            color: 'white'
        }
    }
    return(
        <section style={profile.flex}>
        <main style={{position: 'relative',}}>
        <div style={profile.container1}> 
            <img style={profile.imgRound} src={profil} alt='profil' />
            <h1 style={profile.h1}>Deni Maulana</h1>
            <span style={profile.span}>FrontEnd Develover</span>
            <p style={profile.p}>
            Hello, my name is Muhamad Deni Maulana, I am a high school student at Fajar Utama majoring in SIJA, I live in Bogor
            </p>
            <div style={{display: 'flex', gap: '20px',margin: '100px 0 0 0', cursor: 'pointer'}}>
                <button className='button-hoveride-profile' style={{cursor: 'pointer'}} ><Link style={{color:'white'}}>Send Message.</Link></button>
                <FaAccusoft style={{color : 'white'}} />
            </div>
        </div>
        </main>
        
        <main style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
        <div style={profile.container}>
            <div style={main.row}>
                <img style={main.imgMain} src={fotomain2} alt='foto main'/>
                <div style={main.rowed}>
                    <div className='profile-colone' style={main.colOne}>
                        <Link style={main.iner}>
                            <i style={main.icon}><FaUserCircle style={{color: 'white'}}/></i>
                            <p style={main.p}>Personal Website</p>
                            <span style={main.span}>mdenmlnm.github.io</span>
                        </Link>
                        <img style={main.imgOne} src={fotoWeb} alt='personal web' />
                    </div>
                    <div style={main.colTwoIner}>
                        <i style={main.iconLinkedin}><FaLinkedinIn style={{color: 'white'}}/></i>
                        <p style={main.p}>Let's Connect!!</p>
                        <span style={main.span}>linkedin.com</span>
                    </div>
                    <div className='profile-colone' style={main.colTwo}>
                        <i style={main.icon}><FaWatchmanMonitoring style={{color: 'white'}}/></i>
                        <p style={main.p}>Work carer ducumention</p>
                        <span style={main.span}>muhamad_deni.com</span>
                    </div>
                    <div className='profile-colone' style={main.colOne}>
                        <a rel="noreferrer"  target="_blank" href={"https://www.tiktok.com/@mdenmln_"} style={main.iner}>
                            <i style={main.icon}><FaTiktok style={{color: 'white'}}/></i>
                            <p style={main.p}>Tiktok</p>
                            <span style={main.span}>tiktok.com</span>
                            <button style={main.buttonTiktok}>Follow</button>
                        </a>
                        <img style={main.imgOne} src={fotoWeb2} alt='web foto' />
                    </div>
                </div>
                
            </div>
            

        </div>
        <div style={profile.container}>
            <div style={main.row}>
                <div className='colBesar' style={{display: 'flex', flexDirection: 'column', boxShadow: '0px 0px 1.5px rgb(231, 125, 200)', width: '400px', height: '400px', borderRadius: '30px', padding: '25px', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between' ,alignItems: 'start'}}>
                        <div style={{display: 'flex', flexDirection: 'column',}}>
                            <img style={{width: '45px',marginBottom: '10px'}} src={logoig} alt='instagram'/>
                            <span style={{color: 'white'}}>@mdenmln_</span>
                        </div>
                        <a rel="noreferrer" target={"_blank"} href={"https://www.instagram.com/mdenmln_/"} style={{padding: '6px 30px', backgroundColor: 'rgb(247, 34, 115)', borderRadius: '4px',fontSize: '0.9em',color: 'white' }}>Follow</a>
                    </div>
                    <div style={{ display: 'flex',flexWrap: 'wrap' , justifyContent: 'space-between'}}>
                        <img style={{margin :'0 0 10px' , borderRadius: '5px'}} width='109px' src={imgIg1} alt='image6' />
                        <img style={{margin :'0 0 10px' , borderRadius: '5px'}} width='109px' src={imgIg2} alt='image2' />
                        <img style={{margin :'0 0 10px' , borderRadius: '5px'}} width='109px' src={imgIg3} alt='image1' />
                        <img style={{margin :'0 0 10px' , borderRadius: '5px'}} width='109px' src={imgIg4} alt='image3' />
                        <img style={{margin :'0 0 10px' , borderRadius: '5px'}} width='109px' src={imgIg5} alt='image4' />
                        <img style={{margin :'0 0 10px' , borderRadius: '5px'}} width='109px' src={imgIg6} alt='image5' />
                    </div>   
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '40px'}}>
                    <div className='profile-colone' style={main.colOne}>
                        <a  rel="noreferrer" target={"_blank"}  href={"https://youtu.be/RHuPYl7N-Cg"} style={main.iner}>
                            <img style={{width: '45px',marginBottom: '10px'}} src={logoyt} alt='youtube' />
                            <p style={main.p}>SMK Fajar Utama</p>
                            <span style={main.span}>youtube.com</span>
                        </a>
                        <img style={main.imgOne} src={fotompls} alt='personal web' />
                    </div>
                    <div className='profile-colone' style={main.colOne}>
                        <a rel="noreferrer" target={"_blank"}  href={"https://kucingpedia.com/"} style={main.iner}>
                            <img style={{width: '45px',marginBottom: '10px'}} src={kucing} alt='kucing' />
                            <p style={main.p}>Hewan yang suka bermain</p>
                            <span style={main.span}>mdenmlnm.github.io</span>
                        </a>
                        <img style={main.imgOne} src={kucing} alt='kucing' />
                    </div>
                </div>
            </div>
        </div>
        </main>
        
        
        </section>
    )
}