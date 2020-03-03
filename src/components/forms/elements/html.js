import React from 'react'

function createMarkup(props) {
  return {__html: (props.html)};
}

function MyComponent(props) {
  return <div dangerouslySetInnerHTML={createMarkup(props)} />;
}

const HtmlBox = ({fieldClass, text}) => (
  <div className="form-group">
      <div className={fieldClass}>
          <MyComponent html={text} />
      </div>
  </div>
);

export default HtmlBox