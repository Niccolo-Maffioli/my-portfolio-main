import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Terminal = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [commands, setCommands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const [error, setError] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const { t } = useTranslation();

  const fakeCommands = [
    "Initializing modules...",
    "Loading kernel... /boot/vmlinuz",
    "Checking updates... /usr/bin/update_check",
    "Updating packages... apt-get update",
    "Downloading deps... /var/lib/apt/lists/*",
    "Fetching patches... {openssl, curl, ssh}",
    "Configuring env... {PATH, NODE_ENV}",
    "Starting services... [httpd, mysqld]",
    "Mounting filesystems... /mnt/data",
    "Establishing connection... <encrypting>",
    "Syncing time... ntpdate pool.ntp.org",
    "Running diagnostics... {cpu: OK, mem: OK}",
    "Verifying integrity... checksum: [123abc, 456def]",
    "Launching app... /usr/local/bin/app",
    "Building project... make build",
    "Running tests... npm test",
    "Starting server... npm start",
    "Minifying files... terser app.js -o app.min.js",
    "Cleaning up... rm -rf /tmp/*",
    "Ready... #system_startup complete"
  ];

  const colors = ["text-red-500", "text-blue-500", "text-green-500", "text-yellow-500", "text-purple-500"];

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 500);

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      setCommands([]);
      processCommands(input.toLowerCase());
    }
  };

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const processCommands = (page) => {
    const validPages = [".", "about", "works", "contact me", "Case Studies", "chi sono", "lavori", "contattami"];
    let index = 0;
    const interval = setInterval(() => {
      if (index < fakeCommands.length) {
        setCommands((prevCommands) => [
          ...prevCommands,
          { text: fakeCommands[index], color: getRandomColor() }
        ]);
        index++;
      } else {
        clearInterval(interval);
        if (validPages.includes(page)) {
          navigate(`/${page}`);
          onClose();
        } else {
          setError(true);
          setCommands((prevCommands) => [
            ...prevCommands,
            { text: "Error: Page not found.", color: "text-red-500" }
          ]);
        }
      }
    }, 300);

    // Clear the screen and resume every 5 seconds
    const clearIntervalHandle = setInterval(() => {
      setCommands([]);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(clearIntervalHandle);
    };
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [loading]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-green-500 p-4 rounded-lg shadow-lg w-2/3 max-w-3xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg">{t('terminal.terminal')}</h2>
          <button onClick={onClose} className="text-red-500">{t('terminal.closebutton')}</button>
        </div>
        {loading ? (
          <div className="text-green-500">{t('terminal.loading')}</div>
        ) : (
          <>
            <form onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  className="w-full p-2 bg-gray-900 text-green-500 rounded prova"
                  placeholder={t('terminal.type')}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <span
                  className={`absolute right-3 bottom-[9px] ${showCursor ? 'opacity-100' : 'opacity-0'} bg-green-500 w-2 h-[2px]`}
                  style={{
                    left: `${input.length * 0.62}em`,
                  }}
                >
                </span>
              </div>
            </form>
            <div className="mt-4">
              {commands.map((command, index) => (
                <div key={index} className={command.color}>{command.text}</div>
              ))}
              {error && (
                <div className="text-red-500">Error: Page not found. Please try again.</div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Terminal;