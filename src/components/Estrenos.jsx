import axios from 'axios';

const Estrenos = () => {

    const url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=677650d0c73145c6417b08814d591f68&language=en-US&page=1';

    axios.get(url).then(res => console.log(res)).catch( err => console.log(err))

    


  return (
    <div>
      <h1>Peliculas estrenos</h1>
    </div>
  )
}

export default Estrenos
