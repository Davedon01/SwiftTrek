// Destination.tsx
import React, { useMemo, useState } from 'react';
import custom from '../assets/DestinationBg.jpg';
import { useNavigate } from 'react-router-dom';

interface Country {
  name: string;
  flag: string;
}

const countries: Country[] = [
  { name: 'Afghanistan', flag: '🇦🇫' },
  { name: 'Albania', flag: '🇦🇱' },
  { name: 'Algeria', flag: '🇩🇿' },
  { name: 'Andorra', flag: '🇦🇩' },
  { name: 'Angola', flag: '🇦🇴' },
  { name: 'Antigua and Barbuda', flag: '🇦🇬' },
  { name: 'Argentina', flag: '🇦🇷' },
  { name: 'Armenia', flag: '🇦🇲' },
  { name: 'Australia', flag: '🇦🇺' },
  { name: 'Austria', flag: '🇦🇹' },
  { name: 'Azerbaijan', flag: '🇦🇿' },
  { name: 'Bahamas', flag: '🇧🇸' },
  { name: 'Bahrain', flag: '🇧🇭' },
  { name: 'Bangladesh', flag: '🇧🇩' },
  { name: 'Barbados', flag: '🇧🇧' },
  { name: 'Belarus', flag: '🇧🇾' },
  { name: 'Belgium', flag: '🇧🇪' },
  { name: 'Belize', flag: '🇧🇿' },
  { name: 'Benin', flag: '🇧🇯' },
  { name: 'Bhutan', flag: '🇧🇹' },
  { name: 'Bolivia', flag: '🇧🇴' },
  { name: 'Bosnia and Herzegovina', flag: '🇧🇦' },
  { name: 'Botswana', flag: '🇧🇼' },
  { name: 'Brazil', flag: '🇧🇷' },
  { name: 'Brunei', flag: '🇧🇳' },
  { name: 'Bulgaria', flag: '🇧🇬' },
  { name: 'Burkina Faso', flag: '🇧🇫' },
  { name: 'Burundi', flag: '🇧🇮' }, // fixed
  { name: 'Cabo Verde', flag: '🇨🇻' },
  { name: 'Cambodia', flag: '🇰🇭' },
  { name: 'Cameroon', flag: '🇨🇲' },
  { name: 'Canada', flag: '🇨🇦' },
  { name: 'Central African Republic', flag: '🇨🇫' },
  { name: 'Chad', flag: '🇹🇩' },
  { name: 'Chile', flag: '🇨🇱' },
  { name: 'China', flag: '🇨🇳' },
  { name: 'Colombia', flag: '🇨🇴' },
  { name: 'Comoros', flag: '🇰🇲' },
  { name: 'Congo, Democratic Republic of the', flag: '🇨🇩' },
  { name: 'Congo, Republic of the', flag: '🇨🇬' },
  { name: 'Costa Rica', flag: '🇨🇷' },
  { name: 'Croatia', flag: '🇭🇷' },
  { name: 'Cuba', flag: '🇨🇺' },
  { name: 'Cyprus', flag: '🇨🇾' },
  { name: 'Czech Republic', flag: '🇨🇿' },
  { name: 'Denmark', flag: '🇩🇰' },
  { name: 'Djibouti', flag: '🇩🇯' },
  { name: 'Dominica', flag: '🇩🇲' },
  { name: 'Dominican Republic', flag: '🇩🇴' },
  { name: 'Ecuador', flag: '🇪🇨' },
  { name: 'Egypt', flag: '🇪🇬' },
  { name: 'El Salvador', flag: '🇸🇻' },
  { name: 'Equatorial Guinea', flag: '🇬🇶' },
  { name: 'Eritrea', flag: '🇪🇷' },
  { name: 'Estonia', flag: '🇪🇪' },
  { name: 'Eswatini', flag: '🇸🇿' },
  { name: 'Ethiopia', flag: '🇪🇹' },
  { name: 'Fiji', flag: '🇫🇯' },
  { name: 'Finland', flag: '🇫🇮' },
  { name: 'France', flag: '🇫🇷' },
  { name: 'Gabon', flag: '🇬🇦' },
  { name: 'Gambia', flag: '🇬🇲' },
  { name: 'Georgia', flag: '🇬🇪' },
  { name: 'Germany', flag: '🇩🇪' },
  { name: 'Ghana', flag: '🇬🇭' },
  { name: 'Greece', flag: '🇬🇷' },
  { name: 'Grenada', flag: '🇬🇩' },
  { name: 'Guatemala', flag: '🇬🇹' },
  { name: 'Guinea', flag: '🇬🇳' },
  { name: 'Guinea-Bissau', flag: '🇬🇼' },
  { name: 'Guyana', flag: '🇬🇾' },
  { name: 'Haiti', flag: '🇭🇹' },
  { name: 'Honduras', flag: '🇭🇳' },
  { name: 'Hungary', flag: '🇭🇺' },
  { name: 'Iceland', flag: '🇮🇸' },
  { name: 'India', flag: '🇮🇳' },
  { name: 'Indonesia', flag: '🇮🇩' },
  { name: 'Iran', flag: '🇮🇷' },
  { name: 'Iraq', flag: '🇮🇶' },
  { name: 'Ireland', flag: '🇮🇪' },
  { name: 'Israel', flag: '🇮🇱' },
  { name: 'Italy', flag: '🇮🇹' },
  { name: 'Jamaica', flag: '🇯🇲' },
  { name: 'Japan', flag: '🇯🇵' },
  { name: 'Jordan', flag: '🇯🇴' },
  { name: 'Kazakhstan', flag: '🇰🇿' },
  { name: 'Kenya', flag: '🇰🇪' },
  { name: 'Kiribati', flag: '🇰🇮' },
  { name: 'Kosovo', flag: '🇽🇰' },
  { name: 'Kuwait', flag: '🇰🇼' },
  { name: 'Kyrgyzstan', flag: '🇰🇬' },
  { name: 'Laos', flag: '🇱🇦' },
  { name: 'Latvia', flag: '🇱🇻' },
  { name: 'Lebanon', flag: '🇱🇧' },
  { name: 'Lesotho', flag: '🇱🇸' },
  { name: 'Liberia', flag: '🇱🇷' },
  { name: 'Libya', flag: '🇱🇾' },
  { name: 'Liechtenstein', flag: '🇱🇮' },
  { name: 'Lithuania', flag: '🇱🇹' },
  { name: 'Luxembourg', flag: '🇱🇺' },
  { name: 'Madagascar', flag: '🇲🇬' },
  { name: 'Malawi', flag: '🇲🇼' },
  { name: 'Malaysia', flag: '🇲🇾' },
  { name: 'Maldives', flag: '🇲🇻' },
  { name: 'Mali', flag: '🇲🇱' },
  { name: 'Malta', flag: '🇲🇹' },
  { name: 'Marshall Islands', flag: '🇲🇭' },
  { name: 'Mauritania', flag: '🇲🇷' },
  { name: 'Mauritius', flag: '🇲🇺' },
  { name: 'Mexico', flag: '🇲🇽' },
  { name: 'Micronesia', flag: '🇫🇲' },
  { name: 'Moldova', flag: '🇲🇩' },
  { name: 'Monaco', flag: '🇲🇨' },
  { name: 'Mongolia', flag: '🇲🇳' },
  { name: 'Montenegro', flag: '🇲🇪' },
  { name: 'Morocco', flag: '🇲🇦' },
  { name: 'Mozambique', flag: '🇲🇿' },
  { name: 'Myanmar', flag: '🇲🇲' },
  { name: 'Namibia', flag: '🇳🇦' },
  { name: 'Nauru', flag: '🇳🇷' },
  { name: 'Nepal', flag: '🇳🇵' },
  { name: 'Netherlands', flag: '🇳🇱' },
  { name: 'New Zealand', flag: '🇳🇿' },
  { name: 'Nicaragua', flag: '🇳🇮' },
  { name: 'Niger', flag: '🇳🇪' },
  { name: 'Nigeria', flag: '🇳🇬' },
  { name: 'North Korea', flag: '🇰🇵' },
  { name: 'North Macedonia', flag: '🇲🇰' },
  { name: 'Norway', flag: '🇳🇴' },
  { name: 'Oman', flag: '🇴🇲' },
  { name: 'Pakistan', flag: '🇵🇰' },
  { name: 'Palau', flag: '🇵🇼' },
  { name: 'Palestine', flag: '🇵🇸' },
  { name: 'Panama', flag: '🇵🇦' },
  { name: 'Papua New Guinea', flag: '🇵🇬' },
  { name: 'Paraguay', flag: '🇵🇾' },
  { name: 'Peru', flag: '🇵🇪' },
  { name: 'Philippines', flag: '🇵🇭' },
  { name: 'Poland', flag: '🇵🇱' },
  { name: 'Portugal', flag: '🇵🇹' },
  { name: 'Qatar', flag: '🇶🇦' },
  { name: 'Romania', flag: '🇷🇴' },
  { name: 'Russia', flag: '🇷🇺' },
  { name: 'Rwanda', flag: '🇷🇼' },
  { name: 'Saint Kitts and Nevis', flag: '🇰🇳' },
  { name: 'Saint Lucia', flag: '🇱🇨' },
  { name: 'Saint Vincent and the Grenadines', flag: '🇻🇨' },
  { name: 'Samoa', flag: '🇼🇸' },
  { name: 'San Marino', flag: '🇸🇲' },
  { name: 'Sao Tome and Principe', flag: '🇸🇹' },
  { name: 'Saudi Arabia', flag: '🇸🇦' },
  { name: 'Senegal', flag: '🇸🇳' },
  { name: 'Serbia', flag: '🇷🇸' },
  { name: 'Seychelles', flag: '🇸🇨' },
  { name: 'Sierra Leone', flag: '🇸🇱' },
  { name: 'Singapore', flag: '🇸🇬' },
  { name: 'Slovakia', flag: '🇸🇰' },
  { name: 'Slovenia', flag: '🇸🇮' },
  { name: 'Solomon Islands', flag: '🇸🇧' },
  { name: 'Somalia', flag: '🇸🇴' },
  { name: 'South Africa', flag: '🇿🇦' },
  { name: 'South Korea', flag: '🇰🇷' },
  { name: 'South Sudan', flag: '🇸🇸' },
  { name: 'Spain', flag: '🇪🇸' },
  { name: 'Sri Lanka', flag: '🇱🇰' },
  { name: 'Sudan', flag: '🇸🇩' },
  { name: 'Suriname', flag: '🇸🇷' },
  { name: 'Sweden', flag: '🇸🇪' },
  { name: 'Switzerland', flag: '🇨🇭' },
  { name: 'Syria', flag: '🇸🇾' },
  { name: 'Taiwan', flag: '🇹🇼' },
  { name: 'Tajikistan', flag: '🇹🇯' },
  { name: 'Tanzania', flag: '🇹🇿' },
  { name: 'Thailand', flag: '🇹🇭' },
  { name: 'Timor-Leste', flag: '🇹🇱' },
  { name: 'Togo', flag: '🇹🇬' },
  { name: 'Tonga', flag: '🇹🇴' },
  { name: 'Trinidad and Tobago', flag: '🇹🇹' },
  { name: 'Tunisia', flag: '🇹🇳' },
  { name: 'Turkey', flag: '🇹🇷' },
  { name: 'Turkmenistan', flag: '🇹🇲' },
  { name: 'Tuvalu', flag: '🇹🇻' },
  { name: 'Uganda', flag: '🇺🇬' },
  { name: 'Ukraine', flag: '🇺🇦' },
  { name: 'United Arab Emirates', flag: '🇦🇪' },
  { name: 'United Kingdom', flag: '🇬🇧' },
  { name: 'United States', flag: '🇺🇸' },
  { name: 'Uruguay', flag: '🇺🇾' },
  { name: 'Uzbekistan', flag: '🇺🇿' },
  { name: 'Vanuatu', flag: '🇻🇺' },
  { name: 'Vatican City', flag: '🇻🇦' },
  { name: 'Venezuela', flag: '🇻🇪' },
  { name: 'Vietnam', flag: '🇻🇳' },
  { name: 'Yemen', flag: '🇾🇪' },
  { name: 'Zambia', flag: '🇿🇲' },
  { name: 'Zimbabwe', flag: '🇿🇼' },
];

