import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    name: 'start',
    component: () => import('../views/Notes.vue')
    },
    {
      path: '/notes',
      name: 'notes',
      component: () => import('../views/Notes.vue')
    },
    {
         path: '/tags',
         name: 'tags',
         component: () => import('../views/Tags.vue')
    },
    {
         path: '/note/view/:id',
         name: 'note-view',
         component: () => import('../views/notes/ViewNote.vue')
    },
    {
         path: '/note/edit/:id',
         name: 'note-edit',
         component: () => import('../views/notes/EditNote.vue')
    },
    {
      path: '/note/add',
      name: 'note-add',
      component: () => import('../views/notes/AddNote.vue')
    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
