
var saloon={
    name:"The Fashion Pet",
    address:{
        state:"Idaho",
        city:"Boise",
        street:"10 Mile",
        zip:"83642."

    },
    hours:{
        opening:"9:00 am",
        closing:"5:00 pm"
    },
    pets:[
        {
            name:"Scooby",
            age:60,
            gender:"Male",
            breed:"Dane",
            services:"Grooming",
            owner:"Shaggy",
            phone:"555-555-5555"
        },
        {
            name:"Scrappy",
            age:50,
            gender:"Male",
            breed:"Mixed",
            services:"Nails Cut",
            owner:"Shaggy",
            phone:"555-555-5555"
        },
        {
            name:"Copper",
            age:10,
            gender:"Male",
            breed:"Beagle",
            services:"Nose Cleaning",
            owner:"Amos Slade",
            phone:"555-555-5555"
        }
    ]
}



function displayInfo(){
    document.getElementById("info").innerHTML=`
    <h3> Welcome to ${saloon.name}</h3>
    <p>${saloon.address.state}, ${saloon.address.city}. ${saloon.address.street}, ZIP: ${saloon.address.zip}</p>
    `;
}
displayInfo();

function displayPetInfo(){
    document.getElementById("petsInfo").innerHTML+=`
    <p> You have ${saloon.pets.length} pets</p>`;
    
    for(var i=0; i<saloon.pets.length; i++){
        petsname=saloon.pets[i].name;
        document.getElementById("petsName").innerHTML+=`<p>${petsname}</p>`;
    }
}
displayPetInfo();

