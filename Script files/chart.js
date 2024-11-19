const ctx = document.getElementById('pizzaChart').getContext('2d');

const pizzaChart = new Chart(ctx, {
    type: 'doughnut', 
    data: {
        labels: ['Margarita', 'Peppirone', '4 season', 'Carbonara', 'Bavarian', 'Cheese'], 
        datasets: [{
            label: 'The popularity of pizza',
            data: [25, 40, 20, 17, 15, 20], 
            backgroundColor: [
                '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'
            ],
            hoverOffset: 5
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true
            }
        }
    }
});