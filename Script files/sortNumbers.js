function sortNumbers() {
    const input = document.getElementById('numbersInput').value;
    const sortOrder = document.getElementById('sortOrder').value;
    
    let numbers = input.split(',').map(num => parseFloat(num.trim()));
    if (numbers.some(isNaN)) {
        alert("Please enter valid numbers!");
        return;
    }

    numbers.sort((a, b) => sortOrder === 'asc' ? a - b : b - a);

    document.getElementById('sortedNumbers').textContent = numbers.join(', ');
}