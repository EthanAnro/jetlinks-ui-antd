/** 路由Code */
export enum MENUS_CODE {
  'home' = 'home',
  'Analysis/CPU' = 'Analysis/CPU',
  'Analysis/DeviceChart' = 'Analysis/DeviceChart',
  'Analysis/DeviceMessage' = 'Analysis/DeviceMessage',
  'Analysis/Jvm' = 'Analysis/Jvm',
  'Analysis/MessageChart' = 'Analysis/MessageChart',
  'Analysis' = 'Analysis',
  'cloud/Aliyun' = 'cloud/Aliyun',
  'cloud/Ctwing' = 'cloud/Ctwing',
  'cloud/DuerOS' = 'cloud/DuerOS',
  'cloud/Onenet' = 'cloud/Onenet',
  'device/Alarm' = 'device/Alarm',
  'device/Category/Save' = 'device/Category/Save',
  'device/Category' = 'device/Category',
  'device/Command' = 'device/Command',
  'device/DataSource' = 'device/DataSource',
  'device/Instance' = 'device/Instance',
  'device/Location' = 'device/Location',
  'device/Product/Save' = 'device/Product/Save',
  'device/Product' = 'device/Product',
  'device/DashBoard' = 'device/DashBoard',
  'device/components/Alarm/Edit' = 'device/components/Alarm/Edit',
  'device/components/Alarm/Record' = 'device/components/Alarm/Record',
  'device/components/Alarm/Setting' = 'device/components/Alarm/Setting',
  'device/components/Alarm' = 'device/components/Alarm',
  'device/components/Metadata/Base/Edit' = 'device/components/Metadata/Base/Edit',
  'device/components/Metadata/Base' = 'device/components/Metadata/Base',
  'device/components/Metadata/Cat' = 'device/components/Metadata/Cat',
  'device/components/Metadata/Import' = 'device/components/Metadata/Import',
  'device/components/Metadata' = 'device/components/Metadata',
  'edge/Device' = 'edge/Device',
  'edge/Product' = 'edge/Product',
  'link/Certificate' = 'link/Certificate',
  'link/Certificate/Detail' = 'link/Certificate/Detail',
  'link/Gateway' = 'link/Gateway',
  'link/Opcua' = 'link/Opcua',
  'link/Channel/Opcua' = 'link/Channel/Opcua',
  'link/Channel/Modbus' = 'link/Channel/Modbus',
  // 'link/Channel/Opcua/Access' = 'link/Channel/Opcua/Access',
  // 'link/Channel/Modbus/Access' = 'link/Channel/Modbus/Access',
  'link/Protocol/Debug' = 'link/Protocol/Debug',
  'link/Protocol' = 'link/Protocol',
  'link/Type' = 'link/Type',
  'link/AccessConfig' = 'link/AccessConfig',
  'link/DataCollect/Dashboard' = 'link/DataCollect/Dashboard',
  'link/DataCollect/DataGathering' = 'link/DataCollect/DataGathering',
  'link/DataCollect/IntegratedQuery' = 'link/DataCollect/IntegratedQuery',
  'Log' = 'Log',
  'media/Cascade' = 'media/Cascade',
  'media/Cascade/Save' = 'media/Cascade/Save',
  'media/Cascade/Channel' = 'media/Cascade/Channel',
  'media/Config' = 'media/Config',
  'media/Device' = 'media/Device',
  'media/Device/Save' = 'media/Device/Save',
  'media/Device/Channel' = 'media/Device/Channel',
  'media/Device/Playback' = 'media/Device/Playback',
  'media/Reveal' = 'media/Reveal',
  'media/Stream' = 'media/Stream',
  'media/Stream/Detail' = 'media/Stream/Detail',
  'media/DashBoard' = 'media/DashBoard',
  'notice/Type' = 'notice/Type',
  'notice/Config' = 'notice/Config',
  'media/SplitScreen' = 'media/SplitScreen',
  'notice/Type/Config' = 'notice/Config',
  'notice/Config/Detail' = 'notice/Config/Detail',
  'notice/Template' = 'notice/Template',
  'notice/Template/Detail' = 'notice/Template/Detail',
  'rule-engine/DashBoard' = 'rule-engine/DashBoard',
  'rule-engine/Instance' = 'rule-engine/Instance',
  'rule-engine/SQLRule' = 'rule-engine/SQLRule',
  'rule-engine/Scene' = 'rule-engine/Scene',
  'rule-engine/Alarm/Log' = 'rule-engine/Alarm/Log',
  'rule-engine/Alarm/Log/Detail' = 'rule-engine/Alarm/Log/Detail',
  'rule-engine/Alarm/Config' = 'rule-engine/Alarm/Config',
  'rule-engine/Scene/Save' = 'rule-engine/Scene/Save',
  'rule-engine/Scene/Save2' = 'rule-engine/Scene/Save2',
  'rule-engine/Alarm/Configuration' = 'rule-engine/Alarm/Configuration',
  'simulator/Device' = 'simulator/Device',
  'system/DataSource' = 'system/DataSource',
  'system/DataSource/Management' = 'system/DataSource/Management',
  'system/Department/Assets' = 'system/Department/Assets',
  'system/Department/Member' = 'system/Department/Member',
  'system/Department' = 'system/Department',
  'system/Menu' = 'system/Menu',
  'system/Menu/Setting' = 'system/Menu/Setting',
  'system/OpenAPI' = 'system/OpenAPI',
  'system/Permission' = 'system/Permission',
  'system/Role/Detail' = 'system/Role/Detail',
  'system/Role' = 'system/Role',
  'system/Tenant/Detail/Assets' = 'system/Tenant/Detail/Assets',
  'system/Tenant/Detail/Info' = 'system/Tenant/Detail/Info',
  'system/Tenant/Detail/Member' = 'system/Tenant/Detail/Member',
  'system/Tenant/Detail/Permission' = 'system/Tenant/Detail/Permission',
  'system/Tenant/Detail' = 'system/Tenant/Detail',
  'system/Tenant' = 'system/Tenant',
  'system/User' = 'system/User',
  'system/Relationship' = 'system/Relationship',
  'system/Basis' = 'system/Basis',
  'user/Login' = 'user/Login',
  'visualization/Category' = 'visualization/Category',
  'visualization/Configuration' = 'visualization/Configuration',
  'visualization/Screen' = 'visualization/Screen',
  'device/Firmware' = 'device/Firmware',
  'device/Firmware/Task' = 'device/Firmware/Task',
  'device/Firmware/Task/Detail' = 'device/Firmware/Task/Detail',
  'device/Instance/Detail/Config/Tags' = 'device/Instance/Detail/Config/Tags',
  'device/Instance/Detail/Config' = 'device/Instance/Detail/Config',
  'device/Instance/Detail/Functions' = 'device/Instance/Detail/Functions',
  'device/Instance/Detail/Info' = 'device/Instance/Detail/Info',
  'device/Instance/Detail/Log' = 'device/Instance/Detail/Log',
  'device/Instance/Detail/MetadataLog/Event' = 'device/Instance/Detail/MetadataLog/Event',
  'device/Instance/Detail/MetadataLog/Property' = 'device/Instance/Detail/MetadataLog/Property',
  'device/Instance/Detail/Running' = 'device/Instance/Detail/Running',
  'device/Instance/Detail' = 'device/Instance/Detail',
  'device/Product/Detail/BaseInfo' = 'device/Product/Detail/BaseInfo',
  'device/Product/Detail' = 'device/Product/Detail',
  'link/AccessConfig/Detail' = 'link/AccessConfig/Detail',
  'link/DashBoard' = 'link/DashBoard',
  'system/Menu/Detail' = 'system/Menu/Detail',
  'system/Department/Detail' = 'system/Department/Detail',
  'link/Type/Detail' = 'link/Type/Detail',
  'account/Center' = 'account/Center',
  'account/NotificationSubscription' = 'account/NotificationSubscription',
  'account/NotificationRecord' = 'account/NotificationRecord',
  'account/Center/bind' = 'account/Center/bind',
  'Northbound/DuerOS' = 'Northbound/DuerOS',
  'Northbound/DuerOS/Detail' = 'Northbound/DuerOS/Detail',
  'Northbound/AliCloud' = 'Northbound/AliCloud',
  'Northbound/AliCloud/Detail' = 'Northbound/AliCloud/Detail',
  'system/Platforms' = 'system/Platforms',
  'system/Platforms/Api' = 'system/Platforms/Api',
  'system/Platforms/View' = 'system/Platforms/View',
  'system/Platforms/Setting' = 'system/Platforms/Setting',
  'system/Apply' = 'system/Apply',
  'system/Apply/Api' = 'system/Apply/Api',
  'system/Apply/View' = 'system/Apply/View',
  'system/License' = 'system/License',
  'iot-card/Home' = 'iot-card/Home',
  'iot-card/Platform' = 'iot-card/Platform',
  'iot-card/Platform/Detail' = 'iot-card/Platform/Detail',
  'iot-card/Recharge' = 'iot-card/Recharge',
  'iot-card/Dashboard' = 'iot-card/Dashboard',
  'iot-card/CardManagement' = 'iot-card/CardManagement',
  'iot-card/Record' = 'iot-card/Record',
}

