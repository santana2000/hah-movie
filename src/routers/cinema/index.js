export default {  
    path: '/cinema',
    component:() => import('@/views/Cinema'),
    // children:[
    //   {
    //     path:'/clist',
    //     component:() => import('@/components/Clist')
    //   },
      // {
      //   path:'/cinema',
      //   redirect:'/cinema/clist'
      // }
    // ]
  } 
