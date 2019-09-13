import React from 'react';
import { processGroups, knowledgeAreas, processes } from './data/Entity_zh_CN';
import ProcessRelation from './data/Relationship';
import { withRouter } from 'react-router';
import _ from 'lodash';
import { Table } from 'shineout'
import './App.css';

function App() {

  //先求出，合计需要多少行
  let rowNumber = 0;
  for (let i = 0; i < processGroups.length; i++) {
    let currentRowNumber = _.filter(processes, { 'group': i });
    rowNumber = currentRowNumber > rowNumber ? currentRowNumber : rowNumber;
  };
  const rows = new Array(rowNumber);
  for (let r = 0; r < rowNumber; r++) {

  }



  return (
    <div>
      <Table bordered striped keygen="id">
        <thead>
          <tr>
            <th>&nbsp;</th>
            {
              //表头
              processGroups.map((value, index) => {
                return (
                  <th key={index}>
                    {value}
                  </th>
                );
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            //循环10大知识领域
            knowledgeAreas.map((value, indexOfKnowledgeAreas) => {
              return (
                <tr key={indexOfKnowledgeAreas}>
                  <td>
                    {value}
                  </td>
                  {
                    processGroups.map((value, indexOfProcessGroups) => {
                      let currentProcesses = _.filter(ProcessRelation, { 'group': indexOfProcessGroups, 'knowledgeArea': indexOfKnowledgeAreas });
                      return (
                        <td key={indexOfProcessGroups + indexOfProcessGroups}>
                          {currentProcesses.map((value, index) => {
                            return (
                              <div key={index}>
                                {processes[value.process]}
                              </div>
                            )
                          })}
                        </td>
                      )
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  );
}

export default withRouter(App);
