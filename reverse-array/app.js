const btn = document.querySelector("#btn");
const p = document.querySelector("#numbers");

let arrRev = [];
const reverse = () => {
    const str = p.innerHTML;
    const arr = str.split('')
    for(let i = arr.length; i >= 0; i--) {
        arrRev.push(arr[i])
    }
    p.innerHTML = arrRev.join('');
    console.log(arrRev)
}

btn.addEventListener('click', reverse);
