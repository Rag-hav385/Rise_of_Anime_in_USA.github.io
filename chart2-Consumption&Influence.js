document.addEventListener("DOMContentLoaded", function () {
    // Fetching and parsing data for the platform usage chart
    async function fetchPlatformData() {
        const response = await fetch('Data/Anime_Viewership_by_Platform_GenZ_Millennials.csv');
        const csvData = await response.text();
        return Papa.parse(csvData, { header: true, dynamicTyping: true, skipEmptyLines: true }).data;
    }

    // Fetching and parsing data for the influence of anime chart
    async function fetchInfluenceData() {
        const response = await fetch('Data/Influence_of_Anime.csv');
        const csvData = await response.text();
        return Papa.parse(csvData, { header: true, dynamicTyping: true, skipEmptyLines: true }).data;
    }

    // Initialize Platform Usage Chart
    async function initPlatformChart() {
        const data = await fetchPlatformData();
        const ctx = document.getElementById('chart1').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.map(item => item.Platform),
                datasets: [{
                    label: 'Gen Z',
                    data: data.map(item => item.Gen_Z),
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }, {
                    label: 'Millennials',
                    data: data.map(item => item.Millennials),
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',  // This will make the chart horizontal
                responsive: true,
                maintainAspectRatio: true, // Maintains the aspect ratio
                scales: {
                    x: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Initialize Influence of Anime Chart
    async function initInfluenceChart() {
        const data = await fetchInfluenceData();
        const ctx = document.getElementById('chart2').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.map(item => item.Category),
                datasets: [{
                    label: 'Gen Z',
                    data: data.map(item => item['Gen Z']),
                    backgroundColor: 'rgba(153, 102, 255, 0.6)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1
                }, {
                    label: 'Boomers',
                    data: data.map(item => item.Boomers),
                    backgroundColor: 'rgba(255, 159, 64, 0.6)',
                    borderColor: 'rgba(255, 159, 64, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',  // This will make the chart horizontal
                responsive: true,
                maintainAspectRatio: true, // Maintains the aspect ratio
                scales: {
                    x: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Call initialization functions
    initPlatformChart();
    initInfluenceChart();
});
