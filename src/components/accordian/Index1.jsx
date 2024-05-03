import data from "./data";

import React, { useState } from 'react'

const Index1 = () => {

  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);





  const handleSingleSelection = (getCurrentId) => {
    console.log(getCurrentId);

    setSelected(getCurrentId === selected ? null : getCurrentId);

  }

  const handleMultiSelection = (getCurrentId) => {
    let cpyMultiple = [...multiple];
    let findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
    else cpyMultiple.splice(findIndexOfCurrentId, 1);
    setMultiple(cpyMultiple)

    console.log(multiple)

    // cpyMultiple.push(getCurrentId);
    // setMultiple(cpyMultiple);
    // console.log(multiple)

  }

  return (
    <div className="accordian">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable MultiSelection</button>

      {

        data && data.length > 0 ? data.map(dataItem =>
          <div className="item">
            <div className="title" onClick={enableMultiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}>
              <h3>{dataItem.question}</h3>
              {
                // selected===dataItem.id ? <div className="">{dataItem.answer} </div> : null
                // selected === dataItem.id || multiple.indexOf(dataItem.id) !==-1 ?( <div className="content"> {dataItem.answer}</div>) : null

                enableMultiSelection ? multiple.indexOf(dataItem.id) !== -1 &&
                  (<div className="content"> {dataItem.answer}</div>)
                  : selected === dataItem.id && (<div className="content"> {dataItem.answer}</div>)

              }
            </div>
          </div>) : <div>no data found</div>
      }
    </div>
  )
}

export default Index1