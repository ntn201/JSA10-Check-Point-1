data = JSON.parse(localStorage.getItem("data"))

"{
data: [{
    name: age:
}]
}
"


// lấy thông tin từ localStorage -> hiển thị ra trang web

for (let i = 0; i < data.length; i++) {
    let person = document.createElement("div")
    person.innerHTML = `
    <span>${data[i].name}</span>
    `
    document.getElementById("result").appendChild(person)
}