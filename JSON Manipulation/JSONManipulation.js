const data = require('./data.json')


let item_in_Meeting_Room = data.filter(item => item.placement.name == "Meeting Room" )



let item_electronic_device= data.filter(item => item.type == "electronic" )



let item_furniture= data.filter(item => item.type == "furniture" )


let date = (timestamp) => {
  const date = new Date(timestamp * 1000)  
  const arr =  [ date.getDate(), date.getMonth()+1, date.getFullYear() ]
  console.log(arr)
  return arr.join(" ")
}

let item_purchase_at = data.filter(item => date(item.purchased_at) == "16 1 2020")


console.log(item_purchase_at)


let item_brown= data.filter(item => item.tags.includes("brown") == true )
