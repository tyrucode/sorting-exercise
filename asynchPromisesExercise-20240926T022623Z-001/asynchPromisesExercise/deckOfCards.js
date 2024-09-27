const deckOfCardsApi = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
const button = document.querySelector('#giveCardButton');
let deckId;

const drawCard = async () => {
    try {
        if (!deckId) {
            const response = await axios.get(deckOfCardsApi);
            deckId = response.data.deck_id;
            console.log('New deck created with ID:', deckId);
        }
        const drawResponse = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
        const individualCard = drawResponse.data.cards[0];
        console.log(drawResponse.data.deck_id);
        let cardImg = document.createElement('img');
        cardImg.src = individualCard.image;
        document.body.appendChild(cardImg);
    } catch (error) {
        console.error('Error:', error.message);
    }
};

button.addEventListener('click', drawCard);