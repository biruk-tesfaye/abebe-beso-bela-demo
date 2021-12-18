
export type IGenerate = {
    amount: number
    start: boolean
    scope: 'PARAGRAPH' | 'WORD'
}

export async function generate(body: IGenerate) {
    // const { amount, start, scope } = body
    const generatedData = '// Generated data\n\n';

    return {
        generatedData
    }
}




export async function post(request) {

    const body = request.body as IGenerate;

    const data = await generate(body);

    return {
        body: {
            data: data.generatedData
        }
    }
}