export type MENUS_CODE_TYPE = keyof typeof MENUS_CODE | string;

export enum BUTTON_PERMISSION_ENUM {
  'add' = 'add',
  'delete' = 'delete',
  'import' = 'import',
  'view' = 'view',
  'export' = 'export',
  'update' = 'update',
  'action' = 'action',
  'push' = 'push',
  'assert' = 'assert',
  'bind-user' = 'bind-user',
  'active' = 'active',
  'sync' = 'sync',
  'channel' = 'channel',
  'debug' = 'debug',
  'log' = 'log',
  'tigger' = 'tigger',
  'empowerment' = 'empowerment',
  'bind' = 'bind',
  'edit' = 'edit', //资产权限编辑
  'setting' = 'setting', //菜单配置
  'password' = 'password', //重置密码
  'api' = 'api', //查看api
  'manage' = 'manage', //数据源-管理
  'stop' = 'stop',
  'restart' = 'restart',
}

// 调试按钮、通知记录、批量导出、批量导入、选择通道、推送、分配资产、绑定用户对应的ID是啥
export type CUSTOM_BUTTON = 'debug' | 'log' | 'channel' | 'assert' | 'bind-user';

export type BUTTON_PERMISSION = keyof typeof BUTTON_PERMISSION_ENUM | string | CUSTOM_BUTTON;

