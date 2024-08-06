import { RoutingStrategy } from './routes/router-factory';
import { AppRouter } from './routes/AppRouter';

interface Props {
  initialPathname?: string;
  routingStrategy?: RoutingStrategy;
}

const App = ({ initialPathname, routingStrategy }: Props) => {
  return (
    <AppRouter
      initialPathname={initialPathname}
      routingStrategy={routingStrategy}
    />
  );
};

export default App;
