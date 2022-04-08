
import "../css/default.css";
import "../css/variables.css";

import React from "react";
import ReactDOM from "react-dom";
// import Button from '../components/button'
import List from '../components/list'
import Dropdown from '../components/dropdown'
import Select from '../components/select'
import Input from '../components/input'
import Breadcrumb from '../components/breadcrumb'
import Link from "../components/link";
import Row from "../components/row";
import Col from "../components/col";
import Checkbox from "../components/checkbox";
import Pagination from "../components/pagination";
import Table from "../components/table";
import UserIcon from "../components/icon/solid/user";

import { Button, Shimmer } from '../';
import Option from "../components/select/option";
import Tag from "../components/tag";
import Switch from "../components/switch";
import Badge from "../components/badge";
import Avatar from "../components/avatar";
import Carousel from "../components/carousel";
import Datepicker from "../components/datepicker";
import Toast from "../components/toast";
import Range from "../components/range";
import Tooltip from "../components/tooltip";

const App = (): React.ReactElement => {
  const backgroundStyle = { style: { background: '#49d5ff' } };
  const tableColumns = [
    {
      index: 'd1',
      label: 'Title 1',
      align: 'center'
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

  const tableData = [
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

  const b = [
    {
      value: '1',
      children: '1',
    },
    {
      value: '2',
      children: '2',
    },
  ]
  const [a, setA] = React.useState(<Option value='111111'>a1</Option>);

  return (
    <>
      <Select placeholder='Select' type='nude'>
        <Option value='111111' label='aaaaaaaa'>a1</Option>
        <Option value='222222' active>a2</Option>
        <Option value='3333333'>a3</Option>
        <Option value='44444444444'>a4</Option>
      </Select>

      <Datepicker
        size='l'
        labels={{
          placeholder: 'Chọn thời gian'
        }}
        dateFormat='DD/MM/YYYY'
        InputProps={{
          type: 'nude'
        }}
        onChange={({ date }) => console.log(date)}
      />
    </>
  )
}

const breadcrumbsMapper = {
  'aaaaaa': {
    path: '',
    name: 'aaaaaaaa',
    'aaaaaaaa1': { path: '/aaaaaaaa1', name: 'aaaaaaaa1', },
    'aaaaaaaa2': { path: '/aaaaaaaa2', name: 'aaaaaaaa2', },
  },
  'bbbbbb': {
    path: '',
    name: 'bbbbbb',
    'bbbbbb1': { path: '/bbbbbb1', name: 'bbbbbb1', },
    'bbbbbb2': { path: '/bbbbbb2', name: 'bbbbbb2', },
  },
}

ReactDOM.render(<App />, document.getElementById("root"));