document.querySelector(".inp_field i").addEventListener("click",async () => {
        let city = document.querySelector(".inp_field input").value;
    
    if(city){
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a83d6f20fa3d89206bb4cb0bed8fcd4&units=metric`);

            if(!response.ok){
                throw new Error(`City not found ${response.statusText}`);
            }
            const data = await response.json();
            console.log(data);
            showData(data)
            
        } catch (error) {
            console.log("Fetching Error: " + error.message);
        }
    }
});

function showData(props) {
    let city = document.querySelector("#city"),
    temp = document.querySelector("#temp"),
    condition = document.querySelector("#condition"),
    feel = document.querySelector("#feel"),
    humidity = document.querySelector("#h_per");

    city.innerText = props.name;
    temp.innerText = props.main.temp;
    condition.innerText = props.weather[0].main;
    feel.innerText = props.main.feels_like;
    humidity.innerText = props.main.humidity;
    
}