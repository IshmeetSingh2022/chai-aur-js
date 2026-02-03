console.log('Fetch API Example');

const url='https://cat-fact.herokuapp.com/facts';

async function getFacts() {
const response = await fetch('https://mono.co/', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
});
console.log(response);
}



getFacts()