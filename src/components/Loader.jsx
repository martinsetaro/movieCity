import loading from '../assets/loader.gif';
const Loader = () => {
  return (
    <div className='w-full h-auto mb-96'>
      <img className='m-auto' src={loading} alt="img"/>
    </div>
  )
}

export default Loader
