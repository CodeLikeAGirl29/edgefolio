/** *************************************************************
 * Any file inside the folder pages/api is mapped to /api/* and *
 * will be treated as an API endpoint instead of a page.        *
 ****************************************************************/

const subscribe = async (req, res) => {
  const { email } = req.body

  if (req.method !== 'POST') {
    return res.status(405).send({ error: 'Request method is not allowed.' })
  }

  if (!email) {
    return res.status(400).json({ error: 'Email is required.' })
  }

  try {
    const FORM_ID = process.env.CONVERTKIT_FORM_ID
    const API_KEY = process.env.CONVERTKIT_API_KEY
    const API_URL = process.env.CONVERTKIT_API_URL

    const data = { email, api_key: API_KEY }

    const response = await fetch(`${API_URL}forms/${FORM_ID}/subscribe`, {
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })

    if (response.status >= 400) {
      return res.status(400).json({ error: 'There was an error subscribing to the list.' })
    }

    return res.status(201).json({ error: '' })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
}

export default subscribe
