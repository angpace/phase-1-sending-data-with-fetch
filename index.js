
//build our fetch
function submitData(name, email){
const message =  "Unauthorized Access";

return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
    },
    body: JSON.stringify({
        name:`${name}`,
        email: `${email}`,
    })
},
)
.then(res => res.json())
.then(data => document.body.append(data.id))
.catch((res) => {
    if (res.ok) {
        console.log("ok")
    } else { document.body.append(message)}
})


}


submitData("Angela", "angelapace96@aol.com")

