document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('animeMerchChart').getContext('2d');
    const animeMerchChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'],
            datasets: [
                {
                    label: 'Figurine',
                    data: [50, 55, 60, 70, 80, 90, 100, 110, 120, 130, 140],
                    backgroundColor: 'rgba(104, 132, 245, 0.7)'
                },
                {
                    label: 'Clothing',
                    data: [40, 45, 50, 60, 70, 80, 90, 100, 110, 120, 130],
                    backgroundColor: 'rgba(234, 88, 12, 0.7)'
                },
                {
                    label: 'Books',
                    data: [35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 120],
                    backgroundColor: 'rgba(25, 204, 25, 0.7)'
                },
                {
                    label: 'Board Games & Toys',
                    data: [30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110],
                    backgroundColor: 'rgba(255, 193, 7, 0.7)'
                },
                {
                    label: 'Posters',
                    data: [20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100],
                    backgroundColor: 'rgba(244, 143, 177, 0.7)'
                }
            ]
        },
        options: {
            scales: {
                x: {
                    stacked: true
                },
                y: {
                    stacked: true
                }
            }
        }
    });
});
