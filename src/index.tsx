import React from "react";
import ReactDOM from "react-dom";
import Button from '../components/button'
import List from '../components/list'
import Dropdown from '../components/dropdown'
import Input from '../components/input'
import Breadcrumb from '../components/breadcrumb'
import Link from "../components/link";
import Row from "../components/row";
import Col from "../components/col";

const App = (): React.ReactElement => {
  const backgroundStyle = { style: { background: '#49d5ff' } }
  return (
    <>
      <div>---Row---</div>
      <Row gaps={[1, 1]}>
        <a {...backgroundStyle}>1</a>
        <a {...backgroundStyle}>2</a>
        <a {...backgroundStyle}>3</a>
        <a {...backgroundStyle}>4</a>
        <a {...backgroundStyle}>5</a>
        <a {...backgroundStyle}>6</a>
      </Row>

      <div>---Col---</div>
      <Col grid={1} {...backgroundStyle}>1</Col>
      <Col grid={2} {...backgroundStyle}>2</Col>
      <Col grid={3} {...backgroundStyle}>3</Col>
      <Col grid={4} {...backgroundStyle}>4</Col>
      <Col grid={5} {...backgroundStyle}>5</Col>
      <Col grid={6} {...backgroundStyle}>6</Col>

      <div>---Button---</div>
      <Button
        label='aaaa'
        type='flat'
        round={true}
      // isDisabled={true}
      />

      <div>---Link---</div>
      <Link $icon={{name:'documentCheck'}} label='aaaaaaaaaaa'/>

      <div>---List---</div>
      <List>
        <div>aaaa</div>
        <div>aaaa</div>
        <div>aaaa</div>
        <a href="google.com">aaaa</a>
      </List>

      <div>---Dropdown---</div>
      <Dropdown
        caretIconName='caret'
        label='label'
        type='flat'
        classes='margin-20'
        {...backgroundStyle}
      >
        <div>aaaa s fse fdsf</div>
        <div>aaaa</div>
        <div>aaaa</div>
        <a href="google.com">aaaa</a>
      </Dropdown>

      <div>---Input---</div>
      <Input placeholder="aaaa" errorText='Hasdasd' />

      <div>---Breadcrumb---</div>
      <Breadcrumb 
          mapper={breadcrumbsMapper}
        />

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