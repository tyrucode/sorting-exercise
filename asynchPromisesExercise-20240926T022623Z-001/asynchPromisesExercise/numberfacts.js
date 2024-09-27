let numbersapi = 'http://numbersapi.com/'

const fetchData = async () => {
    try {
        for (let i = 1; i <= 3; i++) {
            const response = await axios.get(`${numbersapi}${i}`);
            console.log(`Fact about number ${i}:`, response.data);
        }
        for (let i = 1; i <= 3; i++) {
            const response = await axios.get(`${numbersapi}${6}`);
            console.log(`Fact about number ${6}:`, response.data);
        }
    } catch (error) {
        // Handle any errors
        console.error('Error fetching data:', error);
    }
};

fetchData();