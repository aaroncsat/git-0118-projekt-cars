const btn = document.getElementById("btn");
const result = document.getElementById("result")

btn.addEventListener("click", ()=>{

        fetch("cars.json")
        .then(response => response.json())
        .then(data =>{

            console.log(data);

            let output = "";

            data.map(car =>{

                output += `<div class="car">

                <h2>Márka: ${car.marka}</h2>
                <h3>Típus: ${car.tipus}</h3>
                <h3>Évjárat: ${car.evjarat}</h3>
                
                </div>`;

                
            })

            result.innerHTML = output;

            
        })
        
})