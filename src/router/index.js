import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Content from '@/components/content'
import Dimage from '@/components/Dpi_page'
import VR from '@/components/vr_page'
import Art from '@/components/art_page'
import Infographics from '@/components/infographics_page'
import Ebook from '@/components/ebook_page'
import Cartoon from '@/components/cartoon_page'
import ContentVideo from '@/components/video_content_page'
import Search from '@/components/search'
import AllContent from '@/components/all_content'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/content/:idContent',
      name: 'content',
      component: Content
    },
    {
      path: '/Dimage',
      name: 'Dimage',
      component: Dimage
    },
    {
      path: '/VR',
      name: 'VR',
      component: VR
    },
    {
      path: '/Art',
      name: 'Art',
      component: Art
    },
    {
      path: '/Infographics',
      name: 'Infographics',
      component: Infographics
    },
    {
      path: '/Ebook',
      name: 'Ebook',
      component: Ebook
    },
    {
      path: '/Cartoon',
      name: 'Cartoon',
      component: Cartoon
    },
    {
      path: '/ContentVideo',
      name: 'ContentVideo',
      component: ContentVideo
    },
    {
      path: '/ค้นหา',
      name: 'Search',
      component: Search
    },
    {
      path: '/AllContent/:idCategory',
      name: 'AllContent',
      component: AllContent
    }
  ]
})
