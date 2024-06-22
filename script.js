const getcolor = () => {
    const randomnumber = Math.floor(Math.random() * 16777215);
    const random = "#" + randomnumber.toString(16);
    document.body.style.backgroundColor = random;
    document.getElementById("color-code").innerText = random;
    // console.log(random);
}

document.getElementById("btn").addEventListener('click',getcolor)
getcolor();