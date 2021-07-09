const axios = require('axios')

export class CepController {

    async getCep(req: any, res: any) {
        const { cep } = req.query
        try {
            await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
                .then((response: any) => {
                    res.json({ address: response.data })
                })
        } catch (error) {
            res.json({ error })
        }
    }
}