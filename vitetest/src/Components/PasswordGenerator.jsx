import React, { useState, useEffect, useCallback, useRef } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(6);
  const [charAllow, setCharAllow] = useState(false);
  const [numAllow, setNumAllow] = useState(false);
  const [password, setPassword] = useState("");
  const passRef = useRef(null);

  const copyToClipBoard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const randomPasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ASDFGHJKLPOIUYTREWQZXCVBNMqwertyuioplkjhgfdsazxcvbnm";
    if (numAllow) str += "1234567890";
    if (charAllow) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);
  }, [charAllow, numAllow, length, setPassword]);

  useEffect(() => {
    randomPasswordGenerator();
  }, [length, charAllow, numAllow]);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-500">
      <div className="bg-gray-300 p-4 ">
        <div>
          <h1>Random Password Generator</h1>
          <div>
            <input type="text" className="p-2" value={password} ref={passRef} />
            <button onClick={copyToClipBoard}>Copy</button>
          </div>
          <div className="flex flex-wrap ">
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
            </div>
            <div>
              <input
                type="checkbox"
                name=""
                id="number"
                defaultChecked={numAllow}
                onChange={() => setNumAllow((prev) => !prev)}
              />
              <label htmlFor="number">Number</label>
            </div>

            <div>
              <input
                type="checkbox"
                name=""
                id="character"
                defaultChecked={charAllow}
                onChange={() => setCharAllow((prev) => !prev)}
              />
              <label htmlFor="character">Character</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
