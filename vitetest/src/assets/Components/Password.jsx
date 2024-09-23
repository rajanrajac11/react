import React, { useEffect, useRef, useState } from "react";

function Password() {
  const [length, setLength] = useState(7);
  const [password, setPassword] = useState("");
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);

  const passref = useRef();
  const copyToClipBoard = () => {
    window.navigator.clipboard.writeText(password);
    passref.current?.select();
  };

  const generatePassword = () => {
    let str = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
    let pass = "";
    if (numAllow) {
      str = str + "1234567890";
    }
    if (charAllow) {
      str = str + "!@#$%^&*()_{";
    }

    for (let i = 1; i <= length; i++) {
      pass = pass + str.charAt(Math.floor(Math.random() * str.length));
    }

    setPassword(pass);
  };

  useEffect(() => {
    generatePassword();
  }, [length, charAllow, numAllow, setPassword]);
  return (
    <div className="bg-gray-500 h-screen w-full flex justify-center items-center">
      <div className="p-4 bg-gray-400">
        <div>
          <h1>Ramdom Password</h1>
          <div>
            <input
              type="text"
              name=""
              id=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ref={passref}
            />
            <button onClick={copyToClipBoard}>Copy</button>
          </div>

          <div className="flex flex-wrap">
            <div>
              <input
                type="range"
                name=""
                id=""
                value={length}
                max={90}
                min={5}
                onChange={(e) => setLength(e.target.value)}
              />
              Length {length}
            </div>

            <div>
              <input
                type="checkbox"
                onChange={() => setNumAllow((prev) => !prev)}
                defaultChecked={numAllow}
              />
              Numbers
            </div>

            <div>
              <input
                type="checkbox"
                onChange={() => setCharAllow((prev) => !prev)}
                defaultChecked={charAllow}
              />
              Character
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Password;
