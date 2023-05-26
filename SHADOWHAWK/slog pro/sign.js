let user = ["rakesh@gmail.com","Suresh@gmail.com"]
let pass = ["12345","52672"]
function check(){
    let email = document.getElementById("email").value
    let password = document.getElementById("pass").value
    for(let i=0;i<user.length;i++){
        if(email==user[i] && password==pass[i]){
            alert("Login Successful")
            break
        }
        else{    
            alert("Invalid Username or Password")
            break
        }
    }
}

function insert(){
    let email = document.getElementById("email").value
    let password = document.getElementById("pass").value
    user.push(email)
    pass.push(password)
    for(let i=0;i<user.length;i++){
        if(email==user[i]){
            alert("Already Registered Account")
            break
        }
        else{    
            alert("Sign Up Successful")
            break
        }
    }
}

console.log("Usernames : "+ user)
console.log("Password : "+ pass)
