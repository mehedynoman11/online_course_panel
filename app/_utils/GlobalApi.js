const { gql, default: request } = require("graphql-request")

const MASTER_URLS = "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/"+ process.env.NEXT_PUBLIC_HYGRAPH_API_KEY +"/master"

const getAllCourseList = async() => {
    const query = gql`
    query Assets {
      assets {
        createdAt
        id
        publishedAt
        fileName
        url
        updatedAt
      }
    }
      `
      const result = await request(MASTER_URLS,query)
      return result;

}
export default{
    getAllCourseList
}