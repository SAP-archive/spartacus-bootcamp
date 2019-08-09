import React from 'react';

export class CmsData extends React.Component {
  state = {
    data: undefined,
  };

  componentDidMount() {
    this.subscription = this.props.CmsComponentData.data$.subscribe(data =>
      this.setState({ data })
    );
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    return (
      <span>
        <h1>{this.props.CmsComponentData.uid}</h1>
        <p>
          {this.state.data ? JSON.stringify(this.state.data) : 'Loading...'}
        </p>
      </span>
    );
  }
}

// export function CmsData({ CmsComponentData }) {
//   const [data, setData] = useState();
//
//   useEffect(() => {
//     const subscription = CmsComponentData.data$.subscribe(data =>
//       setData(data)
//     );
//
//     return function cleanup() {
//       subscription.unsubscribe();
//     };
//   }, []);
//
//   return (
//     <span>
//       <h1>{CmsComponentData.uid}</h1>
//       <p>{data ? JSON.stringify(data) : 'Loading...'}</p>
//     </span>
//   );
// }
