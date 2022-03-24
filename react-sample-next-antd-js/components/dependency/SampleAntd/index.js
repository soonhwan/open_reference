import React, { useEffect, useState, useCallback, memo } from 'react';
import { SampleAntdWrap } from './styles';
import { Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Popconfirm,
  Table,
  Modal,
  Button,
  Select,
  Transfer } from 'styles/antd';

const { Option } = Select;
const { RangePicker } = DatePicker;
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'filter1',
        value: 'filter1',
      },
    ],
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
];

const SampleAntd = () => {
  const [visible , setVisible] = useState(false);

  const showModal = useCallback(() => {
    setVisible(true);
  }, []);

  const hideModal = useCallback(() => {
    setVisible(false);
  }, []);

  const info = useCallback(() => {
    Modal.info({
      title: 'some info',
      content: 'some info',
    });
  }, []);
  const confirm = useCallback(() => {
    Modal.confirm({
      title: 'some info',
      content: 'some info',
    });
  }, []);

  return (
    <SampleAntdWrap>
      <div className="locale-components">
        <div className="example">
          <Pagination defaultCurrent={1} total={50} showSizeChanger />
        </div>
        <div className="example">
          <Select showSearch style={{ width: 200 }}>
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy</Option>
          </Select>
          <DatePicker />
          <TimePicker />
          <RangePicker style={{ width: 200 }} />
        </div>
        <div className="example">
          <Button type="primary" onClick={showModal}>
            Show Modal
          </Button>
          <Button onClick={info}>Show info</Button>
          <Button onClick={confirm}>Show confirm</Button>
          <Popconfirm title="Question?">
            <a href="#">Click to confirm</a>
          </Popconfirm>
        </div>
        <div className="example">
          <Transfer dataSource={[]} showSearch targetKeys={[]} render={item => item.title} />
        </div>
        <div className="example">
          <Calendar />
        </div>
        <div className="example">
          <Table dataSource={[]} columns={columns} />
        </div>
        <Modal title="Locale Modal" visible={visible} onCancel={hideModal}>
          <p>Locale Modal</p>
        </Modal>
      </div>
    </SampleAntdWrap>
  )
}

SampleAntd.propTypes = {
  
}

export default SampleAntd;