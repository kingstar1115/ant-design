import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
import { Button, FloatButton } from 'antd';
import { random } from 'lodash';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [number, setNumber] = useState<number>(10);
  return (
    <>
      <Button type="primary" style={{ margin: 16 }} onClick={() => setNumber(random(0, 100))}>
        change value
      </Button>
      <FloatButton
        shape="square"
        badge={{ count: number }}
        style={{ right: 24 + 70 + 70 + 70, bottom: 48 }}
      />
      <FloatButton
        shape="circle"
        badge={{ count: number }}
        style={{ right: 24 + 70 + 70 + 70 + 70, bottom: 48 }}
      />
      <FloatButton
        shape="square"
        badge={{ dot: true }}
        style={{ right: 24 + 70 + 70 + 70, bottom: 108 }}
      />
      <FloatButton
        shape="circle"
        badge={{ dot: true }}
        style={{ right: 24 + 70 + 70 + 70 + 70, bottom: 108 }}
      />
      <FloatButton.Group shape="circle" style={{ right: 24 }}>
        <FloatButton badge={{ count: 5, overflowCount: 99999 }} icon={<QuestionCircleOutlined />} />
        <FloatButton badge={{ count: 555, overflowCount: 99999 }} />
        <FloatButton.BackTop badge={{ count: 55555, overflowCount: 99999 }} visibilityHeight={0} />
      </FloatButton.Group>
      <FloatButton.Group shape="square" style={{ right: 24 + 70 }}>
        <FloatButton badge={{ count: number }} icon={<QuestionCircleOutlined />} />
        <FloatButton badge={{ count: number }} />
        <FloatButton badge={{ count: number }} icon={<SyncOutlined />} />
        <FloatButton.BackTop badge={{ count: number }} visibilityHeight={0} />
      </FloatButton.Group>
      <FloatButton.Group shape="square" style={{ right: 24 + 70 + 70 }}>
        <FloatButton badge={{ dot: true }} icon={<QuestionCircleOutlined />} />
        <FloatButton badge={{ dot: true }} />
        <FloatButton badge={{ dot: true }} icon={<SyncOutlined />} />
        <FloatButton.BackTop badge={{ dot: true }} visibilityHeight={0} />
      </FloatButton.Group>
    </>
  );
};

export default App;