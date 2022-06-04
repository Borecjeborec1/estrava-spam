let num = 100
const lepik = require('lepikjs');
lepik.on("keyPress", (e) => {
  if (e != "d") return
  setInterval(() => {
    num++
    lepik.start()
    lepik.mouseMove(870, 450, true, 0)
    lepik.mouseClick()
    lepik.write("0013", 0)
    lepik.mouseMove(870, 490, true, 0)
    lepik.mouseClick()
    lepik.write("0" + num, 0)
    lepik.mouseMove(870, 530, true, 0)
    lepik.mouseClick()
    lepik.write("lepik", 0)
    lepik.mouseMove(870, 570, true, 0)
    lepik.mouseClick()
    lepik.end()
    setTimeout(() => {
      lepik.mouseMove(1152, 189, true, 0)
      lepik.mouseClick()
    }, 1000)
  }, 5000)
})

