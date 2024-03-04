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
        { text: "Kitchen", active: true },
        { text: "Bedroom", active: false },
        { text: "Building", active: false },
        { text: "Architecture", active: false },
        { text: "Kitchen Planning", active: false },
      ],
    };
  },
  methods: {
    showArticles(tag, $event) {
      this.articles.forEach((article) => {
        article.tag.active = false;
        if (article.tag.title.toLowerCase() === tag.toLowerCase()) {
          article.tag.active = true;
        }
        this.makeActiveBtn($event);
      });
    },

    makeActiveBtn($event) {
      const btns = document.querySelectorAll(".tags__button");
      btns.forEach((btn) => btn.classList.remove("active"));
      $event.target.classList.add("active");
    },
  },

  computed: {
    filteredArticles: function () {
      return this.articles.filter((article) => article.tag.active);
    },
  },

  template: `
  <div class="articles_filtered">
  <div v-for="article in filteredArticles" :key="article.id" class="articles__filtered-article"> 
  <h2 class="articles__title articles__title_blog">{{article.title}}</h2>
  <img class="articles__img" :src="article.img" alt="img" />
  <div class="articles__desc articles__desc_filtered">
    <p class="card__info">{{article.date}}</p>
    <p class="card__info">Interior / Home / Decore</p>
  </div>
    <div class="articles__desc">
        <p class="card__info articles__text">{{article.text}}</p>
    </div>
  </div>
</div>
<div class="tags" >
<h3 class="tags__title">Tags</h3>
  <div class="tags__buttons">
  <button class="tags__button" :class="{active:tag.active}" v-for="(tag, index) in tags" :key="index" @click="showArticles(tag.text, $event)">{{tag.text}} </button>
  </div>
</div>
      `,
};
