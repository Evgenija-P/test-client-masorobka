import ReviewCard from "../components/reviewCard";
import hotPepper from "../images/hot-pepper_1.png";
import rosemary from "../images/rosemary-big.png";

const REVIEWS = [
  {
    name: "Павло Тичина",
    photo:
      "https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=",
    text: "Я вже довгий час користуюся цим інтернет-магазином м'ясних виробів і дуже задоволений їхньою послугою. М'ясо завжди свіже, якісне і добре упаковане. Великий вибір продукції і зручне онлайн-замовлення роблять процес покупок дуже простим і зручним. Рекомендую!",
  },
  {
    name: "Лесь Подеревянський",
    photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    text: "М'ясоробка - це справжня знахідка для гурманів. Їхні продукти відмінної якості і смаку. Великий вибір м'яса, делікатесів і готових страв завжди задовольняє мої кулінарні потреби. Доставка завжди вчасна і з хорошою упаковкою. Я дуже задоволений цим магазином!",
  },
  {
    name: "Олесь Кіндзер",
    photo:
      "https://media.istockphoto.com/id/1045886560/photo/portrait-of-smiling-handsome-man-in-blue-t-shirt-standing-with-crossed-arms-isolated-on-grey.jpg?s=612x612&w=0&k=20&c=TX1-1UJ3PKonFEmgs_WDZf7wtfqKVMHYjeRaYjaZ1Rc=",
    text: "М'ясоробка - мій улюблений вибір, коли йдеться про покупку якісного м'яса. Їхні продукти завжди свіжі, а якість бездоганна. Персонал магазину завжди ввічливий і готовий допомогти з будь-якими питаннями. Я регулярно замовляю у них і завжди залишаюся задоволеним.",
  },
];

const Review = () => {
  return (
    <div className="bg-bg-white min-h-[530px] pt-10 pb-14 relative">
      <img src={hotPepper} alt="hot pepper" className="absolute top-[-40px] right-0" />
      <div className="max-w-[1440px] mx-auto px-[10px] relative">
        <h2 className="text-4xl font-bold text-txt-main-black mb-20">Відгуки про нашу працю</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 justify-between">
          {REVIEWS.map((review) => (
            <ReviewCard review={review} key={review.name} />
          ))}
        </div>
        <img
          src={rosemary}
          alt="rosemary"
          className="h-[60px] w-[360px] md:h-[82px] md:w-[480px] lg:h-[137px] lg:w-[800px] absolute bottom-[-80px] left-0 md:bottom-[-100px] md:left-[136px] lg:bottom-[-150px] lg:left-[150px]  xl:bottom-[-120px] xl:left-[295px] z-[2]"
        />
      </div>
    </div>
  );
};
export default Review;
