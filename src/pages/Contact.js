import ContactLayout from './components/ContactLayout';
import { Helmet } from 'react-helmet';

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Contact - PTable</title>
            </Helmet>
            <ContactLayout />
        </div>
    );
}
  
export default Contact;