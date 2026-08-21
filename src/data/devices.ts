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
	REDMI: [
		{
			name: "REDMI Turbo 5 Max",
			image: "/images/device/redmi-turbo-5-max.png",
			specs: "海风蓝 / 16G + 512GB",
			description:
				"天玑旗舰芯, 9000mAh大容量，100W秒充.",
			link: "https://www.mi.com/prod/redmi-turbo-5-max/",
		},
	],
	HONOR: [
		{
			name: "HONOR-Band-9",
			image: "/images/device/honor-band-9.png",
			specs: "曜石黑 / 4MB+48MB",
			description:
				"TPU材质表带, 5ATM防水, 14天超长续航.",
			link: "https://www.honor.com/cn/wearables/honor-band-9/",
		}, 
		{
			name: "HONOR-Band-10 NFC",
			image: "/images/device/honor-band-9.png",
			specs: "曜石黑 / 4MB+48MB",
			description:
				"TPU材质表带, 5ATM防水, 14天超长续航.",
			link: "https://www.honor.com/cn/wearables/honor-band-9/",
		},
	],
};
