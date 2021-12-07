
import "../css/default.css";

import React from "react";
import ReactDOM from "react-dom";
import Button from '../components/button'
import List from '../components/list'
import Dropdown from '../components/dropdown'
import Select from '../components/select'
import Input from '../components/input'
import Breadcrumb from '../components/breadcrumb'
import Link from "../components/link";
import Row from "../components/row";
import Col from "../components/col";
import Pagination from "../components/pagination";
import Table from "../components/table";
import UserIcon from "../components/icon/solid/user";
const App = (): React.ReactElement => {
  const backgroundStyle = { style: { background: '#49d5ff' } };
  const tableColumns =  [
    {
      index: 'd1',
      label: 'Title 1',
    },
    {
      index: 'd2',
      label: 'Title 2',
    },
    {
      index: 'd3',
      label: 'Title 3',
    },
    {
      index: 'd3',
      label: 'Title 3',
    },
    {
      index: 'd3',
      label: 'Title 3',
    },
    {
      index: 'd3',
      label: 'Title 3',
    },
  ];

  const tableData=  [
    {
      d1: '1',
      d2: 'data 2',
      d3: 'data 3',
    },
    {
      d1: 'data 1',
      d2: '2',
      d3: 'data 3',
    },
    {
      d1: 'data 1',
      d2: 'data 2',
      d3: '3',
    },
  ];
  
  return (
    <>
      <div>---Table---</div>
      <Table columns={tableColumns} data={tableData}/>

      <div>---Pagination---</div>
      <Pagination total={100} size='s'/>
      <Pagination total={100}/>
      <Pagination total={100} size='l'/>
      <div>---Select---</div>
      <Select ref={React.useRef(null)} placeholder='Select'>
        <div {...{ value: '111111' }}>a1</div>
        <div {...{ value: '222222' }}>a2</div>
        <div {...{ value: '3333333' }}>a3</div>
        <a {...{ value: '44444444444' }}>a4</a>
      </Select>
      <Select ref={React.useRef(null)} placeholder='Select Size S' size='s'>
        <div {...{ value: '111111' }}>a1</div>
        <div {...{ value: '222222' }}>a2</div>
        <div {...{ value: '3333333' }}>a3</div>
        <a {...{ value: '44444444444' }}>a4</a>
      </Select>
      <Select ref={React.useRef(null)} placeholder='Select Size M' size='m'>
        <div {...{ value: '111111' }}>a1</div>
        <div {...{ value: '222222' }}>a2</div>
        <div {...{ value: '3333333' }}>a3</div>
        <a {...{ value: '44444444444' }}>a4</a>
      </Select>
      <Select ref={React.useRef(null)} placeholder='Select Size L' size='l'>
        <div {...{ value: '111111' }}>a1</div>
        <div {...{ value: '222222' }}>a2</div>
        <div {...{ value: '3333333' }}>a3</div>
        <a {...{ value: '44444444444' }}>a4</a>
      </Select>
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
      <Button label='Button size s' round={true} size='s' />
      <br />
      <Button label='Button size m' round={true} />
      <br />
      <Button label='Button size l' round={true} size='l' />
      <br />
      <Button label='Button Flat' type='flat' round={true} />
      <br />
      <Button label='Button Outline' type='outline' round={true} />
      <br />
      <Button label='Button disabled' round={true} isDisabled={true} />
      <br />
      <Button label='Button Loading' round={true} isLoading={true} />

      <div>---Link---</div>
      <Link label='Link size s' size='s' />
      <br />
      <Link label='Link size m' />
      <br />
      <Link label='Link size l' size='l' />

      <div>---List---</div>
      <List>
        <div>aaaa</div>
        <div>aaaa</div>
        <div>aaaa</div>
        <a href="google.com">aaaa</a>
      </List>

      <div>---Dropdown---</div>
      <Dropdown label='Dropdown S' size='s'>
        <div>aaaa s fse fdsf</div>
        <div>aaaa</div>
        <div>aaaa</div>
        <a href="google.com">aaaa</a>
      </Dropdown>
      <Dropdown label='Dropdown M'>
        <div>aaaa s fse fdsf</div>
        <div>aaaa</div>
        <div>aaaa</div>
        <a href="google.com">aaaa</a>
      </Dropdown>
      <Dropdown label='Dropdown L' size='l'>
        <div>aaaa s fse fdsf</div>
        <div>aaaa</div>
        <div>aaaa</div>
        <a href="google.com">aaaa</a>
      </Dropdown>
      <Dropdown label='Dropdown Flat' type='flat'>
        <div>aaaa s fse fdsf</div>
        <div>aaaa</div>
        <div>aaaa</div>
        <a href="google.com">aaaa</a>
      </Dropdown>
      <Dropdown label='Dropdown Click' trigger='click'>
        <div>aaaa s fse fdsf</div>
        <div>aaaa</div>
        <div>aaaa</div>
        <a href="google.com">aaaa</a>
      </Dropdown>
      <Dropdown label='Dropdown Loading' isLoading={true}>
        <div>aaaa s fse fdsf</div>
        <div>aaaa</div>
        <div>aaaa</div>
        <a href="google.com">aaaa</a>
      </Dropdown>

      <div>---Input---</div>
      <Input placeholder="Input S" size='s' />
      <Input placeholder="Input M" />
      <Input placeholder="Input L" size='l' />
      <Input placeholder="Input" errorText='Error' />
      <Input placeholder="Input With Clear S" isClearable={true} ref={React.useRef(null)} size='s' />
      <Input placeholder="Input With Clear M" isClearable={true} ref={React.useRef(null)} />
      <Input placeholder="Input With Clear L" isClearable={true} ref={React.useRef(null)} size='l' />
      <Input placeholder="Input With Prefix Postfix S" prefix={<UserIcon size='s' />} postfix={<UserIcon size='s' />} size='s' />
      <Input placeholder="Input With Prefix Postfix M" prefix={<UserIcon />} postfix={<UserIcon />} />
      <Input placeholder="Input With Prefix Postfix L" prefix={<UserIcon size='l' />} postfix={<UserIcon size='l' />} size='l' />
      <Input placeholder="Input With Prefix" postfix={<UserIcon />} isClearable={true} ref={React.useRef(null)} />
      <Input placeholder="Input Disabled" isDisabled={true} />
      <Input placeholder="Input Loading" isLoading={true} />

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