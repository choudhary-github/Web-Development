$(() => {
  let list = $("#list")
  let page = 1

  $("#fetch").click(() => {
    
    console.log(page)
    $.get(`https://reqres.in/api/users?page=${page}`, (data) => {
      page++
      for (let p of data.data) {
        list.append(
          $(`<li>
          <img width="100" src="${p.avatar}"></img>
          ${p.first_name} ${p.last_name}</li>`)
        )
      }
    })
  })
})
