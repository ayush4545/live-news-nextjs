export default function sortNewsByImage(news:NewsResponse){
     
     const newsWithImage=news?.data?.filter((item)=>item.image !== null)
     const newsWitouthImage=news?.data?.filter((item)=>item.image === null)

     const sortedNewsResponse={
          pagination:news?.pagination,
          data:[...newsWithImage,...newsWitouthImage]
     }

     return sortedNewsResponse
}