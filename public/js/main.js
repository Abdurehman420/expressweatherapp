const submit = document.getElementById('submitBtn')
const input = document.getElementById('cityName')
const output = document.getElementById('output')
const temp =  document.getElementById('temp')
const tempStatus =  document.getElementById('tempStatus')
const dataHide =  document.querySelector('.tempcloud')
const day = document.getElementById('todayDay')
const date = document.getElementById('todayDate')

const currentDate = new Date()
const options = {weekday: 'long'}
const formatweekDay = currentDate.toLocaleString('en-US' , options)
const formatDate = currentDate.toLocaleString()


const getInfo = async (e) => {
  e.preventDefault();
  let cityValue = input.value

  if( cityValue === ''){
    output.innerHTML = "Please enter a city name"
    dataHide.classList.add('.data_hide')
  }else{
    try{
     
      const url =  `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=72e9cfe73e473ac06b52ab798b4bd2ce`
      const response = await fetch(url);
      const data = await response.json(response)
      const arrData = [data]


      const kelvin = arrData[0].main.temp

const celsius = (kelvin - 273.15)
const formatedCelcuis = Number(celsius.toFixed(10))



      temp.innerText = formatedCelcuis
      tempStatus.innerText = arrData[0].weather[0].main
      output.innerHTML =  `${arrData[0].name} , ${arrData[0].sys.country} ` 
      dataHide.classList.remove('.data_hide')
      day.innerHTML =formatweekDay
      date.innerHTML = formatDate
      console.log(data);
    }catch(err){
      output.innerHTML = "Please enter the correct city name"
    

    }
  }
 
 
}

submit.addEventListener('click' , getInfo)


