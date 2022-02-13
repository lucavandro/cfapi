// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import CodiceFiscale from 'codice-fiscale-js'

export default function handler(req, res) {
    const params =  Object.keys(req.body).length ? req.body : req.query
   
    try {
        const c = CodiceFiscale.compute(params)
        res.status(200).json({ cf: c })
    } catch (error) {
        res.status(400).json({
            error : error.message
        })
    }
   
   
}
  