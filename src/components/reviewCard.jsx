import Proptypes from "prop-types";

const ReviewCard = ({ review }) => {
  return (
    <div className="max-w-[380px] min-h-[464px] px-4 mx-auto">
      <div className="w-[120px] mx-auto mb-3">
        <img
          src={review.photo}
          alt={`відгук ${review.name}`}
          className="object-cover w-[120px] h-[120px] rounded-full"
        />
      </div>

      <p className="text-center text-xl font-semibold mb-3">{review.name}</p>
      <p className="text-center text-xl font-review">{review.text}</p>
    </div>
  );
};

ReviewCard.propTypes = {
  review: Proptypes.shape({
    name: Proptypes.string,
    photo: Proptypes.string,
    text: Proptypes.string,
  }),
};

export default ReviewCard;
