import { getCountries } from "@/app/_lib/data-service";

// Let's imagine your colleague already built this component 😃

async function SelectCountry({ defaultCountry, name, id, className }) {
  const countries = await getCountries();
  const flag =
    countries.find((country) => country.name === defaultCountry)?.flag ?? "";

  return (
    <div className="relative">
      <select
        name={name}
        id={id}
        // Here we use a trick to encode BOTH the country name and the flag into the value. Then we split them up again later in the server action
        defaultValue={`${defaultCountry}%${flag}`}
        className={`${className} appearance-none cursor-pointer`}
      >
        <option value="">Select country...</option>
        {countries.map((c) => (
          <option key={c.name} value={`${c.name}%${c.flag}`}>
            {c.name}
          </option>
        ))}
      </select>
      {/* Custom dropdown arrow */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <svg className="w-5 h-5 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

export default SelectCountry;
