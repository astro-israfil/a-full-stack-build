import express from 'express';

const app = express();

app.use(express.static('dist')); // Bad practices to server static page like that

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
          "joke": "what's orange and sounds like a parrot? a carrot."
        },
        {
          "joke": "I was organizing my desk the other day and the Entropy Police gave me a ticket for disturbing the chaos."
        },
        {
          "joke": "Why did the dog go into the water? Because he didn't want to be a hot dog."
        },
        {
          "joke": "What's the most beautiful thing in Advanced Physics? A passing grade."
        },
        {
          "joke": "What's the difference between Botox and Borax? Two letters."
        },
        {
          "joke": "What do you call a Macho Man Randy Savage that does not belong to you? Nacho Man Randy Savage!"
        },
        {
          "joke": "What is the longest word in the English language? SMILES because there is a mile between the first and last letters!"
        },
        {
          "joke": "What's so great about living in Switzerland? Well, the flag is a big plus."
        },
        {
          "joke": "What begins with E, ends with E, and has one letter? envelope"
        },
        {
          "joke": "What are two doctors with colds An ironic Paradox."
        }
    ]
    res.json(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});