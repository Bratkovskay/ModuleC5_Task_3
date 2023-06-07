const onBtnClick = () => {
    const numberInput = document.getElementById("numberInput")
    const sizeNumder = parseInt(numberInput.value)
    console.log (`sizeNumder = ${sizeNumder}`)
    if (typeof sizeNumder !== "number") {
        console.log ("Это не число")
        return undefined;
    }
    if (sizeNumder < 1 || sizeNumder > 10) {
        console.log ("Число вне диапазона от 1 до 10")
        return undefined;
    }
    const URL = `/some/path?limit=${sizeNumder}`
    console.log (`Мы отправили запрос на ${URL}`)
    let promise = fetch(URL)
        .then((response)=> {console.log("Тут запрос выполнился успешно")})
        .catch((e)=> {console.log(`Тут запрос не выполнился ${e}`)});

  }

