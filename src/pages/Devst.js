import React, { Component } from 'react'
// import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { Card, Typography, Alert } from 'antd';
import styles from './Welcome.less';
const CodePreview = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);
class Devst extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
    return <PageHeaderWrapper>
      <Card>开发中...</Card>
    </PageHeaderWrapper>
  }
}

export default Devst
