import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Formulaire = () => {
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});
  const apikey="34cb91486cc4110c64222f26b2844cd6";

  const getwetherDetails = (cityName) => {
    if (!cityName) return
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apikey + "&language=fr-FR"
    axios.get(apiUrl).then((res)=> {
     // console.log("response", (res.data));
      setData(res.data)
    }).catch((err) => {console.log("err", err)})
  }

  const handleChangeInput = (even) => {
    setInputCity(even.target.value)
  }
  const handleSearch= () => {
    getwetherDetails(inputCity)
  }

  // useEffect(() => {
  //   getwetherDetails("dakar")
  // }, [])

  return (
    <div className="d-flex flex-column justify-content-center align-items-center pt-0 h-75">
      <div className='form-container'>
        <form>
          <div className="inputGroup gap-2 d-flex w-100">
            <input type="text" 
              className="form-control text-danger bg-white w-75 h-7 fs-5" name="ville" value={inputCity} onChange={handleChangeInput} placeholder="Entrer le nom d'une ville"/>
            <button className="btn btn-outline-danger text-white btn-lg" onClick={handleSearch} type="button" id="button-addon2">Envoyer</button>
          </div>
        </form>
      </div>
      {Object.keys(data).length > 0 &&
        <div className="rounded gap-5 w-25 h-50 mt-5 mr-5 bg-white text-start p-2">
          <div className="villeName">
            <h4 className="fs-4">{data?.name},{data?.sys?.country}</h4>
          </div>
          <div className="temperature">
            <h5 className="fs-1">{((data?.main?.temp)-273.15).toFixed(2)} °C</h5>
          </div>
          <div className='gap-5'> 
            {
              data.weather.map((item)=>(
              <h5 key={item.id}>
                <img src={`https://openweathermap.org/img/w/${item.icon}.png`} alt="name"/><br/>
                {item.description}
              </h5>
              ))
            }
          </div>
        </div>
      }
    </div>
  )
}

export default Formulaire