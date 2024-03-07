
const getNews = async () => {
    //?   https://newsapi.org/v2/top-headlines?country=tr&apiKey=1a1a999e0d7240a6bd2dead87bcca78e&category=technology
  
    const BASE_URL = `https://newsapi.org/v2/`
    const API_KEY = `c51a34114bf3457ca3630e2ae8b6ebbd`
    const queryString = `top-headlines?country=us&category=technology`
    const URL = `${BASE_URL}${queryString}&apiKey=${API_KEY}`
  
    try {
      const res = await fetch(URL)
  
      //? Error handing
      if (!res.ok) {
        throw new Error(`${res.status}`)
      }
      const data = await res.json()
      dipslayNews(data.articles)
    } catch (error) {
      const newsArticle = document.getElementById("news")
      newsArticle.innerHTML = `
          <img src="./img/404.png" alt="" />
      `
    }
  }
  
  const dipslayNews = (news) => {
    const newsArticle = document.getElementById("news")
    const defaultImage = "./img/404.png"
  
    news.forEach(({ urlToImage, url, content, title }) => {
      newsArticle.innerHTML += `
          <div class="card col-sm-6 col-md-4 col-lg-3">
              <img src="${
                urlToImage || defaultImage
              }" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${title}</h5>
                  <p class="card-text">${content || "No Content"}</p>
                  <a href="${url}" target="_blank" class="btn btn-primary">Detail</a>
              </div>
          </div>
      `
    })
  }
  
  getNews()
  