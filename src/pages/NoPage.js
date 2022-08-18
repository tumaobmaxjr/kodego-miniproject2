import ErrorLayout from './components/ErrorLayout';
import { Helmet } from 'react-helmet';

const NoPage = () => {
    return (
        <div>
            <Helmet>
                <title>Page Not Found - PTable</title>
            </Helmet>
            <ErrorLayout />
        </div>
    );
}
  
export default NoPage;