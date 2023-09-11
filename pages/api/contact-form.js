/** *************************************************************
 * Any file inside the folder pages/api is mapped to /api/* and *
 * will be treated as an API endpoint instead of a page.        *
 ****************************************************************/

import sendgrid from '@sendgrid/mail'
import { config } from '../../theme.config'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

const contact = async (req, res) => {
  const { email } = req.body
  const { recipient, sender, subject } = config.contactForm || {}

  if (!recipient) {
    return res
      .status(400)
      .json({ error: 'Missing [config.contactForm.recipient] property in theme options.' })
  }
  if (!sender) {
    return res
      .status(400)
      .json({ error: 'Missing [config.contactForm.sender] property in theme options.' })
  }
  if (!email) {
    return res
      .status(400)
      .json({ error: 'Missing email address. Please provide a correct email address.' })
  }

  if (req.method !== 'POST') {
    return res.status(405).send({ error: 'Request method is not allowed.' })
  }

  const getHtmlBody = (body) => {
    return Object.entries(body).map(([key, value]) => {
      if (typeof value === 'string') {
        return `<b>${key}</b>: ${value}`
      }
      if (typeof value === 'boolean') {
        return value === true ? key : false
      }
      if (typeof value === 'object') {
        return `<b>${key}</b>: ${getHtmlBody(value)?.filter(Boolean).join(', ')}`
      }
      return html
    })
  }

  let html = getHtmlBody(req.body)
  if (Array.isArray(html)) {
    html = html.join('<br />')
  }

  try {
    await sendgrid.send({
      to: recipient, // Your email where you'll receive emails
      from: recipient, // your website email address here
      replyTo: email,
      subject: req.body.subject || subject || 'Contact form entry',
      html,
    })
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ error: '' })
}

export default contact
