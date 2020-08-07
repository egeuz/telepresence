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
    if (type === "project" || type === "event") {
      callback(response.results);
    } else {
      callback(response.results[0].data);
    }
  }
}