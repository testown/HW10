function asking() {

    let arrayInputs = [];
    let arrayInputsCounter = 0;

    do {
        let input = prompt('Enter text:');
        if (input === '' || input === null) break;
        arrayInputs[arrayInputsCounter++] = input;
    } while (true);

    arrayInputs.forEach((item, index) => {
        arrayInputs[index] = `${item[0].toUpperCase()}${item.slice(1)}`;
    });

    let arrayResult = arrayInputs.sort((first, second) => {
        if (first.length > second.length) return 1;
        if (first.length < second.length) return -1;
        if (first.length === second.length) return 0;
    });

    return arrayResult;
}

console.log(asking());

