const TEL_NUMBERS = [
  { id: "4065550120", number: "(406) 555-0120" },
  { id: "4805550103", number: "(480) 555-0103" },
  { id: "2395550108", number: "(239) 555-0108" },
];

const styleContactsTitle = "text-2xl text-txt-main-yellow leading-[1.6] flex flex-col gap-y-2";
const styleContactsText = "text-base text-txt-main-white opacity-[0.6]";
const styleContactsEffect = "hover:text-txt-main-yellow focus:text-txt-main-yellow";

const ContactList = () => {
  return (
    <ul className="flex flex-col lg:flex-row lg:flex-wrap gap-x-8 w-[300px] md:w-[450px] lg:w-[500px] xl:min-w-[600px] mx-auto">
      <li className={`${styleContactsTitle} w-[110px]`}>
        Телефон
        {TEL_NUMBERS.map((tel) => (
          <a href={`tel:${tel.id}`} className={`${styleContactsText} ${styleContactsEffect}`} key={tel.id}>
            {tel.number}
          </a>
        ))}
      </li>
      <li className={`${styleContactsTitle} mb-2 w-[222px]`}>
        Адреса
        <address className={`${styleContactsText} not-italic`}>3891 Ranchview Dr. Richardson, California 62639</address>
      </li>
      <li className={`${styleContactsTitle} mb-2 w-[202px]`}>
        Імейл
        <a href="mailto:nathan.roberts@example.com" className={`${styleContactsText} ${styleContactsEffect}`}>
          nathan.roberts@example.com
        </a>
      </li>
    </ul>
  );
};

export default ContactList;