const Destination: React.FC = () => {
  const navigate = useNavigate();
  const [showAllCountries, setShowAllCountries] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const initialCountryCount = 20;

  const handleCountryClick = (countryName: string) => {
    navigate('/booking-page', { state: { senderCountry: countryName } });
  };

  const filteredCountries = useMemo<Country[]>(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return countries;
    return countries.filter((c) => c.name.toLowerCase().includes(q));
  }, [searchTerm]);

  const visibleCountries = showAllCountries
    ? filteredCountries
    : filteredCountries.slice(0, initialCountryCount);

  return (
    <section>
      {/* Hero */}
      <section
        className="relative h-[74vh] bg-fixed bg-center bg-cover bg-no-repeat text-white flex items-center"
        style={{ backgroundImage: `url(${custom})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center w-full px-4">
          <h1 className="bg-gradient-to-br from-[#ffffff] via-[#d4e8ff] to-[#4aa8ff] bg-clip-text text-transparent text-5xl font-extrabold mb-5 md:text-6xl">
            Explore the world
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">
            Choose your shipment country to get started with your booking.
          </p>
        </div>
      </section>

      {/* Country Selection */}
      <div className="bg-gray-100 min-h-screen p-4 sm:p-8 lg:p-12 font-sans">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="block bg-gradient-to-br from-blue-600 via-indigo-800 to-purple-800 bg-clip-text text-transparent text-4xl font-bold mb-4">
              Select Your Shipment Country
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the country you are shipping from to get started with your booking.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-8">
            <input
              type="text"
              placeholder="Search for a country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Grid */}
          {visibleCountries.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {visibleCountries.map((country) => (
                <div
                  key={country.name}
                  onClick={() => handleCountryClick(country.name)}
                  className="bg-white text-blue-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 cursor-pointer p-4 flex items-center space-x-4 border border-gray-200"
                >
                  <span className="text-2xl">{country.flag}</span>
                  <span className="text-lg font-semibold text-blue-800">
                    {country.name}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-6">No countries found.</p>
          )}

          {/* Show more/less */}
          {filteredCountries.length > initialCountryCount && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllCountries(!showAllCountries)}
                className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors"
              >
                {showAllCountries ? 'Show Less' : 'Show All'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Destination;
