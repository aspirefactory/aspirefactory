// Teams List Data
const teamsList = [
  {
    id: 1,
    name: "Vidya Ravichandran",
    posting: "Co-Founder & Product Manager",
    linkedInUrl: "https://www.linkedin.com/in/vidyaravichandran/",
    imageUrl: "./assets/img/Team/vidya.png"
  },
  {
    id: 2,
    name: "Naveen Krishnamurthy",
    posting: "Co-Founder & Product Manager",
    linkedInUrl: "https://www.linkedin.com/in/naveenieus/",
    imageUrl: "./assets/img/Team/naveen.png"
  },
  {
    id: 3,
    name: "Giriprabhu Seshadri",
    posting: "Engineering",
    linkedInUrl: "https://www.linkedin.com/in/giriprabhu/",
    imageUrl: "./assets/img/Team/giri.png"
  },
  {
    id: 4,
    name: "Gokulnath G P",
    posting: "Engineering",
    linkedInUrl: "https://www.linkedin.com/in/gokulnathgp/",
    imageUrl: "./assets/img/Team/gokul.png"
  },
  {
    id: 5,
    name: "Shubham Singh",
    posting: "Tech Intern",
    linkedInUrl: "https://www.linkedin.com/in/shubhamsingh2454",
    imageUrl: "./assets/img/Team/shubham.png"
  },
  {
    id: 6,
    name: "Deepak Ganesan",
    posting: "Marketing Intern",
    linkedInUrl: "https://www.linkedin.com/in/deepak-g-7939041a3",
    imageUrl: "./assets/img/Team/deepak.png"
  }
]

// Rendering the teams list in team section
const teamsListEl = document.querySelector("#team #teams-list");
teamsList.forEach(team => {
  teamsListEl.innerHTML += `
    <div class="col-lg-3 col-md-6" id="team${team.id}">
    <div class="member" data-aos="fade-up" data-aos-delay="400">
      <img src="${team.imageUrl}" class="img-fluid" alt="" />
      <div class="member-info">
        <div class="member-info-content">
          <h4>${team.name}</h4>
          <span>${team.posting}</span>
          <div class="social">
            <a href="${team.linkedInUrl}" target="_blank"><i class="fa fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
});

// Products List
const productsList = [
  {
    id: 1,
    title: "UV Dost - Micro",
    price: "2,000",
    imageUrl: "./assets/img/products/uv_dust_micro.png",
    type: "product"
  },
  {
    id: 2,
    title: "UV Dost - Cool",
    price: "3,500",
    imageUrl: "./assets/img/products/uv_dust_cool.png",
    type: "product"
  },
  {
    id: 3,
    title: "UV Dost - Lite",
    price: "3,000",
    imageUrl: "./assets/img/products/uv_dust_lite.png",
    type: "product"
  },
  {
    id: 4,
    title: "UV Dost - Pro",
    price: "6,000",
    imageUrl: "./assets/img/products/uv_dust_pro_1.png",
    type: "product"
  },
  {
    id: 5,
    title: "UV Dost Kit - Micro",
    price: "1,500",
    imageUrl: "./assets/img/products/uv_dust_micro.png",
    type: "kit"
  },
  {
    id: 6,
    title: "UV Dost Kit - Cool",
    price: "1,950",
    imageUrl: "./assets/img/products/uv_dust_cool.png",
    type: "kit"
  },
  {
    id: 7,
    title: "UV Dost Kit - Pro",
    price: "2,300",
    imageUrl: "./assets/img/products/uv_dust_pro_1.png",
    type: "kit"
  }
];

// WhatsApp number
const whatsappNumber = "919003712349";

// Rendering the products list in products section
const productsListEl = document.querySelector("#products #products-list");
productsList.forEach(product => {
  productsListEl.innerHTML += `
    <div class="col-lg-4 col-md-6 products-item filter-${product.type}">
    <div class="products-wrap">
      <figure>
        <img src="${product.imageUrl}" class="img-fluid" alt="" />
        <a href="${product.imageUrl}" class="link-preview venobox" data-gall="portfolioGallery"
          title="${product.title}" class="link-preview"><i class="ion ion-eye"></i></a>
      </figure>

      <div class="products-info">
        <h4 class="title">${product.title}</h4>
        <p>&#8377; ${product.price}</p>
        <div class="btn-actions mt-2">
          <a href="https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Hi, I am interested in knowing more about ${product.title} at MRP: ${product.price}. Can you please send me more details?" target="_blank" class="btn-enquiry">Enquire now</a>
        </div>
      </div>
    </div>
  </div>
    `
})