export const getDetailNameByCode = {
  'system/Menu/Detail': '菜单详情',
  'device/Product/Detail': '产品详情',
  'device/Instance/Detail': '设备详情',
  'device/Firmware/Task/Detail': '详情',
  'system/Department/Detail': '组织详情',
  'system/Role/Detail': '权限配置',
  'link/Type/Detail': '网络组件详情',
  'link/AccessConfig/Detail': '配置详情',
  'media/Stream/Detail': '流媒体详情',
  'rule-engine/Alarm/Log/Detail': '告警日志',
  'Northbound/AliCloud/Detail': '阿里云详情',
  'link/Certificate/Detail': '证书详情',
  'iot-card/Platform/Detail': '平台对接详情',
};

// 开源版路由
export const CommunityCodeList = [
  'account/Center',
  'account/NotificationSubscription',
  'account/NotificationRecord',
  'system/Basis',
  'system/User',
  'system/Department',
  'system/Department/Detail',
  'system/Role',
  'system/Role/Detail',
  'system/Menu',
  'system/Menu/Detail',
  'system/Menu/Setting',
  'system/Permission',
  'system/Relationship',
  'home',
  'rule-engine/DashBoard',
  'rule-engine/Alarm/Configuration',
  'rule-engine/Alarm/Log',
  'rule-engine/Alarm/Log/Detail',
  'device/DashBoard',
  'device/Category',
  'device/Instance',
  'device/Instance/Detail',
  'device/Product',
  'device/Product/Detail',
  'link/AccessConfig',
  'link/AccessConfig/Detail',
  'link/Protocol',
  'link/DashBoard',
  'Log',
  'link/Type',
  'link/Type/Detail',
  'link/Certificate',
  'link/Certificate/Detail',
  'rule-engine/Scene',
  'rule-engine/Scene/Save',
  'notice/Config',
  'notice/Config/Detail',
  'notice/Template',
  'notice/Template/Detail',
];
