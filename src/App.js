import React from 'react';
import { processGroups, knowledgeAreas, processes } from './data/Entity_zh_CN';
import ProcessRelation from './data/Relationship';
import { withRouter } from 'react-router';
import _ from 'lodash';
import './App.css';

function App() {
  return (
    <div>
      <table>
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
                        <td key={indexOfProcessGroups+indexOfProcessGroups}>
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
      </table>
    </div>
  );
}

export default withRouter(App);
