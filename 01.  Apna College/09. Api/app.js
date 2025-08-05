const baseUrl = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";

const dropdowns = document.querySelectorAll(".dropdown select");

for(let select of dropdowns){
    for(currCode in countryList){
        let newOpt = document.createElement("option");
        newOpt.innerText = currCode;
        newOpt.value = currCode;
        select.append(newOpt);
    }
}
