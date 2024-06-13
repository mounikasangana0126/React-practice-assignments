import React from 'react'

function Component(props) {
  return (
    <div>
      {props.value && (
        <table>
          <thead>
            <tr>
              {props.value[0].map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.value.slice(1).map((row,rowIndex) => (
              <tr key={rowIndex}>
              {row.map((data, index) => (
                <td key={index}>{data !==null ? data : ''}</td>
              ))}
            </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Component
