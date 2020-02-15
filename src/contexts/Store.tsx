import React, { createContext, PureComponent, ReactNode } from 'react';
import Loading from '../components/Loading';

interface StoreContextProps {
  children: ReactNode;
  value?: Partial<StoreContextState>;
}
interface StoreContextState {
  data: any;
  loading: boolean;
  updateStoreContext: (state: {}) => void;
}

const StoreContext = createContext<Partial<StoreContextState>>({});

class StoreProvider extends PureComponent<
  StoreContextProps,
  StoreContextState
> {
  constructor(props: StoreContextProps) {
    super(props);

    this.state = {
      data: {},
      loading: true,
      updateStoreContext: state => {
        this.setState({ ...state });
      },
    };
  }

  render() {
    const { children } = this.props;
    const { loading } = this.state;
    return (
      <StoreContext.Provider value={{ ...this.state }}>
        <Loading spinning={loading} title="Loading ...">
          {children}
        </Loading>
      </StoreContext.Provider>
    );
  }
}

export const StoreConsumer = StoreContext.Consumer;
export { StoreContext };
export default StoreProvider;
