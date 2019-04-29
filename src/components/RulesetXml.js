import React from 'react'

const forEachSniff = (sniffs, callback) => {
  sniffs.forEach(sniff => {
    callback(sniff);
    if(sniff.children) {
      forEachSniff(sniff.children, callback);
    }
  })
}

const RulesetXml = ({ sniffs }) => {
  let rules = [];
  forEachSniff(sniffs, sniff =>{
    if(sniff.action === 'CheckWithError') {
      rules.push(`&nbsp;&nbsp;&lt;rule ref="${sniff.key}" /&gt;`);
    }
    else if (sniff.action === 'CheckWithWarning') {
      rules.push(`&nbsp;&nbsp;&lt;rule ref="${sniff.key}"&gt;`);
      rules.push(`&nbsp;&nbsp;&nbsp;&nbsp;&lt;type&gt;warning&lt;/type&gt;`);
      rules.push(`&nbsp;&nbsp;&lt;/rule&gt;`);
    }
  });

  let ruleHtml = rules.join('<br>');

  return (
    <pre>
      &lt;?xml version="1.0"?&gt;<br />
      &lt;ruleset name="Custom Standard" namespace="MyProject\CS\Standard"&gt;<br />
        <div dangerouslySetInnerHTML={{__html: ruleHtml}}></div>
        &lt;/ruleset&gt;
    </pre>
  );
};

export default RulesetXml;
