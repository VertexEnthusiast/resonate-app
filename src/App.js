import React, { useState, useEffect } from 'react';

// Icons with updated brand color (rose)
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 text-rose-600">
    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
  </svg>
);
const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 text-rose-600">
    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
  </svg>
);
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 text-rose-600">
    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
  </svg>
);
const WebsiteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 text-rose-600">
    <path fillRule="evenodd" d="M15.75 2.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V4.634a9.004 9.004 0 0 0-7.082 7.082H9a.75.75 0 0 1 0 1.5H7.366a9.004 9.004 0 0 0 7.082 7.082v-1.134a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5h1.134a9.004 9.004 0 0 0-7.082-7.082H3a.75.75 0 0 1 0-1.5h1.634a9.004 9.004 0 0 0-7.082-7.082V9a.75.75 0 0 1-1.5 0V4.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5H6.366a9.004 9.004 0 0 0 7.082 7.082V15a.75.75 0 0 1 1.5 0v-1.634a9.004 9.004 0 0 0 7.082-7.082H15a.75.75 0 0 1 0-1.5h1.634A9.001 9.001 0 0 0 15.75 2.25ZM12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
  </svg>
);
const CompanyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 text-rose-600">
    <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5a.75.75 0 0 0 .75.75h13.5a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Zm6.75 3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM9 9.75A.75.75 0 0 0 9 9H9Zm0 3.75A.75.75 0 0 0 9 13.5H9Zm0 3.75A.75.75 0 0 0 9 17.25H9Z" clipRule="evenodd" />
    <path d="M7.5 17.25h-.75a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.75a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75Z" />
    <path d="M11.25 17.25h-.75a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.75a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75Z" />
  </svg>
);

// Resonate logo icon (simplified speech bubbles)
const ResonateLogoIcon = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" className="inline-block mr-2" fill="currentColor">
    <path d="M20 70 C10 70 10 60 20 60 L60 60 C70 60 70 70 60 70 L30 70 L20 80 Z" />
    <path d="M35 50 C25 50 25 40 35 40 L75 40 C85 40 85 50 75 50 L45 50 L35 60 Z" />
    <path d="M50 30 C40 30 40 20 50 20 L90 20 C100 20 100 30 90 30 L60 30 L50 40 Z" />
  </svg>
);


const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-64">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-rose-600"></div>
  </div>
);

const ErrorMessage = ({ message }) => (
  <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md shadow-md" role="alert">
    <p className="font-bold">Error</p>
    <p>{message}</p>
  </div>
);

const ContactCard = ({ contact }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 m-2 hover:shadow-xl transition-shadow duration-300 ease-in-out">
    <div className="flex items-center mb-4">
      <div className="bg-rose-100 p-3 rounded-full mr-4"> {/* Icon background updated */}
        <UserIcon />
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-800">{contact.name}</h2>
        <p className="text-sm text-gray-500">@{contact.username}</p>
      </div>
    </div>

    <div className="space-y-3 text-gray-700">
      <div className="flex items-center">
        <EmailIcon />
        <a href={`mailto:${contact.email}`} className="hover:text-rose-700 transition-colors duration-200">{contact.email}</a>
      </div>
      <div className="flex items-center">
        <PhoneIcon />
        <span>{contact.phone}</span>
      </div>
      <div className="flex items-center">
        <WebsiteIcon />
        <a href={`http://${contact.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-rose-700 transition-colors duration-200">{contact.website}</a>
      </div>
      <div className="flex items-start pt-2">
        <CompanyIcon />
        <div>
          <p className="font-medium">{contact.company.name}</p>
          <p className="text-xs text-gray-500 italic">"{contact.company.catchPhrase}"</p>
          <p className="text-xs text-gray-500">{contact.company.bs}</p>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch contacts from the API
    const fetchContacts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Sort data alphabetically by name before setting state
        data.sort((a, b) => a.name.localeCompare(b.name));
        setContacts(data);
      } catch (e) {
        console.error("Failed to fetch contacts:", e);
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContacts();
  }, []); // Empty dependency array means this effect runs once on mount

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-sky-100 font-sans p-4 sm:p-6 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-rose-700 tracking-tight flex items-center justify-center">
          {/* Added a simplified SVG version of the speech bubble part of the logo */}
          <ResonateLogoIcon />
          resonate Contacts
        </h1>
        <p className="text-lg text-gray-600 mt-2">Browse your professional network.</p>
      </header>

      <div className="max-w-4xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search by name, email, or username..."
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-shadow shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {isLoading && <LoadingSpinner />}
      {error && <div className="max-w-4xl mx-auto"><ErrorMessage message={`Failed to load contacts. Please try again later. (Details: ${error})`} /></div>}

      {!isLoading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredContacts.length > 0 ? (
            filteredContacts.map(contact => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-lg py-10">
              No contacts found matching your search.
            </p>
          )}
        </div>
      )}
      
      <footer className="text-center mt-12 py-6 border-t border-gray-300">
        <p className="text-sm text-gray-500">
          Resonate Contacts App &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;
