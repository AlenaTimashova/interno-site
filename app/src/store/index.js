import { createStore } from "vuex";

export default createStore({
  state: {
    project_details: {
      id: 1,
      title: "Minimal Look Bedrooms",
      text: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
        "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
      ],
    },

    projects: [
      {
        id: 1,
        title: "Minimal Bedroom",
        subtitle: "Decor / Artchitecture",
        img: require("@/assets/img/project5.png"),
        room: { title: "Bathroom", active: true },
      },
      {
        id: 2,
        title: "Classic Minimal Bedroom",
        subtitle: "Decor / Artchitecture",
        img: require("@/assets/img/project6.png"),
        room: { title: "Bed Room", active: false },
      },
      {
        id: 3,
        title: "Minimal Bedroom",
        subtitle: "Decor / Artchitecture",
        img: require("@/assets/img/project7.png"),
        room: { title: "Living Area", active: false },
      },
      {
        id: 4,
        title: "Minimal Bedroom table",
        subtitle: "Decor / Artchitecture",
        img: require("@/assets/img/project8.png"),
        room: { title: "Bed Room", active: false },
      },
      {
        id: 5,
        title: "Modern Medroom",
        subtitle: "Decor / Artchitecture",
        img: require("@/assets/img/project9.png"),
        room: { title: "Bed Room", active: false },
      },
      {
        id: 6,
        title: "System Table",
        subtitle: "Decor / Artchitecture",
        img: require("@/assets/img/project10.png"),
        room: { title: "Kitchan", active: false },
      },
      {
        id: 7,
        title: "Minimal Bedroom",
        subtitle: "Decor / Artchitecture",
        img: require("@/assets/img/project11.png"),
        room: { title: "Living Area", active: false },
      },
      {
        id: 8,
        title: "Minimal Bedroom",
        subtitle: "Decor / Artchitecture",
        img: require("@/assets/img/project12.png"),
        room: { title: "Kitchan", active: false },
      },
      {
        id: 9,
        title: "Minimal Bedroom",
        subtitle: "Decor / Artchitecture",
        img: require("@/assets/img/project11.png"),
        room: { title: "Living Area", active: false },
      },
      {
        id: 10,
        title: "Minimal Bedroom",
        subtitle: "Decor / Artchitecture",
        img: require("@/assets/img/project12.png"),
        room: { title: "Kitchan", active: false },
      },
      {
        id: 11,
        title: "Modern Medroom",
        subtitle: "Decor / Artchitecture",
        img: require("@/assets/img/project9.png"),
        room: { title: "Bed Room", active: false },
      },
      {
        id: 12,
        title: "System Table",
        subtitle: "Decor / Artchitecture",
        img: require("@/assets/img/project10.png"),
        room: { title: "Kitchan", active: false },
      },
      {
        id: 13,
        title: "Minimal Bedroom",
        subtitle: "Decor / Artchitecture",
        img: require("@/assets/img/project5.png"),
        room: { title: "Bathroom", active: true },
      },
      {
        id: 14,
        title: "Classic Minimal Bedroom",
        subtitle: "Decor / Artchitecture",
        img: require("@/assets/img/project6.png"),
        room: { title: "Bed Room", active: false },
      },
    ],
    articles: [
      {
        id: 1,
        title: "Let’s Get Solution For Building Construction Work",
        date: "26 December,2022",
        die: "Kitchan Design",
        img: require("@/assets/img/article_img1.png"),
        top: true,
      },
      {
        id: 2,
        title: "Low Cost Latest Invented Interior Designing \n Ideas.",
        date: "22 December,2022",
        die: "Living Design",
        img: require("@/assets/img/article_img2.png"),
        top: true,
      },
      {
        id: 3,
        title: "Best For Any Office & Business Interior Solution",
        date: "25 December,2022",
        die: "Interior Design",
        img: require("@/assets/img/article_img3.png"),
        top: true,
      },
      {
        id: 4,
        title: "Let’s Get Solution For Building Construction Work",
        date: "26 December,2022",
        die: "Kitchan Design",
        img: require("@/assets/img/article_img4.png"),
        top: false,
      },
      {
        id: 5,
        title: "Low Cost Latest Invented Interior Designing \n Ideas.",
        date: "22 December,2022",
        die: "Living Design",
        img: require("@/assets/img/article_img5.png"),
        top: false,
      },
      {
        id: 6,
        title: "Best For Any Office & Business Interior Solution",
        date: "25 December,2022",
        die: "Interior Design",
        img: require("@/assets/img/article_img6.png"),
        top: false,
      },
    ],
  },

  getters: {
    chosenProjects(state) {
      return state.projects.filter((project) => project.room.active);
    },
    topArticles(state) {
      return state.articles.filter((article) => article.top);
    },
  },

  mutations: {
    chooseProjects(state, room) {
      state.projects.forEach((project) => {
        project.room.active = false;
        if (project.room.title.toLowerCase() === room.toLowerCase()) {
          project.room.active = true;
        }
      });
    },
  },

  actions: {
    showProjects({ commit }, room) {
      commit("chooseProjects", room);
    },
  },
});
