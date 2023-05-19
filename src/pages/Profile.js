// import { FaGithub } from 'react-icons/fa';
import profil from '../image/gambar3.png';
import { FaAccusoft, FaUserAlt, FaLinkedin, FaTiktok, FaWatchmanMonitoring } from 'react-icons/fa'
import fotoMain from '../image/gambar1.png';
import fotoWeb from '../image/tes.png';
import fotoWeb2 from '../image/web.png'
import fotomain2 from '../image/gambar7.jpg';
import { Link } from 'react-router-dom';

export default function Profile() {
    const profile = {
        image: {
            maxWidth: '100%'
        },
        container: {
            width: '70%',
            margin: '0 0 0 30%'
        },
        container1: {
            width: '30%',
            position: 'fixed',
            padding: '0 30px 0 0',
            margin: '15px 0 0 0'
        },
        flex: {
            display: 'flex',
            position: 'relative'
        },
        imgRound: {
            borderRadius: '20px',
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
        button: {
            padding: '7px 10px',
            borderRadius: '3px',
            border: 'none',
            backgroundColor: 'rgba(86,6,125,1)',
            
        }
    }
    const main = {
        row: {
            height: '450px',
            borderRadius: '10px',
            display: 'flex',
            gap: '50px',
            justifyContent: 'space-between'
        },
        imgMain: {
            height: '405px',
            width: '180px',
            borderRadius: '30px',
        },
        rowed: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
        },
        colOne: {
            border: '1px solid',
            width: '400px',
            height: '180px',
            display: 'flex',
            justifyContent: 'space-between',
            borderRadius: '30px'
        },
        imgOne: {
            height: '180px'
        },
        colTwo: {
            border: '1px solid',
            width: '180px',
            height: '180px',
            borderRadius: '30px',
        },
        imgTwo: {
            height: ''
        }
    }
    return(
        <section style={profile.flex}>
        <div style={profile.container1}> 
            <img style={profile.imgRound} src={profil} alt='profil' />
            <h1 style={profile.h1}>Deni Maulana</h1>
            <span style={profile.span}>FrontEnd Develover</span>
            <p style={profile.p}>
                Hallo Nama saya Muhamad Deni Maulana, saya seorang siswa smk di fajar utama dengan jurusan sija , saya tinngal di bogo
            </p>
            <div style={{display: 'flex', gap: '20px',margin: '100px 0 0 0'}}>
                <button style={profile.button} ><Link>Send Message.</Link></button>
                <FaAccusoft />
            </div>
        </div>
        <div style={profile.container}>
            <div style={main.row}>
                <img style={main.imgMain} src={fotomain2} alt='foto main'/>
                <div style={main.rowed}>
                    <div style={main.colOne}>
                        <div>
                            <i><FaUserAlt /></i>
                            <p>Personal Website</p>
                            <span>mdenmlnm.github.io</span>
                        </div>
                        <img style={main.imgOne} src={fotoWeb} alt='personal web' />
                    </div>
                    <div style={main.colTwo}>
                        <FaLinkedin />
                        <p>Let's Connect!!</p>
                        <span>linkedin.com</span>
                    </div>
                    <div style={main.colTwo}>
                        <FaWatchmanMonitoring />
                        <p>Work carer ducumention</p>
                        <span>muhamad_deni.com</span>
                    </div>
                    <div style={main.colOne}>
                        <div>
                            <FaTiktok />
                            <p>Tiktok</p>
                            <span>tiktok.com</span>
                            <button>Follow</button>
                        </div>
                        <img src={fotoWeb2} alt='web foto' />
                    </div>
                </div>
                
            </div>
            

        </div>
        
        </section>
    )
}