// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	OnePlus: [
		{
			name: "REDMI Turbo 5 Max",
			image: "/images/device/redmi-turbo-5-max.png",
			specs: "海风蓝 / 16G + 512GB",
			description:
				"天玑旗舰芯, 9000mAh大容量，100W秒充.",
			link: "https://www.mi.com/prod/redmi-turbo-5-max/",
		},
	],
	Router: [
		{
			name: "GL-MT3000",
			image: "/images/device/mt3000.png",
			specs: "1000Mbps / 2.5G",
			description:
				"Portable WiFi 6 router suitable for business trips and home use.",
			link: "https://www.gl-inet.cn/products/gl-mt3000/",
		},
	],
};
