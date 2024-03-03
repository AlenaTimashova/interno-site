const blogdetail = {
  data() {
    return {
      articles: [
        {
          id: 1,
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
          die: "Kitchan Design",
          img: "src/img/article_img1.png",
          top: true,
          tag: { title: "kitchen", active: true },
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
        },
        {
          id: 2,
          title: "Low Cost Latest Invented Interior Designing \n Ideas.",
          date: "22 December,2022",
          die: "Living Design",
          img: "src/img/article_img2.png",
          top: true,
          tag: { title: "bedroom", active: false },
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
        },
        {
          id: 3,
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
          die: "Interior Design",
          img: "src/img/article_img3.png",
          top: true,
          tag: { title: "architecture", active: false },
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
        },
        {
          id: 4,
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
          die: "Kitchan Design",
          img: "src/img/article_img4.png",
          top: false,
          tag: { title: "building", active: false },
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
        },
        {
          id: 5,
          title: "Low Cost Latest Invented Interior Designing \n Ideas.",
          date: "22 December,2022",
          die: "Living Design",
          img: "src/img/article_img5.png",
          top: false,
          tag: { title: "kitchen planning", active: false },
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
        },
        {
          id: 6,
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
          die: "Interior Design",
          img: "src/img/article_img6.png",
          top: false,
          tag: { title: "kitchen", active: true },
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
        },
      ],

      tags: [
        "Kitchen",
        "Bedroom",
        "Building",
        "Architecture",
        "Kitchen Planning",
      ],
    };
  },
  methods: {
    showArticles(tag) {
      this.articles.forEach((article) => {
        article.tag.active = false;
        if (article.tag.title.toLowerCase() === tag.toLowerCase()) {
          article.tag.active = true;
        }
      });
    },
  },

  computed: {
    filteredArticles: function () {
      return this.articles.filter((article) => article.tag.active);
    },
  },

  template: `
  <div v-for="article in filteredArticles" :key="article.id">
  <h2 class="articles__header">{{article.title}}</h2>
  <img :src="article.img" alt="img" />
  <div class="articles__desc">
    <p class="card__info">{{article.date}}</p>
    <p class="articles__breadcrumbs">Interior / Home / Decore</p>
  </div>
  <div class="articles__desc">
    <p class="articles__text">{{article.text}}</p>
    
  </div>
</div>
<div class="tags" v-for="(tag, index) in tags" :key="index">
  <button @click="showArticles(tag)">{{tag}} </button>
</div>
      `,
};
