function generate(){
    var quotes = {
        "-Jawaharlal Nehru" : '"Life is like a game of cards. The hand you are dealt is determinism; the way you play it is free will."',
        "-Aristotle Onassis" : '"We must free ourselves of the hope that the sea will ever rest. We must learn to sail in high winds."',
        "-Pythagoras" : '"Concern should drive us into action and not into a depression. No man is free who cannot control himself."',
        "-Charles R. Swindoll" : '"Life is 10% what happens to you and 90% how you react to it."',
        "-Theodore Roosevelt" : '"Keep your eyes on the stars, and your feet on the ground."',
        "-Og Mandino" : '"Failure will never overtake me if my determination to succeed is strong enough."',
        "-Dalai Lama" : '"Be kind whenever possible. It is always possible."',
        "-Aldous Huxley" : '"There is only one corner of the universe you can be certain of improving, and that is your own self."',
        "-Tony Robbins" : '"Setting goals is the first step in turning the invisible into the visible."',
        "-Pope John XXIII" : '"Consult not your fears but your hopes and your dreams. Think not about your frustrations, but about your unfulfilled potential.  Concern yourself not with what you tried and failed in, but with what it is still possible for you to do."',
        "-Thomas Jefferson" : '"Do you want to know who you are? Don not ask. Act! Action will delineate and define you."',
        "-Muhammad Ali" : '"I know where I\'m going and I know the truth, and I don\'t have to be what you want me to be. I\'m free to be what I want."',
        "-Oprah Winfrey" : '"Do the one thing you think you cannot do. Fail at it. Try again. Do better the second time. The only people who never tumble are those who never mount the high wire. This is your moment. Own it."',
        "-Katharine Hepburn" : '"We are taught you must blame your father, your sisters, your brothers, the school, the teachers - but never blame yourself. It\'s never your fault. But it\'s always your fault, because if you wanted to change you\'re the one who has got to change."'
    }


    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}