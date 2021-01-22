import React, { Fragment } from 'react';
function ListItem({ item }) {
    return (
      <Fragment>
        <dt>{item.term}</dt>
        <dd>{item.description}</dd>
      </Fragment>
    );
  }
  function Glossary(props) {
    return (
      <dl>
        {props.items.map(item => (
          <ListItem item={item} key={item.id} />
        ))}
      </dl>
    );
  }
  const arr = [
      {
          id:1,
          term:"term1",
          description:"description1"
      },
      {
        id:2,
        term:"term2",
        description:"description2"
    },
    {
        id:3,
        term:"term3",
        description:"description3"
    },
  ]
class FrageMent extends React.Component{
    render(){
        return(
            <div>
                <h1>Fragement</h1>
                <Glossary items={arr} />
                <table>
  <caption>
    Holidays taken in the last six months
  </caption >
  <thead>
    <tr>
      <th scope="col"><abbr title="Identification Number">ID</abbr></th>
      <th scope="col">Name</th>
      <th scope="col">July</th>
      <th scope="col">August</th>
      <th scope="col">September</th>
      <th scope="col">October</th>
      <th scope="col">November</th>
      <th scope="col">December</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>215</td>
      <th scope="row">Abel</th>
      <td>5</td>
      <td>2</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>3</td>
    </tr>

    <tr>
      <td>231</td>
      <th scope="row">Annette </th>
      <td>0</td>
      <td>5</td>
      <td>3</td>
      <td>0</td>
      <td>0</td>
      <td>6</td>
    </tr>

    <tr>
      <td>173</td>
      <th scope="row">Bernard</th>
      <td>2</td>
      <td>0</td>
      <td>0</td>
      <td>5</td>
      <td>0</td>
      <td>0</td>
    </tr>

    <tr>
      <td>141</td>
      <th scope="row">Gerald</th>
      <td>0</td>
      <td>10</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>8</td>
    </tr>

    <tr>
      <td>99</td>
      <th scope="row">Michael</th>
      <td>8</td>
      <td>8</td>
      <td>8</td>
      <td>8</td>
      <td>0</td>
      <td>4</td>
    </tr>
  </tbody>
</table>
            </div>
        )
    }
}
export{
    FrageMent
}