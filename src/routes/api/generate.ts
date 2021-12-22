
import words from '$lib/data/words.json';
export type IGenerate = {
    amount: number
    start: boolean
    scope: 'PARAGRAPH' | 'WORDS'
}

const MAX_WORDS_PER_SENTENCE = 15
const MIN_WORDS_PER_SENTENCE = 7

const MAX_SENTENCES_PER_PARAGRAPH = 10
const MIN_SENTENCES_PER_PARAGRAPH = 3

export async function generate(body: IGenerate) {
    const { amount, start, scope } = body
    let generated = []
    // if start is true then generated will start with 'Abebe beso bela'
    if (start) {
        generated.push('Abebe beso bela ')
    }

    //  if scope is paragraph then generated will contain amount of paragraphs
    if (scope === 'PARAGRAPH') {
        for (let i = 0; i < amount; i++) {
            generated.push(`${generateParagraph()} `)
        }
    }
    // if scope is word then generated will contain amount of words
    if (scope === 'WORDS') {
        for (let i = 0; i < amount; i++) {
            generated.push(`${words[Math.floor(Math.random() * words.length)]} `)
        }
    }
    return generated
}


function generateParagraph() {
    const paragraph = []
    const sentence = getRandomNumber(MIN_WORDS_PER_SENTENCE, MAX_WORDS_PER_SENTENCE)

    for (let i = 0; i < sentence; i++) {
        paragraph.push(`${generateSentence()}`)
    }
    return paragraph.join('\n')
}

function generateSentence() {
    const sentence = []
    const word = getRandomNumber(MIN_WORDS_PER_SENTENCE, MAX_WORDS_PER_SENTENCE)

    for (let i = 0; i < word; i++) {
        sentence.push(`${words[Math.floor(Math.random() * words.length)]} `)
    }

    sentence[sentence.length - 1] = sentence[sentence.length - 1].replace(' ', '.')

    return `${sentence.join('')}`
}


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


type IGeneratedResponse = {
    amount: number
    scope: 'PARAGRAPH' | 'WORDS'
    start: boolean
    generated: string[]
}

type EndpointOutput = {
    status?: number
    headers?: Headers
    body?: IGeneratedResponse
}

export async function post(request): Promise<EndpointOutput> {

    const body = request.body as IGenerate;

    return {
        body: {
            amount: body.amount,
            start: body.start,
            scope: body.scope,
            generated: await generate(body)
        }
    }
}


