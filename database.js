import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Initialize Supabase client
const supabaseUrl = 'https://nuznwywebghznubfkimj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51em53eXdlYmdoem51YmZraW1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0ODUyMTQsImV4cCI6MjAzMDA2MTIxNH0.1Hb-PnKzM-ZP9WT8b4uZObir27_Oj4Zp9WEBDMcYA6w';
const supabase = createClient(supabaseUrl, supabaseKey);

// Example query
async function searchByName(name) {
    
    const { data, error } = await supabase
        .from('People')
        .select('*') // Select all columns for each person
        .like('Name', "%" + name + "%");

    const messageElement = document.getElementById("message");
    const resultsContainer = document.getElementById("results");

    if (error) {
        messageElement.textContent = "Error fetching data";
        console.error('Error fetching data:', error.message);
        return;
    }

    if (data == 0) {
        messageElement.textContent = "No result found";
        resultsContainer.innerHTML = ""; // Clear previous results
        return;
    }

    messageElement.textContent = "Search successful";
    resultsContainer.innerHTML = ""; // Clear previous results

    addtolist(data,resultsContainer);
}

async function Licenseplate(Licensereg,resultz,messagez) {
    const { data, error } = await supabase
        .from('People')
        .select('*') // Select all columns for each person
        .like('LicenseNumber', "%" + Licensereg + "%");


    const messageElement = document.getElementById(messagez);
    const resultsContainer = document.getElementById(resultz);
    if (error) {
        messageElement.textContent = "Error fetching data";
        console.error('Error fetching data:', error.message);
        return;
    }
    if (data == 0) {
        messageElement.textContent = "No result found";
        resultsContainer.innerHTML = ""; // Clear previous results
        return;
    }
    messageElement.textContent = "Search successful";
    resultsContainer.innerHTML = ""; // Clear previous results
    addtolist(data,resultsContainer);
}

try{
    document.getElementById("myButton").addEventListener("click", function() {
    
        const name = document.getElementById("name").value;
        const Licensereg = document.getElementById("license").value;
        const resultz = "results";
        const messagez = "message";
    
        if(((name != "") && (Licensereg != "")) || ((name == "") && (Licensereg == ""))){
            document.getElementById("results").innerHTML = "";
            document.getElementById("message").textContent = "Error cant have both fields full or empty";
            
            return;
        }

        if(name != ""){
            searchByName(name);
        }
        else if(Licensereg != ""){
            Licenseplate(Licensereg,resultz,messagez);
        }
        
    
    });

}
catch{

}

function addtolist(data,resultsContainer){
    data.forEach(i => {
        const listofppl = document.createElement("div");
        listofppl.classList.add("list-of-ppl");

        const IdElement = document.createElement("p");
        IdElement.textContent = "PersonID: " + i.PersonID;

        const nameElement = document.createElement("p");
        nameElement.textContent ="Name: " + i.Name;

        const AddressElement = document.createElement("p");
        AddressElement.textContent = "Address: " + i.Address;

        const DOBElement = document.createElement("p");
        DOBElement.textContent = "DOB: " + i.DOB;

        const Liscenceelement = document.createElement("p");
        Liscenceelement.textContent = "License: " + i.LicenseNumber;

        const ExpiryDateElement = document.createElement("p");
        ExpiryDateElement.textContent = "ExpiryDate: " + i.ExpiryDate;


        listofppl.appendChild(IdElement);
        listofppl.appendChild(nameElement);
        listofppl.appendChild(AddressElement);
        listofppl.appendChild(DOBElement);
        listofppl.appendChild(Liscenceelement);
        listofppl.appendChild(ExpiryDateElement);

        resultsContainer.appendChild(listofppl);
    });

}

// Call the search function when the button is clicked





