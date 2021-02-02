import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import  { lazy} from 'react';
const icon=<AppstoreOutlined></AppstoreOutlined>
const day=  {
  path: "/home/day",
  name: "大屏监控",
  sort:2,
  component:lazy(()=>import("../../view/day/index")),
  meta: {
    auth: true,
    title: "大屏监控",
    iocn: icon,
    keepAlive: true
  },
  iocn: icon,
}
export default day
