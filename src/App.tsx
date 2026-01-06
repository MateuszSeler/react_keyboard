import React from 'react';

type Props = {};
type State = {
  key: string | null;
};

export class App extends React.Component<Props, State> {
  state: State = {
    key: null,
  };

  handelKeyDown = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keydown', this.handelKeyDown);
  }

  componentWillUnmount(): void {
    document.addEventListener('keydown', this.handelKeyDown);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.key
            ? `The last pressed key is [${this.state.key}]`
            : `Nothing was pressed yet`}
        </p>
      </div>
    );
  }
}
