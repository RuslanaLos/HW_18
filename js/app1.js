function generateList(arr) {
    const ulElement = document.createElement('ul');
    for (let i = 0; i < arr.length; i++) {
        const liElement = document.createElement('li');
        if (Array.isArray(arr[i])) {
            const innerList = generateList(arr[i]);
            liElement.appendChild(innerList);
        } else {
            liElement.textContent = arr[i];
        }
        ulElement.appendChild(liElement);
    }
    return ulElement;
}


const inputArray = [1, 2, [1.1, 1.2, 1.3], 3];
const resultElement = generateList(inputArray);


document.getElementById("listByArr").appendChild(resultElement);
