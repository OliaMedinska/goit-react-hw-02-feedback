
import PropTypes from 'prop-types';
import './Section.css';

const Section = ({ title }) => (
    <section className='section'>
        <h2 className='section-heading'>{title}</h2>
    </section>
);

Section.propTypes = {
    title: PropTypes.string.isRequired
};

export default Section;