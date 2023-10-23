import PropTypes from 'prop-types';

const ServiceCard = ({ title, image }) => {
  return (
    <div className="card w-80 md:w-96 mx-auto overflow-hidden bg-base-100 shadow-xl dark:bg-gray-800 dark:text-white transform transition-transform hover:scale-105">
      <figure>
        <img className='h-64' src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

export default ServiceCard;
