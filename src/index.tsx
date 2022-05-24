
import "../css/default.css";
import "../css/variables.css";

import React from "react";
import ReactDOM from "react-dom";
import moment from 'moment'
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
import Drawer from "../components/drawer";
import Timepicker from "../components/timepicker";
import Progress from "../components/progress";

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
  const [active, setActive] = React.useState(false);

  return (
    <>
      <Input hasError={true} />
      <Timepicker
        defaultTime={moment('2022-05-17T22:30:00+07:00')}
        startTime={moment('07:00', 'HH:mm')}
        endTime={moment('18:00', 'HH:mm')}
      />
      <Datepicker
        defaultDate={[moment('2022-05-18T10:50:19+07:00'), moment('2022-05-20T10:50:19+07:00')]}
      />
      <Select placeholder='Select' type='nude'>
        <Option value='111111' label='aaaaaaaa' active={false}>a1</Option>
        <Option value='222222' active={true}>a2</Option>
        <Option value='3333333' active={false}>a3</Option>
        <Option value='44444444444' active={false}>a4</Option>
      </Select>

      <Select placeholder='Select' isSearchable={true} isMulti={true} >
        <Option value='111111' label='aaaaaaaaaaa1'>
          <div>
            <div>a1</div>
            <div>a1</div>
          </div>
        </Option>
        <Option value='111111' label='aaaaaaaaaaa1'>
          <div>
            <div>a2</div>
            <div>a2</div>
          </div>
        </Option>
        <Option value='111111' label='aaaaaaaaaaa1'>
          <div>
            <div>a3</div>
            <div>a3</div>
          </div>
        </Option>
        <Option value='111111' label='aaaaaaaaaaa1'>
          <div>
            <div>a4</div>
            <div>a4</div>
          </div>
        </Option>
        <Option value='111111' label='aaaaaaaaaaa1'>
          <div>
            <div>a5</div>
            <div>a5</div>
          </div>
        </Option>
        <Option value='111111' label='aaaaaaaaaaa1'>
          <div>
            <div>a6</div>
            <div>a6</div>
          </div>
        </Option>
        <Option value='111111' label='aaaaaaaaaaa1'>
          <div>
            <div>a7</div>
            <div>a7</div>
          </div>
        </Option>
        <Option value='111111' label='aaaaaaaaaaa1'>
          <div>
            <div>a8</div>
            <div>a8</div>
          </div>
        </Option>
        <Option value='111111' label='aaaaaaaaaaa1'>
          <div>
            <div>a9</div>
            <div>a9</div>
          </div>
        </Option>
        <Option value='111111' label='aaaaaaaaaaa1'>
          <div>
            <div>a10</div>
            <div>a10</div>
          </div>
        </Option>
        <Option value='111111' label='aaaaaaaaaaa1'>
          <div>
            <div>a11</div>
            <div>a11</div>
          </div>
        </Option>
      </Select>
      <button onClick={(() => setActive(true))}>bbbbbbbbbbbbbbbb</button>
      <Drawer isActive={active} onClickClose={() => setActive(false)}>
        <div style={{ width: '400px', height: '100%', 'background': 'white' }}>aaaaaa</div>
      </Drawer>
      <Timepicker />
      <Progress value={40} />
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