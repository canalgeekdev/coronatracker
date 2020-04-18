import React from 'react';
import Tracker from './src/components/Tracker/';
import { fetchData } from './src/api/'

class App extends React.Component {

  state = {
    data: {}
  }

  async componentDidMount() {
    const data = await fetchData();
    // console.log(data);
    this.setState({ data });
  }  

  render() {
    const { data } = this.state;

    return (
      <Tracker data={data} />
    )

  }
}

export default App;