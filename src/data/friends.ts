// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "Astro",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "The web framework for content-driven websites",
		siteurl: "https://github.com/withastro/astro",
		tags: ["框架"],
	},
	{
		id: 2,
		title: "Mizuki Docs",
		imgurl: "http://q.qlogo.cn/headimg_dl?dst_uin=3231515355&spec=640&img_type=jpg",
		desc: "Mizuki User Manual",
		siteurl: "https://docs.mizuki.mysqil.com",
		tags: ["文档"],
	},
	{
		id: 3,
		title: "Vercel",
		imgurl: "https://avatars.githubusercontent.com/u/14985020?v=4&s=640",
		desc: "Develop. Preview. Ship.",
		siteurl: "https://vercel.com",
		tags: ["主机", "Cloud"],
	},
	{
		id: 4,
		title: "GitHub",
		imgurl: "https://avatars.githubusercontent.com/u/9919?v=4&s=640",
		desc: "Where the world builds software",
		siteurl: "https://github.com",
		tags: ["开发", "平台"],
	},
	{
		id: 5,
		title: "QiuLingYanの小站",
		imgurl: "https://i.postimg.cc/R0Rb7Lgv/cgi-bin-mmwebwx-bin-webwxgetmsgimg-Msg-ID-7182137176871366394-skey-crypt-e10aef0c-d761f5527e6b8c6.jpg",
		desc: "QiuLingYan 的废纸篓喵～",
		siteurl: "https://qiulingyan.top/",
		tags: ["fvv 喵", "Blog"],
	},
	{
		id: 6,
		title: "Amachiromaker",
		imgurl: "https://nacho.zako.wf/favicon.png",
		desc: "这是一个被甘城猫猫下线的捏脸网站",
		siteurl: "https://nacho.zako.wf/",
		tags: ["喵喵喵～"],
	},
	{
		id: 7,
		title: "a1235789i",
		imgurl: "https://photo.zako.wf/i/2025/10/25/68fcde525ea57.jpg",
		desc: "牛仔,Minecraft Add-On汉化者",
		siteurl: "https://res.abeim.cn/api/qq/?qq=2912139095",
		tags: ["Add-On汉化", "QQ主页", "Minecraft"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
