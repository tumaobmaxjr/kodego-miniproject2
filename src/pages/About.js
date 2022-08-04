import AboutLayout from './components/AboutLayout';
import { Helmet } from 'react-helmet';

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About</title>
            </Helmet>
            <AboutLayout />
        </div>
    );
}
  
export default About;