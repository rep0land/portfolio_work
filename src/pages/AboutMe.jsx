
import '../components/styles/AboutMe.css'

const AboutMe = () => {
  return (
    <div className='about_box'>
      <div className='container_box_about'>
        <div className='text_container_about'>
          <div className='title_about'>
            about
          </div>
          <hr className='linea_about' />
          <div className='text_about'>
            Hello, my name is Enmanuel, I am a full stack web developer,
            handling tasks from front-end development to the interaction of requests with the back-end.
          </div>
          <div className='space_about'>

        </div>
        </div>
        <div class="phrase_about">
          ❝I adapt to your styles and preferences❞
        </div>
        <div className='cv_container_about'>
          <div className='cuadro_cv'>

          </div>
          <a className='cv' href="/e_acosta_cv.pdf" target="_blank" rel="noopener noreferrer">CV HERE! </a>
        </div>
      </div>
    </div>
  )
}

export default AboutMe