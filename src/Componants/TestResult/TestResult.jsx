
import "./TestResult.css"

function TestResult() {
  return (
    <table className='sizing'>
      <thead>
        <tr>
          <th style={{textAlign:"center"}}>Date</th>
          <th style={{textAlign:"center"}}>Grade</th>
          <th style={{textAlign:"center"}}>Subject</th>
          <th style={{textAlign:"center"}}>Total Marks</th>
          <th style={{textAlign:"center"}}>Get</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{padding:"13px"}}>21/05/23</td>
          <td style={{padding:"13px"}}>F</td>
          <td style={{padding:"13px"}}>Maths</td>
          <td style={{padding:"13px"}}>100</td>
          <td style={{padding:"13px"}}>34</td>
        </tr>
        <tr>
          <td style={{padding:"13px"}}>22/05/23</td>
          <td style={{padding:"13px"}}>A</td>
          <td style={{padding:"13px"}}>Physics</td>
          <td style={{padding:"13px"}}>100</td>
          <td style={{padding:"13px"}}>90</td>
        </tr>
        <tr>
        <td style={{padding:"13px"}}>24/05/23</td>
          <td style={{padding:"13px"}}>A</td>
          <td style={{padding:"13px"}}>Chemistry</td>
          <td style={{padding:"13px"}}>100</td>
          <td style={{padding:"13px"}}>84</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TestResult;