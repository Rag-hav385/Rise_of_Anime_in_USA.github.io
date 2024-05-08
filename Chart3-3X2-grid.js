document.addEventListener("DOMContentLoaded", function() {
    const filePath = 'Data/Anime_trends_yearly.csv'; // Adjust based on actual path
    const ctxIds = ['chart-genre-1', 'chart-genre-2', 'chart-genre-3', 'chart-genre-4', 'chart-genre-5', 'chart-genre-6'];
    const animeTitles = [
        "One piece Interest Over Time",
        "Fullmetal Alchemist Interest Over Time",
        "Attack on Titan Interest Over Time",
        "Hunter x Hunter Interest Over Time",
        "Jujutsu Kaisen Interest Over Time",
        "My Hero Academia Interest Over Time"
    ];

    fetch(filePath)
        .then(response => response.text())
        .then(csvData => Papa.parse(csvData, {header: true, dynamicTyping: true, skipEmptyLines: true}))
        .then(results => {
            const data = results.data;
            ctxIds.forEach((ctxId, index) => {
                const ctx = document.getElementById(ctxId).getContext('2d');
                const datasets = animeTitles.map((title, idx) => ({
                    label: title.split(" Interest")[0], // Clean up the label
                    data: data.map(item => item[title]),

                    

                    borderColor: index === idx ? '#ff0000' : '#cccccc', // Highlight the current anime in red, others in grey
                    backgroundColor: 'transparent',
                    borderWidth: index === idx ? 5 : 2,
                    borderDash: index === idx ? [] : [5, 5] // Dashed lines for non-highlighted series
                }));

                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: data.map(item => item.year),
                        datasets: datasets
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: true
                    }
                });
            });
        });
});




//'Data/Anime_trends_yearly.csv'