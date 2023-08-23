import * as icons from "../icons/iconComponent";
import leftImg from "../images/spice.png";
import logo from "../images/logo.png";

const About = () => {
  return (
    <div className="bg-about bg-no-repeat bg-cover min-h-[920px] pb-12 relative" id="about">
      <img src={leftImg} alt="spice" className="absolute top-[-190px]" />
      <div className="max-w-[1440px] mx-auto px-[10px] relative">
        <img src={logo} alt="logo" className="hidden md:inline md:absolute top-[50px] right-[45px]" />
        <h2 className="text-4xl font-bold text-txt-main-white pt-14 mb-10">Трохи про М&apos;ясорОбку</h2>
        <div className="flex flex-col gap-y-6">
          <div className="bg-bg-orange max-w-[420px] rounded-3xl md:absolute top-[176px] left-[10px] md:left-[120px] py-3 px-5">
            <div className="flex justify-center">
              <icons.Flag />
              <p className="text-center text-xl font-medium pl-1 pb-2 underline">Початок</p>
            </div>
            <p className="font-medium">
              Наша історія починається з мрії Джеймса Робертсона - мрії про власний бізнес, що принесе користь нашому
              рідному селу. Вже змалечку він відчував пристрасть до м&apos;яса і проводив години на кухні, творячи
              неперевершені страви для своїх родичів і друзів. З кожним новим днем, його любов до готування м&apos;яса
              зростала, і Джеймс почав думати про способи поділитися своїми кулінарними талантами з більшим колом людей.
            </p>
          </div>
          <div className="bg-bg-light-orange max-w-[468px] rounded-3xl md:absolute top-[586px] left-[10px] md:left-[300px] py-3 px-6">
            <div className="flex justify-center">
              <icons.Lamp />
              <p className="text-center text-xl font-medium pl-1 pb-2 underline">Ідея</p>
            </div>
            <p className="font-medium">
              Так виникла ідея заснувати мясний онлайн магазин - місце, де всі зможуть насолоджуватися свіжим, якісним
              м&apos;ясом прямо у своїх домівках. Разом із своєю сім&apos;єю, Джеймс зробив перший крок до реалізації
              своєї мрії. Він об&apos;єднався з місцевими фермерами, які забезпечували найкращу якість м&apos;яса.
            </p>
          </div>
          <div className="bg-bg-brown max-w-[428px] rounded-3xl md:absolute top-[385px] right-[10px] md:right-[143px] py-3 px-6 text-txt-main-white">
            <div className="flex justify-center">
              <icons.Lock />
              <p className="text-center text-xl font-medium pl-1 pb-2 underline">Правила</p>
            </div>
            <p className="font-medium">
              Ретельний відбір продукції та дотримання найвищих стандартів якості стали основними принципами нашого
              бізнесу. Сьогодні наш онлайн магазин м&apos;ясних виробів пропонує широкий вибір свіжого м&apos;яса та
              дельікатесів, які ми з гордістю доставляємо прямо до ваших дверей.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
