import React, { useMemo } from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  const sortedList = useMemo(() => {
    console.log("use memo is running")
    return  props.allitems.sort((a, b) => a - b);
  }, [props.allitems])
  
   

  console.log("Demo List running")

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
