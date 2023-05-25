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

export default function Profile() {
    const profile = {
        image: {
            maxWidth: '100%'
        },
        container: {
            maxWidth: '855px',
            minWidth: '854px',
            width: '70%',
            margin: '15px 0 0 0',
        },
        container1: {
            maxWidth: '350px',
            // width: '23%',
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
            fontWeight: '600'
        },
        span: {
            fontSize: '1.2em',
            opacity: '0.9'
        },
        p: {
            opacity: '0.7'
        },
    }
    const main = {
        row: {
            height: '405px',
            borderRadius: '10px',
            display: 'flex',
            gap: '45px',
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
            gap: '45px'
        },
        colOne: {
            width: '400px',
            height: '180px',
            display: 'flex',
            justifyContent: 'space-between',
            borderRadius: '25px',
            padding: '20px',
            boxShadow: '0px 0px 1.3px rgb(231, 125, 200)',
            
        },
        imgOne: {
            height: '100%',
            borderRadius: '10px',
            cursor: 'pointer'
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
            boxShadow: '0px 0px 1.5px rgb(231, 125, 200)',
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
            borderRadius: '3px'
        },
        p: {
            fontSize: '0.95em',
            lineHeight: '1em'
        },
        span: {
            fontSize: '0.8em',
            opacity: '0.7'
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
                Hallo Nama saya Muhamad Deni Maulana, saya seorang siswa smk di fajar utama dengan jurusan sija , saya tinngal di bogo
            </p>
            <div style={{display: 'flex', gap: '20px',margin: '100px 0 0 0'}}>
                <button className='button-hoveride-profile' ><Link>Send Message.</Link></button>
                <FaAccusoft />
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
                            <i style={main.icon}><FaUserCircle /></i>
                            <p style={main.p}>Personal Website</p>
                            <span style={main.span}>mdenmlnm.github.io</span>
                        </Link>
                        <img style={main.imgOne} src={fotoWeb} alt='personal web' />
                    </div>
                    <div style={main.colTwoIner}>
                        <i style={main.iconLinkedin}><FaLinkedinIn /></i>
                        <p style={main.p}>Let's Connect!!</p>
                        <span style={main.span}>linkedin.com</span>
                    </div>
                    <div className='profile-colone' style={main.colTwo}>
                        <i style={main.icon}><FaWatchmanMonitoring /></i>
                        <p style={main.p}>Work carer ducumention</p>
                        <span style={main.span}>muhamad_deni.com</span>
                    </div>
                    <div className='profile-colone' style={main.colOne}>
                        <Link style={main.iner}>
                            <i style={main.icon}><FaTiktok /></i>
                            <p style={main.p}>Tiktok</p>
                            <span style={main.span}>tiktok.com</span>
                            <button style={main.buttonTiktok}>Follow</button>
                        </Link>
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
                            <img style={{width: '50px'}} src={logoig} alt='instagram'/>
                            <span>@mdenmln_</span>
                        </div>
                        <button style={{padding: '8px 30px', backgroundColor: 'rgb(247, 34, 115)', borderRadius: '3px',fontSize: '0.9em', border: 'none' }}>Follow</button>
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
                        <Link style={main.iner}>
                            <i style={main.icon}><FaUserCircle /></i>
                            <p style={main.p}>Personal Website</p>
                            <span style={main.span}>mdenmlnm.github.io</span>
                        </Link>
                        <img style={main.imgOne} src={fotoWeb} alt='personal web' />
                    </div>
                    <div className='profile-colone' style={main.colOne}>
                        <Link style={main.iner}>
                            <i style={main.icon}><FaUserCircle /></i>
                            <p style={main.p}>Personal Website</p>
                            <span style={main.span}>mdenmlnm.github.io</span>
                        </Link>
                        <img style={main.imgOne} src={fotoWeb} alt='personal web' />
                    </div>
                </div>
            </div>
        </div>
        </main>
        
        
        </section>
    )
}