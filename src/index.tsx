
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
      <Range ref={React.useRef(null)} labelRef={React.useRef(null)} min={0} max={10} value={60}/>
      <div>---Effect Shimmer---</div>
      <Shimmer isLoading={true}>
        <div style={{width:'200px',height:'200px'}}></div>
      </Shimmer>
      <div>---Toast---</div>
      <button onClick={() => Toast.text('Toast')}>Toast</button>
      <button onClick={() => Toast.dark('Toast Dark')}>Toast Dark</button>
      <div>---Datepicker---</div>
      <Datepicker size='s'
        InputProps={{
          type: 'nude'
        }}
      />
      <br />
      <Datepicker dateFormat='DD/MM/YYYY' />
      <br />
      <Datepicker size='l' />
      <div>---Carousel---</div>
      <Carousel
        {...{ style: { width: '800px', height: '400px' } }}
        dot={{ sharp: 'bar', playtimeEffect: true, placement: 't' }}
        navigation={{ type: 'full' }}
      // autoPlayTime={2}
      >
        <div style={{ background: 'black' }} />
        <div style={{ background: 'yellow' }} />
        <div style={{ background: 'red' }} />
        <div style={{ background: 'blue' }} />
        <div style={{ background: '#bb9393' }} />
      </Carousel>
      <Carousel {...{ style: { width: '800px', height: '400px' } }}>
        <div style={{ background: 'red' }} />
        <div style={{ background: 'blue' }} />
        <div style={{ background: '#bb9393' }} />
        <div style={{ background: 'black' }} />
        <div style={{ background: 'yellow' }} />
      </Carousel>
      <div>---Badge---</div>
      <Badge>
        <Avatar />
      </Badge>
      <br />
      <br />
      <Badge value='1'>
        <Avatar />
      </Badge>
      <br />
      <br />
      <Badge value='1123'>
        <Avatar />
      </Badge>
      <br />
      <br />
      <Badge value='1' size='s' >
        <Avatar size='s' />
      </Badge>
      <br />
      <br />
      <Badge value='1' size='m' >
        <Avatar size='m' />
      </Badge>
      <br />
      <br />
      <Badge value='1' size='l' >
        <Avatar size='l' />
      </Badge>
      <div>---Avatar---</div>
      <div>
        <Avatar />
        <Avatar size='s' />
        <Avatar size='m' />
        <Avatar size='l' />
      </div>
      <div>
        <Avatar shape='circle' />
        <Avatar size='s' shape='circle' />
        <Avatar size='m' shape='circle' />
        <Avatar size='l' shape='circle' />
      </div>
      <div>
        <Avatar>H</Avatar>
        <Avatar size='s' shape='circle' >H</Avatar>
        <Avatar size='m' shape='circle' >H</Avatar>
        <Avatar size='l' shape='circle' >H</Avatar>
      </div>
      <div>---Switch---</div>
      <Switch />
      <Switch isActive />
      <Switch size='s' />
      <Switch size='m' />
      <Switch size='l' />
      <div>---Tag---</div>
      <Tag>Tag</Tag>
      <Tag type='flat' color='#e30000'>Tag Type Flat</Tag>
      <Tag type='outline' color='#e30000'>Tag Type Outline</Tag>
      <Tag isClearable={true}>Tag with Clear</Tag>
      <Tag size='s'>Tag size S</Tag>
      <Tag size='m'>Tag size M</Tag>
      <Tag size='l'>Tag size L</Tag>
      <div>---Checkbox---</div>
      <Checkbox />
      <Checkbox value />
      <Checkbox value size='s' />
      <Checkbox value size='m' />
      <Checkbox value size='l' />
      <Button label='aaa' onClick={e => setA(b.map(i => (<Option value={i.value}>{i.children}</Option>)) as any)} />
      <Row>
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
        <Select placeholder='Select' isMulti={true} isSearchable={true} type='flat'>
          <Option value='111111' label='aaaaaaaaaaa1'>a1</Option>
          <Option value='222222' label='aaaaaaaaaaa2'>a2</Option>
          <Option value='3333333' label='aaaaaaaaaaa3'>a3</Option>
          <Option value='44444444444' label='aaaaaaaaaaa4'>a4</Option>
        </Select>
        <Select placeholder='Select' isMulti={true} isSearchable={true}>
          <Option value='111111' label='aaaaaaaaaaa'>a1</Option>
          <Option value='222222'>b2</Option>
          <Option value='3333333'>b3</Option>
          <Option value='44444444444'>a4</Option>
          <Option value='5'>a5</Option>
          <Option value='6'>a6</Option>
          <Option value='7'>a7</Option>
          <Option value='8'>a8</Option>
          <Option value='9'>a9</Option>
          <Option value='11'>a11</Option>
          <Option value='12'>a12</Option>
          <Option value='13'>a13</Option>
          <Option value='14'>a14</Option>
          <Option value='15'>a15</Option>
          <Option value='16'>a16</Option>
          <Option value='17'>b17</Option>
          <Option value='18'>b18</Option>
          <Option value='19'>b19</Option>
          <Option value='20'>b20</Option>
          <Option value='21'>a21</Option>
          <Option value='22'>a22</Option>
          <Option value='23'>a23</Option>
          <Option value='24'>a24</Option>
          <Option value='25'>a25</Option>
          <Option value='26'>a26</Option>
          <Option value='27'>a27</Option>
          <Option value='28'>a28</Option>
          <Option value='29'>a29</Option>
          <Option value='30'>a30</Option>
          <Option value='31'>b234</Option>
        </Select>
      </Row>
      +
      <Row>
        <Select placeholder='Select' size='l' isMulti={true}>
          <Option value='111111'>a1</Option>
          <Option value='222222'>a2</Option>
          <Option value='3333333'>a3</Option>
          <Option value='44444444444'>a4</Option>
        </Select>
        <Select placeholder='Select' size='l'>
          <Option value='111111'>a1</Option>
          <Option value='222222'>a2</Option>
          <Option value='3333333'>a3</Option>
          <Option value='44444444444'>a4</Option>
        </Select>
        <Select placeholder='Select' size='l'>
          <Option value='111111'>a1</Option>
          <Option value='222222'>a2</Option>
          <Option value='3333333'>a3</Option>
          <Option value='44444444444'>a4</Option>
        </Select>
      </Row>

      <div>---Table---</div>
      <Table columns={tableColumns as any} data={tableData} />
      <Table columns={tableColumns as any} data={[]} />
      <Table columns={tableColumns as any} data={tableData} isLoading={true} />

      <div>---Pagination---</div>
      <Pagination type='flat' total={100} />
      <Pagination total={100} size='s' />
      <Pagination total={100} />
      <Pagination total={100} size='l' />

      <Pagination total={100} defaultPage={2} />
      <Pagination total={100} hasFirstLast={true} />
      <div>---Select---</div>
      <Select placeholder='Select'>
        <Option value='111111'>a1</Option>
        <Option value='222222'>a2</Option>
        <Option value='3333333'>a3</Option>
        <Option value='44444444444'>a4</Option>
      </Select>
      <Select placeholder='Select Size S' size='s'>
        <Option value='111111'>a1</Option>
        <Option value='222222'>a2</Option>
        <Option value='3333333'>a3</Option>
        <Option value='44444444444'>a4</Option>
      </Select>
      <Select placeholder='Select Size M' size='m'>
        <Option value='111111'>a1</Option>
        <Option value='222222'>a2</Option>
        <Option value='3333333'>a3</Option>
        <Option value='44444444444'>a4</Option>
      </Select>
      <Select placeholder='Select Size L' size='l'>
        <Option value='111111'>a1</Option>
        <Option value='222222'>a2</Option>
        <Option value='3333333'>a3</Option>
        <Option value='44444444444'>a4</Option>
      </Select>
      <Select placeholder='Select Size L' size='m' isLoading={true}>
        <Option value='111111'>a1</Option>
        <Option value='222222'>a2</Option>
        <Option value='3333333'>a3</Option>
        <Option value='44444444444'>a4</Option>
      </Select>
      <Select placeholder='Select Size L' size='l' isLoading={true}>
        <Option value='111111'>a1</Option>
        <Option value='222222'>a2</Option>
        <Option value='3333333'>a3</Option>
        <Option value='44444444444'>a4</Option>
      </Select>
      <div>---Row---</div>
      <Row gaps={[1, 1]} gutter={{ xs: 1 }}>
        <a {...backgroundStyle}>1</a>
        <a {...backgroundStyle}>2</a>
        <a {...backgroundStyle}>3</a>
        <a {...backgroundStyle}>4</a>
        <a {...backgroundStyle}>5</a>
        <a {...backgroundStyle}>6</a>
      </Row>

      <div>---Col---</div>
      <Row>
        <Col grid={1} gutter={{ xs: 24, sm: 24 }}{...backgroundStyle}>1</Col>
        <Col grid={2} {...backgroundStyle}>2</Col>
        <Col grid={3} {...backgroundStyle}>3</Col>
        <Col grid={4} {...backgroundStyle}>4</Col>
        <Col grid={5} {...backgroundStyle}>5</Col>
        <Col grid={6} {...backgroundStyle}>6</Col>
      </Row>

      <div>---Button---</div>
      <Button label='Button size s' size='s' />
      <br />
      <Button label='Button size m' />
      <br />
      <Button label='Button size l' size='l' />
      <br />
      <Button label='Button Flat' type='flat' />
      <br />
      <Button label='Button Outline' type='outline' />
      <br />
      <Button label='Button disabled' isDisabled={true} />
      <br />
      <Button label='Button Loading' isLoading={true} />

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
      <Dropdown size='s'>
        <Button label='Dropdown S' size='s' />
        <div>aaaa s fse fdsf</div>
        <div>aaaa</div>
        <div>aaaa</div>
        <a href="google.com">aaaa</a>
      </Dropdown>
      <Dropdown>
        <Button label='Dropdown M' />
        <div>aaaa s fse fdsf</div>
        <div>aaaa</div>
        <div>aaaa</div>
        <a href="google.com">aaaa</a>
      </Dropdown>
      <Dropdown size='l'>
        <Button label='Dropdown L' size='l' />
        <div>aaaa s fse fdsf</div>
        <div>aaaa</div>
        <div>aaaa</div>
        <a href="google.com">aaaa</a>
      </Dropdown>
      <Dropdown type='flat'>
        <Button label='Dropdown Flat' type='flat' />
        <div>aaaa s fse fdsf</div>
        <div>aaaa</div>
        <div>aaaa</div>
        <a href="google.com">aaaa</a>
      </Dropdown>
      <Dropdown trigger='click'>
        <Button label='Dropdown Click' />
        <div>aaaa s fse fdsf</div>
        <div>aaaa</div>
        <div>aaaa</div>
        <a href="google.com">aaaa</a>
      </Dropdown>
      <Dropdown>
        <Button label='Dropdown has Arrow' />
        <div>aaaa s fse fdsf</div>
        <div>aaaa</div>
        <div>aaaa</div>
      </Dropdown>
      <Dropdown isLoading={true}>
        <Button label='Dropdown Loading' isLoading={true} />
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