function addtolist2(data,resultsContainer){
    data.forEach(i => {
        const listofppl = document.createElement("div");
        listofppl.classList.add("list-of-ppl");

        const VehicleIdElement = document.createElement("p");
        VehicleIdElement.textContent = "VehicleID: " + i.VehicleID;

        const MakeElement = document.createElement("p");
        MakeElement.textContent ="Make: " + i.Make;

        const ModelElement = document.createElement("p");
        ModelElement.textContent = "Model: " + i.Model;

        const ColourElement = document.createElement("p");
        ColourElement.textContent = "Colour: " + i.Colour;

        const OwnerIDelement = document.createElement("p");
        OwnerIDelement.textContent = "OwnerID: " + i.OwnerID;

        listofppl.appendChild(VehicleIdElement);
        listofppl.appendChild(MakeElement);
        listofppl.appendChild(ModelElement);
        listofppl.appendChild(ColourElement);
        listofppl.appendChild(OwnerIDelement);
        resultsContainer.appendChild(listofppl);
    });

}




async function Licenseplatez(Licensereg1,resultz,messagez) {
    const { data, error } = await supabase
        .from('Vehicles')
        .select('*') // Select all columns for each person
        .like('VehicleID', "%" + Licensereg1 + "%");


    const messageElement = document.getElementById(messagez);
    const resultsContainer = document.getElementById(resultz);
    if (error) {
        messageElement.textContent = "Error fetching data";
        console.error('Error fetching data:', error.message);
        return;
    }
    if (data == 0) {
        messageElement.textContent = "No result found";
        resultsContainer.innerHTML = ""; // Clear previous results
        return;
    }
    messageElement.textContent = "Search successful";
    resultsContainer.innerHTML = ""; // Clear previous results
    addtolist2(data,resultsContainer);
}



try{
    document.getElementById("buttonVeh").addEventListener("click", function() {
    
        const Licensereg1 = document.getElementById("rego").value;
        const resultz = "results1";
        const messagez = "message1";
        if(Licensereg1 == ""){
            document.getElementById("results1").innerHTML = "";
            document.getElementById("message1").textContent = "Error";
            
            return;
        }
        
        Licenseplatez(Licensereg1,resultz,messagez);
    
    });

}
catch{
    

}












async function addvehicle(values_to_add_rego,values_to_add_make,values_to_add_model,values_to_add_colour,values_to_add_owner ){
    const { data,error } = await supabase.from("Vehicles").insert({
        VehicleID: values_to_add_rego,
        Make: values_to_add_make,
        Model: values_to_add_model,
        Colour: values_to_add_colour,
        OwnerID: values_to_add_owner
    });

    if(error){
        document.getElementById("message2").textContent = "Error adding value ";
    }
    else{
        document.getElementById("message2").textContent = "Succesfully added your vehicle Data "
    }

}

async function  checkowner(values_to_add_owner){
    const { data, error } = await supabase
    .from('People')
    .select('PersonID') // Select all columns for each person
    .eq("PersonID", values_to_add_owner);
    
    console.log("data is ", data[0]);
    
    if(data[0] == null){
        console.log("not hello")
        return false;
    }
    else{
        console.log("hello")
        return true;
   
    }
    
}

