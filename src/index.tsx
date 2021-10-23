import React from "react";
import ReactDOM from "react-dom";
import Button from '../components/button'
import List from '../components/list'
import Dropdown from '../components/dropdown'
import Input from '../components/input'
import Breadcrumb from '../components/breadcrumb'
import Link from "../components/link";
import Block from "../components/block";

const App = (): React.ReactElement => {
    return (
        <>
        {/* <Row gaps={[8,20]}>
          <a>aaa</a>
          <a>aaa</a>
          <a>aaa</a>
          </Row>  */}
          {/* <Button 
            label='aaaa' 
            type='flat'
            classes='full-width border-radius-5'
            // borderRadius={4}
            // shape='round'
            // isDisabled={true}
          /> */}
          {/* <List>
            <div>aaaa</div>
            <div>aaaa</div>
            <div>aaaa</div>
            <a href="google.com">aaaa</a>
          </List> */}
        {/* <Dropdown
          caretIconName='caret'
          label='label'
          type='flat'
          classes='margin-20'
          placement='rt'
        >
          <div>aaaa s fse fdsf</div>
          <div>aaaa</div>
          <div>aaaa</div>
          <a href="google.com">aaaa</a>
        </Dropdown> */}
        <Input placeholder="aaaa" errorText='Hasdasd'/>
        <Button label='Hoang' classes="radius-2 border solid"/>
        <Block classes="active">
          aaaaa
        </Block>
        {/* <Breadcrumb 
          mapper={breadcrumbsMapper}
        /> */}

        {/* <Link $icon={{name:'documentCheck'}}/> */}
      </>
    )
  }




const breadcrumbsMapper = {
  'authority': {
      path: '',
      name: 'Quản lý Ủy quyền',
      'registration': { path: '/authority/registration', name: 'Đăng ký Ủy quyền', },
      'approval': { path: '/authority/approval', name: 'Kiểm soát Ủy quyền', },
  },
  'pyc': {
      path: '',
      name: 'Quản lý PYC Điều Quỹ',
      'registration': { path: '/pyc/registration', name: 'Đăng ký', },
      'approval': { path: '/pyc/approval', name: 'Kiểm soát & Phê duyệt', },
  },
  'route-management': {
      path: '',
      name: 'Quản lý Lộ trình',
      'normal': { path: '/route-management/normal', name: 'Lộ trình Bình thường', },
      'urgent': { path: '/route-management/urgent', name: 'Lộ trình Khẩn cấp', },
  },
  'route-tracking': {
      path: '',
      name: 'Theo dõi Lộ trình',
      'car1': { path: '/route-tracking/car1', name: 'PTVC là xe chuyên dùng', },
      'car2': { path: '/route-tracking/car2', name: 'PTVC KHÁC xe chuyên dùng', },
  },
  'category': {
      path: '',
      name: 'Danh mục',
      'area': { path: '/category/area', name: 'Danh mục cụm', },
      'atm-cdm': { path: '/category/atm-cdm', name: 'Danh mục ATM/CDM', },
      'currency': { path: '/category/currency', name: 'Danh mục tiền tệ', },
      'function': { path: '/category/function', name: 'Danh mục chức năng', },
      'nhnn-tctd': { path: '/category/nhnn-tctd', name: 'Danh mục TCTD/NHNN', },
      'orgs': { path: '/category/orgs', name: 'Danh mục đơn vị', },
      'pers': { path: '/category/pers', name: 'Danh mục nhân viên', },
      'priority': { path: '/category/priority', name: 'Danh mục mức độ ưu tiên', },
      'region': { path: '/category/region', name: 'Danh mục vùng', },
      'title': { path: '/category/title', name: 'Danh mục chức danh nhân viên', },
      'vehicle': { path: '/category/vehicle', name: 'Danh mục xe', },
  },
  'report': {
      path: '',
      name: 'Báo cáo KPP',
      'orgs': { path: '/report/orgs', name: 'BC Số lần điều quỹ NV Áp tải', },
      'special': { path: '/report/special', name: 'BC Sổ theo dõi VC HĐB', },
  },
  'user': {
      path: '',
      name: 'Người dùng',
      'change-password': { path: '/user/change-password', name: 'Đổi mật khẩu', },
      'assign-role': { path: '/user/assign-role', name: 'Phân quyền', },
      'reset-password': { path: '/user/reset-password', name: 'Đặt lại mật khẩu', },
      'register': { path: '/user/register', name: 'Đăng ký', },
  },
}
ReactDOM.render(<App />, document.getElementById("root"));