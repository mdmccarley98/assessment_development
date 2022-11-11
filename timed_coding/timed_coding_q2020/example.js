const Runner = require('../../_runners/runner.js')

const pattern = /(?<!Dr)(?<!Mrs)(?<!Mr)[.!?][)"']? +["'(]?([A-Z0-9])/

function firstLetterSecondSentence(twoSentences) {
    const matches = twoSentences.match(pattern)

    if (matches) {
        return matches[1]
    }
    return null
}

const run = Runner(firstLetterSecondSentence)

console.log('Public: ')
run(['In it lay a marble. Tom’s astonishment was bound-less!'], 'T', 'Period.')
run(['What country does he come from? Of what family is he, and where is his estate?'], 'O', 'Question mark.')
run(['Alas! How short-sighted is man?'], 'H', 'Exclamation mark.')
run(['"This is indeed a mystery," I remarked. "What do you imagine that it means?"'], 'W', 'Quote at beginning of second sentence.')
run(['"Is that from Dr. Jekyll, sir?" inquired the clerk. "I thought I knew the writing. Anything private, Mr. Utterson?"'], 'I', 'Punctuation in title.')
run(['"And did the man whom you pursued travel in the same fashion?" "Yes."'], 'Y', 'First sentence quoted question. Second, quoted response.')
run(['"Alas!" said she. "How shall I ever again believe in human goodness?"'], 'H', 'Exclamation in quote within first sentence.')
run(['"Get along with ye," said she to the man, "or I’ll be combing ye!" "Come on, Queequeg," said I, "all right. There’s Mrs. Hussey."'], 'C', 'Excamation ending quoted first sentence. Quote beginning to second sentence.')
run(['"What’s that about Cods, ma’am?" said I, with much politeness. "Clam or Cod?" she repeated.'], 'C', 'Quoted question with first sentence. Quoted beginning to second sentence.')
run(['She said the last words out loud, and the little thing grunted in reply (it had left off sneezing by this time). "Don’t grunt," said Alice; "that’s not at all a proper way of expressing yourself."'], 'D', 'Parens at end of first sentence.')

console.log('\nPrivate: ')
run(['Two other passengers, besides the one, were plodding up the hill by the side of the mail. All three were wrapped to the cheekbones and over the ears, and wore jack-boots.'], 'A', 'Period.')
run(['What was the meaning of this concourse? It was Commencement day.'], 'I', 'Question mark.')
run(['Good heavens! It is enough to drive me mad.'], 'I', 'Exclamation mark.')
run(['"Not I!" said the Lory hastily. "I thought you did," said the Mouse.'], 'I', 'Quote at beginning of second sentence.')
run(['Mrs. Dilber was next. Sheets and towels, a little wearing apparel, two old-fashioned silver teaspoons, a pair of sugar-tongs, and a few boots.'], 'S', 'Punctuation in title.')
