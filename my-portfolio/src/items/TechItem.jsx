import React from 'react';

function TechItem(props) {
  return (
    <div className="tech_item tooltip angle_bracket"
    onClick={e => props.info(props.name, props.description)}>
      <div className="tech_img">
        {props.svg}
      </div>
      <span className="tooltiptext">
        <span className="tag"># </span>
        {props.name}
      </span>
    </div>
  );
}

export default TechItem;
