// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import CodiceFiscale from 'codice-fiscale-js'

export default function handler(req, res) {
    
    try {
      const params = req.query.cf
      const c = CodiceFiscale.reverse(params)
      res.status(200).json(c)
    } catch (error) {
        console.error(error)
        let errorMsg;
        if(req.query.cf){
            errorMsg = error.message ?? "Invalid request"
        } else {
            errorMsg = "Missing cf parameter in request"
        }
            
        res.status(400).json({
            error: errorMsg
        })
            
    }
   
   
}
  