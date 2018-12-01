import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Content from '@/components/content'
import Dimage from '@/components/Dpi_page'
import Video from '@/components/video'
import VR from '@/components/vr_page'
import Art from '@/components/art_page'
import Motiongraphics from '@/components/motiongraphics_page'
import Infographics from '@/components/infographics_page'
import Ebook from '@/components/ebook_page'
import Cartoon from '@/components/cartoon_page'
import Animation from '@/components/animation_page'
import ContentVideo from '@/components/video_content_page'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/content',
      name: 'content',
      component: Content
    },
    {
      path: '/Dimage',
      name: 'Dimage',
      component: Dimage
    },
    {
      path: '/Video',
      name: 'Video',
      component: Video
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
      path: '/Motiongraphics',
      name: 'Motiongraphics',
      component: Motiongraphics
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
      path: '/Animation',
      name: 'Animation',
      component: Animation
    },
    {
      path: '/ContentVideo',
      name: 'ContentVideo',
      component: ContentVideo
    }
  ]
})
