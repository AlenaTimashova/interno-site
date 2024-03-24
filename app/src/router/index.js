import ProjectsPageComponent from "@/components/pages/ProjectsPageComponent.vue";
import ProjectDetailsPage from "@/components/pages/ProjectDetailsPage.vue";

import BlogDetailsPageComponent from "@/components/pages/BlogDetailsPageComponent.vue";

import BlogPageComponent from "@/components/pages/BlogPageComponent.vue";

import { createRouter, createWebHistory } from "vue-router";
import IndexPageComponent from "@/components/pages/IndexPageComponent.vue";
import NotFoundPage from "@/components/pages/NotFoundPage.vue";
import ProjectsListComponent from "@/components/ProjectsListComponent.vue";

const routes = [
  {
    path: "/",
    name: "homePage",
    component: IndexPageComponent,
  },
  {
    path: "/blog",
    name: "blogPage",
    component: BlogPageComponent,
  },
  {
    path: "/blog-details",
    name: "blogDetails",
    component: BlogDetailsPageComponent,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsPageComponent,
  },
  {
    path: "/project-details",
    name: "projectDetails",
    component: ProjectDetailsPage,
  },
  {
    path: "/:CatchAll(.*)",
    name: "404",
    component: NotFoundPage,
  },
  {
    path: "/project/:pageNumber?", // : - динамически формируется, ? - необязательный элемент
    name: "project",
    component: ProjectsListComponent,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
    };
  },
});

export default router;
