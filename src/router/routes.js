export default [{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		name: 'home',
		component: () => import('../view/home/home.vue'),
		meta: {
			title: '养老服务资源网',
			requireAuth: true,
			keepAlive: false // 不需要被缓存
		},
		children: [{
			path: 'list',
			name: 'list',
			component: () => import('../view/list/list.vue'),
			meta: {
				title: '用户信息',
				requireAuth: true,
				keepAlive: false // 不需要被缓存 
			}
		}]
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../view/login/login.vue')
	}
]
