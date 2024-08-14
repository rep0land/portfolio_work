
import '../components/styles/Contact.css'

const Contact = () => {

  const email = 'davacosta369@gmail.com'
  const linkedinUrl = 'https://www.linkedin.com/in/e-acosta-desarrollo'

  return (
    <div className='contact_box' >
      <div className='title_contact'>
        Contact
      </div>
      <hr className='linea_contact' />
      <p className='phrase_contact' >You can contact me via email:</p>
      <a className='correo_enlace' href={`mailto:${email}`}>{email}</a>
      <hr className='linea_contact2' />
      <p className='phrase_contact2' >On linkedin:</p>
      <a className='link_enlace' href={linkedinUrl} target="_blank" rel="noopener noreferrer"> Here </a>
      <hr className='linea_contact3' />
      <hr className='linea_contact4' /> 
    </div >
  )
}

export default Contact