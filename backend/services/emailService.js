const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

async function sendRegisterEmail(newClient) {
    const msg = {
        from: 'info@skilluplabs.com.au',
        template_id: 'd-a8ca203b7220402caadcbb7ed8dbad1d',
        personalizations: [
            {
                to: {
                    email: newClient.email
                },
                dynamic_template_data: {
                    firstName: newClient.firstName,
                    dashboardUrl: "http://localhost:5173/dashboard"
                }
            }
        ]
      }

    try {
        await sgMail.send(msg)
    }
    catch(error) {
        console.log(error.response.body)
        throw new Error()
    }
   
}

module.exports = {sendRegisterEmail}