try{
    let plop = false;
    document.getElementById("Add").addEventListener("click", async function() {
    
        const values_to_add_rego = document.getElementById("rego").value;
        const values_to_add_make = document.getElementById("make").value;
        const values_to_add_model = document.getElementById("model").value;
        const values_to_add_colour = document.getElementById("colour").value;
        const values_to_add_owner = Number(document.getElementById("owner").value);
        


        
        if(values_to_add_rego == ""  || values_to_add_make == "" || values_to_add_model == "" || values_to_add_colour == ""||values_to_add_owner == ""){
            document.getElementById("results2").innerHTML = "";
            document.getElementById("message2").textContent = "Error empty Boxes";
            return;
        }

        if (Number.isInteger(values_to_add_owner) == false){
            document.getElementById("message2").textContent = "Error Owner ID should be an integer";
            return;

        }
        
        const value = await checkowner(values_to_add_owner);
        console.log(value);

        if(value == true){
            addvehicle(values_to_add_rego,values_to_add_make,values_to_add_model,values_to_add_colour,values_to_add_owner);
            
        }

        else if(plop == false){
            plop = true;

            document.getElementById("message2").textContent = "Owner Id doesnt exist please fill in owner details";

            const container = document.getElementById("results2");

            const newLabel = document.createElement('label');
            const newInput = document.createElement('input');
            const newLabel1 = document.createElement('label');
            const newInput1 = document.createElement('input');
            const newLabel2 = document.createElement('label');
            const newInput2 = document.createElement('input');
            
           
            const newLabel4 = document.createElement('label');
            const newInput4 = document.createElement('input');
            const newLabel5 = document.createElement('label');
            const newInput5 = document.createElement('input');

            const newLabel6 = document.createElement('label');
            const newInput6 = document.createElement('input');
            const button = document.createElement('button');

            newInput.setAttribute('type', 'text');
            newInput.setAttribute('id', 'PersonID');
            newLabel.textContent = 'PersonID: ';
            
            

           
            newLabel1.textContent = 'Name: ';
            newInput1.setAttribute('type', 'text');
            newInput1.setAttribute('id', 'Name');

           
            newLabel2.textContent = 'Address: ';
            newInput2.setAttribute('type', 'text');
            newInput2.setAttribute('id', 'Address');

        
            newLabel4.textContent = 'DOB: ';
            newInput4.setAttribute('type', 'date');
            newInput4.setAttribute('id', 'dob');

            
            newLabel5.textContent = 'license: ';
            newInput5.setAttribute('type', 'text');
            newInput5.setAttribute('id', 'license');

            
            newLabel6.textContent = 'expirey: ';
            newInput6.setAttribute('type', 'date');
            newInput6.setAttribute('id', 'expire');

            button.setAttribute('id', 'Add_owner');
            button.setAttribute('Class', 'beauty');
            button.textContent = 'Add Owner';
            
            container.appendChild(newLabel);
            container.appendChild(newInput);
            container.appendChild(newLabel1);
            container.appendChild(newInput1);
            container.appendChild(newLabel2);
            container.appendChild(newInput2);
            container.appendChild(newLabel4);
            container.appendChild(newInput4);
            container.appendChild(newLabel5);
            container.appendChild(newInput5);
            container.appendChild(newLabel6);
            container.appendChild(newInput6);
            container.appendChild(button);

            document.getElementById("Add_owner").addEventListener("click", function() {
    
                const values_to_add_PersonID = document.getElementById("PersonID").value;
                const values_to_add_Name = document.getElementById("Name").value;
                const values_to_add_Adress = document.getElementById("Address").value;
                const values_to_add_Dob = document.getElementById("dob").value;
                const values_to_add_License = document.getElementById("license").value;
                const values_to_add_expire = document.getElementById("expire").value;

                console.log("date is : " , values_to_add_Dob);
                
                if(values_to_add_PersonID == "" || values_to_add_Name== "" ||values_to_add_Adress ==""||values_to_add_Dob=="" ||values_to_add_License=="" ||values_to_add_expire=="" ){
                    document.getElementById("message2").textContent = "Cant have empty Boxes for owner information";
                    return;
                }
                else{
                    addpeople(values_to_add_PersonID,values_to_add_Name,values_to_add_Adress,values_to_add_Dob,values_to_add_License,values_to_add_expire)
                    plop = false;
                }
        
            });
        
        
        }
        
        
        
    });

}
catch{
}


async function addpeople(values_to_add_PersonID,values_to_add_Name,values_to_add_Adress,values_to_add_Dob, values_to_add_License,values_to_add_expire){
    const { data,error } = await supabase.from("People").insert({
        PersonID: values_to_add_PersonID,
        Name: values_to_add_Name,
        Address: values_to_add_Adress,
        DOB: values_to_add_Dob,
        LicenseNumber: values_to_add_License,
        ExpiryDate:values_to_add_expire
    });

    if(error){
        document.getElementById("message2").textContent = "Error adding value ";
    }
    else{
        document.getElementById("message2").textContent = "Succesfully added your Owner Data "
        document.getElementById("results2").innerHTML = "";
        

    }

}




