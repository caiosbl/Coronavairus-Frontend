import React from 'react';
import Doughnut from '../Charts/Doughnut'
import { CoronavairusApi } from '../Services/Api';

class BrazilSummary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    CoronavairusApi.get("/brazil/last").then(res => {

      let data = res.data;
      this.setState({ data });

    }).catch(e => console.log(e))
  }


  render() {

    const { data } = this.state;
   

    const totalCases = data?.totalCases;
    const totalDeaths = data?.totalDeaths;
    const totalRecovered = data?.totalRecovered;
    

    return (<Doughnut total={totalCases} recovered={totalRecovered} deaths={totalDeaths} title={'Brasil'} />);


  }
}
export default BrazilSummary;
