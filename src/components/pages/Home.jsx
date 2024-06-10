import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { useTranslation } from 'react-i18next';
import imgWork1 from '../../img/CVIT.pdf';

export const Home = () => { 

  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);
  const [commands, setCommands] = useState([]);
  const [showCursor, setShowCursor] = useState(true);

  const fakeCommands = [
    "Initializing system modules... [init.d]",
    "Loading kernel modules... /lib/modules/$(uname -r)",
    "Checking for updates... /usr/bin/update_check",
    "Updating package lists... apt-get update",
    "Downloading dependencies... /var/lib/apt/lists/*",
    "Fetching security patches... {fetching: openssl, curl, ssh}",
    "Configuring environment variables {PATH, NODE_ENV, LANG}",
    "Starting services... [httpd, mysqld, sshd]",
    "Mounting file systems... /mnt/data",
    "Establishing secure connection... <encrypting data>",
    "Synchronizing system time... ntpdate pool.ntp.org",
    "Running diagnostics... {cpu: OK, memory: OK, storage: OK}",
    "Verifying system integrity... checksum: [123abc, 456def, 789ghi]",
    "Launching application... /usr/local/bin/app --init",
    "Checking disk space... df -h",
    "Clearing cache... echo 3 > /proc/sys/vm/drop_caches",
    "Building project... make build",
    "Deploying to server... scp -r /build user@server:/var/www/",
    "Running unit tests... npm test",
    "Starting development server... npm start",
    "Compiling assets... webpack --mode production",
    "Minifying files... terser app.js -o app.min.js",
    "Optimizing images... jpegoptim *.jpg",
    "Generating documentation... jsdoc -c jsdoc.json",
    "Cleaning up... rm -rf /tmp/*",
    "Rebooting system... shutdown -r now",
    "Ready... #system_startup complete"
  ];
  

  const colors = ["text-red-500", "text-blue-500", "text-green-500", "text-yellow-500", "text-purple-500"];

  const { t } = useTranslation();

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 500);

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
        setLoading(false);
      }
    }, 150);

    return () => {
      clearInterval(cursorInterval);
      clearInterval(interval);
    };
  }, []);

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const el = useRef(null);

  useEffect(() => {
    if (!loading) {
      const typed = new Typed(el.current, {
        strings: ['Web Designer', 'Web Developer', 'Graphic Designer'],
        typeSpeed: 100,
        backSpeed: 60, 
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, [loading]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setPosition({
      x: e.clientX,
      y: e.clientY
    });
};

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const playSound = () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4", "8n"); // Cambia la nota o la durata come preferisci
  };

  if (loading) {
    return (
      <div className="bg-black text-green-500 w-screen h-screen flex items-left justify-start absolute top-0 left-0 p-10">
        <div>
          {commands.map((command, index) => (
            <div key={index} className={command.color}>{command.text}</div>
          ))}
          <div className={`${showCursor ? 'opacity-100' : 'opacity-0'}`}>_</div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`container home-content flex items-center absolute ${isDragging ? 'dragging' : ''}`} 
      onMouseMove={handleMouseMove} 
      onMouseUp={handleMouseUp}
      tabIndex="0" // Assicurati che il componente sia focusabile
    >
      <div className="row">
        <div className="column w-full">
            <div>
              <h1 className="text-3xl text-green-50 font-bold w-full">{t('home.greeting')}<span className="name2 w-2/4 text-green-600" onMouseDown={handleMouseDown} style={{ left: position.x, top: position.y }}>Nico</span></h1>
            </div>
          <h1 className="text-3xl text-green-50 font-bold">{t('home.presentation')}<span ref={el} className="text-green-600 typing">Web Developer</span></h1>
          <p className="excerpt text-green-50 py-6 w-full mb-10 ">{t('home.description1')}<br />{t('home.description2')}<br />{t('home.description3')}</p>
          <a href={ imgWork1 } download="CVIT.pdf" type="download" className="cvDownload text-green-50 px-10 py-5" >{t('home.button')}</a>
        </div>
        {/* <div className="column">
          <img src="" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Home;