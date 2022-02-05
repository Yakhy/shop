const btn = document.querySelectorAll('.btn')
const container = document.querySelectorAll('.product-box')

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', (e)=> {
    e.preventDefault()
    const filter = e.target.dataset.filter

    container.forEach((product) => {
      // console.log(product.classList.contains(filter));
      if (filter == 'all') {
        product.style.display = 'block'
      } else {
        if (product.classList.contains(filter)) {
          product.style.display = "block"
        } else {
          product.style.display = "none"
          
        }
      }
    })

  })
}

