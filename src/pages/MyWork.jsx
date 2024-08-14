
import '../components/styles/MyWork.css'

const MyWork = () => {
  return (
    <div className='myWork_box'>
      <div className='container_work'>
        <div className='section1_work'>
          <div className='title_work'>
            My Work
          </div>
          <hr className='linea_work' />
          <div className='text_work'>
            "look here, some of my developed works"
          </div>
        </div>
        <div className='container_work_images'>
          <div className='p1'>
            <hr className='linea_work2' />
            <img className='w1' src="rickmorty.png" alt="" />
            <div class="t1">RickandMorty App</div>
          </div>
          <div className='p3'>
            <hr className='linea_work2' />
            <img className='w3' src="crudpeli.png" alt="" />
            <div class="t3">CRUD Movies</div>
          </div>
          <div className='p2'>
            <hr className='linea_work2' />
            <img className='w2' src="appclima.png" alt="" />
            <div class="t2">Wheather App</div>
          </div>
          <div className='p4'>
            <hr className='linea_work2' />
            <img className='w4' src="ecommerce.png" alt="" />
            <div class="t4">Ecommerce</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyWork