import styles from './sniff.css'
import { Row, Col, Card, Button, Icon } from 'antd';
import { red, volcano, blue } from '@ant-design/colors';

const Sniff = ({ sniff, onActionChange }) => {
  let icon;
  if(sniff.action === "CheckWithError") icon = <Icon type="exclamation-circle" theme="twoTone" twoToneColor={ red[5] } className={styles.backgroundIcon} />;
  else if(sniff.action === "CheckWithWarning") icon = <Icon type="warning" theme="twoTone" twoToneColor={ volcano[4] } className={styles.backgroundIcon} />;
  else if(sniff.action === "DontCheck") icon = <Icon type="check-square" theme="twoTone" twoToneColor={ blue[5] } className={styles.backgroundIcon} />;

  let codeComparisons = [];
  if(sniff.code_comparison) {
    codeComparisons.push(<h2 key="title">Code comparisons</h2>);

    sniff.code_comparison.forEach((comparison, comparisonIndex) => {
      if(!comparison.code) return;
      let codes = [];
      comparison.code.forEach((code, codeIndex) => {
        let codeHtml = code.content.replace(/\ /g, "&nbsp;").replace(/(?:\r\n|\r|\n)/g, '<br>');

        codes.push(
          <Col span={12} key={codeIndex} className={styles.codeComparisonsCol}>
            <Card title={code.title} className={styles.codeComparisonCard}>
              <div className={styles.codeBlock} dangerouslySetInnerHTML={{__html: codeHtml}}></div>
            </Card>
          </Col>
        )
      })

      let hr;
      if(comparisonIndex !== sniff.code_comparison.length - 1) {
        hr = <hr />;
      }

      codeComparisons.push(
        <>
          <Row key={comparisonIndex} className={styles.codeComparisons} gutter={23}>{codes}</Row>
          {hr}
        </>
      );
    })
  }

  const CheckWithError = () => onActionChange("CheckWithError")
  const CheckWithWarning = () => onActionChange("CheckWithWarning")
  const DontCheck = () => onActionChange("DontCheck")
  const Skip = () => onActionChange("Skip")

  return (
    <>
      {icon}
      <p>{sniff.key}</p>
      <h2>{sniff.title}</h2>
      <p>{sniff.standard}</p>
      {codeComparisons}
      <div className={styles.actions}>
        <Button onClick={CheckWithError} type="primary" size="large" icon="exclamation-circle" style={{ backgroundColor: red[5], border: red[6]}}>Check &amp; show as error</Button>
        <Button onClick={CheckWithWarning} type="primary" size="large" icon="warning" style={{ backgroundColor: volcano[5], border: volcano[6]}}>Check &amp; show as warning</Button>
        <Button onClick={DontCheck} type="primary" size="large" icon="check-square">Don't check</Button>
        <Button onClick={Skip} type="secondary" size="large" icon="question">Skip</Button>
      </div>
    </>
  );
};

export default Sniff;
