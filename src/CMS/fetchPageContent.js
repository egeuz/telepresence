import Prismic from 'prismic-javascript'

const Client = Prismic.client(
  process.env.REACT_APP_PRISMIC_URL,
  process.env.REACT_APP_PRISMIC_KEY
)

export default async function fetchPageContent(type, callback) {
  const response = await Client.query(
    Prismic.Predicates.at('document.type', type), { pageSize: 100 }
  )
  
  if (response) {
    if (response.results.length > 1) {
      callback(response.results);
    } else if (response.results.length === 1) {
      callback(response.results[0].data);
    }
  }
}